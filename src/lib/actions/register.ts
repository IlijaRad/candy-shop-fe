"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";
import { REGISTRATIN_BANNER_COOKIE_NAME } from "../defintions";
import { post } from "../server-utils";

type FormState = {
  errors?: { [key: string]: string[] | undefined };
};

const schema = z.object({
  email: z.email("Email adresa nije validna"),
  password: z.string().min(8, "Lozinka mora da sadrži barem 8 karaktera."),
  password_confirmation: z
    .string()
    .min(8, "Lozinka mora da sadrži barem 8 karaktera."),
});

export async function register(_: FormState, formData: FormData) {
  const data = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirmation: formData.get("password_confirmation"),
  });

  if (!data.success) {
    return {
      errors: z.flattenError(data.error).fieldErrors,
    };
  }

  try {
    const response = await post("/api/register", data.data);

    if (!response.ok) {
      if (response.status == 422) {
        const { errors } = (await response.json()) as {
          errors: { [key: string]: string[] };
        };

        return { errors };
      }

      const { message } = (await response.json()) as { message: string };
      return { errors: { server: [message] } };
    }
  } catch {
    return {
      errors: {
        server: ["Unable to reach service, please try again."],
      },
    };
  }

  const cookieStore = await cookies();
  cookieStore.set(REGISTRATIN_BANNER_COOKIE_NAME, "true");

  redirect("/login");

  //purpose of this line is to make ts shut up
  return {};
}
