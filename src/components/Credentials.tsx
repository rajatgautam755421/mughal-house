"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Credential {
  title: string;
  subtitle: string;
  pdf: string;
  thumb: string;
  alt: string;
}

const credentials: Credential[] = [
  {
    title: "Licence C",
    subtitle: "Agensi Pekerjaan · Malaysia",
    pdf: "/agensi-malaysia-license.pdf",
    thumb: "/images/credentials/agensi-malaysia-license.jpg",
    alt: "First page of the Malaysia Licence C (Agensi Pekerjaan)",
  },
  {
    title: "RBA / SAQ Status 2026",
    subtitle: "Responsible Business Alliance",
    pdf: "/Corporate-SAQ-2026.pdf",
    thumb: "/images/credentials/Corporate-SAQ-2026.jpg",
    alt: "First page of the Mughal House RBA SAQ 2026 status report",
  },
  {
    title: "Registration Certificate",
    subtitle: "Govt. of India",
    pdf: "/registration-certificate.pdf",
    thumb: "/images/credentials/registration-certificate.jpg",
    alt: "First page of the Mughal House Registration Certificate",
  },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="section-padding"
      style={{ background: "#faf8f3" }}
      aria-labelledby="credentials-heading"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-10 lg:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Credentials</span>
            <h2
              id="credentials-heading"
              className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
            >
              Licenced on both sides of the corridor.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-soft text-base leading-[1.65]">
              Mughal House is registered with the Government of India and
              holds a Licence C with Malaysia&rsquo;s Agensi Pekerjaan
              framework. Tap any document to open the full PDF.
            </p>
          </div>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          role="list"
        >
          {credentials.map((c) => (
            <li key={c.title}>
              <a
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${c.title} (PDF, new tab)`}
                className="group block w-full bg-paper border border-rule hover:border-ink transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {/* Thumbnail (page 1 of the PDF) */}
                <div
                  className="relative w-full overflow-hidden bg-paper-soft"
                  style={{ aspectRatio: "1 / 1.414" }}
                >
                  <Image
                    src={c.thumb}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {/* Subtle paper shadow gradient at the bottom */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(15,30,61,0.18) 100%)",
                    }}
                  />
                </div>

                {/* Caption */}
                <div className="px-5 py-4 border-t border-rule flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-ink-muted text-[10.5px] tracking-[0.2em] uppercase font-semibold">
                      {c.subtitle}
                    </p>
                    <p className="mt-1 font-display font-semibold text-ink text-[15px] leading-snug tracking-tight">
                      {c.title}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-ink-faint group-hover:text-brand transition-colors duration-150 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
