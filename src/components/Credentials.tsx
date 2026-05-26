"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";

interface Credential {
  title: string;
  subtitle: string;
  pdf: string;
  thumb: string;
  alt: string;
}

const credentials: Credential[] = [
  {
    title: "India · License RAS838225",
    subtitle: "Govt. of India",
    pdf: "/mughal-house-license.pdf",
    thumb: "/images/credentials/mughal-house-license.jpg",
    alt: "First page of the Mughal House India recruitment license (RAS838225)",
  },
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
];

/* ── Lightbox for a single credential ── */
function CredentialPreview({
  credential,
  onClose,
}: {
  credential: Credential;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={credential.title}
    >
      <div
        className="absolute inset-0 bg-ink/55"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">
        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-rule">
          <div className="min-w-0">
            <span className="eyebrow">{credential.subtitle}</span>
            <h2 className="mt-3 font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-tight">
              {credential.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-150"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-6 sm:px-7 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={credential.thumb}
            alt={credential.alt}
            className="w-full h-auto block border border-rule"
            style={{ maxHeight: "70vh", objectFit: "contain" }}
          />
          <a
            href={credential.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary justify-center w-full mt-5"
          >
            Open full document (PDF)
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Credentials() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <>
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
                framework. Tap any document to preview the first page or
                download the full PDF.
              </p>
            </div>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            role="list"
          >
            {credentials.map((c, i) => (
              <li key={c.title}>
                <button
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className="group block w-full text-left bg-paper border border-rule hover:border-ink transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  aria-label={`Preview ${c.title}`}
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
                    <span className="text-ink-faint group-hover:text-brand transition-colors duration-150 shrink-0">
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {activeIdx !== null && (
        <CredentialPreview
          credential={credentials[activeIdx]}
          onClose={() => setActiveIdx(null)}
        />
      )}
    </>
  );
}
