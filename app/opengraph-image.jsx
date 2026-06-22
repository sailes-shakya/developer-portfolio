import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site";
import { seoConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} — ${seoConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const title = `${siteConfig.name} — ${seoConfig.jobTitle}`;
  const subtitle = "Flutter & React Native · Kathmandu, Nepal";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#0f172a",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          {title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#3ee8b5",
            fontWeight: 600,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "#94a3b8",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
