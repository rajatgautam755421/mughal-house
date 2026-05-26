"use client";

import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function UnderConstruction() {
  return (
    <main
      className="min-h-svh flex items-center justify-center px-5 py-10"
      style={{ background: "#faf8f3" }}
      aria-label="Mughal House Manpower Consultancy — site under construction"
    >
      {/* Paper card matching the modal pattern */}
      <div className="relative w-full max-w-xl bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">

        {/* Brand ribbon */}
        <div
          aria-hidden="true"
          style={{
            height: "3px",
            background:
              "linear-gradient(90deg, #13245e 0%, #1e4f9c 60%, #b08830 100%)",
          }}
        />

        {/* Header */}
        <div className="px-7 pt-9 pb-5 border-b border-rule flex items-start gap-5">
          <img
            src="/logo.svg"
            alt=""
            aria-hidden="true"
            className="w-14 h-14 shrink-0"
          />
          <div className="min-w-0">
            <span className="eyebrow">Mughal House Manpower Consultancy</span>
            <h1 className="mt-3 font-display font-semibold text-ink text-[1.7rem] sm:text-[2rem] leading-[1.08] tracking-tight">
              We&rsquo;re polishing the site<span className="text-gold-500">.</span>
            </h1>
            <p className="text-ink-muted text-[13px] mt-2">
              MH Recruiter &middot; Govt. of India license{" "}
              <span className="text-ink font-medium">RAS838225</span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-7 flex flex-col gap-7">
          <p className="text-ink-soft text-[15px] leading-[1.65]">
            Our website is briefly under construction. Operations are running
            as usual &mdash; both founders are personally available to
            employers and candidates by phone, WhatsApp, Telegram or email.
            We&rsquo;ll be back online shortly.
          </p>

          {/* Contact rows */}
          <div>
            <p className="text-ink-muted text-[10.5px] tracking-[0.22em] uppercase font-semibold mb-3">
              <span className="inline-block w-4 h-px bg-gold-500 align-middle mr-2" />
              Reach us in the meantime
            </p>

            <ul className="flex flex-col" role="list">
              <li>
                <a
                  href="tel:+917811965514"
                  className="flex items-center gap-4 py-3.5 border-t border-rule hover:bg-navy-50/40 transition-colors duration-150 px-1 -mx-1"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-brand text-paper shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                      India &middot; Pandua office
                    </span>
                    <span className="block text-ink text-[15px] font-medium mt-0.5">
                      +91 7811-965514
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+60123602080"
                  className="flex items-center gap-4 py-3.5 border-t border-rule hover:bg-navy-50/40 transition-colors duration-150 px-1 -mx-1"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-brand text-paper shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                      Malaysia &middot; Chairman direct
                    </span>
                    <span className="block text-ink text-[15px] font-medium mt-0.5">
                      +60 12-360 2080
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mhmc023@gmail.com"
                  className="flex items-center gap-4 py-3.5 border-t border-b border-rule hover:bg-navy-50/40 transition-colors duration-150 px-1 -mx-1"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-brand text-paper shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                      Email
                    </span>
                    <span className="block text-ink text-[15px] font-medium mt-0.5">
                      mhmc023@gmail.com
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp / Telegram */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/917811965514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-rule text-ink text-[13px] font-semibold hover:border-ink transition-colors duration-150"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://t.me/+917811965514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-rule text-ink text-[13px] font-semibold hover:border-ink transition-colors duration-150"
            >
              <Send className="w-4 h-4 text-[#2AABEE]" aria-hidden="true" />
              Telegram
            </a>
          </div>

          {/* Address */}
          <address className="not-italic text-ink-muted text-[12.5px] leading-[1.6] pt-5 border-t border-rule">
            Ahmed Plaza, Pandua Mukul Cinematala G.T. Road,<br />
            Po &amp; PS Pandua, Dist &mdash; Hooghly, Pin &mdash; 712149,
            West Bengal, India
          </address>
        </div>

        {/* Footer */}
        <div
          className="px-7 py-4 text-paper text-[11.5px] flex flex-wrap items-center justify-between gap-2"
          style={{
            background:
              "linear-gradient(180deg, #0a1e4a 0%, #0a142a 100%)",
          }}
        >
          <span className="tracking-[0.18em] uppercase">mhrecruiter.com</span>
          <span className="text-white/55">
            &copy; {new Date().getFullYear()} Mughal House Manpower Consultancy
          </span>
        </div>
      </div>
    </main>
  );
}
