"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stats.workersValue"), label: t("stats.workersLabel"), meta: t("stats.workersMeta") },
    { value: t("stats.licenseValue"), label: t("stats.licenseLabel"), meta: t("stats.licenseMeta") },
    { value: t("stats.sectorsValue"), label: t("stats.sectorsLabel"), meta: t("stats.sectorsMeta") },
  ];

  return (
    <section
      id="home"
      aria-label="Mughal House Manpower Consultancy"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-0 flex flex-col"
      style={{ background: "#faf8f3", minHeight: "100svh" }}
    >
      {/* Quiet wash — adds depth without breaking the paper aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "radial-gradient(55% 70% at 85% 0%, rgba(176,136,48,0.09) 0%, rgba(176,136,48,0) 60%)",
        }}
      />

      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10 flex-1 flex flex-col relative">

        {/* Masthead rule */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-12 lg:mb-20 border-b border-rule">
          <span className="eyebrow">{t("eyebrow")}</span>
          <span className="text-ink-faint text-[11px] tracking-[0.18em] uppercase">
            {t("location")}
          </span>
        </div>

        {/* Single-column editorial — full container width, generous whitespace */}
        <div
          className="flex-1 flex flex-col justify-center fade-in pb-16 lg:pb-24"
          style={{ "--d": "0ms" } as React.CSSProperties}
        >
          <h1
            className="font-display font-semibold text-ink leading-[1.02] tracking-[-0.025em] text-balance max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            {t("headline1")}
            <br />
            {t("headline2")}{" "}
            <span className="italic font-display font-medium">{t("headline3")}</span>{" "}
            {t("headline4")}
            <span className="text-gold-500">.</span>
          </h1>

          <p className="mt-8 text-ink-soft text-base lg:text-lg leading-[1.6] max-w-2xl text-pretty">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary">
              {t("ctaPrimary")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#services" className="btn btn-ghost">
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        {/* Stats strip — pronounced numerals, full hero footer */}
        <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-rule">
          {stats.map(({ value, label, meta }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-1 py-5 lg:py-6 px-5 lg:px-6 border-rule
                ${i < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""}`}
            >
              <dd className="font-display font-semibold text-ink leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.375rem)" }}>
                {value}
              </dd>
              <dt className="text-ink text-[14px] font-semibold mt-3">{label}</dt>
              <p className="text-ink-muted text-[11.5px] tracking-wide mt-0.5">{meta}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
