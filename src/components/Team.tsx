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
          <div className="absolute bottom-3 left-3 bg-paper border border-rule px-2.5 py-1 text-[11px] text-ink-muted">
            {index + 1} <span className="text-ink-faint">/</span> {members.length}
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto p-7 lg:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow">{member.department}</span>
            {member.badge && (
              <span className="text-ink-muted text-[11px]">· {member.badge} · {member.since}</span>
            )}
          </div>
          <h3 className="mt-3 font-display font-semibold text-ink text-2xl lg:text-[2rem] leading-tight tracking-tight">{member.name}</h3>
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

/* ── Org-tree card ── */
function MemberCard({
  member, globalIdx, onOpen, variant = "staff",
}: {
  member: Member; globalIdx: number; onOpen: (i: number) => void; variant?: "chairman" | "director" | "staff";
}) {
  const surface =
    variant === "chairman"
      ? "bg-paper border-gold-500/60"
      : variant === "director"
      ? "bg-paper border-rule"
      : "bg-paper border-rule";

  return (
    <button
      type="button"
      onClick={() => onOpen(globalIdx)}
      className={`group block w-full text-left border ${surface} p-5 transition-colors duration-150 hover:border-ink`}
      aria-label={`View ${member.name}'s profile`}
    >
      <div className="relative w-full mb-4" style={{ aspectRatio: "1/1" }}>
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title}`}
          fill
          className="object-cover object-top"
          style={{ filter: "grayscale(100%)" }}
          sizes="(max-width:640px) 50vw, 200px"
        />
      </div>
      {member.badge && (
        <span className="block text-gold-500 text-[10px] tracking-[0.2em] uppercase font-semibold mb-1.5">
          {member.badge} · {member.since}
        </span>
      )}
      <h3 className="font-display font-semibold text-ink text-[15px] leading-snug tracking-tight">
        {member.name}
      </h3>
      <p className="text-ink-muted text-[12px] mt-1 leading-snug">{member.title}</p>
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
