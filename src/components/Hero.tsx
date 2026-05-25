"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const stats = [
  { value: "10,000+", label: "Workers deployed" },
  { value: "2023",    label: "Established" },
  { value: "RAS838225", label: "License no." },
  { value: "15+",     label: "Industry sectors" },
];

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        aria-label="Mughal House Manpower Consultancy"
        className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-20"
        style={{ background: "#faf8f3" }}
      >
        <div className="container-xl">

          {/* Masthead rule */}
          <div className="flex items-center justify-between gap-6 pb-3 mb-10 lg:mb-14 border-b border-rule">
            <span className="eyebrow">Government licensed · Est. 2023</span>
            <span className="hidden sm:block text-ink-faint text-xs tracking-wide">
              Pandua, West Bengal · Kuala Lumpur, Malaysia
            </span>
          </div>

          {/* Two-column editorial layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Left: headline + lead */}
            <div className="lg:col-span-7 fade-in" style={{ "--d": "0ms" } as React.CSSProperties}>
              <h1 className="font-display font-medium text-ink leading-[1.02] tracking-[-0.02em] text-balance"
                  style={{ fontSize: "clamp(2.5rem, 5.6vw, 5.25rem)" }}>
                Skilled Indian workers,
                <br />
                placed across Malaysia
                <span className="text-gold-500">.</span>
              </h1>

              <p className="mt-7 text-ink-soft text-lg leading-[1.6] max-w-xl text-pretty">
                Mughal House Manpower Consultancy is a government-licensed overseas
                recruitment agency based in Pandua, West Bengal. We place skilled and
                semi-skilled workers into manufacturing, plantation, construction and
                hospitality roles across Malaysia.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href="#contact" className="btn btn-primary">
                  Book a consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a href="#services" className="btn-link">
                  See what we recruit for
                </a>
              </div>
            </div>

            {/* Right: photo with caption */}
            <div className="lg:col-span-5 fade-in" style={{ "--d": "120ms" } as React.CSSProperties}>
              <figure className="m-0">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  aria-label="Enlarge team photograph"
                >
                  <img
                    src="/images/team/team-group-photo.jpg"
                    alt="Mughal House Manpower Consultancy management team, Pandua, West Bengal"
                    className="w-full h-auto block"
                    style={{ aspectRatio: "4/5", objectFit: "cover", filter: "grayscale(15%)" }}
                  />
                </button>
                <figcaption className="mt-3 text-ink-muted text-xs leading-snug">
                  <span className="font-semibold text-ink">The Mughal House team</span> at the
                  registered office, Ahmed Plaza, Pandua. Photograph, 2024.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Stats strip — four data points, no animations */}
          <dl className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-rule">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-6 lg:py-7 ${
                  i < 3 ? "lg:border-r" : ""
                } ${i === 0 || i === 2 ? "border-r" : ""} ${
                  i < 2 ? "border-b lg:border-b-0" : ""
                } border-rule lg:pr-6 ${i > 0 ? "pl-5 lg:pl-6" : ""}`}
              >
                <dd className="font-display text-ink text-3xl lg:text-[2.4rem] leading-none tracking-tight">
                  {value}
                </dd>
                <dt className="text-ink-muted text-xs tracking-wide uppercase">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/images/team/team-group-photo.jpg"
          alt="Mughal House Manpower Consultancy management team"
          caption="Our Team"
          subcaption="Mughal House Manpower Consultancy · Pandua, West Bengal, India"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
