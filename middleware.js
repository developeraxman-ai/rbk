import { NextResponse } from "next/server";

import { verifyEdgeJwtToken } from "@/lib/auth-edge";

function isProtectedPath(pathname) {
  return pathname.startsWith("/dashboard") || pathname.startsWith("/projects");
}

function isProtectedApi(pathname, method) {
  if (pathname.startsWith("/api/upload")) {
    return true;
  }

  if (pathname.startsWith("/api/projects")) {
    return method !== "GET";
  }

  return false;
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtectedPage = isProtectedPath(pathname);
  const isProtectedMutation = isProtectedApi(pathname, request.method);

  if (!isProtectedPage && !isProtectedMutation) {
    return NextResponse.next();
  }

  const token = request.cookies.get("rbk_admin_token")?.value;
  const payload = token ? await verifyEdgeJwtToken(token) : null;

  if (payload) {
    return NextResponse.next();
  }

  if (isProtectedMutation) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard/:path*", "/projects/:path*", "/api/projects/:path*", "/api/upload/:path*"],
};
