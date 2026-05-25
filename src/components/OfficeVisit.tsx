"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, Calendar, X, Navigation } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India";
const ADDRESS_LINES = [
  "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,",
  "Po & PS Pandua, Dist – Hooghly,",
  "Pin – 712149, West Bengal, India",
];

function MapModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Office location">
      <div className="absolute inset-0 bg-ink/70" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-md bg-paper border border-rule">
        <div className="flex items-center justify-between px-6 py-4 border-b border-rule">
          <p className="font-display text-ink text-lg">Registered office</p>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-ink-soft" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">
          <span className="eyebrow">Address</span>
          <address className="not-italic mt-3 text-ink text-[15px] leading-relaxed">
            {ADDRESS_LINES.map((line) => (<span key={line} className="block">{line}</span>))}
          </address>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary justify-center w-full mt-6"
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

const officeHours = [
  { days: "Monday – Friday", hours: "9:00 – 18:00" },
  { days: "Saturday",        hours: "9:00 – 14:00 (by appointment)" },
  { days: "Sunday",          hours: "Closed" },
];

const contactInfo: Array<{ icon: React.ElementType; label: string; value: string; href?: string }> = [
  {
    icon: MapPin,
    label: "Registered office, India",
    value: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road, Po & PS Pandua,\nDist – Hooghly, Pin – 712149, West Bengal, India",
  },
  { icon: Phone, label: "India mobile (WhatsApp / Telegram)", value: "+91 7811-965514", href: "tel:+917811965514" },
  { icon: Phone, label: "Malaysia contact (Chairman)",        value: "+60 12-360 2080", href: "tel:+60123602080"  },
  { icon: Mail,  label: "Email",                              value: "mhmc023@gmail.com", href: "mailto:mhmc023@gmail.com" },
];

export default function OfficeVisit({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="section-padding"
        style={{ background: "#f3efe6" }}
        aria-labelledby="contact-heading"
      >
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

            <div className="lg:col-span-7">
              <span className="eyebrow">Visit the office</span>
              <h2
                id="contact-heading"
                className="mt-4 font-display font-medium text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
              >
                Walk in to where careers begin.
              </h2>
              <p className="mt-5 text-ink-soft text-base leading-[1.65] max-w-xl">
                Our team is ready to walk you through the placement process. Bring your
                documents, ask your questions, and we will take it from there.
              </p>

              <dl className="mt-10 border-t border-rule">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-5 py-5 border-b border-rule">
                    <div className="w-7 shrink-0 mt-1 text-ink-soft" aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <dt className="text-ink-muted text-[11px] tracking-[0.18em] uppercase font-semibold">{label}</dt>
                      <dd className="mt-1.5">
                        {href ? (
                          <a href={href} className="text-ink text-[15px] hover:underline underline-offset-4 decoration-1">
                            {value}
                          </a>
                        ) : (
                          <p className="text-ink text-[15px] leading-[1.6] whitespace-pre-line">{value}</p>
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <button onClick={() => setMapOpen(true)} className="btn btn-primary">
                  Get directions
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button onClick={onOpenBooking} className="btn-link">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book appointment
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="m-0">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                    <Image
                      src="/images/team/cofounder-mughal-sign.jpg"
                      alt="Mughal House Manpower Consultancy office interior"
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 90vw, 460px"
                    />
                  </div>
                </button>
                <figcaption className="mt-3 text-ink-muted text-xs">
                  <span className="font-semibold text-ink">Office hours.</span>{" "}
                  {officeHours.map(({ days, hours }) => `${days} ${hours}`).join("  ·  ")}
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/images/team/cofounder-mughal-sign.jpg"
          alt="Mughal House Manpower Consultancy office"
          caption="Our Office"
          subcaption="Mughal House Manpower Consultancy · Ahmed Plaza, West Bengal, India"
          onClose={() => setLightboxOpen(false)}
        />
      )}
      {mapOpen && <MapModal onClose={() => setMapOpen(false)} />}
    </>
  );
}
