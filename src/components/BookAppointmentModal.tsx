"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

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
    "w-full bg-paper border border-rule px-3.5 py-2.5 text-ink text-[14px] placeholder:text-ink-faint focus:outline-none focus:border-ink transition-colors duration-150";
  const labelClass =
    "block text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold mb-1.5";

  return (
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/55"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-rule">
          <div>
            <span className="eyebrow">Mughal House Manpower Consultancy</span>
            <h2
              id="appointment-modal-title"
              className="mt-3 font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-tight"
            >
              Book an appointment
            </h2>
            <p className="text-ink-muted text-[13px] mt-1.5">
              We&rsquo;ll confirm your slot within one working day.
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

        {status === "success" ? (
          <div className="flex flex-col items-center gap-5 px-7 py-12 text-center">
            <CheckCircle2 className="w-10 h-10 text-gold-500" aria-hidden="true" />
            <div>
              <h3 className="font-display font-semibold text-ink text-xl mb-2">
                Request received.
              </h3>
              <p className="text-ink-soft text-sm leading-[1.6] max-w-sm">
                We have your details. A member of our team will reach out
                within one working day to confirm your slot.
              </p>
            </div>
            <button onClick={onClose} className="btn btn-primary mt-2">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-5" noValidate>

            {/* Name */}
            <div>
              <label htmlFor="appt-name" className={labelClass}>
                Full name <span className="text-gold-600">*</span>
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

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="appt-email" className={labelClass}>
                  Email <span className="text-gold-600">*</span>
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
                  Phone <span className="text-gold-600">*</span>
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

            {/* Date + Time */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="appt-date" className={labelClass}>
                  Preferred date
                </label>
                <input
                  id="appt-date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="appt-time" className={labelClass}>
                  Preferred time
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
                Message / purpose
              </label>
              <textarea
                id="appt-message"
                rows={3}
                placeholder="Briefly describe what you would like to discuss…"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-[13px] text-gold-700 border-l-2 border-gold-500 pl-3 py-1">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                "Request appointment"
              )}
            </button>

            <p className="text-center text-ink-faint text-[11px]">
              Appointments are subject to availability. Mon&ndash;Fri 9 AM&ndash;6 PM, Sat 9 AM&ndash;2 PM.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
