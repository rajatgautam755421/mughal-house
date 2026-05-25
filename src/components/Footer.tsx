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
    { label: "About Us", href: "#about"   },
    { label: "Our Team", href: "#team"    },
    { label: "Careers",  href: "#contact" },
  ],
  services: [
    { label: "Medical examination",      href: "#services" },
    { label: "Manpower clearance",       href: "#services" },
    { label: "E-visa processing",        href: "#services" },
    { label: "Air ticketing",            href: "#services" },
    { label: "Passport & documentation", href: "#services" },
    { label: "Pre-departure orientation", href: "#services" },
  ],
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,\nPo & PS Pandua, Dist – Hooghly,\nPin – 712149, West Bengal, India",
    href: "https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India",
  },
  { icon: Phone, label: "+91 7811-965514  ·  +60 12-360 2080", href: "tel:+917811965514" },
  { icon: Mail,  label: "mhmc023@gmail.com",                    href: "mailto:mhmc023@gmail.com" },
];

const socialLinks = [
  { icon: FacebookIcon,  label: "Facebook",  href: "#" },
  { icon: LinkedInIcon,  label: "LinkedIn",  href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];

const newsBriefs = [
  { title: "Malaysia increases foreign worker quota for 2025",            date: "May 2025"   },
  { title: "New pre-departure requirements for construction workers",     date: "April 2025" },
  { title: "Mughal House achieves 10,000+ placement milestone",           date: "March 2025" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0a142a", color: "#cfd5e0" }} role="contentinfo" aria-label="Site footer">
      <div className="container-xl py-14 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">

          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit" aria-label="Mughal House Manpower Consultancy">
              <img src="/logo.svg" alt="" aria-hidden="true" className="w-10 h-10" />
              <div>
                <p className="font-display font-semibold text-paper text-[15px] leading-none tracking-tight">
                  Mughal House
                </p>
                <p className="text-white/55 text-[10px] tracking-[0.18em] uppercase mt-1.5">
                  Manpower Consultancy
                </p>
              </div>
            </Link>

            <p className="text-white/65 text-[14px] leading-[1.65] max-w-md">
              Government-licensed overseas recruitment consultancy serving Malaysian employers
              since 2023. Ethical, efficient and trusted.
            </p>

            <a
              href="/mughal-house-license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
            >
              License RAS838225
            </a>

            <div className="flex items-center gap-2 mt-2" role="list" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  aria-label={`Follow us on ${label}`}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/65 hover:text-paper hover:border-paper transition-colors duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <nav className="md:col-span-2" aria-label="Company">
            <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">Company</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/70 text-[14px] hover:text-paper transition-colors duration-150">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="md:col-span-3" aria-label="Services">
            <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">Services</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/70 text-[14px] hover:text-paper transition-colors duration-150">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + News */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <div>
              <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">Contact</p>
              <address className="not-italic flex flex-col gap-3.5">
                {contactInfo.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-2.5 text-white/70 text-[13px] leading-[1.55] hover:text-paper transition-colors duration-150"
                  >
                    <Icon className="w-4 h-4 shrink-0 mt-0.5 text-white/50" aria-hidden="true" />
                    <span className="whitespace-pre-line">{label}</span>
                  </a>
                ))}
              </address>
            </div>

            <div>
              <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">News brief</p>
              <ul className="flex flex-col gap-3" role="list">
                {newsBriefs.map(({ title, date }) => (
                  <li key={title}>
                    <a href="#" className="flex flex-col gap-1 group">
                      <span className="text-white/75 text-[13px] leading-snug group-hover:text-paper transition-colors duration-150">
                        {title}
                      </span>
                      <span className="text-white/40 text-[11px] inline-flex items-center gap-1.5">
                        {date}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-[12px]">
          <p>© {currentYear} Mughal House Manpower Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-paper transition-colors duration-150">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-paper transition-colors duration-150">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-paper transition-colors duration-150">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
