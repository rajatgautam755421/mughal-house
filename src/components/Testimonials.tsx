"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    id: 1,
    name: "S. Ahamed",
    title: "Chairman & Founder",
    company: "Mughal House Manpower Consultancy",
    location: "West Bengal, India  ·  Kuala Lumpur, Malaysia",
    image: "/images/team/sahamed-imac-desk.jpeg",
    initials: "SA",
    rating: 5,
    quote:
      "We started Mughal House with a single promise — to treat every worker from India the same way we would want our own family to be treated abroad. With two decades in this industry and our company registered in 2023, we have deployed over 10,000 workers to Malaysia. Every one of those placements is a trust we carry. We do not just find jobs; we build futures — for the worker, and for the Malaysian employer who depends on us.",
    highlight: "10,000+ workers placed since 2023",
  },
  {
    id: 2,
    name: "Hemraj Dahal",
    title: "Director & Partner",
    company: "Mughal House Manpower Consultancy",
    location: "Pandua, Hooghly, West Bengal, India",
    image: "/images/team/hemraj-dahal-standing.jpeg",
    initials: "HD",
    rating: 5,
    quote:
      "Building trust with Malaysian employers takes years of consistent delivery. Every employer we work with knows that when Mughal House sends a worker, that worker is prepared — medically cleared, legally documented, culturally oriented, and ready to contribute on day one. We have built this reputation through zero compromise on quality and full transparency at every step.",
    highlight: "Trusted by employers across 15+ sectors",
  },
  {
    id: 3,
    name: "Firoz Ahamed",
    title: "Managing Director",
    company: "Mughal House Manpower Consultancy",
    location: "Pandua, Hooghly, West Bengal, India",
    image: "/images/team/firoz-ahamed-reception.jpeg",
    initials: "FA",
    rating: 5,
    quote:
      "Every worker who walks through our office door in Pandua arrives with a dream — a better life for their family. Our job is to make that dream real, safely and legally. From the first document to the flight boarding pass, we handle it all. The families who send their sons and daughters through us trust us completely, and that trust is something we guard with everything we have.",
    highlight: "Zero-fee policy for every worker we place",
  },
];

export default function Testimonials() {
  const { ref: headerRef, inView: headerIn } = useReveal(0.15);
  const { ref: cardsRef,  inView: cardsIn  } = useReveal(0.05);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060e1c 0%, #0a1628 50%, #060e1c 100%)" }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-royal-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/6 blur-3xl rounded-full" />
        {/* Large decorative quote mark */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[320px] text-white/3 font-bold leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </div>
      </div>

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-14 lg:mb-16">
          <span className={`reveal ${headerIn ? "visible" : ""} inline-block text-royal-400 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold`}>
            — From Our Founders
          </span>
          <h2
            id="testimonials-heading"
            className={`reveal ${headerIn ? "visible" : ""} font-display font-bold text-white text-2xl sm:text-3xl lg:text-5xl mt-3 leading-tight max-w-2xl mx-auto text-balance`}
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Words from the{" "}
            <em className="not-italic text-gradient-royal">people behind the promise.</em>
          </h2>
          <p
            className={`reveal ${headerIn ? "visible" : ""} text-dark-300 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed`}
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            Both partners are directly involved in every deployment — from sourcing workers in West
            Bengal to final placement in Malaysia.
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-3 gap-6 lg:gap-7"
          role="list"
          aria-label="Founder testimonials"
        >
          {testimonials.map((t, idx) => (
            <article
              key={t.id}
              role="listitem"
              className={`card-lift card-lift-dark reveal ${cardsIn ? "visible" : ""} relative flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-[rgba(15,28,55,0.60)] border border-white/8 overflow-hidden group`}
              style={{ "--d": `${idx * 100}ms` } as React.CSSProperties}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/8 to-transparent"
                aria-hidden="true"
              />

              {/* Quote icon + stars */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl bg-royal-500/15 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Quote className="w-5 h-5 text-royal-400" />
                </div>
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-gold-500 text-gold-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="flex-1">
                <p className="text-dark-200 text-sm sm:text-base leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Highlight badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-royal-500/12 border border-royal-400/25 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-400 shrink-0" aria-hidden="true" />
                <span className="text-royal-300 text-[11px] font-semibold">{t.highlight}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 ring-2 ring-white/10 group-hover:ring-royal-400/40 transition-all duration-300 shadow-sm">
                  <Image
                    src={t.image}
                    alt={`${t.name} — ${t.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base leading-tight truncate">{t.name}</p>
                  <p className="text-royal-400 text-xs mt-0.5 font-medium">{t.title}</p>
                  <p className="text-dark-400 text-[11px] mt-0.5 truncate">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
