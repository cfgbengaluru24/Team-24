import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
  const session = await auth();
  const url = req.nextUrl;

  if (
    session &&
    (url.toString().startsWith("/signin") ||
      url.toString().startsWith("/signup") ||
      url.toString().startsWith("/"))
  ) {
    console.log("redirecting to /home");
    return NextResponse.redirect("/home");
  }
  if (!session) return NextResponse.redirect(new URL("/signin", req.url));

  return NextResponse.next();
}

export const config = {
    matcher: [
        // '/sign-in',
        // '/sign-up',
        '/home',
        // '/about',
        // '/url',
        // '/url/:path*',
    ],
}
