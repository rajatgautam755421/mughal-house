import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Mughal House Manpower Consultancy (MH Recruiter) — Government-licensed overseas recruitment, West Bengal to the world";

// Minimal brand card on solid navy. next/og rasterises to PNG, so weight is
// driven by glyph count — a solid fill is near-free and there is no photo or
// globe, so this stays light (~50 KB) and appears instantly in link previews.
export default function OGImage() {
  const navy = "#0a142a";
  const cream = "#faf8f3";
  const gold = "#d6b667";
  const muted = "#94a0b4";

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
          background: navy,
          color: cream,
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

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: 6,
            color: cream,
            lineHeight: 1,
          }}
        >
          MUGHAL HOUSE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
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
            marginTop: 36,
            marginBottom: 36,
            background: gold,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: -1,
            color: cream,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Skilled Indian workers, placed across the world.
        </div>

        {/* Proof line */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
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
            color: muted,
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
