import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/api/auth/signin", request.url));
}

export const config = {
  matcher: ["/:path*"],
};
