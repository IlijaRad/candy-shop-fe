import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTHENTICATION_COOKIE_NAME } from "../defintions";

export async function logout() {
  const cookieStore = await cookies();
  const bearer = cookieStore.get(AUTHENTICATION_COOKIE_NAME)?.value ?? "";
  const url = new URL("/api/logout", process.env.BE_APP_URL);

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${bearer}`,
      },
    });
  } catch (e) {
    console.log(e, "errors");
  }

  cookieStore.delete(AUTHENTICATION_COOKIE_NAME);
  redirect("/");
}
