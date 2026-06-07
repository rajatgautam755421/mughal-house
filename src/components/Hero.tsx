"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";
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
      className="relative flex flex-col overflow-hidden pt-16 lg:pt-20"
      style={{ background: "#faf8f3", height: "100svh" }}
    >
      {/* Ambient washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 60% at 100% 0%, rgba(176,136,48,0.07) 0%, transparent 65%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(45% 55% at 0% 60%, rgba(30,79,156,0.05) 0%, transparent 65%)" }} />

      {/* ── Inner container: fills exactly the remaining height ── */}
      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10 flex-1 min-h-0 flex flex-col relative">

        {/* ── Main content: stretches to fill remaining height ── */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-stretch">

          {/* ── Text column ── */}
          <div
            className="lg:w-[50%] shrink-0 flex flex-col justify-center py-4 fade-in"
            style={{ "--d": "0ms" } as React.CSSProperties}
          >
            <h1
              className="font-display font-semibold text-ink leading-[1.03] tracking-[-0.025em] text-balance"
              style={{ fontSize: "clamp(2rem, 3.8vw, 4.25rem)" }}
            >
              {t("headline1")}
              <br />
              {t("headline2")}{" "}
              <span className="italic font-display font-medium">{t("headline3")}</span>{" "}
              {t("headline4")}
              <span className="text-gold-500">.</span>
            </h1>

            <p className="mt-5 text-ink-soft text-[0.95rem] lg:text-base leading-[1.65] max-w-xl text-pretty">
              {t("description")}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-primary">
                {t("ctaPrimary")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn btn-ghost">
                {t("ctaSecondary")}
              </a>
            </div>

            {/* Trust signal */}
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-rule">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" aria-hidden="true" />
              <span className="text-ink-muted text-[13px]">
                {t("govLicensed")}{" "}
                <span className="text-ink font-semibold font-mono text-[12px] tracking-wider">RAS838225</span>
              </span>
            </div>
          </div>

          {/* ── Image column — hidden on mobile, fills height on desktop ── */}
          <div className="hidden lg:flex flex-col flex-1 min-h-0 min-w-0 py-4 relative">
            {/* Decorative corner frames */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 right-0 w-20 h-20 pointer-events-none"
              style={{ borderBottom: "2px solid rgba(176,136,48,0.5)", borderRight: "2px solid rgba(176,136,48,0.5)" }}
            />
            <div
              aria-hidden="true"
              className="absolute top-2 left-0 w-20 h-20 pointer-events-none"
              style={{ borderTop: "2px solid rgba(30,79,156,0.3)", borderLeft: "2px solid rgba(30,79,156,0.3)" }}
            />

            {/* Image — fills the full column height */}
            <div className="relative flex-1 min-h-0 overflow-hidden"
              style={{ border: "1px solid #e6e1d6" }}>
              <Image
                src="/images/mughal-house-hero.jpeg"
                alt={t("teamPhotoAlt")}
                fill
                priority
                className="object-cover object-top"
                sizes="44vw"
              />
              {/* Gradient overlay for badge legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,30,61,0.55) 0%, transparent 100%)" }}
              />

              {/* Floating stat badge */}
              <div className="absolute bottom-5 left-5">
                <div
                  className="bg-paper border border-rule px-4 py-3.5"
                  style={{ boxShadow: "0 12px 32px -12px rgba(15,30,61,0.3)" }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users className="w-3 h-3 text-gold-500 shrink-0" aria-hidden="true" />
                    <span className="text-ink-muted text-[9.5px] tracking-[0.2em] uppercase font-semibold">
                      {t("teamPlacedSince")}
                    </span>
                  </div>
                  <p className="font-display font-semibold text-ink text-2xl leading-none">10,000+</p>
                  <p className="text-ink-muted text-[11.5px] mt-1">{t("stats.workersMeta")}</p>
                </div>
              </div>
            </div>

            {/* Tiny caption under image */}
            <p className="shrink-0 mt-2 text-ink-faint text-[10.5px] tracking-wide">
              {t("teamCaptionLabel")} · {t("teamCaptionMeta")}
            </p>
          </div>
        </div>

        {/* Stats strip — shrink-0, always anchored to the bottom */}
        <dl className="shrink-0 grid grid-cols-1 sm:grid-cols-3 border-t border-rule">
          {stats.map(({ value, label, meta }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-0.5 py-4 lg:py-5 px-5 lg:px-6 border-rule
                ${i < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""}`}
            >
              <dd
                className="font-display font-semibold text-ink leading-none tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 2vw, 2.1rem)" }}
              >
                {value}
              </dd>
              <dt className="text-ink text-[13px] font-semibold mt-2">{label}</dt>
              <p className="text-ink-muted text-[11px] tracking-wide mt-0.5">{meta}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
