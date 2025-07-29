"use server";

import { cookies } from "next/headers";
import { REGISTRATION_BANNER_COOKIE_NAME } from "../defintions";

export async function deleteBannerCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(REGISTRATION_BANNER_COOKIE_NAME);
}
