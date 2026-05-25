"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, CalendarDays } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });
        let maxRatio = 0;
        let current = "";
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) { maxRatio = ratio; current = id; }
        });
        if (current) setActiveSection(`#${current}`);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: "-60px 0px -30% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    setActiveSection(href);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled
            ? "rgba(6, 10, 20, 0.92)"
            : "linear-gradient(to bottom, rgba(7,12,20,0.55) 0%, transparent 100%)",
          backdropFilter: isScrolled ? "blur(24px)" : "blur(4px)",
          WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(4px)",
          boxShadow: isScrolled ? "0 8px 40px rgba(0,0,0,0.40)" : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Track line — full width subtle base */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0, left: 0,
            height: "2px",
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            transformOrigin: "left center",
            transform: isScrolled ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: "none",
          }}
        />
        {/* Progress fill — moves with scroll */}
        <div
          aria-hidden="true"
          aria-valuenow={Math.round(progress * 100)}
          role="progressbar"
          aria-label="Page scroll progress"
          style={{
            position: "absolute",
            bottom: 0, left: 0,
            height: "2px",
            width: `${progress * 100}%`,
            background: "linear-gradient(90deg, #1e4f9c 0%, #3a64b8 40%, #c9a843 80%, #e8c054 100%)",
            boxShadow: progress > 0 ? "0 0 8px rgba(201,168,67,0.6), 0 0 2px rgba(90,140,255,0.5)" : "none",
            transition: "width 0.1s linear",
            pointerEvents: "none",
          }}
        />
        <nav
          className={`container-xl flex items-center justify-between transition-[height] duration-300 ease-out ${
            isScrolled ? "h-14 lg:h-16" : "h-18 lg:h-20"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Mughal House Manpower Consultancy - Home"
          >
            <div className="relative w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img src="/logo.svg" alt="" aria-hidden="true" className="w-9 h-9 drop-shadow-lg" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-white text-[13px] leading-tight tracking-wide uppercase">
                Mughal House
              </span>
              <span className="text-gold-400 text-[9px] tracking-[0.18em] uppercase font-medium">
                Manpower Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-200 group ${
                    activeSection === link.href
                      ? "text-royal-300"
                      : "text-white/80 hover:text-white"
                  }`}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute inset-0 rounded-lg bg-white/8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  {activeSection === link.href && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-royal-300" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              title="Book an appointment"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gold-500/35 text-gold-300 text-xs font-semibold hover:border-gold-400/65 hover:bg-gold-500/8 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              <CalendarDays className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              Book
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-royal-500 text-white text-xs font-semibold tracking-wide hover:bg-royal-400 active:scale-95 transition-all duration-200 shadow-lg shadow-royal-500/25 whitespace-nowrap"
            >
              Free Consultation
              <ChevronDown className="w-3 h-3 -rotate-90 shrink-0" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-dark-200 hover:text-white hover:bg-white/5 transition-all duration-200"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <Menu
              className={`absolute w-5 h-5 transition-all duration-200 ${isMobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
              aria-hidden="true"
            />
            <X
              className={`absolute w-5 h-5 transition-all duration-200 ${isMobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
              aria-hidden="true"
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[min(288px,85vw)] bg-dark-800 border-l border-gold-500/10 p-5 sm:p-6 flex flex-col transition-transform duration-300 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8 pt-4">
            <span className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 flex-1" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-white/85 hover:text-white hover:bg-white/8 font-semibold transition-all duration-200 flex items-center justify-between group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                  <ChevronDown
                    className="w-4 h-4 text-dark-400 group-hover:text-royal-400 -rotate-90 transition-colors duration-200"
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-white/5 flex flex-col gap-2.5">
            <button
              onClick={() => { setIsMobileOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded-full border border-gold-500/40 text-gold-300 font-semibold text-sm hover:bg-gold-500/8 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <CalendarDays className="w-4 h-4" aria-hidden="true" />
              Book Appointment
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full py-3 rounded-full bg-royal-500 text-white font-semibold text-sm tracking-wide hover:bg-royal-400 active:scale-95 transition-all duration-200 shadow-lg shadow-royal-500/25"
            >
              Free Consultation
            </button>
            <a
              href="tel:+60123602080"
              className="block text-center text-sm text-dark-400 hover:text-royal-400 transition-colors duration-200"
            >
              +60 12-360 2080
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
