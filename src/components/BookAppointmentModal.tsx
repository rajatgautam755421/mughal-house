"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface Props {
  onClose: () => void;
}

// Validation returns an error *code* (a key under bookingModal.errors) so the
// pure function stays free of locale concerns — the component translates it.
type ErrorCode =
  | "nameRequired" | "nameShort"
  | "emailRequired" | "emailInvalid"
  | "phoneRequired" | "phoneInvalid";
type FieldErrors = Partial<Record<"name" | "email" | "phone", ErrorCode>>;

const EMAIL_RE   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE   = /^[+\d][\d\s()-]{6,}\d$/; // ≥ 8 digits with usual separators

function validateField(field: "name" | "email" | "phone", value: string): ErrorCode | undefined {
  const v = value.trim();
  if (field === "name") {
    if (!v) return "nameRequired";
    if (v.length < 2) return "nameShort";
    return;
  }
  if (field === "email") {
    if (!v) return "emailRequired";
    if (!EMAIL_RE.test(v)) return "emailInvalid";
    return;
  }
  if (field === "phone") {
    if (!v) return "phoneRequired";
    if (!PHONE_RE.test(v)) return "phoneInvalid";
    return;
  }
  return;
}

export default function BookAppointmentModal({ onClose }: Props) {
  const t = useTranslations("bookingModal");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
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

  const set = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field] && (field === "name" || field === "email" || field === "phone")) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const onBlur = (field: "name" | "email" | "phone") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, form[field]) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: FieldErrors = {
      name:  validateField("name",  form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
    };
    setErrors(next);
    setTouched({ name: true, email: true, phone: true });
    if (next.name || next.email || next.phone) {
      // Focus the first failing field for keyboard users.
      const firstBad = (["name", "email", "phone"] as const).find((f) => next[f]);
      if (firstBad) {
        document.getElementById(`appt-${firstBad}`)?.focus();
      }
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t("errors.generic"));
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : t("errors.generic"));
    }
  };

  const baseInputClass =
    "w-full bg-paper border px-3.5 py-2.5 text-ink text-[14px] placeholder:text-ink-faint focus:outline-none transition-colors duration-150";
  const inputClass = `${baseInputClass} border-rule focus:border-ink`;
  const inputClassInvalid = `${baseInputClass} border-red-600 focus:border-red-700 bg-red-600/5`;
  const fieldClass = (field: "name" | "email" | "phone") =>
    errors[field] ? inputClassInvalid : inputClass;
  const labelClass =
    "block text-ink-muted text-[10.5px] tracking-[0.18em] uppercase font-semibold mb-1.5";
  const errorTextClass =
    "mt-1.5 text-[12px] text-red-700 leading-snug";

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
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2
              id="appointment-modal-title"
              className="mt-3 font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-tight"
            >
              {t("title")}
            </h2>
            <p className="text-ink-muted text-[13px] mt-1.5">
              {t("subtitle")}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-150"
            aria-label={t("close")}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-5 px-7 py-12 text-center">
            <CheckCircle2 className="w-10 h-10 text-gold-500" aria-hidden="true" />
            <div>
              <h3 className="font-display font-semibold text-ink text-xl mb-2">
                {t("successTitle")}
              </h3>
              <p className="text-ink-soft text-sm leading-[1.6] max-w-sm">
                {t("successBody")}
              </p>
            </div>
            <button onClick={onClose} className="btn btn-primary mt-2">
              {t("done")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-5" noValidate>

            {/* Name */}
            <div>
              <label htmlFor="appt-name" className={labelClass}>
                {t("nameLabel")} <span className="text-gold-600">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="appt-name"
                type="text"
                required
                placeholder={t("namePlaceholder")}
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                onBlur={() => onBlur("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "appt-name-error" : undefined}
                className={fieldClass("name")}
              />
              {errors.name && (
                <p id="appt-name-error" className={errorTextClass} role="alert">
                  {t(`errors.${errors.name}`)}
                </p>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="appt-email" className={labelClass}>
                  {t("emailLabel")} <span className="text-gold-600">*</span>
                </label>
                <input
                  id="appt-email"
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onBlur={() => onBlur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "appt-email-error" : undefined}
                  className={fieldClass("email")}
                />
                {errors.email && (
                  <p id="appt-email-error" className={errorTextClass} role="alert">
                    {t(`errors.${errors.email}`)}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="appt-phone" className={labelClass}>
                  {t("phoneLabel")} <span className="text-gold-600">*</span>
                </label>
                <input
                  id="appt-phone"
                  type="tel"
                  required
                  placeholder={t("phonePlaceholder")}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onBlur={() => onBlur("phone")}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "appt-phone-error" : undefined}
                  className={fieldClass("phone")}
                />
                {errors.phone && (
                  <p id="appt-phone-error" className={errorTextClass} role="alert">
                    {t(`errors.${errors.phone}`)}
                  </p>
                )}
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="appt-date" className={labelClass}>
                  {t("dateLabel")}
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
                  {t("timeLabel")}
                </label>
                <select
                  id="appt-time"
                  value={form.time}
                  onChange={(e) => set("time", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("anyTime")}</option>
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
                {t("messageLabel")}
              </label>
              <textarea
                id="appt-message"
                rows={3}
                placeholder={t("messagePlaceholder")}
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
                  {t("sending")}
                </>
              ) : (
                t("submit")
              )}
            </button>

            <p className="text-center text-ink-faint text-[11px]">
              {t("footnote")}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
