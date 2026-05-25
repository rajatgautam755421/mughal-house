"use client";

import React from "react";
import {
  Stethoscope, FileCheck, Globe, PlaneTakeoff,
  BookOpen, GraduationCap, ArrowRight,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    icon: Stethoscope,
    title: "Medical Examination",
    description:
      "Comprehensive pre-departure health screening at accredited clinics. Fit-to-work certification for all destination countries.",
    color: "text-rose-600",
    bg: "bg-rose-500/10",
    border: "border-rose-500/15",
    number: "01",
  },
  {
    icon: FileCheck,
    title: "Manpower Clearance",
    description:
      "End-to-end processing of all regulatory approvals and government clearances required for legal overseas deployment.",
    color: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/15",
    number: "02",
  },
  {
    icon: Globe,
    title: "E-Visa Processing",
    description:
      "Embassy coordination and visa application management. We handle every step of the visa process with precision.",
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/15",
    number: "03",
  },
  {
    icon: PlaneTakeoff,
    title: "Air Ticketing",
    description:
      "Coordinated flight bookings for smooth travel from India to Malaysia, including group travel arrangements.",
    color: "text-violet-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/15",
    number: "04",
  },
  {
    icon: BookOpen,
    title: "Passport & Documentation",
    description:
      "Full handling of passport applications, renewals, contract attestation, and all supporting documents.",
    color: "text-amber-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/15",
    number: "05",
  },
  {
    icon: GraduationCap,
    title: "Pre-Departure Orientation",
    description:
      "Thorough preparation covering Malaysian laws, workplace rights, cultural norms, and emergency protocols.",
    color: "text-orange-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500/15",
    number: "06",
  },
];

export default function Process() {
  const { ref: headerRef, inView: headerIn } = useReveal(0.15);
  const { ref: gridRef,   inView: gridIn   } = useReveal(0.05);

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f4f8ff 0%, #eaeff8 50%, #f4f8ff 100%)" }}
      aria-labelledby="process-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/4 blur-3xl rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(30,79,156,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/40 to-transparent" aria-hidden="true" />

      <div className="container-xl relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-14 lg:mb-16 max-w-2xl mx-auto">
          <span className={`reveal ${headerIn ? "visible" : ""} inline-block text-royal-600 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold`}>
            — Our Process
          </span>
          <h2
            id="process-heading"
            className={`reveal ${headerIn ? "visible" : ""} font-display font-bold text-dark-900 text-2xl sm:text-3xl lg:text-5xl mt-3 leading-tight text-balance`}
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Everything handled,{" "}
            <em className="not-italic text-gradient-royal-anim">start to finish.</em>
          </h2>
          <p
            className={`reveal ${headerIn ? "visible" : ""} text-dark-600 mt-4 text-sm sm:text-base leading-relaxed`}
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            From medical screening in India to boarding the flight — we manage the entire
            deployment pipeline so workers and employers face zero paperwork stress.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          role="list"
          aria-label="Recruitment process steps"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                role="listitem"
                className={`card-lift card-lift-light reveal ${gridIn ? "visible" : ""} relative flex flex-col gap-4 p-6 sm:p-7 rounded-3xl bg-white border border-dark-100 overflow-hidden group`}
                style={{ "--d": `${idx * 80}ms` } as React.CSSProperties}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-dark-100 to-transparent" aria-hidden="true" />

                {/* Step number — background numeral */}
                <div
                  className="absolute top-4 right-5 font-display font-bold text-6xl leading-none text-dark-900/4 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center shrink-0`} aria-hidden="true">
                  <Icon className={`w-5 h-5 ${step.color}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-dark-900 font-semibold text-base sm:text-lg leading-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step indicator */}
                <div className="mt-auto flex items-center gap-2">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase text-dark-400 opacity-80`}>
                    Step {step.number}
                  </span>
                  <div className={`h-px flex-1 bg-dark-100 rounded-full`} />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`reveal ${gridIn ? "visible" : ""} mt-10 text-center`} style={{ "--d": "600ms" } as React.CSSProperties}>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-royal-500/35 text-royal-600 font-semibold text-sm hover:bg-royal-500/15 hover:border-royal-400/60 active:scale-95 transition-all duration-200 group cursor-pointer"
          >
            Start your application
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
}
