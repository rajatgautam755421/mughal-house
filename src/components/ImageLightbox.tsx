"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, caption, subcaption, onClose }: Props) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal
      aria-label={alt}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-900/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Image */}
      <div className="relative z-10 max-w-4xl w-full animate-fade-in">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block rounded-2xl"
            style={{ maxHeight: "82vh", objectFit: "contain" }}
          />
        </div>

        {/* Caption */}
        {(caption || subcaption) && (
          <div className="mt-4 text-center">
            {caption && <p className="text-white font-semibold text-base">{caption}</p>}
            {subcaption && <p className="text-dark-300 text-sm mt-0.5">{subcaption}</p>}
          </div>
        )}

        <p className="text-dark-300 text-xs text-center mt-3">Press Esc or click outside to close</p>
      </div>
    </div>
  );
}
