import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AUTHENTICATION_COOKIE_NAME } from "../defintions";
import { isProduction } from "../utils";

const schema = z.object({
  id: z.number(),
  email: z.email(),
  email_verified_at: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type AuthenticatedUser = z.infer<typeof schema>;

export async function getUser() {
  const cookieStore = await cookies();
  const bearer = cookieStore.get(AUTHENTICATION_COOKIE_NAME)?.value;

  const url = new URL("/api/user", process.env.BE_APP_URL);

  if (!bearer) {
    return null;
  }

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${bearer}`,
    },
    next: {
      revalidate: 60 * 60,
    },
  });

  if (response.ok) {
    const data = await response.json();
    const result = schema.safeParse(data);

    // This error should be catched during development.
    if (!result.success) {
      console.log(data);
      console.log(result.error);
      if (!isProduction()) {
        throw new Error("An error occurred while fetching the data.");
      }
      if (response instanceof Response) {
        redirect("/unauthorized");
      }
      return response;
    }

    return result.data;
  } else {
    if (response instanceof Response) {
      redirect("/unauthorized");
    }
    return response;
  }
}
