"use client";

import { useState, useEffect, useRef } from "react";
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function BookAppointmentModal({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll + trap focus
  useEffect(() => {
    document.body.style.overflow = "hidden";
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputClass =
    "w-full bg-dark-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-dark-400 focus:outline-none focus:border-royal-400/60 focus:bg-dark-700/60 transition-all duration-200";
  const labelClass = "flex items-center gap-1.5 text-dark-300 text-xs font-medium mb-1.5";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-2xl"
        style={{ background: "linear-gradient(145deg, rgba(17,24,40,0.98) 0%, rgba(10,15,28,0.98) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <p className="text-royal-400 text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">
              Mughal House Manpower Consultancy
            </p>
            <h2 id="appointment-modal-title" className="font-display font-bold text-white text-xl">
              Book an Appointment
            </h2>
            <p className="text-dark-400 text-sm mt-1">
              We&apos;ll confirm your slot within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-dark-400 hover:text-white hover:bg-white/8 transition-all duration-200 mt-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Gold divider */}
        <div className="mx-6 mt-4 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,67,0.5) 0%, rgba(201,168,67,0.1) 100%)" }} />

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Request Sent!</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                We&apos;ve received your appointment request and will reach out to confirm your slot within 24 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-royal-500 text-white text-sm font-semibold hover:bg-royal-400 transition-colors duration-200"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="appt-name" className={labelClass}>
                <User className="w-3 h-3" aria-hidden="true" /> Full Name <span className="text-red-400">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="appt-name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Email + Phone row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="appt-email" className={labelClass}>
                  <Mail className="w-3 h-3" aria-hidden="true" /> Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="appt-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="appt-phone" className={labelClass}>
                  <Phone className="w-3 h-3" aria-hidden="true" /> Phone <span className="text-red-400">*</span>
                </label>
                <input
                  id="appt-phone"
                  type="tel"
                  required
                  placeholder="+91 or +60…"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Date + Time row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="appt-date" className={labelClass}>
                  <Calendar className="w-3 h-3" aria-hidden="true" /> Preferred Date
                </label>
                <input
                  id="appt-date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                  className={inputClass + " [color-scheme:dark]"}
                />
              </div>
              <div>
                <label htmlFor="appt-time" className={labelClass}>
                  <Clock className="w-3 h-3" aria-hidden="true" /> Preferred Time
                </label>
                <select
                  id="appt-time"
                  value={form.time}
                  onChange={(e) => set("time", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Any time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="appt-message" className={labelClass}>
                <MessageSquare className="w-3 h-3" aria-hidden="true" /> Message / Purpose
              </label>
              <textarea
                id="appt-message"
                rows={3}
                placeholder="Briefly describe what you'd like to discuss…"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                className={inputClass + " resize-none"}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs bg-red-500/8 border border-red-500/20 rounded-lg px-3 py-2">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-royal-500 text-white font-semibold text-sm hover:bg-royal-400 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-royal-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
              ) : (
                "Request Appointment"
              )}
            </button>

            <p className="text-center text-dark-500 text-[11px]">
              Appointments are subject to availability. Mon–Fri 9 AM–6 PM, Sat 9 AM–2 PM.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
