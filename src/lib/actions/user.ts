import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AUTHENTICATION_COOKIE_NAME } from "../defintions";
import { fetchServerSide } from "../server-utils";

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

  if (!bearer) {
    return null;
  }

  const response = await fetchServerSide<AuthenticatedUser>(
    "api/user",
    schema,
    {
      next: {
        tags: ["user"],
        revalidate: 60 * 60,
      },
    },
  );

  if (response instanceof Response) {
    redirect("/unauthorized");
  }

  return response;
}
