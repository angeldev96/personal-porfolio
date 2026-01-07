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

  // Skip Next internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico"
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
  matcher: ["/(.*)"],
};
