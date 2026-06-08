"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import ImageLightbox from "./ImageLightbox";

export default function Hero() {
  const t = useTranslations("hero");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const stats = [
    { value: t("stats.workersValue"), label: t("stats.workersLabel"), meta: t("stats.workersMeta") },
    { value: t("stats.licenseValue"), label: t("stats.licenseLabel"), meta: t("stats.licenseMeta") },
    { value: t("stats.sectorsValue"), label: t("stats.sectorsLabel"), meta: t("stats.sectorsMeta") },
  ];

  return (
    <section
      id="home"
      aria-label="Mughal House Manpower Consultancy"
      // On lg+ we lock to 100svh so the editorial spread fits in one screen.
      // Below lg, content stacks and the section grows naturally — min-h
      // keeps it at least one viewport tall so it still reads as a hero.
      className="relative flex flex-col overflow-hidden pt-20 sm:pt-24 lg:pt-20 min-h-svh lg:h-svh"
      style={{ background: "#faf8f3" }}
    >
      {/* Ambient washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 60% at 100% 0%, rgba(176,136,48,0.07) 0%, transparent 65%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(45% 55% at 0% 60%, rgba(30,79,156,0.05) 0%, transparent 65%)" }} />

      {/* Inner container */}
      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10 flex-1 min-h-0 flex flex-col relative">

        {/* Main content — stacks on small screens, splits 50/50 on lg+ */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 lg:items-stretch py-6 lg:py-0">

          {/* Text column */}
          <div
            className="lg:w-[50%] lg:shrink-0 flex flex-col justify-center lg:py-4 fade-in"
            style={{ "--d": "0ms" } as React.CSSProperties}
          >
            <h1
              className="font-display font-semibold text-ink leading-[1.03] tracking-[-0.025em] text-balance"
              style={{ fontSize: "clamp(2rem, 4.4vw, 4.25rem)" }}
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

          {/* Image column — visible on every breakpoint.
              Below lg it has a fixed aspect ratio; on lg+ it fills the
              remaining row height for the editorial split. */}
          <div className="flex flex-col flex-1 min-h-0 min-w-0 lg:py-4 relative fade-in" style={{ "--d": "120ms" } as React.CSSProperties}>
            {/* Decorative corner frames */}
            <div
              aria-hidden="true"
              className="absolute -bottom-1 right-0 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none"
              style={{ borderBottom: "2px solid rgba(176,136,48,0.5)", borderRight: "2px solid rgba(176,136,48,0.5)" }}
            />
            <div
              aria-hidden="true"
              className="absolute -top-1 left-0 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none"
              style={{ borderTop: "2px solid rgba(30,79,156,0.3)", borderLeft: "2px solid rgba(30,79,156,0.3)" }}
            />

            {/* Image frame — full image visible on mobile/tablet (object-contain
                with portrait-friendly aspect ratios), and fills column height on
                desktop where the image can be cropped tastefully (object-cover).
                Click/tap to open the lightbox. */}
            <div
              className="relative overflow-hidden bg-paper-soft aspect-4/3 sm:aspect-4/5 md:aspect-3/4 lg:aspect-auto lg:flex-1 lg:min-h-0"
              style={{ border: "1px solid #e6e1d6" }}
            >
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 block w-full h-full group cursor-zoom-in focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                aria-label={t("teamPhotoAria")}
              >
                <Image
                  src="/images/mughal-house-hero.jpeg"
                  alt={t("teamPhotoAlt")}
                  fill
                  priority
                  className="object-contain object-center lg:object-cover lg:object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
                {/* Gradient overlay for badge legibility — only on desktop where image fills the frame */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(15,30,61,0.55) 0%, transparent 100%)" }}
                />
              </button>

              {/* Floating stat badge — hidden on mobile to avoid duplicating the stats strip.
                  Sits above the button via z-index so it stays interactive-free of the click target. */}
              <div className="hidden sm:block absolute bottom-3 left-3 sm:bottom-5 sm:left-5 pointer-events-none z-10">
                <div
                  className="bg-paper border border-rule px-3 py-2.5 sm:px-4 sm:py-3.5"
                  style={{ boxShadow: "0 12px 32px -12px rgba(15,30,61,0.3)" }}
                >
                  <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                    <Users className="w-3 h-3 text-gold-500 shrink-0" aria-hidden="true" />
                    <span className="text-ink-muted text-[9.5px] tracking-[0.2em] uppercase font-semibold">
                      {t("teamPlacedSince")}
                    </span>
                  </div>
                  <p className="font-display font-semibold text-ink text-xl sm:text-2xl leading-none">10,000+</p>
                  <p className="text-ink-muted text-[11px] sm:text-[11.5px] mt-1">{t("stats.workersMeta")}</p>
                </div>
              </div>
            </div>

            {/* Tiny caption under image */}
            <p className="shrink-0 mt-2 text-ink-faint text-[10.5px] tracking-wide">
              {t("teamCaptionLabel")} · {t("teamCaptionMeta")}
            </p>
          </div>
        </div>

        {/* Stats strip — anchored to the bottom on lg+, stacks below content on smaller screens */}
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

      {lightboxOpen && (
        <ImageLightbox
          src="/images/mughal-house-hero.jpeg"
          alt={t("teamPhotoAlt")}
          caption={t("lightboxCaption")}
          subcaption={t("lightboxSubcaption")}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
