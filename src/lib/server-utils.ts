import { cookies } from "next/headers";
import z from "zod";
import { AUTHENTICATION_COOKIE_NAME } from "./defintions";
import { isProduction } from "./utils";

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

export async function destroy(
  endpoint: string,
  headers?: RequestInit["headers"],
): Promise<Response> {
  const cookieStore = await cookies();
  const bearer = cookieStore.get(AUTHENTICATION_COOKIE_NAME)?.value ?? "";

  headers = headers ?? { "Content-Type": "application/json" };
  const url = new URL(endpoint, process.env.BE_APP_URL);

  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${bearer}`,
      ...headers,
    },
  });
}

export async function fetchServerSide<T>(
  endpoint: string,
  schema: z.ZodType<T>,
  options?: RequestInit,
): Promise<T | Response> {
  const cookieStore = await cookies();
  const bearer = cookieStore.get(AUTHENTICATION_COOKIE_NAME)?.value || "";

  const url = new URL(endpoint, process.env.BE_APP_URL);

  const baseHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${bearer}`,
  } as HeadersInit;

  const baseOptions = options;

  const response = await fetch(url, {
    ...baseOptions,
    method: "GET",
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
  });

  if (response.ok) {
    const data = await response.json();
    const result = schema.safeParse(data);

    // This error should be caught during development.
    if (!result.success) {
      console.log(data);
      console.log(result.error);
      console.log("Endpoint:", endpoint);
      if (!isProduction()) {
        throw new Error("An error occurred while fetching the data.");
      }

      return response;
    }

    return result.data;
  } else {
    return response;
  }
}
