"use client";

import React, { useState } from "react";
import { ArrowRight, Shield, MapPin } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const stats = [
  { value: "10,000+",   label: "Workers deployed",  meta: "Across Malaysia" },
  { value: "2023",      label: "Year established",  meta: "Government licensed" },
  { value: "RAS838225", label: "License number",    meta: "Govt. of India" },
  { value: "15+",       label: "Industry sectors",  meta: "Mfg. to hospitality" },
];

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        aria-label="Mughal House Manpower Consultancy"
        className="relative pt-20 sm:pt-24 lg:pt-24 pb-6 lg:pb-8"
        style={{ background: "#faf8f3" }}
      >
        <div className="container-xl">

          {/* Masthead rule */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-5 lg:mb-6 border-b border-rule">
            <span className="eyebrow">Government licensed · Insured · Trusted · Est. 2023</span>
            <span className="text-ink-faint text-[11px] tracking-[0.18em] uppercase">
              Pandua, West Bengal · Kuala Lumpur, Malaysia
            </span>
          </div>

          {/* Two-column editorial */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Lead column */}
            <div className="lg:col-span-7 fade-in" style={{ "--d": "0ms" } as React.CSSProperties}>
              <h1
                className="font-display font-semibold text-ink leading-[1.04] tracking-[-0.025em] text-balance"
                style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.85rem)" }}
              >
                Skilled Indian workers,
                <br />
                placed across Malaysia
                <span className="text-gold-500">.</span>
              </h1>

              <p className="mt-5 text-ink-soft text-[15px] lg:text-base leading-[1.55] max-w-xl text-pretty">
                A government-licensed overseas recruitment agency based in Pandua,
                West Bengal &mdash; placing skilled and semi-skilled workers across
                Malaysia&rsquo;s industries.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href="#contact" className="btn btn-primary">
                  Book a consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a href="#services" className="btn-link">
                  See what we recruit for
                </a>
              </div>

              {/* Credentials row */}
              <ul
                className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2"
                role="list"
                aria-label="Credentials"
              >
                <li>
                  <a
                    href="/mughal-house-license.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[12px] transition-colors duration-150"
                    aria-label="View government license RAS838225"
                  >
                    <Shield className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />
                    <span>
                      Gov. licensed &mdash;{" "}
                      <span className="text-ink font-semibold">RAS838225</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[12px] transition-colors duration-150"
                    aria-label="View office location on Google Maps"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />
                    <span>Ahmed Plaza, Pandua, West Bengal</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Photo column */}
            <div className="lg:col-span-5 fade-in" style={{ "--d": "120ms" } as React.CSSProperties}>
              <figure className="m-0 relative">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  aria-label="Enlarge team photograph"
                >
                  <img
                    src="/images/team/team-group-photo.jpg"
                    alt="Mughal House Manpower Consultancy management team, Pandua, West Bengal"
                    className="w-full h-auto block"
                    style={{ aspectRatio: "4/3", objectFit: "cover", filter: "grayscale(15%)" }}
                  />
                </button>

                {/* Placement badge */}
                <div
                  className="absolute -bottom-3 left-3 sm:left-5 bg-paper border border-rule px-3.5 py-2 shadow-[0_8px_24px_-12px_rgba(15,30,61,0.25)]"
                  aria-hidden="true"
                >
                  <p className="font-display font-semibold text-ink text-base leading-none">
                    10,000<span className="text-gold-500">+</span>{" "}
                    <span className="text-ink-muted text-[10px] tracking-[0.18em] uppercase font-sans font-semibold ml-1">
                      placed since 2023
                    </span>
                  </p>
                </div>
              </figure>
            </div>
          </div>

          {/* Stats strip — fits inside hero viewport at standard laptop sizes */}
          <dl className="mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 border-t border-rule">
            {stats.map(({ value, label, meta }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-0.5 py-3.5 lg:py-4 px-4 lg:px-5 border-rule ${
                  i < 3 ? "lg:border-r" : ""
                } ${i === 0 || i === 2 ? "border-r lg:border-r" : ""} ${
                  i < 2 ? "border-b lg:border-b-0" : ""
                }`}
              >
                <dd className="font-display font-semibold text-ink text-xl lg:text-[1.625rem] leading-none tracking-tight">
                  {value}
                </dd>
                <dt className="text-ink text-[11.5px] font-semibold mt-1">{label}</dt>
                <p className="text-ink-muted text-[10px] tracking-wide">{meta}</p>
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
