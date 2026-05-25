"use client";

import React from "react";
import {
  Leaf, HardHat, Wheat, Bird, Sparkles, BedDouble,
  UtensilsCrossed, Wine, Factory, Cpu, Scissors,
  ArrowRight, MessageSquare,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const sectors = [
  {
    icon: Leaf,
    title: "Plantation",
    description: "General and experienced plantation workers.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-400/40",
    hoverShadow: "hover:shadow-emerald-500/8",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Skilled tradesmen and general unskilled labourers.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-400/40",
    hoverShadow: "hover:shadow-amber-500/8",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Workers for crop cultivation, farming, and land maintenance.",
    color: "text-lime-400",
    bg: "bg-lime-500/10",
    hoverBorder: "hover:border-lime-400/40",
    hoverShadow: "hover:shadow-lime-500/8",
  },
  {
    icon: Bird,
    title: "Poultry Farming",
    description: "Dedicated staff for chicken farm operations.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    hoverBorder: "hover:border-yellow-400/40",
    hoverShadow: "hover:shadow-yellow-500/8",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Professional cleaners for commercial, residential, or industrial sectors.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    hoverBorder: "hover:border-sky-400/40",
    hoverShadow: "hover:shadow-sky-500/8",
  },
  {
    icon: BedDouble,
    title: "Housekeeping",
    description: "Housekeeping staff for hotels, resorts, and corporate environments.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    hoverBorder: "hover:border-violet-400/40",
    hoverShadow: "hover:shadow-violet-500/8",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Skilled and non-skilled restaurant crew members.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-400/40",
    hoverShadow: "hover:shadow-orange-500/8",
  },
  {
    icon: Wine,
    title: "Bar & Hospitality",
    description: "Professional bartenders, baristas, and bar service staff.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    hoverBorder: "hover:border-rose-400/40",
    hoverShadow: "hover:shadow-rose-500/8",
  },
  {
    icon: Factory,
    title: "General Manufacturing",
    description: "Factory workers for production and assembly lines.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-400/40",
    hoverShadow: "hover:shadow-blue-500/8",
  },
  {
    icon: Cpu,
    title: "Specialized Manufacturing",
    description: "Highly skilled CNC machine operators for industrial plants.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-400/40",
    hoverShadow: "hover:shadow-indigo-500/8",
  },
  {
    icon: Scissors,
    title: "Textile & Apparel",
    description: "Skilled tailoring staff, garment workers, and seamstresses.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    hoverBorder: "hover:border-pink-400/40",
    hoverShadow: "hover:shadow-pink-500/8",
  },
];

export default function Services() {
  const { ref: headerRef, inView: headerIn } = useReveal(0.15);
  const { ref: gridRef,   inView: gridIn   } = useReveal(0.05);
  const { ref: ctaRef,    inView: ctaIn    } = useReveal(0.2);

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060e1c 0%, #0a1628 50%, #060e1c 100%)" }}
      aria-labelledby="services-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-royal-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-75 rounded-full bg-gold-500/6 blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/40 to-transparent" aria-hidden="true" />

      <div className="container-xl relative z-10">

        {/* ─── Section Header ─── */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <span className={`reveal ${headerIn ? "visible" : ""} inline-block text-royal-400 text-xs tracking-[0.25em] uppercase font-semibold`}>
            — Our Services
          </span>
          <h2
            id="services-heading"
            className={`reveal ${headerIn ? "visible" : ""} font-display font-bold text-white text-2xl sm:text-3xl lg:text-5xl mt-3 leading-tight text-balance`}
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Qualified manpower,{" "}
            <span className="text-gradient-royal italic">every sector.</span>
          </h2>
          <p
            className={`reveal ${headerIn ? "visible" : ""} text-dark-300 mt-4 text-base lg:text-lg leading-relaxed`}
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            We supply skilled and unskilled workers across 11 industries in Malaysia —
            and own the entire recruitment process from source to site.
          </p>
        </div>

        {/* ─── Workforce Sectors ─── */}
        <div>
          <p className={`reveal ${headerIn ? "visible" : ""} text-center text-dark-400 text-[11px] uppercase tracking-[0.22em] font-semibold mb-7`} style={{ "--d": "220ms" } as React.CSSProperties}>
            Sectors we supply
          </p>

          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5"
            role="list"
            aria-label="Workforce sectors"
          >
            {sectors.map(({ icon: Icon, title, description, color, bg, hoverBorder, hoverShadow }, idx) => (
              <article
                key={title}
                role="listitem"
                className={`card-lift card-lift-dark reveal-scale ${gridIn ? "visible" : ""} group flex flex-col gap-3 p-4 sm:p-5 rounded-2xl bg-[rgba(15,28,55,0.55)] border border-white/8 cursor-default`}
                style={{ "--d": `${idx * 45}ms` } as React.CSSProperties}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug">{title}</h3>
                  <p className="text-dark-300 text-xs leading-relaxed mt-1 hidden sm:block">{description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Custom solutions callout */}
          <div
            ref={ctaRef}
            className={`reveal ${ctaIn ? "visible" : ""} mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6 rounded-2xl border border-royal-400/25 bg-royal-500/10 hover:bg-royal-500/15 hover:border-royal-400/45 transition-all duration-300`}
          >
            <div className="w-10 h-10 rounded-xl bg-royal-500/12 flex items-center justify-center shrink-0" aria-hidden="true">
              <MessageSquare className="w-5 h-5 text-royal-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Custom manpower solutions available</p>
              <p className="text-dark-300 text-sm mt-0.5 leading-relaxed">
                We can tailor our workforce supply to meet your specific project timelines and staffing requirements.
              </p>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-royal-500 text-white font-semibold text-xs hover:bg-royal-400 hover:shadow-lg hover:shadow-royal-500/30 active:scale-95 transition-all duration-200 shadow-lg shadow-royal-500/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Discuss your needs
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
