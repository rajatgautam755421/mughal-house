"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ImageLightbox from "./ImageLightbox";

const pillarKeys = ["licensed", "predeparture", "attention", "zeroFee"] as const;

export default function About() {
  const t = useTranslations("about");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-padding" style={{ background: "#faf8f3" }} aria-labelledby="about-heading">
        <div className="container-xl">

          <span className="eyebrow">{t("eyebrow")}</span>

          <div className="mt-4 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <div className="lg:col-span-7">
              <h2
                id="about-heading"
                className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
              >
                {t("heading")}
              </h2>

              <p
                className="mt-6 text-ink-soft text-lg leading-[1.6] text-pretty drop-cap"
                dangerouslySetInnerHTML={{ __html: t.raw("intro") as string }}
              />

              <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-7">
                {pillarKeys.map((key) => (
                  <div key={key}>
                    <dt className="text-ink font-semibold text-[15px] tracking-tight">{t(`pillars.${key}.title`)}</dt>
                    <dd className="mt-1.5 text-ink-soft text-[14px] leading-[1.6]">{t(`pillars.${key}.description`)}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5 lg:pt-3">
              <figure className="m-0">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src="/images/team/sahamed-imac-desk.jpeg"
                      alt={t("imageAlt")}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 90vw, 440px"
                    />
                  </div>
                </button>
                <figcaption
                  className="mt-3 text-ink-muted text-xs leading-snug"
                  dangerouslySetInnerHTML={{ __html: t.raw("figureCaption") as string }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/images/team/sahamed-imac-desk.jpeg"
          alt={t("imageAlt")}
          caption={t("lightboxCaption")}
          subcaption={t("lightboxSubcaption")}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
