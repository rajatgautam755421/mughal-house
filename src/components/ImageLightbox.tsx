"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, caption, subcaption, onClose }: Props) {
  const t = useTranslations("lightbox");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Backdrop — matches Book-appointment modal */}
      <div
        className="absolute inset-0 bg-ink/55"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Paper panel */}
      <div className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-paper border border-rule shadow-[0_24px_60px_-20px_rgba(15,30,61,0.35)]">

        {/* Header */}
        <div className="flex items-start justify-between px-6 sm:px-7 pt-6 sm:pt-7 pb-4 border-b border-rule">
          <div className="min-w-0">
            <span className="eyebrow">{t("eyebrow")}</span>
            {caption && (
              <h2 className="mt-2.5 font-display font-semibold text-ink text-[1.35rem] leading-tight tracking-tight">
                {caption}
              </h2>
            )}
            {subcaption && (
              <p className="text-ink-muted text-[13px] mt-1.5">{subcaption}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-150"
            aria-label={t("close")}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <div className="px-4 sm:px-6 pt-5 pb-4">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
            style={{ maxHeight: "72vh", objectFit: "contain" }}
          />
        </div>

        <p className="text-center text-ink-faint text-[11px] pb-5 px-6">
          {t.rich("dismiss", { kbd: (chunks) => <kbd className="font-sans">{chunks}</kbd> })}
        </p>
      </div>
    </div>
  );
}
