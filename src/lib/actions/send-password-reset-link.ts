"use server";

import { redirect } from "next/navigation";
import z from "zod";
import { post } from "../server-utils";

type FormState = {
  errors?: { [key: string]: string[] | undefined };
};

const schema = z.object({
  email: z.email("Email adresa nije validna"),
});

export async function sendPasswordResetLink(_: FormState, formData: FormData) {
  const data = schema.safeParse({
    email: formData.get("email"),
  });

  if (!data.success) {
    return {
      errors: z.flattenError(data.error).fieldErrors,
    };
  }

  try {
    const response = await post("/api/forgot-password", data.data);

    if (!response.ok) {
      const { message } = (await response.json()) as { message: string };
      return {
        errors: {
          email: [message],
        },
        email: data.data.email,
      };
    }
  } catch {
    return {
      errors: {
        server: ["Serverska greška. Pokušajte ponovo za par minuta."],
      },
      email: data.data.email,
    };
  }

  redirect(`/reset-success?email=${data.data.email}`);

  return {};
}
