import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "Aarambh Academy report card demo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#f8f5ed", color: "#172b3a", display: "flex", height: "100%", width: "100%", padding: "62px 72px", position: "relative" }}>
      <div style={{ borderLeft: "8px solid #b53622", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingLeft: "40px", width: "100%" }}>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>{site.brand}</div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.05 }}>{site.hero.title}</div>
          <div style={{ display: "flex", fontSize: 30, lineHeight: 1.35, marginTop: 30 }}>{site.tagline}</div>
        </div>
        <div style={{ borderTop: "2px solid #172b3a", display: "flex", fontSize: 22, justifyContent: "space-between", paddingTop: 18 }}>
          <span>{site.hero.report.title}</span><span>Std 8–12 · Fictional demo</span>
        </div>
      </div>
    </div>,
    size,
  );
}
