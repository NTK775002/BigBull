import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyJWT, updateSession } from "./lib/auth"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/login" ||
    path === "/register" ||
    path === "/" ||
    path.startsWith("/api/auth") ||
    path.startsWith("/_next") ||
    path.startsWith("/favicon")

  const token = request.cookies.get("token")?.value

  if (!token && !isPublicPath) {
    // Redirect to login if trying to access protected route without token
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (token && (path === "/login" || path === "/register")) {
    // Redirect to dashboard if already logged in and trying to access login/register
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (token) {
    // Verify token
    const payload = await verifyJWT(token)

    if (!payload && !isPublicPath) {
      // Redirect to login if token is invalid
      const response = NextResponse.redirect(new URL("/login", request.url))
      response.cookies.set({
        name: "token",
        value: "",
        httpOnly: true,
        expires: new Date(0),
        path: "/",
      })
      return response
    }

    // Update session if token is valid
    if (payload) {
      return updateSession(request)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
}

