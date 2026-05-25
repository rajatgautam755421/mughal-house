"use client";

import Image from "next/image";
import { Quote, Expand } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

const leaders = [
  {
    id: 1,
    name: "S. Ahmed (Raju)",
    title: "Chairman & Founder",
    image: "/images/team/chairman-black-suit.jpg",
    quote:
      "Since 2015, we have always done the same thing: we welcome every worker who walks through our door the same way we'd welcome our own — as a customer, as a family member, not a number. That promise is built into every placement we make.",
    yearsActive: "2015–Present",
    background: "bg-linear-to-br from-dark-700 to-dark-800",
  },
  {
    id: 2,
    name: "Md. Yusuf Ali",
    title: "Co-Founder & Operations Director",
    image: "/images/team/cofounder-desk-awards.jpg",
    quote:
      "Nine thousand workers deployed to Malaysia. Each one is a father, a son, a breadwinner. Our job is to give them a placement they're proud of, and to give employers partners they can rely on. That responsibility has shaped everything we do.",
    yearsActive: "2015–Present",
    background: "bg-linear-to-br from-dark-800 to-dark-900",
  },
];

export default function Leadership() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string; sub: string } | null>(null);
  return (
    <>
    <section
      id="leadership"
      className="section-padding bg-dark-900 relative overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-500/4 rounded-full blur-3xl" />
        {/* Large quote mark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[400px] text-white/[0.015] font-bold leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </div>
      </div>

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-royal-400 text-xs tracking-[0.25em] uppercase font-semibold">
            — From The Leadership
          </span>
          <h2
            id="leadership-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-5xl mt-3 leading-tight max-w-2xl mx-auto text-balance"
          >
            Built by people who treat every placement as{" "}
            <em className="not-italic text-gradient-royal">personal.</em>
          </h2>
        </div>

        {/* Leader cards */}
        <div
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          role="list"
          aria-label="Leadership team"
        >
          {leaders.map((leader) => (
            <article
              key={leader.id}
              role="listitem"
              className={`relative ${leader.background} rounded-3xl p-5 sm:p-7 lg:p-9 border border-white/6 overflow-hidden group hover:border-royal-500/30 transition-all duration-300`}
            >
              {/* Gold accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-gold-500/40 to-transparent"
                aria-hidden="true"
              />

              {/* Quote icon */}
              <div
                className="absolute top-7 right-7 w-10 h-10 rounded-xl bg-gold-500/8 flex items-center justify-center"
                aria-hidden="true"
              >
                <Quote className="w-5 h-5 text-gold-500/60" />
              </div>

              {/* Leader info */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setLightbox({ src: leader.image, caption: leader.name, sub: leader.title })}
                  className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 ring-2 ring-gold-500/20 cursor-pointer group/photo hover:ring-gold-500/60 transition-all duration-200"
                  aria-label={`View photo of ${leader.name}`}
                >
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.title} at Mughal House`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/photo:scale-110"
                    sizes="56px"
                  />
                  <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <Expand className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  </div>
                </button>
                <div>
                  <p className="text-white font-semibold text-base leading-tight">{leader.name}</p>
                  <p className="text-royal-400 text-xs mt-0.5 font-medium">{leader.title}</p>
                  <p className="text-dark-300 text-xs mt-0.5">{leader.yearsActive}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <p className="text-dark-200 text-base lg:text-[17px] leading-relaxed font-light italic">
                  &ldquo;{leader.quote}&rdquo;
                </p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>

    {lightbox && (
      <ImageLightbox
        src={lightbox.src}
        alt={lightbox.caption}
        caption={lightbox.caption}
        subcaption={`${lightbox.sub} · Mughal House Manpower Consultancy`}
        onClose={() => setLightbox(null)}
      />
    )}
    </>
  );
}
