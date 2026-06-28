import { ImageResponse } from "next/og";
import { profile } from "./data";
import { resolveContent } from "./content";
import type { LocaleCode } from "./i18n";

export const OG_SIZE = { width: 1200, height: 630 };

export function ogCard(locale: LocaleCode) {
  const c = resolveContent(locale);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#070a11", color: "#eef1f7", fontFamily: "sans-serif" }}>
        <div style={{ color: "#5b8cff", fontSize: 30, letterSpacing: 2 }}>{profile.siteUrl.replace("https://", "")}</div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.05, marginTop: 18 }}>{profile.name}</div>
        <div style={{ fontSize: 40, fontWeight: 700, color: "#9aa6b8", marginTop: 4 }}>Backend Developer</div>
        <div style={{ fontSize: 28, color: "#9aa6b8", marginTop: 28, maxWidth: 900 }}>{c.meta.description}</div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
