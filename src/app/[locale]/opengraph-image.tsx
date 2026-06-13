import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Mughal House Manpower Consultancy (MH Recruiter) — Government-licensed overseas recruitment, West Bengal to the world";

// Photo-free, flat-colour card. next/og rasterises to PNG, and PNGs of solid
// fills + text are tiny (~40 KB) versus an embedded photo (~660 KB) — so the
// share card appears instantly in link previews instead of loading slowly.
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf8f3",
          color: "#0a142a",
          fontFamily: "serif",
        }}
      >
        {/* ── Left: solid navy brand rail ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 430,
            height: "100%",
            background: "#0a142a",
            borderRight: "6px solid #b08830",
            padding: "56px 48px",
            color: "#faf8f3",
          }}
        >
          {/* Monogram */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: -4,
                color: "#faf8f3",
              }}
            >
              MH
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 14,
                fontSize: 18,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#d6b667",
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              Mughal House
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontSize: 15,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8b97ab",
                fontFamily: "sans-serif",
                fontWeight: 600,
              }}
            >
              Manpower Consultancy
            </div>
          </div>

          {/* Headline stat */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#d6b667",
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              Placed since 2023
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 72,
                fontWeight: 700,
                color: "#faf8f3",
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              10,000+
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 18,
                color: "#aeb7c6",
                fontFamily: "sans-serif",
              }}
            >
              workers, across the world
            </div>
          </div>
        </div>

        {/* ── Right: editorial typography ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 60px",
          }}
        >
          {/* Top meta row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#6b7689",
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex" }}>MH Recruiter</div>
            <div style={{ display: "flex", color: "#b08830" }}>
              EST. 2023 · RAS838225
            </div>
          </div>

          {/* Headline + supporting copy */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: -2.5,
                color: "#0a142a",
              }}
            >
              <span style={{ display: "flex" }}>Skilled Indian workers,</span>
              <span style={{ display: "flex" }}>placed across the world.</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 24,
                lineHeight: 1.45,
                color: "#3b475c",
                fontFamily: "sans-serif",
                maxWidth: 560,
              }}
            >
              A government-licensed overseas recruitment agency in Pandua,
              West Bengal — placing skilled workers across the world.
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e6e1d6",
              paddingTop: 20,
              fontSize: 18,
              color: "#0a142a",
              fontFamily: "sans-serif",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              mhrecruiter.com
            </div>
            <div style={{ display: "flex", color: "#6b7689", fontSize: 16 }}>
              Pandua, West Bengal · Kuala Lumpur, Malaysia
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
