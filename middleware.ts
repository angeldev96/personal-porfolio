import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/i18n/config";

function getMatchedLocale(pathname: string): string | null {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next internals, static assets, and file-based metadata routes.
  // These must NOT be locale-redirected or crawlers get a 404 on
  // /robots.txt, /sitemap.xml, /opengraph-image, /manifest.webmanifest, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest" ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/twitter-image") ||
    pathname.startsWith("/apple-icon") ||
    pathname.startsWith("/icon") ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const matchedLocale = getMatchedLocale(pathname);

  // Redirect root and locale-less paths to the default locale
  if (!matchedLocale) {
    const locale = DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

    const response = NextResponse.redirect(url);
    response.cookies.set("NEXT_LOCALE", locale);
    return response;
  }

  // Keep current locale but persist it in a cookie for the layout to read
  const response = NextResponse.next();
  if (isLocale(matchedLocale)) {
    response.cookies.set("NEXT_LOCALE", matchedLocale);
  }
  return response;
}

export const config = {
  // Run on everything EXCEPT Next internals, API, file-based metadata
  // routes, and any path with a file extension (e.g. robots.txt, *.png).
  matcher: [
    "/((?!_next|api|assets|images|opengraph-image|twitter-image|apple-icon|icon|.*\\..*).*)",
  ],
};
