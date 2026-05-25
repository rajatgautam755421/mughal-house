"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "S. Ahamed",
    title: "Chairman & Founder",
    image: "/images/team/sahamed-imac-desk.jpeg",
    quote:
      "We started Mughal House with one promise — to treat every worker the same way we would want our own family to be treated abroad. Ten thousand placements later, that promise still defines every contract we sign.",
  },
  {
    name: "Hemraj Dahal",
    title: "Director — Overseas Business",
    image: "/images/team/hemraj-dahal-standing.jpeg",
    quote:
      "Malaysian employers know that when Mughal House sends a worker, that worker is prepared. Medically cleared, legally documented, culturally oriented, and ready to contribute on day one.",
  },
  {
    name: "Firoz Ahamed",
    title: "Director — India Operations",
    image: "/images/team/firoz-ahamed-reception.jpeg",
    quote:
      "Every worker who walks through our office in Pandua arrives with a dream — a better life for their family. Our job is to make that dream real, safely and legally, from the first document to the boarding pass.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "#0f1e3d", color: "#faf8f3" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-xl">

        <div className="max-w-2xl">
          <span className="text-gold-300 text-xs tracking-[0.22em] uppercase font-semibold">
            From the founders
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display font-medium text-paper text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
          >
            The people behind the promise.
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-3 gap-10 lg:gap-14 border-t border-white/15 pt-10 lg:pt-14">
          {testimonials.map((t) => (
            <figure key={t.name} className="m-0 flex flex-col">
              <blockquote className="m-0">
                <p className="font-display text-paper text-[1.15rem] lg:text-[1.25rem] leading-[1.5] tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 pt-6 border-t border-white/15">
                <div className="relative w-12 h-12 overflow-hidden shrink-0">
                  <Image
                    src={t.image}
                    alt={`${t.name} — ${t.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-paper font-semibold text-[14px] leading-tight">{t.name}</p>
                  <p className="text-white/55 text-[12px] mt-1">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
