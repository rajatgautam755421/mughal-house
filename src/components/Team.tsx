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
  badge: string | null;
  since: string | null;
  blurb: string;
  expertise: string[];
  isFounder: boolean;
}

const allMembers: Member[] = [
  {
    id: 1,
    name: "S. Ahamed (Raju)",
    title: "Chairman & Founder",
    department: "Leadership",
    image: "/images/team/sahamed-imac-desk.jpeg",
    badge: "Founder",
    since: "Est. 2023",
    blurb:
      "Founder of Mughal House, S. Ahamed (Raju) has personally overseen the deployment of over 10,000 workers from West Bengal to Malaysia. His vision of ethical, transparent recruitment drives every placement the company makes.",
    expertise: ["Strategy", "Industry Relations", "Malaysia Operations", "Regulatory Compliance"],
    isFounder: true,
  },
  {
    id: 2,
    name: "Hemraj Dahal",
    title: "Business Development & Overseas Director",
    department: "Business Dev",
    image: "/images/team/hemraj-dahal-standing.jpeg",
    badge: "Director",
    since: "Est. 2023",
    blurb:
      "Hemraj Dahal leads employer partnerships and overseas business development, expanding Mughal House's reach across Malaysian manufacturing, plantation, construction and hospitality sectors.",
    expertise: ["Client Relations", "Employer Liaison", "Market Expansion", "Business Strategy"],
    isFounder: true,
  },
  {
    id: 3,
    name: "Firoz Ahamed",
    title: "Director (India)",
    department: "Operations",
    image: "/images/team/firoz-ahamed-reception.jpeg",
    badge: "Director",
    since: "Est. 2023",
    blurb:
      "Firoz Ahamed manages the day-to-day operations of Mughal House in India — from candidate intake at the Pandua office to final deployment confirmation. His meticulous approach ensures every placement runs without a hitch.",
    expertise: ["Operations", "Candidate Management", "Client Services", "Deployment"],
    isFounder: true,
  },
  {
    id: 5,
    name: "Md. Rabiul Hussain",
    title: "Accountant",
    department: "Finance",
    image: "/images/team/director-standing.jpg",
    badge: null,
    since: null,
    blurb:
      "Md. Rabiul Hussain manages all financial operations at Mughal House — from worker payment records to employer billing — ensuring full transparency and accuracy across every transaction.",
    expertise: ["Accounting", "Financial Records", "Billing", "Payroll"],
    isFounder: false,
  },
  {
    id: 7,
    name: "Manik Sekh",
    title: "Marketing Manager, India",
    department: "Marketing",
    image: "/images/team/staff-glasses-a.jpg",
    badge: null,
    since: null,
    blurb:
      "Manik Sekh drives candidate outreach and brand awareness across West Bengal — connecting communities in Hooghly and surrounding districts with legitimate overseas employment opportunities.",
    expertise: ["Marketing", "Outreach", "Candidate Sourcing", "Community Relations"],
    isFounder: false,
  },
  {
    id: 8,
    name: "Abdul Mabud Dhabak",
    title: "Public Relations Officer",
    department: "Public Relations",
    image: "/images/team/staff-india-malaysia-a.jpg",
    badge: null,
    since: null,
    blurb:
      "Abdul Mabud Dhabak manages public relations and stakeholder communication — building trust with local communities, government bodies and partner organisations on behalf of Mughal House.",
    expertise: ["Public Relations", "Stakeholder Communication", "Community Liaison"],
    isFounder: false,
  },
  {
    id: 9,
    name: "DebTirtha Goutam",
    title: "Visa Processing Officer",
    department: "Visa Processing",
    image: "/images/team/staff-consultancy-desk.jpg",
    badge: null,
    since: null,
    blurb:
      "DebTirtha Goutam specialises in e-visa applications and embassy coordination, ensuring every worker's travel documentation is processed accurately and delivered on time.",
    expertise: ["Visa Processing", "Embassy Coordination", "E-Visa Applications", "Travel Docs"],
    isFounder: false,
  },
  {
    id: 13,
    name: "Office Staff",
    title: "Administration",
    department: "Administration",
    image: "/images/team/staff-young-curly.jpg",
    badge: null,
    since: null,
    blurb:
      "Supports the administrative backbone of Mughal House — managing correspondence, internal records and office coordination to keep operations running smoothly.",
    expertise: ["Administration", "Record Keeping", "Office Coordination"],
    isFounder: false,
  },
];

const chairman = allMembers[0];
const directors = allMembers.slice(1, 3);
const staffMembers = allMembers.slice(3);

/* ── Member modal ── */
function MemberModal({
  members, index, onClose, onPrev, onNext,
}: {
  members: Member[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
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
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal
      aria-labelledby="member-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink/55"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Prev / Next chips */}
      <button
        onClick={onPrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-paper border border-rule text-ink-soft hover:text-ink hover:border-ink transition-colors duration-150"
        aria-label="Previous member"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={onNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-paper border border-rule text-ink-soft hover:text-ink hover:border-ink transition-colors duration-150"
        aria-label="Next member"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Paper panel — matches Book-appointment modal */}
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-rule">
          <div className="min-w-0">
            <span className="eyebrow">{member.department}</span>
            <h2
              id="member-modal-title"
              className="mt-3 font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-tight"
            >
              {member.name}
            </h2>
            <p className="text-ink-muted text-[13px] mt-1.5">
              {member.title}
              {member.badge && (
                <>
                  {" "}&middot; <span className="text-ink">{member.badge}</span>
                  {" "}&middot; {member.since}
                </>
              )}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-150"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6 flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-44 shrink-0 aspect-[3/4] sm:aspect-auto sm:h-56 overflow-hidden">
            <Image
              src={member.image}
              alt={`${member.name}, ${member.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width:640px) 100vw, 176px"
            />
            <div className="absolute bottom-2 left-2 bg-paper border border-rule px-2 py-0.5 text-[10.5px] text-ink-muted tracking-wide">
              {index + 1} <span className="text-ink-faint">/</span> {members.length}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <p className="text-ink-soft text-[14.5px] leading-[1.65]">{member.blurb}</p>

            <div className="mt-5">
              <p className="text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold mb-2">
                Expertise
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-ink-soft text-[13px] list-disc list-inside marker:text-gold-500">
                {member.expertise.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-rule flex items-center justify-between gap-3">
              <a
                href="mailto:mhmc023@gmail.com"
                className="inline-flex items-center gap-2 text-ink-soft hover:text-ink text-[13px]"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                mhmc023@gmail.com
              </a>
              <span className="text-ink-faint text-[11px]">&larr; &rarr; &middot; Esc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Org-tree card (text only — photo lives in modal) ── */
function MemberCard({
  member, globalIdx, onOpen, variant = "staff",
}: {
  member: Member; globalIdx: number; onOpen: (i: number) => void; variant?: "chairman" | "director" | "staff";
}) {
  const isChairman = variant === "chairman";
  const isDirector = variant === "director";

  return (
    <button
      type="button"
      onClick={() => onOpen(globalIdx)}
      className={`group block w-full text-left bg-paper border transition-colors duration-150 hover:border-ink ${
        isChairman ? "border-gold-500/60 p-6" : isDirector ? "border-rule p-5" : "border-rule p-4"
      }`}
      aria-label={`View ${member.name}'s profile`}
    >
      {/* Department label */}
      <span
        className={`block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2 ${
          isChairman ? "text-gold-500" : "text-ink-muted"
        }`}
      >
        {member.department}
      </span>

      {/* Name */}
      <h3
        className={`font-display font-semibold text-ink leading-snug tracking-tight ${
          isChairman ? "text-lg" : isDirector ? "text-[15px]" : "text-[14px]"
        }`}
      >
        {member.name}
      </h3>

      {/* Title */}
      <p className={`text-ink-muted mt-1 leading-snug ${isChairman ? "text-[13px]" : "text-[12px]"}`}>
        {member.title}
      </p>

      {/* Founder/Director badge meta */}
      {member.badge && (
        <p className="mt-3 pt-3 border-t border-rule text-ink-faint text-[10px] tracking-[0.16em] uppercase">
          {member.badge} · {member.since}
        </p>
      )}

      {/* "View profile" affordance */}
      <span
        aria-hidden="true"
        className="mt-4 inline-flex items-center gap-1.5 text-ink-soft text-[11px] tracking-wide group-hover:text-ink transition-colors duration-150"
      >
        View profile
        <span className="block w-3 h-px bg-current transition-all duration-150 group-hover:w-5" />
      </span>
    </button>
  );
}

/* ── SVG tree connector ── */
function TreeConnector({ variant }: { variant: "down-to-two" | "two-to-many" }) {
  const stroke = "#c8c2b3";
  if (variant === "down-to-two") {
    return (
      <svg viewBox="0 0 200 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
        <line x1="100" y1="0"  x2="100" y2="24" stroke={stroke} strokeWidth="1" />
        <line x1="40"  y1="24" x2="160" y2="24" stroke={stroke} strokeWidth="1" />
        <line x1="40"  y1="24" x2="40"  y2="48" stroke={stroke} strokeWidth="1" />
        <line x1="160" y1="24" x2="160" y2="48" stroke={stroke} strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
      <line x1="40"  y1="0"  x2="40"  y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="160" y1="0"  x2="160" y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="40"  y1="24" x2="160" y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="100" y1="24" x2="100" y2="48" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal  = useCallback((i: number) => setActiveIndex(i), []);
  const closeModal = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? 0 : (i - 1 + allMembers.length) % allMembers.length)), []);
  const next = useCallback(() => setActiveIndex((i) => (i === null ? 0 : (i + 1) % allMembers.length)), []);

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
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              The people behind every successful deployment.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              A structured team of recruitment specialists, documentation officers and field managers
              &mdash; each one accountable for every worker and employer we serve. Click any card to
              view a full profile.
            </p>
          </div>
        </div>

        {/* Org tree */}
        <div className="flex flex-col items-center">

          {/* Chairman */}
          <div className="w-52 sm:w-60">
            <MemberCard member={chairman} globalIdx={0} onOpen={openModal} variant="chairman" />
          </div>

          {/* Connector */}
          <div className="w-[280px] sm:w-[400px]">
            <TreeConnector variant="down-to-two" />
          </div>

          {/* Directors */}
          <div className="flex gap-6 sm:gap-12" role="list" aria-label="Directors">
            {directors.map((d, i) => (
              <div key={d.id} role="listitem" className="w-44 sm:w-52">
                <MemberCard member={d} globalIdx={i + 1} onOpen={openModal} variant="director" />
              </div>
            ))}
          </div>

          {/* Connector to staff */}
          <div className="w-[280px] sm:w-[400px]">
            <TreeConnector variant="two-to-many" />
          </div>

          {/* Staff label */}
          <div className="flex items-center gap-4 w-full max-w-3xl mb-6">
            <div className="h-px flex-1 bg-rule" aria-hidden="true" />
            <span className="text-ink-muted text-[10px] tracking-[0.22em] uppercase font-semibold">
              Team members
            </span>
            <div className="h-px flex-1 bg-rule" aria-hidden="true" />
          </div>

          {/* Staff grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 w-full" role="list" aria-label="Team members">
            {staffMembers.map((s, i) => (
              <div key={s.id} role="listitem">
                <MemberCard member={s} globalIdx={i + 3} onOpen={openModal} variant="staff" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <MemberModal members={allMembers} index={activeIndex} onClose={closeModal} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
