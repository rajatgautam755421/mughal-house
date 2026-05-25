"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail, ArrowRight, Calendar, Expand, X, Navigation, MessageCircle, Send } from "lucide-react";
import { useState, useEffect } from "react";
import ImageLightbox from "./ImageLightbox";
import { useReveal } from "@/hooks/useReveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ahmed+Plaza+Pandua+Mukul+Cinematala+GT+Road+Hooghly+West+Bengal+712149+India";
const ADDRESS_LINES = [
  "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,",
  "Po & PS Pandua, Dist – Hooghly,",
  "Pin – 712149, West Bengal, India",
];

function MapModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Office location"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-900/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, rgba(17,24,40,0.98) 0%, rgba(10,15,28,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-royal-500/15 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-royal-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Registered Office</p>
              <p className="text-dark-400 text-xs">West Bengal, India</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Close map"
          >
            <X className="w-4 h-4 text-dark-300" aria-hidden="true" />
          </button>
        </div>

        {/* Address */}
        <div className="px-6 py-5">
          <p className="text-dark-400 text-[11px] uppercase tracking-[0.18em] font-semibold mb-2">Address</p>
          <address className="not-italic text-white text-sm leading-relaxed font-medium">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-royal-500 text-white font-semibold text-sm hover:bg-royal-400 active:scale-95 transition-all duration-200 shadow-lg shadow-royal-500/25 group"
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Open in Google Maps
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const officeHours = [
  { days: "Monday – Friday", hours: "9:00 – 18:00", type: "Open" },
  { days: "Saturday", hours: "9:00 – 14:00", type: "By appointment" },
  { days: "Sunday", hours: "Closed", type: "Closed" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Registered Office — India",
    value:
      "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road, Po & PS Pandua,\nDist – Hooghly, Pin – 712149, West Bengal, India",
  },
  {
    icon: Phone,
    label: "India Mobile (WhatsApp / Telegram)",
    value: "+91 7811-965514",
    href: "tel:+917811965514",
  },
  {
    icon: Phone,
    label: "Malaysia Contact (Chairman)",
    value: "+60 12-360 2080",
    href: "tel:+60123602080",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mhmc023@gmail.com",
    href: "mailto:mhmc023@gmail.com",
  },
];

export default function OfficeVisit({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const { ref, inView } = useReveal(0.08);
  const v = inView ? "visible" : "";
  return (
    <>
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f4f8ff 0%, #eaeff8 50%, #f4f8ff 100%)" }}
      aria-labelledby="contact-heading"
    >
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-royal-500/30 to-transparent" aria-hidden="true" />

      <div className="container-xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left: Office image */}
          <div className={`reveal-left ${v} relative order-2 lg:order-1`}>
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-4/3 shadow-2xl shadow-dark-900/25 cursor-pointer group"
            >
              <Image
                src="/images/team/cofounder-mughal-sign.jpg"
                alt="Mughal House Manpower Consultancy office interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 600px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-900/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-900/60 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
            </div>

            {/* Hours card overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 lg:right-auto lg:min-w-56 p-3.5 sm:p-4 rounded-2xl bg-dark-900/95 border border-royal-500/20 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-royal-400" aria-hidden="true" />
                <span className="text-royal-400 text-xs font-semibold tracking-wide uppercase">
                  Office Hours
                </span>
              </div>
              <ul className="flex flex-col gap-1.5" role="list">
                {officeHours.map(({ days, hours, type }) => (
                  <li key={days} className="flex items-center justify-between gap-4">
                    <span className="text-dark-300 text-xs">{days}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-xs font-medium">{hours}</span>
                      {type === "By appointment" && (
                        <span className="px-1.5 py-0.5 rounded bg-royal-500/10 text-royal-400 text-[10px] font-medium">
                          Appt.
                        </span>
                      )}
                      {type === "Closed" && (
                        <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-medium">
                          Closed
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`reveal-right ${v} order-1 lg:order-2 flex flex-col gap-7`}>
            <div>
              <span className={`reveal ${v} block text-royal-600 text-xs tracking-[0.25em] uppercase font-semibold`}>
                — Visit Our Office
              </span>
              <h2
                id="contact-heading"
                className={`reveal ${v} font-display font-bold text-dark-900 text-2xl sm:text-3xl lg:text-5xl mt-3 leading-tight`}
                style={{ "--d": "80ms" } as React.CSSProperties}
              >
                Walk in to where{" "}
                <em className="not-italic text-gradient-royal">careers begin.</em>
              </h2>
              <p className={`reveal ${v} text-dark-600 mt-4 text-base leading-relaxed`} style={{ "--d": "160ms" } as React.CSSProperties}>
                Our team is ready to guide you through the entire placement process. Bring your
                documents, ask your questions, and let us take care of everything that follows.
              </p>
            </div>

            {/* Contact info */}
            <address className="not-italic flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <div key={label} className={`reveal ${v} flex gap-4`} style={{ "--d": `${i * 80 + 240}ms` } as React.CSSProperties}>
                  <div
                    className="w-10 h-10 rounded-xl bg-royal-500/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-royal-600" />
                  </div>
                  <div>
                    <p className="text-dark-400 text-xs font-medium uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-dark-900 text-sm font-medium hover:text-royal-600 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-dark-900 text-sm font-medium leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>

            {/* CTA buttons */}
            <div className={`reveal ${v} flex flex-wrap gap-3 pt-2`} style={{ "--d": "560ms" } as React.CSSProperties}>
              <button
                onClick={() => setMapOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-royal-500 text-white font-semibold text-sm hover:bg-royal-400 active:scale-95 transition-all duration-200 shadow-lg shadow-royal-500/25 group cursor-pointer"
              >
                Get directions
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-dark-200 text-dark-700 font-semibold text-sm hover:bg-dark-50 hover:border-dark-300 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book appointment
              </button>
            </div>

            {/* Social / messaging links */}
            <div className={`reveal ${v} flex flex-col gap-2.5 pt-1`} style={{ "--d": "640ms" } as React.CSSProperties}>
              <p className="text-dark-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
                Message us directly
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/917811965514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/35 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/25 hover:border-[#25D366]/55 active:scale-95 transition-all duration-200"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/+917811965514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#229ED9]/15 border border-[#229ED9]/35 text-[#2AABEE] font-semibold text-sm hover:bg-[#229ED9]/25 hover:border-[#229ED9]/55 active:scale-95 transition-all duration-200"
                  aria-label="Message on Telegram"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Telegram
                </a>
              </div>
            </div>
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
