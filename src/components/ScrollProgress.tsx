"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0);
    setVisible(scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // SVG circle maths
  const size = 44;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * progress;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 left-4 sm:left-6 z-79 flex items-center justify-center transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Outer glow */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: progress > 0
            ? `0 0 16px rgba(201,168,67,${0.15 + progress * 0.3}), 0 0 32px rgba(30,79,156,${0.1 + progress * 0.2})`
            : "none",
          transition: "box-shadow 0.3s ease",
          borderRadius: "50%",
        }}
      />

      {/* SVG ring */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        {/* Background track */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="rgba(9,14,26,0.88)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="url(#progressGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dasharray 0.1s linear" }}
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e4f9c" />
            <stop offset="50%" stopColor="#3a64b8" />
            <stop offset="100%" stopColor="#c9a843" />
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow icon centred inside the ring */}
      <ArrowUp
        className="absolute w-4 h-4"
        style={{ color: progress > 0.5 ? "#c9a843" : "rgba(255,255,255,0.75)", transition: "color 0.3s ease" }}
        aria-hidden="true"
      />
    </button>
  );
}
