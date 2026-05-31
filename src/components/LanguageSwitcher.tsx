"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Check } from "lucide-react";

const COOKIE_NAME = "NEXT_LOCALE";

// Country flag emojis paired with each locale. English uses the UK flag
// since that's the international convention in language menus.
const FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  zh: "🇨🇳",
  ru: "🇷🇺",
  es: "🇪🇸",
};

export default function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const t = useTranslations("language");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    // Persist user's explicit choice so the middleware respects it next visit.
    document.cookie = `${COOKIE_NAME}=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    router.replace(pathname, { locale: next });
  };

  const isDark = tone === "dark";
  const triggerClass = isDark
    ? "inline-flex items-center gap-1.5 text-white/70 hover:text-paper text-[12px] tracking-wide transition-colors duration-150 border border-white/15 hover:border-white/40 px-2.5 py-1.5"
    : "inline-flex items-center gap-1.5 text-ink-soft hover:text-ink text-[12px] tracking-wide transition-colors duration-150 border border-rule hover:border-ink px-2.5 py-1.5";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={triggerClass}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("switcher")}
      >
        <span className="text-base leading-none" aria-hidden="true">{FLAGS[locale]}</span>
        <span className="uppercase tracking-[0.14em] font-semibold">{locale}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1 z-[60] min-w-[140px] bg-paper border border-rule shadow-[0_12px_32px_-12px_rgba(15,30,61,0.25)]"
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                role="option"
                aria-selected={l === locale}
                onClick={() => choose(l)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left text-[13px] hover:bg-paper-soft ${
                  l === locale ? "text-ink font-semibold" : "text-ink-soft"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none" aria-hidden="true">{FLAGS[l]}</span>
                  <span>{t(l)}</span>
                </span>
                {l === locale && <Check className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
