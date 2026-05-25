"use client";

import React from "react";
import { ArrowRight, Phone, Briefcase } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function CTA() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const { ref, inView } = useReveal(0.15);
  const v = inView ? "visible" : "";

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060e1c 0%, #0a1628 50%, #060e1c 100%)" }}
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-royal-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-2xl aspect-2/1 bg-royal-500/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-400/8 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/6 blur-3xl rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <div ref={ref} className="container-xl relative z-10 text-center">
        {/* Pre-heading badge */}
        <div className={`reveal-scale ${v} inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-500/12 border border-royal-400/25 mb-6`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
          <span className="text-royal-300 text-xs font-semibold tracking-widest uppercase">
            Start your recruitment journey
          </span>
        </div>

        <h2
          id="cta-heading"
          className={`reveal ${v} font-display font-bold text-white text-3xl sm:text-4xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance`}
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          Ready to build your{" "}
          <span className="text-gradient-royal-anim italic">winning team?</span>
        </h2>

        <p
          className={`reveal ${v} text-dark-300 text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 max-w-xl mx-auto leading-relaxed`}
          style={{ "--d": "200ms" } as React.CSSProperties}
        >
          Talk to our recruitment specialists about your hiring needs and get a tailored shortlist
          within 72 hours.
        </p>

        {/* CTA buttons */}
        <div
          className={`reveal ${v} flex flex-col sm:flex-row items-center justify-center gap-4 mt-10`}
          style={{ "--d": "300ms" } as React.CSSProperties}
        >
          <button
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-royal-500 text-white font-bold text-base hover:bg-royal-400 hover:shadow-2xl hover:shadow-royal-500/30 active:scale-95 transition-all duration-300 shadow-xl shadow-royal-500/25 group cursor-pointer"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Schedule a call
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-royal-400/35 text-royal-300 font-semibold text-base hover:border-royal-500 hover:bg-royal-500 hover:text-white active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Briefcase className="w-4 h-4" aria-hidden="true" />
            View our services
          </button>
        </div>

        {/* Trust note */}
        <p
          className={`reveal ${v} text-dark-400 text-sm mt-8`}
          style={{ "--d": "400ms" } as React.CSSProperties}
        >
          Government licensed · No hidden fees · 10,000+ placements since 2023
        </p>
      </div>
    </section>
  );
}
