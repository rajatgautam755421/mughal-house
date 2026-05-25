"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

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
    title: "Business Development and Overseas Director",
    department: "Business Dev",
    image: "/images/team/hemraj-dahal-standing.jpeg",
    badge: "Director",
    since: "Est. 2023",
    blurb:
      "Hemraj Dahal leads employer partnerships and overseas business development, expanding Mughal House's reach across Malaysian manufacturing, plantation, construction, and hospitality sectors.",
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
    title: "Marketing Manager India",
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
    title: "Public Relation Officer",
    department: "Public Relations",
    image: "/images/team/staff-india-malaysia-a.jpg",
    badge: null,
    since: null,
    blurb:
      "Abdul Mabud Dhabak manages public relations and stakeholder communication — building trust with local communities, government bodies, and partner organisations on behalf of Mughal House.",
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
      "Supports the administrative backbone of Mughal House — managing correspondence, internal records, and office coordination to keep operations running smoothly.",
    expertise: ["Administration", "Record Keeping", "Office Coordination"],
    isFounder: false,
  },
];

const chairman = allMembers[0];
const directors = allMembers.slice(1, 3);
const staffMembers = allMembers.slice(3);

function initials(name: string) {
  return name
    .replace(/\(.*?\)/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/* ── Member detail modal ── */
function MemberModal({
  members,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  members: Member[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const member = members[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8" role="dialog" aria-modal aria-label={`Profile: ${member.name}`}>
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <button onClick={onPrev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/8 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/30 flex items-center justify-center transition-all duration-200 cursor-pointer" aria-label="Previous person">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={onNext} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/8 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/30 flex items-center justify-center transition-all duration-200 cursor-pointer" aria-label="Next person">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] bg-dark-800 rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 flex flex-col md:flex-row animate-fade-in">
        <button onClick={onClose} className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-dark-900/70 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer" aria-label="Close">
          <X className="w-4 h-4 text-white" />
        </button>
        <div className="relative h-56 md:h-auto md:w-64 lg:w-72 shrink-0">
          <Image src={member.image} alt={`${member.name}, ${member.title}`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 288px" />
          <div className="absolute inset-0 bg-linear-to-t from-dark-900/70 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-dark-800/60" />
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-dark-900/80 border border-white/10 backdrop-blur-sm">
            <span className="text-dark-300 text-[11px] font-medium">{index + 1} <span className="text-dark-600">/</span> {members.length}</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-gold-500/12 border border-gold-500/25 text-gold-400 text-[11px] font-semibold uppercase tracking-wide">{member.department}</span>
            {member.badge && <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-dark-300 text-[11px] font-medium">{member.badge} · {member.since}</span>}
          </div>
          <h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-tight">{member.name}</h3>
          <p className="text-royal-400 text-sm mt-1 font-medium">{member.title}</p>
          <div className="my-5 h-px bg-white/8" />
          <p className="text-dark-300 text-sm leading-relaxed">{member.blurb}</p>
          <div className="mt-5">
            <p className="text-dark-300 text-[10px] uppercase tracking-widest font-semibold mb-2">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-dark-700/60 border border-white/6 text-dark-200 text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-5 border-t border-white/6 flex items-center justify-between gap-3">
            <a href="mailto:mhmc023@gmail.com" className="inline-flex items-center gap-2 text-dark-400 hover:text-royal-400 text-xs transition-colors duration-200 cursor-pointer">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              mhmc023@gmail.com
            </a>
            <span className="text-dark-600 text-[10px]">← → to navigate · Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Name-only org chart card ── */
function MemberCard({
  member,
  globalIdx,
  onOpen,
  variant = "staff",
}: {
  member: Member;
  globalIdx: number;
  onOpen: (i: number) => void;
  variant?: "chairman" | "director" | "staff";
}) {
  const isChairman = variant === "chairman";
  const isDirector = variant === "director";

  return (
    <article
      onClick={() => onOpen(globalIdx)}
      tabIndex={0}
      role="button"
      aria-label={`View ${member.name}'s profile`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(globalIdx); }}
      className={`card-lift group relative cursor-pointer rounded-2xl text-center select-none ${
        isChairman
          ? "p-4 sm:p-5 bg-white border border-gold-500/40 shadow-lg shadow-dark-900/10"
          : isDirector
          ? "p-4 sm:p-5 bg-royal-500 border border-royal-500/50 shadow-md shadow-royal-900/15"
          : "p-3 sm:p-4 bg-white border border-dark-100 shadow-sm"
      }`}
    >
      {/* Badge */}
      {member.badge && (
        <div className="flex justify-center mb-2.5">
          <span className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-wide ${
            member.badge === "Founder"
              ? "bg-gold-500/15 border border-gold-400/35 text-gold-700"
              : "bg-white/10 border border-white/20 text-white/75"
          }`}>
            {member.badge}
          </span>
        </div>
      )}

      {/* Initials avatar */}
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full mx-auto mb-2.5 flex items-center justify-center font-bold text-xs sm:text-sm ${
        isChairman
          ? "bg-gold-500/15 text-gold-700"
          : isDirector
          ? "bg-white/15 text-white"
          : "bg-royal-500/15 text-royal-600"
      }`}>
        {initials(member.name)}
      </div>

      {/* Name */}
      <h3 className={`font-display font-bold leading-tight ${
        isChairman
          ? "text-dark-900 text-sm sm:text-base"
          : isDirector
          ? "text-white text-xs sm:text-sm"
          : "text-dark-900 text-xs sm:text-sm"
      }`}>
        {member.name}
      </h3>

      {/* Title */}
      <p className={`mt-1 text-[10px] sm:text-[11px] leading-snug ${
        isChairman
          ? "text-gold-600"
          : isDirector
          ? "text-white/75"
          : "text-dark-500"
      }`}>
        {member.title}
      </p>

      {/* Animated underline */}
      <div className={`mt-3 mx-auto h-0.5 rounded-full transition-all duration-500 ease-out w-5 group-hover:w-3/4 ${
        isChairman ? "bg-gold-500/60" : isDirector ? "bg-white/45" : "bg-royal-500/50"
      }`} />
    </article>
  );
}

/* ── SVG tree connector ── */
function TreeConnector({ variant }: { variant: "down-to-two" | "two-to-one" }) {
  const stroke = "rgba(201,168,67,0.6)";
  const dot = "rgba(201,168,67,0.65)";

  if (variant === "down-to-two") {
    return (
      <svg viewBox="0 0 200 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
        <line x1="100" y1="0" x2="100" y2="24" stroke={stroke} strokeWidth="1.5" />
        <line x1="50" y1="24" x2="150" y2="24" stroke={stroke} strokeWidth="1.5" />
        <line x1="50" y1="24" x2="50" y2="48" stroke={stroke} strokeWidth="1.5" />
        <line x1="150" y1="24" x2="150" y2="48" stroke={stroke} strokeWidth="1.5" />
        <circle cx="100" cy="24" r="2.5" fill={dot} />
        <circle cx="50" cy="48" r="2" fill={dot} />
        <circle cx="150" cy="48" r="2" fill={dot} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
      <line x1="50"  y1="0"  x2="50"  y2="24" stroke={stroke} strokeWidth="1.5" />
      <line x1="150" y1="0"  x2="150" y2="24" stroke={stroke} strokeWidth="1.5" />
      <line x1="50"  y1="24" x2="150" y2="24" stroke={stroke} strokeWidth="1.5" />
      <line x1="100" y1="24" x2="100" y2="48" stroke={stroke} strokeWidth="1.5" />
      <circle cx="50"  cy="24" r="2" fill={dot} />
      <circle cx="150" cy="24" r="2" fill={dot} />
      <circle cx="100" cy="24" r="2.5" fill={dot} />
      <circle cx="100" cy="48" r="2" fill={dot} />
    </svg>
  );
}

/* ── Main section ── */
export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: headerRef, inView: headerIn } = useReveal(0.15);
  const { ref: treeRef,   inView: treeIn   } = useReveal(0.05);

  const openModal = useCallback((i: number) => setActiveIndex(i), []);
  const closeModal = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + allMembers.length) % allMembers.length)), []);
  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % allMembers.length)), []);

  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f4f8ff 0%, #eaeff8 50%, #f4f8ff 100%)" }}
      aria-labelledby="team-heading"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-royal-500/30 to-transparent" aria-hidden="true" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5 rounded-full bg-royal-500/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-75 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="container-xl relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className={`reveal ${headerIn ? "visible" : ""} inline-block text-royal-600 text-xs tracking-[0.25em] uppercase font-semibold`}>
            — Our Team
          </span>
          <h2
            id="team-heading"
            className={`reveal ${headerIn ? "visible" : ""} font-display font-bold text-dark-900 text-2xl sm:text-3xl lg:text-5xl mt-3 leading-tight`}
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            The people behind every{" "}
            <em className="not-italic text-gradient-royal-anim">successful deployment.</em>
          </h2>
          <p
            className={`reveal ${headerIn ? "visible" : ""} text-dark-600 mt-4 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed`}
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            A structured team of recruitment specialists, documentation officers, and field managers — each one accountable for every worker and employer we serve.
          </p>
          <p className={`reveal ${headerIn ? "visible" : ""} text-dark-500 text-xs mt-2 tracking-wide`} style={{ "--d": "220ms" } as React.CSSProperties}>
            Click any card to view their full profile
          </p>
        </div>

        {/* ── ORG TREE ── */}
        <div ref={treeRef} className="flex flex-col items-center">

          {/* ─ Level 1: Chairman ─ */}
          <div className={`reveal-scale ${treeIn ? "visible" : ""} w-44 sm:w-48 lg:w-52`}>
            <MemberCard member={chairman} globalIdx={0} onOpen={openModal} variant="chairman" />
          </div>

          {/* ─ Connector: Chairman → Directors ─ */}
          <div className={`reveal ${treeIn ? "visible" : ""} w-[320px] sm:w-[368px] lg:w-[416px]`} style={{ "--d": "120ms" } as React.CSSProperties}>
            <TreeConnector variant="down-to-two" />
          </div>

          {/* ─ Level 2: Directors ─ */}
          <div className="flex gap-4 sm:gap-6" role="list" aria-label="Directors">
            {directors.map((d, i) => (
              <div
                key={d.id}
                role="listitem"
                className={`reveal ${treeIn ? "visible" : ""} w-36 sm:w-40 lg:w-44`}
                style={{ "--d": `${i * 80 + 180}ms` } as React.CSSProperties}
              >
                <MemberCard member={d} globalIdx={i + 1} onOpen={openModal} variant="director" />
              </div>
            ))}
          </div>

          {/* ─ Connector: Directors → Staff ─ */}
          <div className={`reveal ${treeIn ? "visible" : ""} w-[320px] sm:w-[368px] lg:w-[416px]`} style={{ "--d": "360ms" } as React.CSSProperties}>
            <TreeConnector variant="two-to-one" />
          </div>

          {/* ─ Level 3 label ─ */}
          <div className={`reveal ${treeIn ? "visible" : ""} flex items-center gap-3 w-full mb-5`} style={{ "--d": "420ms" } as React.CSSProperties}>
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-dark-200" />
            <span className="text-dark-500 text-[10px] uppercase tracking-[0.22em] font-semibold px-1 shrink-0">
              Team Members
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-dark-200" />
          </div>

          {/* ─ Level 3: Staff ─ */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full" role="list" aria-label="Team members">
            {staffMembers.map((s, i) => (
              <div
                key={s.id}
                role="listitem"
                className={`reveal-scale ${treeIn ? "visible" : ""} w-36 sm:w-40 lg:w-44`}
                style={{ "--d": `${i * 60 + 480}ms` } as React.CSSProperties}
              >
                <MemberCard member={s} globalIdx={i + 3} onOpen={openModal} variant="staff" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <MemberModal
          members={allMembers}
          index={activeIndex}
          onClose={closeModal}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
