"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#faf8f3" }}
      aria-labelledby="cta-heading"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end border-t border-rule pt-14 lg:pt-20">

          <div className="lg:col-span-8">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2
              id="cta-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-5xl lg:text-[3.75rem] leading-[1.04] tracking-[-0.02em] text-balance"
            >
              {t("heading")}
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-[1.6] max-w-xl">
              {t("description")}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
            <button onClick={() => scrollTo("contact")} className="btn btn-primary justify-center">
              {t("primary")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button onClick={() => scrollTo("services")} className="btn btn-ghost justify-center">
              {t("secondary")}
            </button>
            <p className="text-ink-muted text-[13px] mt-2 leading-relaxed">
              {t("note")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
