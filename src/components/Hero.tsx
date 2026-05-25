"use client";

import React, { useState } from "react";
import { ArrowRight, Shield, MapPin } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const stats = [
  { value: "10,000+",   label: "Workers deployed",  meta: "Placed across Malaysia" },
  { value: "2023",      label: "Year established",  meta: "Government licensed"   },
  { value: "RAS838225", label: "License number",    meta: "Govt. of India"         },
  { value: "15+",       label: "Industry sectors",  meta: "Mfg. to hospitality"    },
];

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        aria-label="Mughal House Manpower Consultancy"
        className="relative pt-20 sm:pt-20 lg:pt-20 pb-0 flex flex-col"
        style={{ background: "#faf8f3", minHeight: "100svh" }}
      >
        <div className="container-xl flex-1 flex flex-col">

          {/* Masthead rule */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-6 lg:mb-7 border-b border-rule">
            <span className="eyebrow">Government licensed · Insured · Trusted · Est. 2023</span>
            <span className="text-ink-faint text-[11px] tracking-[0.18em] uppercase">
              Pandua, West Bengal · Kuala Lumpur, Malaysia
            </span>
          </div>

          {/* Two-column editorial — columns stretch, content top-aligned within */}
          <div className="flex-1 grid lg:grid-cols-12 gap-10 lg:gap-14 py-5 lg:py-6">

            {/* Lead column */}
            <div className="lg:col-span-6 fade-in flex flex-col" style={{ "--d": "0ms" } as React.CSSProperties}>
              <h1
                className="font-display font-semibold text-ink leading-[1.02] tracking-[-0.025em] text-balance"
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

              {/* Credentials */}
              <ul
                className="mt-auto pt-5 flex flex-wrap items-center gap-x-7 gap-y-2.5 border-t border-rule"
                role="list"
                aria-label="Credentials"
              >
                <li>
                  <a
                    href="/mughal-house-license.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[12.5px] transition-colors duration-150"
                    aria-label="View government license RAS838225"
                  >
                    <Shield className="w-4 h-4 text-gold-500" aria-hidden="true" />
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
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[12.5px] transition-colors duration-150"
                    aria-label="View office location on Google Maps"
                  >
                    <MapPin className="w-4 h-4 text-gold-500" aria-hidden="true" />
                    <span>Ahmed Plaza, Pandua, West Bengal</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Photo column — image shown at natural aspect, no cropping */}
            <div className="lg:col-span-6 fade-in flex flex-col justify-center" style={{ "--d": "120ms" } as React.CSSProperties}>
              <figure className="m-0">
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
                  />
                </button>

                {/* Caption row below image */}
                <figcaption className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-ink-muted text-[10px] tracking-[0.22em] uppercase font-semibold">
                      The Mughal House team
                    </p>
                    <p className="text-ink text-[13px] mt-1">
                      Pandua, West Bengal &mdash; 2024
                    </p>
                  </div>
                  <div className="text-right border-l border-rule pl-4">
                    <p className="font-display font-semibold text-ink text-[1.25rem] leading-none">
                      10,000<span className="text-gold-500">+</span>
                    </p>
                    <p className="text-ink-muted text-[10px] tracking-[0.18em] uppercase font-semibold mt-1.5">
                      Placed since 2023
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Stats strip — pronounced numerals, full hero footer */}
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-rule">
            {stats.map(({ value, label, meta }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-4 lg:py-5 px-5 lg:px-6 border-rule ${
                  i < 3 ? "lg:border-r" : ""
                } ${i === 0 || i === 2 ? "border-r lg:border-r" : ""} ${
                  i < 2 ? "border-b lg:border-b-0" : ""
                }`}
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
          alt="Mughal House Manpower Consultancy management team"
          caption="Our Team"
          subcaption="Mughal House Manpower Consultancy · Pandua, West Bengal, India"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
