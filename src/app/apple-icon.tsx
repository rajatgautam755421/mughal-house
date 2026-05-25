import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: -2,
          fontFamily: "serif",
          borderRadius: 32,
        }}
      >
        MH
      </div>
    ),
    size,
  );
}
