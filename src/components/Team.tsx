"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Mail } from "lucide-react";

interface Member {
  id: number;
  name: string;
  title: string;
  department: string;
  image: string;
  blurb: string;
  expertise: string[];
}

const members: Member[] = [
  {
    id: 1,
    name: "S. Ahamed (Raju)",
    title: "Chairman & Founder",
    department: "Leadership",
    image: "/images/team/sahamed-imac-desk.jpeg",
    blurb:
      "Founder of Mughal House. Has personally overseen the deployment of over 10,000 workers from West Bengal to Malaysia.",
    expertise: ["Strategy", "Industry relations", "Malaysia operations", "Compliance"],
  },
  {
    id: 2,
    name: "Hemraj Dahal",
    title: "Director — Overseas Business",
    department: "Business development",
    image: "/images/team/hemraj-dahal-standing.jpeg",
    blurb:
      "Leads employer partnerships and overseas business development across Malaysian manufacturing, plantation, construction and hospitality.",
    expertise: ["Client relations", "Employer liaison", "Market expansion"],
  },
  {
    id: 3,
    name: "Firoz Ahamed",
    title: "Director — India Operations",
    department: "Operations",
    image: "/images/team/firoz-ahamed-reception.jpeg",
    blurb:
      "Manages day-to-day operations in India — from candidate intake at Pandua through to final deployment.",
    expertise: ["Operations", "Candidate management", "Deployment"],
  },
  {
    id: 5,
    name: "Md. Rabiul Hussain",
    title: "Accountant",
    department: "Finance",
    image: "/images/team/director-standing.jpg",
    blurb: "Oversees worker payments, employer billing and full financial reporting.",
    expertise: ["Accounting", "Billing", "Payroll"],
  },
  {
    id: 7,
    name: "Manik Sekh",
    title: "Marketing Manager, India",
    department: "Marketing",
    image: "/images/team/staff-glasses-a.jpg",
    blurb: "Drives candidate outreach across West Bengal and surrounding districts.",
    expertise: ["Outreach", "Sourcing", "Community"],
  },
  {
    id: 8,
    name: "Abdul Mabud Dhabak",
    title: "Public Relations Officer",
    department: "Public relations",
    image: "/images/team/staff-india-malaysia-a.jpg",
    blurb: "Manages stakeholder communication with local communities, government bodies and partners.",
    expertise: ["PR", "Stakeholder comms", "Liaison"],
  },
  {
    id: 9,
    name: "DebTirtha Goutam",
    title: "Visa Processing Officer",
    department: "Visa processing",
    image: "/images/team/staff-consultancy-desk.jpg",
    blurb: "Specialises in e-visa applications and embassy coordination.",
    expertise: ["Visas", "Embassy coordination", "Documentation"],
  },
  {
    id: 13,
    name: "Office Staff",
    title: "Administration",
    department: "Administration",
    image: "/images/team/staff-young-curly.jpg",
    blurb: "Manages correspondence, records and office coordination.",
    expertise: ["Administration", "Records"],
  },
];

function MemberModal({
  index, onClose, onPrev, onNext,
}: { index: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const member = members[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal aria-label={`Profile: ${member.name}`}>
      <div className="absolute inset-0 bg-ink/70" onClick={onClose} aria-hidden="true" />
      <button onClick={onPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-paper border border-rule flex items-center justify-center" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 text-ink" />
      </button>
      <button onClick={onNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-paper border border-rule flex items-center justify-center" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-ink" />
      </button>

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] bg-paper border border-rule flex flex-col md:flex-row overflow-hidden">
        <button onClick={onClose} className="absolute top-3 right-3 z-20 w-9 h-9 bg-paper border border-rule flex items-center justify-center" aria-label="Close">
          <X className="w-4 h-4 text-ink" />
        </button>
        <div className="relative h-56 md:h-auto md:w-72 shrink-0">
          <Image src={member.image} alt={`${member.name}, ${member.title}`} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 288px" />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto p-7 lg:p-9">
          <span className="eyebrow">{member.department}</span>
          <h3 className="mt-3 font-display text-ink text-2xl lg:text-[2rem] leading-tight tracking-tight">{member.name}</h3>
          <p className="text-ink-muted text-sm mt-1">{member.title}</p>
          <div className="my-5 h-px bg-rule" />
          <p className="text-ink-soft text-[15px] leading-[1.65]">{member.blurb}</p>
          <div className="mt-6">
            <p className="eyebrow">Expertise</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-ink-soft text-sm list-disc list-inside marker:text-gold-500">
              {member.expertise.map((tag) => (<li key={tag}>{tag}</li>))}
            </ul>
          </div>
          <div className="mt-auto pt-6 border-t border-rule flex items-center justify-between gap-3">
            <a href="mailto:mhmc023@gmail.com" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-sm">
              <Mail className="w-4 h-4" aria-hidden="true" />
              mhmc023@gmail.com
            </a>
            <span className="text-ink-faint text-[11px]">← → · Esc</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal  = useCallback((i: number) => setActiveIndex(i), []);
  const closeModal = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? 0 : (i - 1 + members.length) % members.length)), []);
  const next = useCallback(() => setActiveIndex((i) => (i === null ? 0 : (i + 1) % members.length)), []);

  return (
    <section
      id="team"
      className="section-padding"
      style={{ background: "#f3efe6" }}
      aria-labelledby="team-heading"
    >
      <div className="container-xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">The team</span>
            <h2
              id="team-heading"
              className="mt-4 font-display font-medium text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              The people behind every successful deployment.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              Recruitment specialists, documentation officers and field managers &mdash;
              each one accountable for the workers and employers they serve. Click any name
              for a full profile.
            </p>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-rule" role="list">
          {members.map((m, i) => (
            <li
              key={m.id}
              className={`border-b border-rule ${
                i % 4 !== 3 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "sm:border-r" : "sm:border-r-0"}`}
            >
              <button
                type="button"
                onClick={() => openModal(i)}
                className="block w-full text-left p-6 lg:p-7 group"
              >
                <div className="relative w-full mb-5" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.title}`}
                    fill
                    className="object-cover object-top transition-[filter] duration-300"
                    style={{ filter: "grayscale(100%)" }}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                </div>
                <p className="text-gold-500 text-[11px] tracking-[0.18em] uppercase font-semibold">
                  {m.department}
                </p>
                <h3 className="mt-2 font-display text-ink text-lg leading-tight tracking-tight group-hover:underline underline-offset-4 decoration-1">
                  {m.name}
                </h3>
                <p className="mt-1 text-ink-muted text-[13px]">{m.title}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeIndex !== null && (
        <MemberModal index={activeIndex} onClose={closeModal} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
