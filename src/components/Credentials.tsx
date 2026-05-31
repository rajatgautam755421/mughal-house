"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface Credential {
  key: "malaysia" | "rba" | "india";
  pdf: string;
  thumb: string;
}

const credentials: Credential[] = [
  { key: "malaysia", pdf: "/agensi-malaysia-license.pdf",    thumb: "/images/credentials/agensi-malaysia-license.jpg" },
  { key: "rba",      pdf: "/Corporate-SAQ-2026.pdf",          thumb: "/images/credentials/Corporate-SAQ-2026.jpg" },
  { key: "india",    pdf: "/registration-certificate.pdf",    thumb: "/images/credentials/registration-certificate.jpg" },
];

export default function Credentials() {
  const t = useTranslations("credentials");

  return (
    <section
      id="credentials"
      className="section-padding"
      style={{ background: "#faf8f3" }}
      aria-labelledby="credentials-heading"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-10 lg:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2
              id="credentials-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              {t("heading")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              {t("intro")}
            </p>
          </div>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          role="list"
        >
          {credentials.map((c) => {
            const title = t(`items.${c.key}.title`);
            const subtitle = t(`items.${c.key}.subtitle`);
            const alt = t(`items.${c.key}.alt`);
            return (
              <li key={c.key}>
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("openAria", { title })}
                  className="group block w-full bg-paper border border-rule hover:border-ink transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <div
                    className="relative w-full overflow-hidden bg-paper-soft"
                    style={{ aspectRatio: "1 / 1.414" }}
                  >
                    <Image
                      src={c.thumb}
                      alt={alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(15,30,61,0.18) 100%)",
                      }}
                    />
                  </div>

                  <div className="px-5 py-4 border-t border-rule flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-ink-muted text-[10.5px] tracking-[0.2em] uppercase font-semibold">
                        {subtitle}
                      </p>
                      <p className="mt-1 font-display font-semibold text-ink text-[15px] leading-snug tracking-tight">
                        {title}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-ink-faint group-hover:text-brand transition-colors duration-150 shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
