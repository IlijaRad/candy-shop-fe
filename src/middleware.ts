import { NextResponse, type NextRequest } from "next/server";
import { AUTHENTICATION_COOKIE_NAME } from "./lib/defintions";

export function middleware(request: NextRequest) {
  const bearer = request.cookies.get(AUTHENTICATION_COOKIE_NAME);

  if (
    bearer === undefined &&
    request.nextUrl.pathname.startsWith("/unauthorized")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (bearer !== undefined) {
    if (
      request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/forgot-password") ||
      request.nextUrl.pathname.startsWith("/register") ||
      request.nextUrl.pathname.startsWith("/reset-password") ||
      request.nextUrl.pathname.startsWith("/reset-success")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/unauthorized")) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete(AUTHENTICATION_COOKIE_NAME);
      return response;
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
