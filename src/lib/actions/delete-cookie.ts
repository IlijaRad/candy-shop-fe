"use server";

import { cookies } from "next/headers";

export async function deleteCookie(cookieName: string) {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}
