"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const sectorKeys = [
  "plantation", "construction", "agriculture", "poultry",
  "cleaning", "housekeeping", "food", "bar",
  "manufacturing", "specialised", "textile", "custom",
] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "#f3efe6" }}
      aria-labelledby="services-heading"
    >
      <div className="container-xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-10 lg:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2
              id="services-heading"
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

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-rule" role="list" aria-label="Sectors">
          {sectorKeys.map((key, i) => {
            const num = String(i + 1).padStart(2, "0");
            const isCustom = key === "custom";
            const borderClass = `border-b border-rule
              ${i % 2 === 0 ? "sm:border-r" : ""}
              ${i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`;
            const title = t(`items.${key}.title`);
            const description = t(`items.${key}.description`);
            return (
              <li
                key={key}
                className={`group p-6 lg:p-7 ${borderClass} ${isCustom ? "bg-navy-50/40" : ""}`}
              >
                {isCustom ? (
                  <a
                    href="#contact"
                    className="block h-full"
                    aria-label={t("items.custom.aria")}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-gold-500 text-sm tracking-wide">12</span>
                      <div>
                        <h3 className="font-display text-ink text-xl lg:text-2xl leading-tight tracking-tight">
                          {title}
                        </h3>
                        <p className="mt-2 text-ink-muted text-[14px] leading-[1.55]">
                          {description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-brand text-[13px] font-semibold border-b border-brand pb-0.5 group-hover:text-gold-600 group-hover:border-gold-600 transition-colors duration-150">
                          {t("items.custom.cta")}
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-gold-500 text-sm tracking-wide">{num}</span>
                    <div>
                      <h3 className="font-display text-ink text-xl lg:text-2xl leading-tight tracking-tight">
                        {title}
                      </h3>
                      <p className="mt-2 text-ink-muted text-[14px] leading-[1.55]">{description}</p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-8 border-t border-rule">
          <p className="text-ink-soft text-[15px] leading-relaxed max-w-xl">
            {t("footerNote")}
          </p>
          <a href="#contact" className="btn-link self-start sm:self-auto">
            {t("footerCta")}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
