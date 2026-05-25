"use client";

import { MapPin, ArrowRight, Building2, Trees, Hammer, ChefHat, Factory, Wrench } from "lucide-react";

const opportunities = [
  {
    id: 1,
    icon: Trees,
    title: "General Workers — Plantation",
    company: "Plantation Division",
    location: "Malaysia",
    type: "Full-Time",
    sector: "Agriculture",
    badge: "Urgent",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    openings: 120,
    description:
      "General plantation workers for oil palm and rubber estates. Physical fitness required. Accommodation and meals provided.",
    requirements: ["No experience needed", "Physically fit", "Team player"],
    salary: "MYR 1,500–2,000/mo",
    postedDays: 2,
  },
  {
    id: 2,
    icon: Factory,
    title: "Factory Operators",
    company: "Manufacturing Division",
    location: "Malaysia",
    type: "Full-Time",
    sector: "Manufacturing",
    badge: "High Demand",
    badgeColor: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    openings: 85,
    description:
      "Machine operators and assembly line workers for electronics and textile manufacturing. Training provided on-site.",
    requirements: ["Basic mechanical skills", "Shift work readiness", "Attention to detail"],
    salary: "MYR 1,800–2,500/mo",
    postedDays: 5,
  },
  {
    id: 3,
    icon: Hammer,
    title: "Construction & Civil Workers",
    company: "Civil Division",
    location: "Malaysia",
    type: "Full-Time",
    sector: "Construction",
    badge: "New",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    openings: 60,
    description:
      "Skilled and semi-skilled construction workers for infrastructure and building projects across Malaysia.",
    requirements: ["Prior construction experience", "Safety certification", "Height work clearance"],
    salary: "MYR 2,000–3,500/mo",
    postedDays: 1,
  },
  {
    id: 4,
    icon: Wrench,
    title: "Technical Maintenance Staff",
    company: "Industrial Services",
    location: "Johor, Malaysia",
    type: "Full-Time",
    sector: "Engineering",
    badge: null,
    badgeColor: "",
    openings: 30,
    description:
      "Equipment maintenance technicians for industrial plants. Electrical or mechanical background preferred.",
    requirements: ["Technical diploma", "Maintenance experience", "Safety awareness"],
    salary: "MYR 2,500–4,000/mo",
    postedDays: 7,
  },
  {
    id: 5,
    icon: ChefHat,
    title: "Hospitality & F&B Workers",
    company: "Hospitality Division",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-Time",
    sector: "Hospitality",
    badge: null,
    badgeColor: "",
    openings: 45,
    description:
      "Hotel, restaurant, and food service staff for premium hospitality establishments in major Malaysian cities.",
    requirements: ["Service orientation", "Basic English", "Customer-facing experience"],
    salary: "MYR 1,500–2,200/mo",
    postedDays: 10,
  },
  {
    id: 6,
    icon: Building2,
    title: "Security Personnel",
    company: "Security Division",
    location: "Selangor, Malaysia",
    type: "Full-Time",
    sector: "Security",
    badge: null,
    badgeColor: "",
    openings: 55,
    description:
      "Security guards and supervisors for commercial properties, manufacturing plants, and residential areas.",
    requirements: ["Security training certificate", "Good conduct", "Shift availability"],
    salary: "MYR 1,400–1,900/mo",
    postedDays: 14,
  },
];

export default function Opportunities() {
  return (
    <section
      id="opportunities"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(7,12,22,0.82) 0%, rgba(6,10,20,0.88) 100%)" }}
      aria-labelledby="opportunities-heading"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/35 to-transparent pointer-events-none" aria-hidden="true" />
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-royal-500/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <span className="text-royal-400 text-xs tracking-[0.25em] uppercase font-semibold">
              — Live Openings
            </span>
            <h2
              id="opportunities-heading"
              className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl mt-2"
            >
              Live Opportunities
            </h2>
            <p className="text-dark-300 mt-2">
              Currently recruiting for Malaysia-based employers
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-royal-400 font-medium text-sm hover:text-royal-300 transition-colors duration-200 group whitespace-nowrap"
          >
            View all openings
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Jobs list */}
        <div
          className="flex flex-col gap-3"
          role="list"
          aria-label="Job opportunities"
        >
          {opportunities.map((job) => {
            const Icon = job.icon;
            return (
              <article
                key={job.id}
                role="listitem"
                className="card-dark rounded-xl px-4 sm:px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 group cursor-pointer hover:border-royal-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
              >
                {/* Icon + badge row on mobile */}
                <div className="flex items-center gap-3 sm:contents">
                  <div className="w-10 h-10 rounded-lg bg-dark-700/80 flex items-center justify-center shrink-0 group-hover:bg-royal-500/12 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-dark-300 group-hover:text-royal-400 transition-colors duration-200" aria-hidden="true" />
                  </div>
                  {/* Title + meta */}
                  <div className="flex-1 min-w-0 sm:hidden">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white/90 font-semibold text-sm leading-snug group-hover:text-white transition-colors duration-200">
                        {job.title}
                      </h3>
                      {job.badge && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${job.badgeColor}`}>
                          {job.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Title + meta — desktop */}
                <div className="flex-1 min-w-0 hidden sm:block">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white/90 font-semibold text-sm leading-snug group-hover:text-white transition-colors duration-200">
                      {job.title}
                    </h3>
                    {job.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${job.badgeColor}`}>
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1 text-dark-400 text-xs">
                      <MapPin className="w-3 h-3 text-gold-500/70" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="text-dark-600 text-xs">·</span>
                    <span className="text-dark-400 text-xs">{job.sector}</span>
                    <span className="text-dark-600 text-xs">·</span>
                    <span className="text-dark-400 text-xs">{job.openings} openings</span>
                  </div>
                </div>

                {/* Meta row on mobile */}
                <div className="flex items-center gap-3 sm:hidden px-0.5">
                  <span className="inline-flex items-center gap-1 text-dark-400 text-xs">
                    <MapPin className="w-3 h-3 text-gold-500/70" aria-hidden="true" />
                    {job.location}
                  </span>
                  <span className="text-dark-600 text-xs">·</span>
                  <span className="text-dark-400 text-xs">{job.openings} openings</span>
                </div>

                {/* Salary + apply */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <span className="text-gold-400 font-semibold text-sm">{job.salary}</span>
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-royal-500/10 text-royal-400 text-xs font-semibold hover:bg-royal-500 hover:text-white transition-all duration-200"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-royal-500 text-white font-bold text-sm hover:bg-royal-400 active:scale-95 transition-all duration-200 shadow-xl shadow-royal-500/30 group"
          >
            View All Openings
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
