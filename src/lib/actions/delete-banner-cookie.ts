"use server";

import { cookies } from "next/headers";
import { REGISTRATIN_BANNER_COOKIE_NAME } from "../defintions";

export async function deleteBannerCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(REGISTRATIN_BANNER_COOKIE_NAME);
}
