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

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
          background: isScrolled ? "#faf8f3" : "rgba(250, 248, 243, 0.85)",
          backdropFilter: isScrolled ? "none" : "saturate(180%) blur(10px)",
          WebkitBackdropFilter: isScrolled ? "none" : "saturate(180%) blur(10px)",
          borderBottom: isScrolled ? "1px solid #e6e1d6" : "1px solid transparent",
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-ink-soft hover:text-ink text-[13px] font-medium transition-colors duration-150 relative py-2"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
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
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 border-b border-rule-soft text-ink font-display text-xl"
                >
                  {link.label}
                </button>
              </li>
            ))}
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
            <a
              href="tel:+60123602080"
              className="text-center text-ink-muted text-sm pt-2"
            >
              +60 12-360 2080
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
