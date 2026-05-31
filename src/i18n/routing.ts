import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh", "ru", "es"],
  defaultLocale: "en",
  // Always show the locale prefix in URLs (/en, /ru, /es) — clearer for
  // SEO and shareable links, and matches the alternate-locale metadata.
  localePrefix: "always",
  // The middleware does its own geo-aware redirect on the root path, so
  // we disable next-intl's built-in Accept-Language sniffing.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
