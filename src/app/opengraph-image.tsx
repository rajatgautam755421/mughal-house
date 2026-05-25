import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Mughal House Manpower Consultancy (MH Recruiter) — Government-licensed overseas recruitment, West Bengal to Malaysia";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f3",
          color: "#0a142a",
          padding: 64,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6b7689",
          }}
        >
          <div style={{ display: "flex" }}>MUGHAL HOUSE · MANPOWER CONSULTANCY</div>
          <div style={{ display: "flex", color: "#b08830" }}>EST. 2023 · RAS838225</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            Skilled Indian workers, placed across Malaysia.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "#3b475c",
              fontFamily: "sans-serif",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            MH Recruiter — a government-licensed overseas recruitment agency in Pandua, West Bengal. 10,000+ placements since 2023.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e6e1d6",
            paddingTop: 24,
            fontSize: 18,
            color: "#6b7689",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>mhrecruiter.com</div>
          <div style={{ display: "flex" }}>Pandua, West Bengal · Kuala Lumpur, Malaysia</div>
        </div>
      </div>
    ),
    size,
  );
}
