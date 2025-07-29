"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTHENTICATION_COOKIE_NAME } from "../defintions";
import { destroy } from "../server-utils";

export async function logout() {
  try {
    await destroy("/api/logout");
  } catch (e) {
    console.log(e, "errors");
  }

  const cookieStore = await cookies();
  cookieStore.delete(AUTHENTICATION_COOKIE_NAME);
  redirect("/");
}
