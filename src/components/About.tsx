"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Expand } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import { useReveal } from "@/hooks/useReveal";

const pillars = [
  {
    title: "Government-approved license on official frame",
    description:
      "Fully registered and licensed by Malaysian authorities — you work with a compliant, trusted partner.",
  },
  {
    title: "Full orientation & pre-departure support",
    description:
      "We prepare every worker with medical checks, documentation, and complete pre-departure briefings.",
  },
  {
    title: "Each placement is individual with attention",
    description:
      "We treat every deployment as unique — matching skills to roles, culture to environment.",
  },
  {
    title: "Ethical recruitment — zero exploitation guaranteed",
    description:
      "No hidden fees for workers. Transparent contracts. Fair treatment. Always.",
  },
];

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref, inView } = useReveal(0.08);
  const v = inView ? "visible" : "";
  return (
    <>
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f4f8ff 0%, #eaeff8 50%, #f4f8ff 100%)" }}
      aria-labelledby="about-heading"
    >
      {/* Decorative background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-royal-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-royal-500/4 blur-3xl" />
      </div>
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-royal-500/30 to-transparent" aria-hidden="true" />

      <div className="container-xl relative z-10">
        {/* Section label */}
        <div className={`reveal ${v} flex justify-center mb-4`} aria-hidden="true">
          <span className="text-royal-600 text-xs tracking-[0.25em] uppercase font-semibold">
            — About Us
          </span>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* Left: Image column */}
          <div className={`reveal-left ${v} relative order-2 lg:order-1`}>
            {/* Main portrait — clickable */}
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-3xl overflow-hidden aspect-3/4 max-w-sm mx-auto lg:mx-0 shadow-2xl shadow-black/40 cursor-pointer group"
            >
              <Image
                src="/images/team/sahamed-imac-desk.jpeg"
                alt="S. Ahamed, Chairman and Founder of Mughal House Manpower Consultancy"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-900/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-900/60 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute bottom-6 left-4 right-4 lg:-right-6 px-5 py-4 rounded-2xl bg-white border border-dark-100 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-dark-900 text-sm">M</span>
                </div>
                <div>
                  <p className="text-dark-900 font-semibold text-sm leading-tight">
                    Recruiting Migrant Workers
                  </p>
                  <p className="text-royal-600 text-xs mt-0.5">Est. 2023 — Government Licensed</p>
                </div>
              </div>
            </div>

            {/* Decorative shape */}
            <div
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-2 border-royal-500/10 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-royal-500/8 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right: Content column */}
          <div className={`reveal-right ${v} order-1 lg:order-2 flex flex-col gap-6 lg:gap-8`}>
            <div>
              <h2
                id="about-heading"
                className="font-display font-bold text-dark-900 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance"
              >
                A house built on{" "}
                <em className="not-italic text-gradient-royal">trust</em>,<br />
                scaled by reputation.
              </h2>
            </div>

            <p className="text-dark-600 text-base sm:text-lg leading-relaxed">
              We have been working in the recruitment industry for the past two decades, and
              officially registered Mughal House Manpower Consultancy in 2023.
              Registered in Pandua, Hooghly, West Bengal (RAS838225), we have deployed over 10,000
              skilled workers from India to Malaysia across plantation, construction, manufacturing,
              and hospitality sectors.
            </p>

            {/* Pillars list */}
            <ul className="flex flex-col gap-4" role="list" aria-label="Our commitments">
              {pillars.map(({ title, description }, i) => (
                <li key={title} className={`reveal ${v} flex gap-3`} style={{ "--d": `${i * 80 + 200}ms` } as React.CSSProperties}>
                  <CheckCircle2
                    className="w-5 h-5 text-royal-500 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-dark-900 font-semibold text-sm leading-snug">{title}</p>
                    <p className="text-dark-500 text-sm mt-0.5 leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal-500 text-white font-semibold text-sm hover:bg-royal-400 active:scale-95 transition-all duration-200 shadow-lg shadow-royal-500/25 group cursor-pointer"
              >
                Read our story
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark-200 text-dark-700 font-semibold text-sm hover:border-dark-300 hover:bg-dark-50 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Our services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {lightboxOpen && (
      <ImageLightbox
        src="/images/team/sahamed-imac-desk.jpeg"
        alt="S. Ahamed, Chairman & Founder"
        caption="S. Ahamed"
        subcaption="Chairman & Founder · Mughal House Manpower Consultancy"
        onClose={() => setLightboxOpen(false)}
      />
    )}
    </>
  );
}
