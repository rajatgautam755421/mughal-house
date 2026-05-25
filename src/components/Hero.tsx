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
        className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 lg:pb-20"
        style={{ background: "#faf8f3" }}
      >
        <div className="container-xl">

          {/* Masthead rule */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-10 lg:mb-14 border-b border-rule">
            <span className="eyebrow">Government licensed · Insured · Trusted · Est. 2023</span>
            <span className="text-ink-faint text-[11px] tracking-[0.18em] uppercase">
              Pandua, West Bengal · Kuala Lumpur, Malaysia
            </span>
          </div>

          {/* Two-column editorial */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Lead column */}
            <div className="lg:col-span-7 fade-in" style={{ "--d": "0ms" } as React.CSSProperties}>
              <h1
                className="font-display font-semibold text-ink leading-[1.02] tracking-[-0.025em] text-balance"
                style={{ fontSize: "clamp(2.5rem, 5.6vw, 5.25rem)" }}
              >
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

              {/* Credentials row */}
              <ul
                className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
                role="list"
                aria-label="Credentials"
              >
                <li>
                  <a
                    href="/mughal-house-license.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[13px] transition-colors duration-150"
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
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[13px] transition-colors duration-150"
                    aria-label="View office location on Google Maps"
                  >
                    <MapPin className="w-4 h-4 text-gold-500" aria-hidden="true" />
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

                {/* Placement badge — floating bottom-left */}
                <div
                  className="absolute -bottom-4 left-4 sm:left-6 bg-paper border border-rule px-4 py-3 shadow-[0_8px_24px_-12px_rgba(15,30,61,0.25)]"
                  aria-hidden="true"
                >
                  <p className="font-display text-ink text-xl leading-none">10,000<span className="text-gold-500">+</span></p>
                  <p className="text-ink-muted text-[10px] tracking-[0.18em] uppercase mt-1.5">Workers placed since 2023</p>
                </div>

                <figcaption className="mt-6 text-ink-muted text-xs leading-snug">
                  <span className="font-semibold text-ink">The Mughal House team</span> at the
                  registered office, Ahmed Plaza, Pandua. Photograph, 2024.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Stats strip */}
          <dl className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-rule">
            {stats.map(({ value, label, meta }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-1.5 py-7 lg:py-8 px-5 lg:px-6 border-rule ${
                  i < 3 ? "lg:border-r" : ""
                } ${i === 0 || i === 2 ? "border-r" : ""} ${
                  i < 2 ? "border-b lg:border-b-0" : ""
                }`}
              >
                <dd className="font-display font-semibold text-ink text-3xl lg:text-[2.5rem] leading-none tracking-tight">
                  {value}
                </dd>
                <dt className="text-ink text-[13px] font-semibold mt-2">{label}</dt>
                <p className="text-ink-muted text-[11px] tracking-wide">{meta}</p>
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
