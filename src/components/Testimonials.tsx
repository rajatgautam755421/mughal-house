"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const items = [
  { key: "manivanna", image: "/images/team/manivanna.jpg",              rating: 5 },
  { key: "hemraj",    image: "/images/team/hemraj-dahal-standing.jpeg",  rating: 5 },
  { key: "firoz",     image: "/images/team/firoz-ahamed-reception.jpeg", rating: 5 },
] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, #13245e 0%, #0a1e4a 40%, #0a142a 100%)",
        color: "#faf8f3",
      }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2.5 text-gold-300 text-[11px] tracking-[0.22em] uppercase font-semibold">
              <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
              {t("eyebrow")}
            </span>
            <h2
              id="testimonials-heading"
              className="mt-4 font-display font-semibold text-paper text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              {t("heading")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/65 text-base leading-[1.65]">
              {t("intro")}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 border-t border-white/15 pt-10 lg:pt-14">
          {items.map((item) => {
            const name = t(`items.${item.key}.name`);
            const title = t(`items.${item.key}.title`);
            const location = t(`items.${item.key}.location`);
            const quote = t(`items.${item.key}.quote`);
            const highlight = t(`items.${item.key}.highlight`);
            return (
              <figure key={item.key} className="m-0 flex flex-col bg-white/[0.04] border border-white/10">
                {/* Portrait — the visual anchor of the card */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                  <Image
                    src={item.image}
                    alt={`${name} — ${title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(6,13,29,0.65) 100%)",
                    }}
                  />
                  {/* Author block sits over the bottom of the photo */}
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-4">
                    <p className="text-paper font-semibold text-[15px] leading-tight">{name}</p>
                    <p className="text-gold-300 text-[11.5px] tracking-wide mt-1">{title}</p>
                    <p className="text-white/55 text-[10.5px] mt-0.5 truncate">{location}</p>
                  </figcaption>
                </div>

                {/* Compact quote panel — short and punchy now */}
                <div className="px-5 lg:px-6 py-5 lg:py-6 flex flex-col gap-3 flex-1">
                  <div className="flex gap-1" aria-label={t("starsAria", { rating: item.rating })}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-gold-300 text-gold-300"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="m-0">
                    <p className="font-display text-paper text-[1rem] lg:text-[1.05rem] leading-[1.5] tracking-[-0.005em]">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </blockquote>

                  <p className="mt-auto pt-3 inline-flex items-center gap-2 text-gold-300 text-[11.5px] font-medium tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-gold-300 shrink-0" aria-hidden="true" />
                    {highlight}
                  </p>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
