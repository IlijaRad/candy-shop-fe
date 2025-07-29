"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AUTHENTICATION_COOKIE_NAME } from "../defintions";
import { post } from "../server-utils";
import { isProduction } from "../utils";

type FormState = {
  errors?: { [key: string]: string[] | undefined };
};

const schema = z.object({
  email: z.email("Email adresa nije validna"),
  password: z.string().min(8, "Lozinka mora da sadrži barem 8 karaktera."),
});

export async function login(_: FormState, formData: FormData) {
  const data = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!data.success) {
    return {
      errors: z.flattenError(data.error).fieldErrors,
    };
  }

  let payload: {
    token: string;
    ttl: number;
  };

  try {
    const response = await post("/api/login", data.data);

    if (response.status === 400 || !response.ok) {
      const { errors } = await response.json();
      return { errors };
    }

    payload = (await response.json()) as typeof payload;

    const cookieStore = await cookies();

    cookieStore.set({
      name: AUTHENTICATION_COOKIE_NAME,
      value: payload.token,
      httpOnly: true,
      maxAge: 3 * 60 * 60,
      sameSite: "lax",
      secure: isProduction(),
    });
  } catch {
    return {
      errors: {
        server: ["Serverska greška. Pokušajte ponovo za par minuta."],
      },
    };
  }

  redirect("/");
  //purpose of this line is to make ts shut up
  return {};
}
