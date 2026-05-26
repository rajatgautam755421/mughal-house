import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

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

const contactInfo: Array<{
  icon: typeof MapPin;
  label: string;
  href: string;
  meta?: string;
}> = [
  {
    icon: MapPin,
    label: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,\nPo & PS Pandua, Dist – Hooghly,\nPin – 712149, West Bengal, India",
    href: "https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India",
  },
  { icon: Phone, label: "+91 7811-965514", meta: "India · Office",        href: "tel:+917811965514" },
  { icon: Phone, label: "+60 14-835 0321", meta: "Malaysia · Chairman",   href: "tel:+60148350321"  },
  { icon: Phone, label: "+60 12-360 2080", meta: "Malaysia · Director",   href: "tel:+60123602080"  },
  { icon: Mail,  label: "mhmc023@gmail.com",                 href: "mailto:mhmc023@gmail.com" },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/mughalhouse" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/mughalhouse" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #0a1e4a 0%, #0a142a 65%, #060d1d 100%)",
        color: "#cfd5e0",
      }}
      role="contentinfo"
      aria-label="Site footer"
    >
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
            <p className="text-white/45 text-[12px] tracking-wide">
              Also known as <span className="text-white/70 font-medium">MH Recruiter</span>
              {" "}&middot; MH Manpower.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="/mughal-house-license.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View India license RAS838225 (opens in new tab)"
                className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
              >
                India license &middot; RAS838225
              </a>
              <a
                href="/agensi-malaysia-license.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Malaysia Licence C (Agensi Pekerjaan), opens in new tab"
                className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
              >
                Licence C &middot; Malaysia
              </a>
              <a
                href="/Corporate-SAQ-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View RBA SAQ 2026 status PDF (opens in new tab)"
                className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
              >
                RBA/SAQ Status 2026
              </a>
            </div>

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
                {contactInfo.map(({ icon: Icon, label, href, meta }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-2.5 text-white/70 text-[13px] leading-[1.55] hover:text-paper transition-colors duration-150"
                  >
                    <Icon className="w-4 h-4 shrink-0 mt-0.5 text-white/50" aria-hidden="true" />
                    <span className="whitespace-pre-line">
                      {label}
                      {meta && (
                        <span className="ml-2 text-[10.5px] tracking-[0.18em] uppercase text-gold-300/80 font-semibold">
                          {meta}
                        </span>
                      )}
                    </span>
                  </a>
                ))}
              </address>
            </div>

            <div>
              <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">Hours</p>
              <ul className="flex flex-col gap-2 text-white/70 text-[13px] leading-snug" role="list">
                <li className="flex items-center justify-between gap-3">
                  <span>Mon&ndash;Fri</span>
                  <span className="text-paper">9:00 &ndash; 18:00</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Saturday</span>
                  <span className="text-paper">9:00 &ndash; 14:00</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Sunday</span>
                  <span className="text-white/45">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-white/45 text-[11px] leading-relaxed">
                Saturday by appointment only.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-[12px]">
          <p>© {currentYear} Mughal House Manpower Consultancy. All rights reserved.</p>
          <p className="text-white/55">
            Govt. of India license{" "}
            <span className="text-gold-300 font-medium">RAS838225</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
