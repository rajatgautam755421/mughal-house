"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#faf8f3" }}
      aria-labelledby="cta-heading"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end border-t border-rule pt-14 lg:pt-20">

          <div className="lg:col-span-8">
            <span className="eyebrow">Get in touch</span>
            <h2
              id="cta-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-5xl lg:text-[3.75rem] leading-[1.04] tracking-[-0.02em] text-balance"
            >
              Ready to build your team in Malaysia?
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-[1.6] max-w-xl">
              Speak to our recruitment specialists about your hiring requirement. We respond
              within one working day with a shortlist tailored to your brief.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
            <button onClick={() => scrollTo("contact")} className="btn btn-primary justify-center">
              Schedule a call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button onClick={() => scrollTo("services")} className="btn btn-ghost justify-center">
              See sectors we recruit for
            </button>
            <p className="text-ink-muted text-[13px] mt-2 leading-relaxed">
              Government licensed (RAS838225). No worker-side fees.
              10,000+ placements since 2023.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
