import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/auth/login") {
    const DailyDealsToken = request.cookies.get("DailyDealsT");
    if (DailyDealsToken) {
      console.log("authorized");
      return NextResponse.redirect(new URL("/admin/home"));
    } else {
      return NextResponse.next();
    }
  }
//   return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/admin/:path*", "/auth/login"],
};
