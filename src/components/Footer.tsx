import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const companyLinks = [
  { key: "about",   href: "#about"   },
  { key: "team",    href: "#team"    },
  { key: "careers", href: "#contact" },
] as const;

const serviceLinks = [
  { key: "medical",     href: "#services" },
  { key: "clearance",   href: "#services" },
  { key: "visa",        href: "#services" },
  { key: "ticketing",   href: "#services" },
  { key: "passport",    href: "#services" },
  { key: "orientation", href: "#services" },
] as const;

const phoneContacts = [
  { value: "+91 7811-965514", metaKey: "indiaOffice", href: "tel:+917811965514" },
  { value: "+60 14-835 0321", metaKey: "myDirector",  href: "tel:+60148350321"  },
  { value: "+60 12-360 2080", metaKey: "myChairman",  href: "tel:+60123602080"  },
] as const;

const socialLinks = [
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/mughalhouse" },
];

export default function Footer() {
  const t = useTranslations("footer");
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
              {t("tagline")}
            </p>
            <p
              className="text-white/45 text-[12px] tracking-wide"
              dangerouslySetInnerHTML={{ __html: t.raw("alias") as string }}
            />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="/registration-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("registrationCertAria")}
                className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
              >
                {t("registrationCert")}
              </a>
              <a
                href="/agensi-malaysia-license.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("licenceCAria")}
                className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
              >
                {t("licenceC")}
              </a>
              <a
                href="/Corporate-SAQ-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("saqAria")}
                className="inline-flex items-center gap-2 text-gold-300 text-[12px] tracking-wide font-medium hover:text-paper transition-colors duration-150 border-b border-gold-300/40 hover:border-paper pb-1 w-fit"
              >
                {t("saqStatus")}
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
                  aria-label={t("socialAria", { label })}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/65 hover:text-paper hover:border-paper transition-colors duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Company">
            <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">{t("sections.company")}</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {companyLinks.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="text-white/70 text-[14px] hover:text-paper transition-colors duration-150">
                    {t(`company.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Services">
            <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">{t("sections.services")}</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {serviceLinks.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="text-white/70 text-[14px] hover:text-paper transition-colors duration-150">
                    {t(`services.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 flex flex-col gap-8">
            <div>
              <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">{t("sections.contact")}</p>
              <address className="not-italic flex flex-col gap-3.5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=23.080721,88.275368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2.5 text-white/70 text-[13px] leading-[1.55] hover:text-paper transition-colors duration-150"
                >
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/50" aria-hidden="true" />
                  <span className="whitespace-pre-line">{t("addressLabel")}</span>
                </a>
                {phoneContacts.map(({ value, metaKey, href }) => (
                  <a
                    key={value}
                    href={href}
                    className="flex gap-2.5 text-white/70 text-[13px] leading-[1.55] hover:text-paper transition-colors duration-150"
                  >
                    <Phone className="w-4 h-4 shrink-0 mt-0.5 text-white/50" aria-hidden="true" />
                    <span>
                      {value}
                      <span className="ml-2 text-[10.5px] tracking-[0.18em] uppercase text-gold-300/80 font-semibold">
                        {t(`contactMeta.${metaKey}`)}
                      </span>
                    </span>
                  </a>
                ))}
                <a
                  href="mailto:mhmc023@gmail.com"
                  className="flex gap-2.5 text-white/70 text-[13px] leading-[1.55] hover:text-paper transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 shrink-0 mt-0.5 text-white/50" aria-hidden="true" />
                  <span>mhmc023@gmail.com</span>
                </a>
              </address>
            </div>

            <div>
              <p className="text-gold-300 text-[11px] tracking-[0.18em] uppercase font-semibold mb-4">{t("sections.hours")}</p>
              <ul className="flex flex-col gap-2 text-white/70 text-[13px] leading-snug" role="list">
                <li className="flex items-center justify-between gap-3">
                  <span>{t("hours.monFri")}</span>
                  <span className="text-paper">{t("hours.open9to18")}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>{t("hours.saturday")}</span>
                  <span className="text-paper">{t("hours.open9to14")}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>{t("hours.sunday")}</span>
                  <span className="text-white/45">{t("hours.closed")}</span>
                </li>
              </ul>
              <p className="mt-4 text-white/45 text-[11px] leading-relaxed">
                {t("hours.satNote")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-[12px]">
          <p>{t("copyright", { year: currentYear })}</p>
          <p className="text-white/55">
            {t("indiaLicense")}{" "}
            <span className="text-gold-300 font-medium">RAS838225</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
