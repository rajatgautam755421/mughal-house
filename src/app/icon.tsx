import { ImageResponse } from "next/og";

// Google recommends a favicon ≥ 48×48 and a multiple of 48. We render at
// 192×192 so Search/Discover, browser tabs, PWA installs and Android share
// sheets all get a crisp version of the MH monogram.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1e4a 0%, #13245e 55%, #1e4f9c 100%)",
          color: "#faf8f3",
          fontSize: 108,
          fontWeight: 700,
          letterSpacing: -4,
          fontFamily: "serif",
        }}
      >
        MH
      </div>
    ),
    size,
  );
}
