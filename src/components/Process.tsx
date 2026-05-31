"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const stepKeys = [
  "medical", "clearance", "visa", "ticketing", "passport", "orientation",
] as const;

export default function Process() {
  const t = useTranslations("process");

  return (
    <section
      id="process"
      className="section-padding"
      style={{ background: "#faf8f3" }}
      aria-labelledby="process-heading"
    >
      <div className="container-xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2
              id="process-heading"
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

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-rule" role="list">
          {stepKeys.map((key, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <li
                key={key}
                className={`p-7 lg:p-8 border-b border-rule ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 === 0 ? "md:border-r lg:border-r" : ""} ${
                  i % 3 === 2 ? "lg:border-r-0" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-gold-500 text-base">{num}</span>
                  <div className="h-px flex-1 bg-rule" aria-hidden="true" />
                </div>
                <h3 className="font-display text-ink text-xl lg:text-[1.6rem] leading-snug tracking-tight">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="mt-3 text-ink-soft text-[14px] leading-[1.6]">
                  {t(`steps.${key}.description`)}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-link">
            {t("cta")}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
