"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-5 left-4 sm:left-6 z-[80] w-11 h-11 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(30,79,156,0.85) 0%, rgba(37,99,196,0.85) 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 8px 24px rgba(30,79,156,0.45)",
      }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
