import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}


const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#contact" },
  ],
  services: [
    { label: "Medical Examination", href: "#services" },
    { label: "Manpower Clearance", href: "#services" },
    { label: "E-Visa Processing", href: "#services" },
    { label: "Air Ticketing", href: "#services" },
    { label: "Passport & Documentation", href: "#services" },
    { label: "Pre-Departure Orientation", href: "#services" },
  ],
  contact: [
    {
      icon: MapPin,
      label: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,\nPo & PS Pandua, Dist – Hooghly,\nPin – 712149, West Bengal, India",
      href: "https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India",
    },
    {
      icon: Phone,
      label: "+91 7811-965514  ·  +60 12-360 2080",
      href: "tel:+917811965514",
    },
    {
      icon: Mail,
      label: "mhmc023@gmail.com",
      href: "mailto:mhmc023@gmail.com",
    },
  ],
};

const socialLinks = [
  { icon: FacebookIcon,  label: "Facebook",  href: "#", primary: false },
  { icon: LinkedInIcon,  label: "LinkedIn",  href: "#", primary: false },
  { icon: InstagramIcon, label: "Instagram", href: "#", primary: false },
];

const newsBriefs = [
  {
    title: "Malaysia increases foreign worker quota for 2025",
    date: "May 2025",
  },
  {
    title: "New pre-departure requirements for construction workers",
    date: "April 2025",
  },
  {
    title: "Mughal House achieves 10,000+ placement milestone",
    date: "March 2025",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6" style={{ background: "rgba(4, 7, 15, 0.96)" }} role="contentinfo" aria-label="Site footer">
      {/* Main footer */}
      <div className="container-xl py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 w-fit"
              aria-label="Mughal House Manpower Consultancy"
            >
              <div className="w-10 h-10 shrink-0">
                <img src="/logo.svg" alt="" aria-hidden="true" className="w-10 h-10 drop-shadow-md" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm leading-tight uppercase tracking-wide">
                  Mughal House
                </p>
                <p className="text-gold-400 text-[10px] tracking-[0.15em] uppercase">
                  Manpower Consultancy
                </p>
              </div>
            </Link>

            <p className="text-dark-200 text-sm leading-relaxed">
              Government-licensed overseas recruitment consultancy serving Malaysian employers since
              2023. Ethical, efficient, and trusted.
            </p>

            {/* License badge */}
            <a
              href="/mughal-house-license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gold-500/6 border border-gold-500/12 w-fit hover:bg-gold-500/10 hover:border-gold-500/25 transition-all duration-200"
              aria-label="View government registration certificate"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              <span className="text-dark-200 text-xs">
                License:{" "}
                <strong className="text-gold-400 font-medium">RAS838225</strong>
              </span>
            </a>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-2" role="list" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label, href, primary }) => (
                <a
                  key={label}
                  href={href}
                  className={
                    primary
                      ? "flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all duration-200 text-xs font-semibold " +
                        (label === "WhatsApp"
                          ? "bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/50"
                          : "bg-[#2AABEE]/10 border-[#2AABEE]/30 text-[#2AABEE] hover:bg-[#2AABEE]/20 hover:border-[#2AABEE]/50")
                      : "w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-dark-400 hover:text-royal-400 hover:border-royal-500/30 hover:bg-royal-500/8 transition-all duration-200"
                  }
                  aria-label={primary ? `Chat on ${label}` : `Follow us on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {primary && <span>{label}</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <nav aria-label="Company links">
            <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-dark-200 text-sm hover:text-royal-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services links */}
          <nav aria-label="Services links">
            <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-dark-200 text-sm hover:text-royal-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + News */}
          <div className="flex flex-col gap-7">
            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Contact</h3>
              <address className="not-italic flex flex-col gap-3">
                {footerLinks.contact.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex gap-2.5 text-dark-200 text-sm hover:text-royal-400 transition-colors duration-200 group"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Icon
                      className="w-4 h-4 text-dark-300 group-hover:text-royal-400 shrink-0 mt-0.5 transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <span className="whitespace-pre-line">{label}</span>
                  </a>
                ))}
              </address>
            </div>

            {/* News brief */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">News Brief</h3>
              <ul className="flex flex-col gap-3" role="list">
                {newsBriefs.map(({ title, date }) => (
                  <li key={title}>
                    <a
                      href="#"
                      className="flex flex-col gap-0.5 group"
                    >
                      <span className="text-dark-200 text-xs leading-snug group-hover:text-royal-400 transition-colors duration-200 line-clamp-2">
                        {title}
                      </span>
                      <span className="text-dark-300 text-xs">{date}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-300 text-xs">
            © {currentYear} Mughal House Manpower Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-dark-300 text-xs hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-dark-700" aria-hidden="true">·</span>
            <a href="#" className="text-dark-300 text-xs hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <span className="text-dark-700" aria-hidden="true">·</span>
            <a href="#" className="text-dark-300 text-xs hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
