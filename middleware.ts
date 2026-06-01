import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const KAWIE_HOME = "https://kawie-digital.com/home"

function isAllowedReferer(referer: string): boolean {
  return (
    referer.includes("kawie-digital.com") || referer.includes("localhost")
  )
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/api") || pathname.startsWith("/_next")) {
    return NextResponse.next()
  }

  const referer = request.headers.get("referer") ?? ""
  if (isAllowedReferer(referer)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(KAWIE_HOME)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
