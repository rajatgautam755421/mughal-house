import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Mughal House Manpower Consultancy (MH Recruiter) — Government-licensed overseas recruitment, West Bengal to the world";

export default async function OGImage() {
  // Embed the team portrait so the share card carries a real photo, not
  // just typography. Falls back to the typographic side alone if the
  // file can't be read.
  let heroDataUri: string | null = null;
  try {
    const buf = await readFile(
      join(process.cwd(), "public/images/mughal-house-hero.jpeg"),
    );
    heroDataUri = `data:image/jpeg;base64,${buf.toString("base64")}`;
  } catch {
    heroDataUri = null;
  }

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
        {/* ── Left: portrait photo ── */}
        <div
          style={{
            display: "flex",
            width: 480,
            height: "100%",
            position: "relative",
            background: "#0a142a",
          }}
        >
          {heroDataUri && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={heroDataUri}
              alt=""
              width={480}
              height={630}
              style={{
                width: 480,
                height: 630,
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          )}
          {/* Bottom gradient for badge legibility */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 220,
              background:
                "linear-gradient(to top, rgba(10,20,42,0.85) 0%, rgba(10,20,42,0) 100%)",
              display: "flex",
            }}
          />
          {/* Floating stat */}
          <div
            style={{
              position: "absolute",
              left: 28,
              bottom: 28,
              display: "flex",
              flexDirection: "column",
              background: "#faf8f3",
              border: "1px solid #d9d3c6",
              padding: "16px 22px",
              boxShadow: "0 12px 32px -12px rgba(15,30,61,0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#b08830",
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              Placed since 2023
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontSize: 44,
                fontWeight: 700,
                color: "#0a142a",
                lineHeight: 1,
              }}
            >
              10,000+
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontSize: 16,
                color: "#3b475c",
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
              <span style={{ display: "flex" }}>
                placed across the world
                <span style={{ color: "#b08830" }}>.</span>
              </span>
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
