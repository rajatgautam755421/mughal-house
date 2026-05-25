"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Shield, Award, Users, Expand, Calendar, TrendingUp } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const heroStats = [
  { icon: Users,      value: 10000, suffix: "+", label: "Workers Deployed",   description: "Placed across Malaysia",   color: "text-royal-400",   iconBg: "bg-royal-500/15",   noFormat: false, href: undefined as string | undefined },
  { icon: Calendar,   value: 2023,  suffix: "",  label: "Year Founded",       description: "Government licensed",      color: "text-blue-400",    iconBg: "bg-blue-500/15",    noFormat: true,  href: undefined as string | undefined },
  { icon: Award,      value: 100,   suffix: "%", label: "Licensed & Compliant",description: "License No. RAS838225",  color: "text-emerald-400", iconBg: "bg-emerald-500/15", noFormat: false, href: "/mughal-house-license.pdf" },
  { icon: TrendingUp, value: 15,    suffix: "+", label: "Industry Sectors",   description: "Mfg to construction",     color: "text-purple-400",  iconBg: "bg-purple-500/15",  noFormat: false, href: undefined as string | undefined },
];

function AnimatedCounter({
  target, suffix, duration = 1800, isVisible, noFormat = false,
}: { target: number; suffix: string; duration?: number; isVisible: boolean; noFormat?: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);
  return <span>{noFormat ? count : count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -9999, y: -9999 });
  }, []);

  return (
    <>
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Mughal House Manpower Consultancy"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Animated mesh-gradient background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">

        {/* Base — semi-transparent so canvas orbs show through and blend with hero blobs */}
        <div className="absolute inset-0" style={{ background: "rgba(7, 12, 20, 0.30)" }} />

        {/* Blob 1 — large royal-blue, top-right */}
        <div
          className="absolute animate-blob-1 pointer-events-none"
          style={{
            top: "-20%", right: "-10%",
            width: "70vw", height: "70vw",
            maxWidth: "820px", maxHeight: "820px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,79,156,0.55) 0%, rgba(30,79,156,0.18) 45%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Blob 2 — mid blue, centre-left */}
        <div
          className="absolute animate-blob-2 pointer-events-none"
          style={{
            top: "30%", left: "-5%",
            width: "55vw", height: "55vw",
            maxWidth: "620px", maxHeight: "620px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(58,100,184,0.28) 0%, rgba(58,100,184,0.08) 50%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Blob 3 — warm gold, bottom-left */}
        <div
          className="absolute animate-blob-3 pointer-events-none"
          style={{
            bottom: "-10%", left: "10%",
            width: "40vw", height: "40vw",
            maxWidth: "480px", maxHeight: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,67,0.16) 0%, rgba(201,168,67,0.04) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Layer 1 — large ambient blue glow following cursor */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: mousePos.x === -9999
              ? "transparent"
              : `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(30,79,156,0.13) 0%, rgba(30,79,156,0.04) 50%, transparent 100%)`,
            opacity: mousePos.x === -9999 ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Layer 2 — crisp dot spotlight: reveals bright dots near cursor */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(180,210,255,0.55) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage: mousePos.x === -9999
              ? "none"
              : `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            maskImage: mousePos.x === -9999
              ? "none"
              : `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            opacity: mousePos.x === -9999 ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Layer 3 — warm gold inner core at cursor tip */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: mousePos.x === -9999
              ? "transparent"
              : `radial-gradient(90px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201,168,67,0.18) 0%, rgba(201,168,67,0.06) 55%, transparent 100%)`,
            opacity: mousePos.x === -9999 ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Blue light streak */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "32%", height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(90,166,255,0.18) 25%, rgba(90,166,255,0.32) 50%, rgba(90,166,255,0.18) 75%, transparent 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "30%",
            background: "linear-gradient(to top, #0d1117 0%, rgba(13,17,23,0.4) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="container-xl relative z-10 pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-8">

        {/* Two-column: text left, photo right */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div>
            {/* Trust pill */}
            <div className="hero-in inline-flex items-center gap-2 mb-4 sm:mb-5" style={{ "--d": "80ms" } as React.CSSProperties}>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/6 border border-white/10 backdrop-blur-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse shrink-0"
                  aria-hidden="true"
                />
                <span className="text-royal-300 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                  Government Licensed · Insured · Trusted · Est.&nbsp;2023
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-[1.03] mb-3 sm:mb-4">
              <span
                className="hero-in block text-white tracking-tight"
                style={{ fontSize: "clamp(2rem, 4.8vw, 4.4rem)", "--d": "180ms" } as React.CSSProperties}
              >
                Mughal House
              </span>
              <span
                className="hero-in block tracking-tight text-gradient-royal-anim"
                style={{ fontSize: "clamp(2rem, 4.8vw, 4.4rem)", "--d": "260ms" } as React.CSSProperties}
              >
                Manpower
              </span>
              <span
                className="hero-in block tracking-tight text-white/85 italic font-medium"
                style={{ fontSize: "clamp(2rem, 4.8vw, 4.4rem)", "--d": "340ms" } as React.CSSProperties}
              >
                Consultancy.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-in text-dark-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-5" style={{ "--d": "440ms" } as React.CSSProperties}>
              India&apos;s trusted overseas recruitment agency placing{" "}
              <strong className="text-white font-semibold">skilled workers</strong>{" "}from West Bengal
              into Malaysia&apos;s manufacturing, plantation, construction &amp; hospitality sectors.
            </p>

            {/* Credential pills */}
            <div className="hero-in flex flex-nowrap gap-2 mb-3 overflow-x-auto scrollbar-none" role="list" aria-label="Credentials" style={{ "--d": "540ms" } as React.CSSProperties}>
              {/* License — opens PDF */}
              <a
                href="/mughal-house-license.pdf"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="View government license RAS838225"
                className="flex shrink-0 items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/8 border border-white/15 backdrop-blur-sm hover:border-gold-400/50 hover:bg-white/12 transition-all duration-300 cursor-pointer"
              >
                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-royal-400 shrink-0" aria-hidden="true" />
                <span className="text-white/80 text-xs sm:text-sm font-medium">Gov. Licensed — RAS838225</span>
              </a>
              {/* Address — opens Google Maps */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="View office location on Google Maps"
                className="flex shrink-0 items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/8 border border-white/15 backdrop-blur-sm hover:border-royal-400/40 hover:bg-white/12 transition-all duration-300 cursor-pointer"
              >
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-royal-400 shrink-0" aria-hidden="true" />
                <span className="text-white/80 text-xs sm:text-sm font-medium">West Bengal, India</span>
              </a>
            </div>

          </div>

          {/* ── Mobile: Group photo strip (below CTA, above fold bottom) ── */}
          <div className="lg:hidden mt-8 relative rounded-2xl overflow-hidden aspect-video">
            <img
              src="/images/team/team-group-photo.jpg"
              alt="Mughal House Manpower Consultancy management team"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Left-edge gradient */}
            <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(7,12,20,0.75) 0%, transparent 100%)" }} />
            {/* Right-edge gradient */}
            <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(7,12,20,0.75) 0%, transparent 100%)" }} />
            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(7,12,20,0.85) 0%, transparent 100%)" }} />
            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-1/4 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(7,12,20,0.55) 0%, transparent 100%)" }} />
            {/* Subtle blue tint overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(30,79,156,0.10) 0%, transparent 60%)" }} />
            {/* Label */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <span className="px-3 py-1 rounded-full bg-dark-900/70 border border-gold-500/25 backdrop-blur-sm text-gold-300 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Our Team · Pandua, West Bengal
              </span>
            </div>
          </div>

          {/* ── Right: Group photo panel ── */}
          <div className="hero-in hidden lg:flex items-center justify-center relative" style={{ "--d": "300ms" } as React.CSSProperties}>

            {/* Outer ambient glow */}
            <div
              className="absolute -inset-10 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(30,79,156,0.18) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Photo wrapper */}
            <div className="relative w-full max-w-lg">

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-royal-400/40 rounded-tl-xl z-10 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold-400/30 rounded-br-xl z-10 pointer-events-none" />

              {/* Photo */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)" }}
                role="button"
                aria-label="View team photo"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxOpen(true); }}
              >
                <img
                  src="/images/team/team-group-photo.jpg"
                  alt="Mughal House Manpower Consultancy management team"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />

                {/* Left-edge gradient */}
                <div
                  className="absolute inset-y-0 left-0 w-2/5 pointer-events-none"
                  style={{ background: "linear-gradient(to right, rgba(13,17,23,0.88) 0%, transparent 100%)" }}
                />

                {/* Bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(13,17,23,0.65) 0%, transparent 100%)" }}
                />

                {/* Subtle colour tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(30,79,156,0.08) 0%, transparent 60%)" }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Expand icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-900/60 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Expand className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-800/95 border border-gold-500/25 backdrop-blur-md shadow-xl whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse shrink-0" />
                <span className="text-gold-300 font-semibold text-xs tracking-wide">
                  10,000+ Workers Placed · Est. 2023
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Stats strip ── */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10" aria-label="Company statistics">
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {heroStats.map(({ icon: Icon, value, suffix, label, description, href, color, iconBg, noFormat }, idx) => {
              const borderClass = [
                "border-r border-b sm:border-b-0 border-white/10",
                "border-b sm:border-r sm:border-b-0 border-white/10",
                "border-r border-white/10",
                "",
              ][idx];
              const cellClass = "flex flex-col items-center text-center px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3.5 group hover:bg-white/[0.03] transition-colors duration-200 rounded-xl w-full";
              const inner = (
                <>
                  <dt className="sr-only">{label}</dt>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${iconBg} flex items-center justify-center mb-2 sm:mb-2.5 transition-transform duration-300 group-hover:scale-110 shrink-0`}
                    aria-hidden="true"
                  >
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${color}`} />
                  </div>
                  <dd className={`font-display font-bold text-2xl sm:text-3xl lg:text-4xl ${color} leading-none mb-1`} aria-live="polite">
                    <AnimatedCounter target={value} suffix={suffix} isVisible={statsVisible} noFormat={noFormat} />
                  </dd>
                  <p className="text-white/75 font-semibold text-xs sm:text-sm leading-snug mb-0.5 mt-0.5">{label}</p>
                  <p className="text-white/40 text-[11px] sm:text-xs leading-snug">{description}</p>
                </>
              );
              return (
                <div key={label} className={borderClass}>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cellClass}>{inner}</a>
                    : <div className={cellClass}>{inner}</div>
                  }
                </div>
              );
            })}
          </dl>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <div className="w-px h-8 sm:h-10 bg-linear-to-b from-transparent via-gold-500/50 to-transparent" />
        <span className="text-dark-500 text-[9px] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>

    {lightboxOpen && (
      <ImageLightbox
        src="/images/team/team-group-photo.jpg"
        alt="Mughal House Manpower Consultancy management team"
        caption="Our Team"
        subcaption="Mughal House Manpower Consultancy · Pandua, West Bengal, India"
        onClose={() => setLightboxOpen(false)}
      />
    )}
  </>
  );
}
