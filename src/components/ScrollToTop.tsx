"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 480);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed right-5 z-80 w-11 h-11 flex items-center justify-center bg-paper border border-rule text-ink hover:border-ink transition-all duration-200 ${
        visible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-3"
      }`}
      style={{
        bottom: "230px",
        boxShadow: "0 6px 18px -8px rgba(15,30,61,0.25)",
      }}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
