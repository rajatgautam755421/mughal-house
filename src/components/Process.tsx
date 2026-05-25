"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Medical examination",
    description:
      "Comprehensive pre-departure health screening at accredited clinics. Fit-to-work certification for the destination country.",
  },
  {
    title: "Manpower clearance",
    description:
      "End-to-end processing of regulatory approvals and government clearances required for legal overseas deployment.",
  },
  {
    title: "E-visa processing",
    description:
      "Embassy coordination and visa application managed by our in-house documentation team.",
  },
  {
    title: "Air ticketing",
    description:
      "Flight bookings and group travel coordination from India to Malaysia, sequenced with contract start dates.",
  },
  {
    title: "Passport &amp; documentation",
    description:
      "Passport applications, renewals, contract attestation and supporting paperwork handled on the candidate&rsquo;s behalf.",
  },
  {
    title: "Pre-departure orientation",
    description:
      "Briefings on Malaysian labour law, workplace rights, cultural norms and emergency protocols before travel.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding"
      style={{ background: "#faf8f3" }}
      aria-labelledby="process-heading"
    >
      <div className="container-xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our process</span>
            <h2
              id="process-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              Six steps from interview to boarding pass.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              From medical screening in West Bengal to the flight to Kuala Lumpur, we own the
              full deployment pipeline. Employers and workers face zero paperwork on either side.
            </p>
          </div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-rule" role="list">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <li
                key={step.title}
                className={`p-7 lg:p-8 border-b border-rule ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 === 0 ? "md:border-r lg:border-r" : ""} ${
                  i % 3 === 2 ? "lg:border-r-0" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-gold-500 text-base">{num}</span>
                  <div className="h-px flex-1 bg-rule" aria-hidden="true" />
                </div>
                <h3
                  className="font-display text-ink text-xl lg:text-[1.6rem] leading-snug tracking-tight"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p
                  className="mt-3 text-ink-soft text-[14px] leading-[1.6]"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </li>
            );
          })}
        </ol>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-link">
            Start an application
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
