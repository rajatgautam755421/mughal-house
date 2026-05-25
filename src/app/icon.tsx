import { ImageResponse } from "next/og";

// Google recommends a favicon at least 48x48 and a multiple of 48.
export const size = { width: 48, height: 48 };
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
          background: "#0a142a",
          color: "#faf8f3",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "serif",
        }}
      >
        MH
      </div>
    ),
    size,
  );
}
