"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

type MemberKey =
  | "sAhamed" | "hemraj" | "firoz" | "manivanna" | "rabiul" | "arif"
  | "manik" | "abdul" | "sowel";

type DeptKey =
  | "leadership" | "businessDev" | "operations" | "malaysiaPartner"
  | "documentation" | "finance" | "marketing" | "publicRelations" | "frontDesk";

interface Member {
  key: MemberKey;
  name: string;
  department: DeptKey;
  image: string;
  badge: "founder" | "director" | null;
  isFounder: boolean;
}

const allMembers: Member[] = [
  { key: "sAhamed",   name: "S. Ahamed (Raju)",     department: "leadership",      image: "/images/team/sahamed-imac-desk.jpeg",     badge: "founder",  isFounder: true  },
  { key: "hemraj",    name: "Hemraj Dahal",         department: "businessDev",     image: "/images/team/hemraj-dahal-standing.jpeg", badge: "director", isFounder: true  },
  { key: "firoz",     name: "Firoz Ahamed",         department: "operations",      image: "/images/team/firoz-ahamed-reception.jpeg", badge: "director", isFounder: true  },
  { key: "manivanna", name: "Manivanna",            department: "malaysiaPartner", image: "/images/team/manivanna.jpg",              badge: "director", isFounder: true  },
  { key: "rabiul",    name: "Md. Rabiul Hussain",   department: "documentation",   image: "/images/team/rabiul-hussain.jpg",         badge: null,       isFounder: false },
  { key: "arif",      name: "Arif",                 department: "finance",         image: "/images/team/arif-accountant.jpg",        badge: null,       isFounder: false },
  { key: "manik",     name: "Manik Sekh",           department: "marketing",       image: "/images/team/manik-sekh.jpg",             badge: null,       isFounder: false },
  { key: "abdul",     name: "Abdul Mabud Dhabak",   department: "publicRelations", image: "/images/team/abdul-mabud-dhabak.jpg",     badge: null,       isFounder: false },
  { key: "sowel",     name: "Sowel Rana Mondal",    department: "frontDesk",       image: "/images/team/sowel-rana-mondal.jpg",      badge: null,       isFounder: false },
];

const chairman = allMembers[0];
const directors = allMembers.slice(1, 4);
const staffMembers = allMembers.slice(4);

function MemberModal({
  members, index, onClose, onPrev, onNext,
}: {
  members: Member[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const t = useTranslations("team");
  const member = members[index];
  const title = t(`members.${member.key}.title`);
  const blurb = t(`members.${member.key}.blurb`);
  const expertise = t.raw(`members.${member.key}.expertise`) as string[];
  const department = t(`departments.${member.department}`);
  const badge = member.badge ? t(`badges.${member.badge}`) : null;
  const since = t("since");

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

      <button
        onClick={onPrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-paper border border-rule text-ink-soft hover:text-ink hover:border-ink transition-colors duration-150"
        aria-label={t("prevAria")}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={onNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-paper border border-rule text-ink-soft hover:text-ink hover:border-ink transition-colors duration-150"
        aria-label={t("nextAria")}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">

        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-rule">
          <div className="min-w-0">
            <span className="eyebrow">{department}</span>
            <h2
              id="member-modal-title"
              className="mt-3 font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-tight"
            >
              {member.name}
            </h2>
            <p className="text-ink-muted text-[13px] mt-1.5">
              {title}
              {badge && (
                <>
                  {" "}&middot; <span className="text-ink">{badge}</span>
                  {" "}&middot; {since}
                </>
              )}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-150"
            aria-label={t("close")}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-7 py-6 flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-44 shrink-0 aspect-[3/4] sm:aspect-auto sm:h-56 overflow-hidden">
            <Image
              src={member.image}
              alt={`${member.name}, ${title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width:640px) 100vw, 176px"
            />
            <div className="absolute bottom-2 left-2 bg-paper border border-rule px-2 py-0.5 text-[10.5px] text-ink-muted tracking-wide">
              {index + 1} <span className="text-ink-faint">/</span> {members.length}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <p className="text-ink-soft text-[14.5px] leading-[1.65]">{blurb}</p>

            <div className="mt-5">
              <p className="text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold mb-2">
                {t("expertise")}
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-ink-soft text-[13px] list-disc list-inside marker:text-gold-500">
                {expertise.map((tag) => <li key={tag}>{tag}</li>)}
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

function MemberCard({
  member, globalIdx, onOpen, variant = "staff",
}: {
  member: Member; globalIdx: number; onOpen: (i: number) => void; variant?: "chairman" | "director" | "staff";
}) {
  const t = useTranslations("team");
  const isChairman = variant === "chairman";
  const isDirector = variant === "director";
  const department = t(`departments.${member.department}`);
  const title = t(`members.${member.key}.title`);
  const badge = member.badge ? t(`badges.${member.badge}`) : null;
  const since = t("since");

  return (
    <button
      type="button"
      onClick={() => onOpen(globalIdx)}
      className={`group block w-full text-left bg-paper border transition-colors duration-150 hover:border-ink ${
        isChairman ? "border-gold-500/60 p-6" : isDirector ? "border-rule p-5" : "border-rule p-4"
      }`}
      aria-label={t("viewProfileAria", { name: member.name })}
    >
      <span
        className={`block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2 ${
          isChairman ? "text-gold-500" : "text-ink-muted"
        }`}
      >
        {department}
      </span>

      <h3
        className={`font-display font-semibold text-ink leading-snug tracking-tight ${
          isChairman ? "text-lg" : isDirector ? "text-[15px]" : "text-[14px]"
        }`}
      >
        {member.name}
      </h3>

      <p className={`text-ink-muted mt-1 leading-snug ${isChairman ? "text-[13px]" : "text-[12px]"}`}>
        {title}
      </p>

      {badge && (
        <p className="mt-3 pt-3 border-t border-rule text-ink-faint text-[10px] tracking-[0.16em] uppercase">
          {badge} · {since}
        </p>
      )}

      <span
        aria-hidden="true"
        className="mt-4 inline-flex items-center gap-1.5 text-ink-soft text-[11px] tracking-wide group-hover:text-ink transition-colors duration-150"
      >
        {t("viewProfile")}
        <span className="block w-3 h-px bg-current transition-all duration-150 group-hover:w-5" />
      </span>
    </button>
  );
}

function TreeConnector({ variant }: { variant: "down-to-three" | "three-to-many" }) {
  const stroke = "#c8c2b3";
  if (variant === "down-to-three") {
    return (
      <svg viewBox="0 0 200 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
        <line x1="100" y1="0"  x2="100" y2="24" stroke={stroke} strokeWidth="1" />
        <line x1="30"  y1="24" x2="170" y2="24" stroke={stroke} strokeWidth="1" />
        <line x1="30"  y1="24" x2="30"  y2="48" stroke={stroke} strokeWidth="1" />
        <line x1="100" y1="24" x2="100" y2="48" stroke={stroke} strokeWidth="1" />
        <line x1="170" y1="24" x2="170" y2="48" stroke={stroke} strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
      <line x1="30"  y1="0"  x2="30"  y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="100" y1="0"  x2="100" y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="170" y1="0"  x2="170" y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="30"  y1="24" x2="170" y2="24" stroke={stroke} strokeWidth="1" />
      <line x1="100" y1="24" x2="100" y2="48" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

export default function Team() {
  const t = useTranslations("team");
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
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2
              id="team-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              {t("heading")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              {t("intro")}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">

          <div className="w-52 sm:w-60">
            <MemberCard member={chairman} globalIdx={0} onOpen={openModal} variant="chairman" />
          </div>

          <div className="w-[280px] sm:w-[560px]">
            <TreeConnector variant="down-to-three" />
          </div>

          <div className="flex gap-3 sm:gap-8" role="list" aria-label={t("directorsLabel")}>
            {directors.map((d, i) => (
              <div key={d.key} role="listitem" className="w-[28vw] max-w-[160px] sm:w-48">
                <MemberCard member={d} globalIdx={i + 1} onOpen={openModal} variant="director" />
              </div>
            ))}
          </div>

          <div className="w-[280px] sm:w-[560px]">
            <TreeConnector variant="three-to-many" />
          </div>

          <div className="flex items-center gap-4 w-full max-w-3xl mb-6">
            <div className="h-px flex-1 bg-rule" aria-hidden="true" />
            <span className="text-ink-muted text-[10px] tracking-[0.22em] uppercase font-semibold">
              {t("membersLabel")}
            </span>
            <div className="h-px flex-1 bg-rule" aria-hidden="true" />
          </div>

          <div
            className="flex flex-wrap justify-center gap-4 sm:gap-5 w-full"
            role="list"
            aria-label={t("membersLabel")}
          >
            {staffMembers.map((s, i) => (
              <div
                key={s.key}
                role="listitem"
                className="basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.834rem)] lg:basis-[calc(20%-1rem)] max-w-[220px]"
              >
                <MemberCard member={s} globalIdx={i + 4} onOpen={openModal} variant="staff" />
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
