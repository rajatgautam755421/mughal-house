"use client";

import React, { useState } from "react";
import { ArrowRight, Shield, MapPin } from "lucide-react";
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
    <>
      <section
        id="home"
        aria-label="Mughal House Manpower Consultancy"
        className="relative pt-24 sm:pt-28 lg:pt-32 pb-0 flex flex-col"
        style={{ background: "#faf8f3", minHeight: "100svh" }}
      >
        <div className="container-xl flex-1 flex flex-col">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-6 lg:mb-7 border-b border-rule">
            <span className="eyebrow">{t("eyebrow")}</span>
            <span className="text-ink-faint text-[11px] tracking-[0.18em] uppercase">
              {t("location")}
            </span>
          </div>

          <div className="flex-1 grid lg:grid-cols-12 gap-10 lg:gap-14 py-5 lg:py-6">

            <div className="lg:col-span-6 fade-in flex flex-col" style={{ "--d": "0ms" } as React.CSSProperties}>
              <h1
                className="font-display font-semibold text-ink leading-[1.02] tracking-[-0.025em] text-balance"
                style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.85rem)" }}
              >
                {t("headline1")}
                <br />
                {t("headline2")}{" "}
                <span className="italic font-display font-medium">{t("headline3")}</span>{" "}
                {t("headline4")}
                <span className="text-gold-500">.</span>
              </h1>

              <p className="mt-5 text-ink-soft text-[15px] lg:text-base leading-[1.55] max-w-xl text-pretty">
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

              <ul
                className="mt-auto pt-5 flex flex-wrap items-center gap-x-7 gap-y-2.5 border-t border-rule"
                role="list"
                aria-label="Credentials"
              >
                <li>
                  <a
                    href="/registration-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[12.5px] transition-colors duration-150"
                    aria-label={t("registrationCertAria")}
                  >
                    <Shield className="w-4 h-4 text-gold-500" aria-hidden="true" />
                    <span>
                      {t("govLicensed")}{" "}
                      <span className="text-ink font-semibold">RAS838225</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[12.5px] transition-colors duration-150"
                    aria-label={t("officeAria")}
                  >
                    <MapPin className="w-4 h-4 text-gold-500" aria-hidden="true" />
                    <span>{t("officeAddress")}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 fade-in flex flex-col justify-center" style={{ "--d": "120ms" } as React.CSSProperties}>
              <figure className="m-0">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  aria-label={t("teamPhotoAria")}
                >
                  <img
                    src="/images/team/team-group-photo.jpg"
                    alt={t("teamPhotoAlt")}
                    className="w-full h-auto block"
                  />
                </button>

                <figcaption className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-ink-muted text-[10px] tracking-[0.22em] uppercase font-semibold">
                      {t("teamCaptionLabel")}
                    </p>
                    <p className="text-ink text-[13px] mt-1">
                      {t("teamCaptionMeta")}
                    </p>
                  </div>
                  <div className="text-right border-l border-rule pl-4">
                    <p className="font-display font-semibold text-ink text-[1.25rem] leading-none">
                      10,000<span className="text-gold-500">+</span>
                    </p>
                    <p className="text-ink-muted text-[10px] tracking-[0.18em] uppercase font-semibold mt-1.5">
                      {t("teamPlacedSince")}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-rule">
            {stats.map(({ value, label, meta }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-4 lg:py-5 px-5 lg:px-6 border-rule
                  ${i < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""}`}
              >
                <dd className="font-display font-semibold text-ink leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.5rem, 2.1vw, 2rem)" }}>
                  {value}
                </dd>
                <dt className="text-ink text-[13px] font-semibold mt-2.5">{label}</dt>
                <p className="text-ink-muted text-[11px] tracking-wide mt-0.5">{meta}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/images/team/team-group-photo.jpg"
          alt={t("teamPhotoAlt")}
          caption={t("lightboxCaption")}
          subcaption={t("lightboxSubcaption")}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
