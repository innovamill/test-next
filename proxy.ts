import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }
});

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, .png files, and .ico files
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.ico$).*)",
  ],
};
