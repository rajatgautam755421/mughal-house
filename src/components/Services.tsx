"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const sectors: Array<{
  title: string;
  description: string;
  cta?: boolean;
}> = [
  { title: "Plantation",              description: "General and experienced plantation workers." },
  { title: "Construction",            description: "Skilled tradesmen and general labourers." },
  { title: "Agriculture",             description: "Crop cultivation, farming and land maintenance." },
  { title: "Poultry farming",         description: "Dedicated staff for chicken farm operations." },
  { title: "Cleaning services",       description: "Commercial, residential and industrial cleaning." },
  { title: "Housekeeping",            description: "Hotel, resort and corporate housekeeping staff." },
  { title: "Food &amp; beverage",     description: "Skilled and non-skilled restaurant crew." },
  { title: "Bar &amp; hospitality",   description: "Bartenders, baristas and bar service staff." },
  { title: "General manufacturing",   description: "Factory workers for production and assembly." },
  { title: "Specialised manufacturing", description: "CNC machine operators for industrial plants." },
  { title: "Textile &amp; apparel",   description: "Tailoring staff, garment workers, seamstresses." },
  { title: "Don&rsquo;t see your sector?",
    description: "Tell us the role and quota &mdash; we will tailor a cohort for you.",
    cta: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "#f3efe6" }}
      aria-labelledby="services-heading"
    >
      <div className="container-xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-10 lg:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">What we recruit for</span>
            <h2
              id="services-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              Eleven sectors. One process. End to end.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              We source, screen, prepare and deploy workers across eleven industries in Malaysia.
              Bespoke recruitment briefs are welcome &mdash; we routinely build cohorts tailored
              to specific factories, contracts or project timelines.
            </p>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-rule" role="list" aria-label="Sectors">
          {sectors.map(({ title, description, cta }, i) => {
            const num = String(i + 1).padStart(2, "0");
            const borderClass = `border-b border-rule
              ${i % 2 === 0 ? "sm:border-r" : ""}
              ${i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`;
            return (
              <li
                key={title}
                className={`group p-6 lg:p-7 ${borderClass} ${cta ? "bg-navy-50/40" : ""}`}
              >
                {cta ? (
                  <a
                    href="#contact"
                    className="block h-full"
                    aria-label="Discuss a custom recruitment requirement"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-gold-500 text-sm tracking-wide">12</span>
                      <div>
                        <h3
                          className="font-display text-ink text-xl lg:text-2xl leading-tight tracking-tight"
                          dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p
                          className="mt-2 text-ink-muted text-[14px] leading-[1.55]"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                        <span className="mt-3 inline-flex items-center gap-1.5 text-brand text-[13px] font-semibold border-b border-brand pb-0.5 group-hover:text-gold-600 group-hover:border-gold-600 transition-colors duration-150">
                          Tell us your requirement
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-gold-500 text-sm tracking-wide">{num}</span>
                    <div>
                      <h3
                        className="font-display text-ink text-xl lg:text-2xl leading-tight tracking-tight"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <p className="mt-2 text-ink-muted text-[14px] leading-[1.55]">{description}</p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-8 border-t border-rule">
          <p className="text-ink-soft text-[15px] leading-relaxed max-w-xl">
            Custom manpower briefs &mdash; we will tailor sourcing to your project timeline,
            skill profile and quota.
          </p>
          <a href="#contact" className="btn-link self-start sm:self-auto">
            Discuss your requirement
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
