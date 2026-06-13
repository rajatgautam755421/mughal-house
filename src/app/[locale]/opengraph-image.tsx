import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Mughal House Manpower Consultancy (MH Recruiter) — Government-licensed overseas recruitment, West Bengal to the world";

// Minimal, photo-free card. next/og rasterises to PNG, so weight comes almost
// entirely from glyph count and anti-aliased edges. A centred wordmark, one
// short tagline and a lightweight inline-SVG globe (a few vector strokes —
// negligible in PNG) keep this lighter than a busier layout while staying
// on-brand, so it appears instantly in link previews.
export default function OGImage() {
  const ink = "#0a142a";
  const gold = "#b08830";
  const muted = "#6b7689";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf8f3",
          color: ink,
          fontFamily: "serif",
          padding: "0 90px",
          textAlign: "center",
        }}
      >
        {/* Top gold hairline */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: gold,
            display: "flex",
          }}
        />

        {/* Minimal globe mark */}
        <svg width="92" height="92" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="44" stroke={ink} strokeWidth="3" />
          <ellipse cx="48" cy="48" rx="18" ry="44" stroke={gold} strokeWidth="3" />
          <line x1="4" y1="48" x2="92" y2="48" stroke={ink} strokeWidth="3" />
          <line x1="11" y1="26" x2="85" y2="26" stroke={ink} strokeWidth="2" />
          <line x1="11" y1="70" x2="85" y2="70" stroke={ink} strokeWidth="2" />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: 6,
            color: ink,
            lineHeight: 1,
          }}
        >
          MUGHAL HOUSE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 19,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: muted,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          Manpower Consultancy · MH Recruiter
        </div>

        {/* Gold rule */}
        <div
          style={{
            display: "flex",
            width: 72,
            height: 3,
            marginTop: 34,
            marginBottom: 34,
            background: gold,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 38,
            fontWeight: 700,
            letterSpacing: -1,
            color: ink,
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          Skilled Indian workers, placed across the world.
        </div>

        {/* Proof line */}
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 21,
            letterSpacing: 1,
            color: gold,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          10,000+ placed · Govt-licensed (RAS838225) · Est. 2023
        </div>

        {/* Footer url */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 700,
            color: ink,
            fontFamily: "sans-serif",
          }}
        >
          mhrecruiter.com
        </div>
      </div>
    ),
    size,
  );
}
