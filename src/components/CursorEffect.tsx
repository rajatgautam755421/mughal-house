"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const orbRef   = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const orb    = orbRef.current;
    const ripple = rippleRef.current;
    if (!orb || !ripple) return;

    let mx = 0, my = 0;
    let ax = 0, ay = 0;
    let visible = false;
    let isHover = false;
    let raf = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (!visible) {
        ax = mx; ay = my;
        visible = true;
        orb.style.opacity = "1";
      }

      const target = e.target as Element | null;
      isHover = !!target?.closest(
        'a, button, [role="button"], input, label, select, textarea, [tabindex="0"]'
      );
    };

    const onDown = (e: MouseEvent) => {
      // Ripple at exact click point
      ripple.style.left    = `${e.clientX}px`;
      ripple.style.top     = `${e.clientY}px`;
      ripple.style.opacity = "1";
      ripple.style.transform = "translate(-50%, -50%) scale(0)";
      // Force reflow then animate
      void ripple.offsetWidth;
      ripple.style.transition = "transform 0.45s ease-out, opacity 0.45s ease-out";
      ripple.style.transform  = "translate(-50%, -50%) scale(1)";
      ripple.style.opacity    = "0";
    };

    const onLeave = () => { orb.style.opacity = "0"; };
    const onEnter = () => { if (visible) orb.style.opacity = "1"; };

    const tick = () => {
      ax = lerp(ax, mx, 0.14);
      ay = lerp(ay, my, 0.14);

      orb.style.transform = `translate(${ax}px, ${ay}px)`;

      if (isHover) {
        orb.style.scale       = "1.4";
        orb.style.borderColor = "rgba(90,160,255,0.55)";
        orb.style.boxShadow   = "0 0 22px rgba(30,79,156,0.35), 0 0 48px rgba(30,79,156,0.14)";
        orb.style.background  = "radial-gradient(circle, rgba(90,140,255,0.13) 0%, rgba(90,140,255,0.04) 55%, transparent 70%)";
      } else {
        orb.style.scale       = "1";
        orb.style.borderColor = "rgba(90,140,255,0.28)";
        orb.style.boxShadow   = "0 0 14px rgba(30,79,156,0.20), 0 0 32px rgba(30,79,156,0.08)";
        orb.style.background  = "radial-gradient(circle, rgba(90,140,255,0.08) 0%, rgba(90,140,255,0.02) 55%, transparent 70%)";
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove",    onMove);
    window.addEventListener("mousedown",    onDown);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove",    onMove);
      window.removeEventListener("mousedown",    onDown);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Trailing soft orb — native cursor stays on top */}
      <div
        ref={orbRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "40px", height: "40px",
          marginLeft: "-20px", marginTop: "-20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,140,255,0.08) 0%, rgba(90,140,255,0.02) 55%, transparent 70%)",
          border: "1px solid rgba(90,140,255,0.28)",
          boxShadow: "0 0 14px rgba(30,79,156,0.20), 0 0 32px rgba(30,79,156,0.08)",
          zIndex: 9990,
          pointerEvents: "none",
          opacity: 0,
          willChange: "transform",
          transition:
            "opacity 0.3s ease, scale 0.30s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
        }}
      />

      {/* Click ripple — burst at exact cursor position */}
      <div
        ref={rippleRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "48px", height: "48px",
          marginLeft: "0", marginTop: "0",
          borderRadius: "50%",
          border: "1.5px solid rgba(218,185,60,0.65)",
          boxShadow: "0 0 16px rgba(218,185,60,0.30)",
          zIndex: 9989,
          pointerEvents: "none",
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0)",
        }}
      />
    </>
  );
}
