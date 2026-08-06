import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(to bottom, #1a0505, #000000)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: "#ef233c",
              borderRadius: 6,
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 700 }}>{profile.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          {profile.role}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa", marginTop: 24, maxWidth: 800 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
