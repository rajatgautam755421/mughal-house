import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About",   href: "#about"   },
    { label: "Team",    href: "#team"    },
    { label: "Careers", href: "#contact" },
  ],
  services: [
    { label: "Medical examination",      href: "#services" },
    { label: "Manpower clearance",       href: "#services" },
    { label: "E-visa processing",        href: "#services" },
    { label: "Air ticketing",            href: "#services" },
    { label: "Passport documentation",   href: "#services" },
    { label: "Pre-departure orientation", href: "#services" },
  ],
};

const contact = [
  {
    icon: MapPin,
    label: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,\nPo & PS Pandua, Dist – Hooghly,\nPin – 712149, West Bengal, India",
    href: "https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India",
  },
  { icon: Phone, label: "+91 7811-965514  ·  +60 12-360 2080", href: "tel:+917811965514" },
  { icon: Mail,  label: "mhmc023@gmail.com",                    href: "mailto:mhmc023@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0a142a", color: "#cfd5e0" }} role="contentinfo" aria-label="Site footer">
      <div className="container-xl py-14 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-5">
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
              Government-licensed overseas recruitment consultancy. Placing skilled workers
              from West Bengal into Malaysian industry since 2023.
            </p>

            <a
              href="/mughal-house-license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
            >
              License RAS838225
            </a>
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
          <nav className="md:col-span-2" aria-label="Services">
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

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">Contact</p>
            <address className="not-italic flex flex-col gap-3.5">
              {contact.map(({ icon: Icon, label, href }) => (
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
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-[12px]">
          <p>© {currentYear} Mughal House Manpower Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-paper transition-colors duration-150">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-paper transition-colors duration-150">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-paper transition-colors duration-150">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
