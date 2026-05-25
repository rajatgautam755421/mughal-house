"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "S. Ahamed",
    title: "Chairman & Founder",
    company: "Mughal House Manpower Consultancy",
    location: "West Bengal, India  ·  Kuala Lumpur, Malaysia",
    image: "/images/team/sahamed-imac-desk.jpeg",
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
    rating: 5,
    quote:
      "Every worker who walks through our office door in Pandua arrives with a dream — a better life for their family. Our job is to make that dream real, safely and legally. From the first document to the flight boarding pass, we handle it all. The families who send their sons and daughters through us trust us completely, and that trust is something we guard with everything we have.",
    highlight: "Zero-fee policy for every worker we place",
  },
];

export default function Testimonials() {
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
              From the founders
            </span>
            <h2
              id="testimonials-heading"
              className="mt-4 font-display font-semibold text-paper text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              Words from the people behind the promise.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/65 text-base leading-[1.65]">
              Both partners are directly involved in every deployment &mdash; from sourcing
              workers in West Bengal to final placement in Malaysia.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 border-t border-white/15 pt-10 lg:pt-14">
          {testimonials.map((t) => (
            <figure key={t.id} className="m-0 flex flex-col">
              {/* Rating */}
              <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold-300 text-gold-300"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="m-0 flex-1">
                <p className="font-display text-paper text-[1.05rem] leading-[1.55] tracking-[-0.005em]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Highlight badge */}
              <p className="mt-6 inline-flex items-center gap-2 text-gold-300 text-[12px] font-medium tracking-wide w-fit">
                <span className="w-1 h-1 rounded-full bg-gold-300 shrink-0" aria-hidden="true" />
                {t.highlight}
              </p>

              {/* Author */}
              <figcaption className="mt-6 flex items-center gap-4 pt-6 border-t border-white/15">
                <div className="relative w-14 h-14 overflow-hidden shrink-0">
                  <Image
                    src={t.image}
                    alt={`${t.name} — ${t.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-paper font-semibold text-[14px] leading-tight">{t.name}</p>
                  <p className="text-white/65 text-[12px] mt-1">{t.title}</p>
                  <p className="text-white/40 text-[11px] mt-1 truncate">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
