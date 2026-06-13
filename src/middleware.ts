import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing, type Locale } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Map a country code (ISO 3166-1 alpha-2) to one of our supported locales.
// Russian for the post-Soviet bloc, Spanish for Spain + Latin America,
// English everywhere else.
const RU_COUNTRIES = new Set([
  "RU", "BY", "KZ", "KG", "UZ", "TJ", "TM", "AM", "AZ", "MD", "UA",
]);
const ES_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "PE", "VE", "CL", "EC", "GT", "CU", "BO",
  "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);
const ZH_COUNTRIES = new Set([
  "CN", "TW", "HK", "MO", "SG",
]);
const JA_COUNTRIES = new Set([
  "JP",
]);

function localeFromCountry(country?: string | null): Locale | null {
  if (!country) return null;
  const c = country.toUpperCase();
  if (RU_COUNTRIES.has(c)) return "ru";
  if (ES_COUNTRIES.has(c)) return "es";
  if (ZH_COUNTRIES.has(c)) return "zh";
  if (JA_COUNTRIES.has(c)) return "ja";
  // Don't force "en" here — we still want to fall back to Accept-Language
  // so e.g. a Spanish speaker browsing from the US gets Spanish.
  return null;
}

function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  // Parse "es-ES,es;q=0.9,en;q=0.8" → ["es-ES","es","en"] ordered by q.
  const langs = header
    .split(",")
    .map((part) => {
      const [tag, qStr] = part.trim().split(";q=");
      const q = qStr ? parseFloat(qStr) : 1;
      return { tag: tag.toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of langs) {
    const primary = tag.split("-")[0];
    if (primary === "ru") return "ru";
    if (primary === "es") return "es";
    if (primary === "zh") return "zh";
    if (primary === "ja") return "ja";
    if (primary === "en") return "en";
  }
  return null;
}

const COOKIE_NAME = "NEXT_LOCALE";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the path already includes a locale prefix, let next-intl handle it.
  const hasLocalePrefix = routing.locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  if (!hasLocalePrefix) {
    // 1. Honour an explicit cookie (user's manual switcher choice).
    const cookieLocale = request.cookies.get(COOKIE_NAME)?.value as
      | Locale
      | undefined;
    const fromCookie =
      cookieLocale && routing.locales.includes(cookieLocale)
        ? cookieLocale
        : null;

    // 2. Geo lookup via the Vercel edge headers (free when deployed on
    //    Vercel; absent otherwise — that's fine, we fall through).
    const country =
      request.headers.get("x-vercel-ip-country") ??
      request.headers.get("cf-ipcountry") ??
      null;
    const fromGeo = localeFromCountry(country);

    // 3. Accept-Language fallback.
    const fromHeader = localeFromAcceptLanguage(
      request.headers.get("accept-language"),
    );

    const detected: Locale =
      fromCookie ?? fromGeo ?? fromHeader ?? routing.defaultLocale;

    if (detected !== routing.defaultLocale || pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = `/${detected}${pathname === "/" ? "" : pathname}`;
      const response = NextResponse.redirect(url);
      // Persist the detection so we don't re-geolocate on every visit.
      response.cookies.set(COOKIE_NAME, detected, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      return response;
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip Next internals and static files; match everything else, including
  // the root, so we can drive locale detection on the first visit.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
