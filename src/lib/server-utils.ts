import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE_NAME } from "./defintions";

export async function post(
  endpoint: string,
  body?: Record<string, unknown> | FormData,
  headers?: RequestInit["headers"],
): Promise<Response> {
  const cookieStore = await cookies();
  const bearer = cookieStore.get(AUTHENTICATION_COOKIE_NAME)?.value ?? "";

  headers = headers ?? { "Content-Type": "application/json" };
  const url = new URL(endpoint, process.env.BE_APP_URL);

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${bearer}`,
      ...headers,
    },
    body: body instanceof FormData ? body : JSON.stringify(body),
  });
}
