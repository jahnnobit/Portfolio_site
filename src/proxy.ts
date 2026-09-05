import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function pickLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    const hit = preferred.find((code) =>
      (locales as readonly string[]).includes(code),
    );
    if (hit) return hit;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // run on everything except Next internals, metadata routes, and files with an extension
  matcher: [
    "/((?!_next|api|icon|apple-icon|opengraph-image|twitter-image|manifest|sitemap\\.xml|robots\\.txt|.*\\.[\\w]+$).*)",
  ],
};
