"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin, Clock, Phone, Mail, ArrowRight, Calendar, X,
  Navigation, MessageCircle, Send,
} from "lucide-react";
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
    <div
      className="fixed inset-0 z-200 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink/55"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-rule">
          <div>
            <span className="eyebrow">Mughal House Manpower Consultancy</span>
            <h2
              id="map-modal-title"
              className="mt-3 font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-tight"
            >
              Registered office
            </h2>
            <p className="text-ink-muted text-[13px] mt-1.5">
              Pandua, Hooghly &middot; West Bengal, India
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-150"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6 flex flex-col gap-5">
          <div>
            <p className="text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold mb-2">
              Address
            </p>
            <address className="not-italic text-ink text-[15px] leading-[1.6]">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary justify-center w-full"
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Open in Google Maps
          </a>

          <p className="text-center text-ink-faint text-[11px]">
            Mon&ndash;Fri 9 AM&ndash;6 PM &middot; Sat by appointment.
          </p>
        </div>
      </div>
    </div>
  );
}

const officeHours = [
  { days: "Monday – Friday", hours: "9:00 – 18:00",                  type: "Open" },
  { days: "Saturday",        hours: "9:00 – 14:00",                  type: "By appointment" },
  { days: "Sunday",          hours: "Closed",                        type: "Closed" },
];

const contactInfo: Array<{ icon: React.ElementType; label: string; value: string; href?: string }> = [
  {
    icon: MapPin,
    label: "Registered office, India",
    value: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road, Po & PS Pandua,\nDist – Hooghly, Pin – 712149, West Bengal, India",
  },
  { icon: Phone, label: "India · Pandua office (WhatsApp & Telegram)", value: "+91 7811-965514", href: "tel:+917811965514" },
  { icon: Phone, label: "Malaysia · Chairman direct",                   value: "+60 12-360 2080", href: "tel:+60123602080"  },
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

            {/* Content column */}
            <div className="lg:col-span-7">
              <span className="eyebrow">Visit the office</span>
              <h2
                id="contact-heading"
                className="mt-4 font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
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
                    <div className="w-7 shrink-0 mt-1 text-gold-500" aria-hidden="true">
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

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                <button onClick={() => setMapOpen(true)} className="btn btn-primary">
                  Get directions
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button onClick={onOpenBooking} className="btn btn-ghost">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book appointment
                </button>
              </div>

              {/* Messaging */}
              <div className="mt-10 pt-7 border-t border-rule">
                <p className="eyebrow">Message us directly</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/917811965514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-rule text-ink text-[13px] font-semibold hover:border-ink transition-colors duration-150"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/+917811965514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-rule text-ink text-[13px] font-semibold hover:border-ink transition-colors duration-150"
                    aria-label="Message on Telegram"
                  >
                    <Send className="w-4 h-4 text-[#2AABEE]" aria-hidden="true" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Image + hours column */}
            <div className="lg:col-span-5">
              <figure className="m-0 relative">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                    <Image
                      src="/images/team/mughal-house-exterior.jpg"
                      alt="Mughal House Manpower Consultancy building exterior with signage, Ahmed Plaza, Pandua, West Bengal"
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 90vw, 460px"
                    />
                  </div>
                </button>

                {/* Office hours overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72 bg-paper border border-rule p-5 shadow-[0_12px_32px_-12px_rgba(15,30,61,0.25)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gold-500" aria-hidden="true" />
                    <span className="text-ink text-[11px] tracking-[0.2em] uppercase font-semibold">
                      Office hours
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2" role="list">
                    {officeHours.map(({ days, hours, type }) => (
                      <li key={days} className="flex items-center justify-between gap-3 text-[12px]">
                        <span className="text-ink-muted">{days}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-ink font-medium">{hours}</span>
                          {type === "By appointment" && (
                            <span className="text-ink-muted text-[10px]">Appt.</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <figcaption className="mt-3 text-ink-muted text-xs leading-snug">
                  <span className="font-semibold text-ink">Mughal House</span> &mdash; the registered
                  office at Ahmed Plaza, Pandua, West Bengal.
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/images/team/mughal-house-exterior.jpg"
          alt="Mughal House Manpower Consultancy building exterior, Ahmed Plaza, Pandua"
          caption="Mughal House"
          subcaption="Ahmed Plaza, Pandua &middot; West Bengal, India"
          onClose={() => setLightboxOpen(false)}
        />
      )}
      {mapOpen && <MapModal onClose={() => setMapOpen(false)} />}
    </>
  );
}
