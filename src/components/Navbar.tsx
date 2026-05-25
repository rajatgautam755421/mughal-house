"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "Team",     href: "#team" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Track which section is currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.intersectionRatio));
        let topId = "";
        let topRatio = 0;
        ratios.forEach((r, id) => {
          if (r > topRatio) { topRatio = r; topId = id; }
        });
        if (topId) setActiveSection(`#${topId}`);
      },
      { threshold: [0, 0.15, 0.35, 0.55, 0.75], rootMargin: "-80px 0px -45% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          // Solid paper at the top too — the header should read as a
          // distinct surface from the hero, not blur into it.
          background: isScrolled
            ? "rgba(255, 255, 255, 0.96)"
            : "#faf8f3",
          backdropFilter: isScrolled ? "saturate(180%) blur(14px)" : "none",
          WebkitBackdropFilter: isScrolled ? "saturate(180%) blur(14px)" : "none",
          borderBottom: isScrolled ? "1px solid #d9d3c6" : "1px solid #e6e1d6",
          boxShadow: isScrolled
            ? "0 12px 28px -20px rgba(13, 28, 74, 0.35), 0 2px 6px -2px rgba(13, 28, 74, 0.12)"
            : "0 1px 0 rgba(13, 28, 74, 0.04), 0 6px 16px -14px rgba(13, 28, 74, 0.25)",
          transition:
            "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        {/* Brand ribbon — a royal→gold stripe that anchors the
            header against the page below, in both states. */}
        <div
          aria-hidden="true"
          style={{
            height: "3px",
            background:
              "linear-gradient(90deg, #13245e 0%, #1e4f9c 60%, #b08830 100%)",
          }}
        />
        <nav
          className="container-xl flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Mughal House Manpower Consultancy — home"
          >
            <img src="/logo.svg" alt="" aria-hidden="true" className="w-9 h-9" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-semibold text-ink text-[15px] tracking-tight">
                Mughal House
              </span>
              <span className="text-ink-muted text-[10px] tracking-[0.18em] uppercase mt-1">
                Manpower Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative py-2 text-[13px] font-medium transition-colors duration-150 ${
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-gold-500 origin-left transition-transform duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-7">
            <button onClick={onOpenBooking} className="btn-link">
              Book appointment
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn btn-primary"
            >
              Free consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`fixed inset-0 z-90 lg:hidden transition-opacity duration-200 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[min(320px,88vw)] bg-paper border-l border-rule p-6 flex flex-col transition-transform duration-250 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10 pt-2">
            <span className="eyebrow">Navigation</span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-ink-soft"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 flex-1" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`w-full text-left py-3 border-b border-rule-soft font-display text-xl flex items-center justify-between ${
                      isActive ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-gold-500" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 pt-6">
            <button
              onClick={() => { setIsMobileOpen(false); onOpenBooking(); }}
              className="btn btn-ghost justify-center"
            >
              Book appointment
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn btn-primary justify-center"
            >
              Free consultation
            </button>
            <div className="pt-4 flex flex-col gap-2 text-sm">
              <a
                href="tel:+917811965514"
                className="flex items-center justify-between text-ink hover:text-brand transition-colors duration-150"
              >
                <span className="text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                  India
                </span>
                <span className="font-medium">+91 7811-965514</span>
              </a>
              <a
                href="tel:+60123602080"
                className="flex items-center justify-between text-ink hover:text-brand transition-colors duration-150"
              >
                <span className="text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                  Malaysia
                </span>
                <span className="font-medium">+60 12-360 2080</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
