import { ImageResponse } from "next/og";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jahnnobi Talukdar — Digital Health & Data Science";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OgImage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const { profile } = getContent(loc);
  const kicker = "Portfolio · Digital Health & Data Science";
  const sub =
    loc === "de"
      ? `M.Sc. an der ${profile.university}`
      : `MSc at ${profile.university}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #fbfcfb 0%, #ecf6f5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#0e7c86",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            JT
          </div>
          <div style={{ fontSize: 26, color: "#4a6670" }}>{kicker}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: "#12333f",
              letterSpacing: "-0.03em",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#0e7c86" }}>{profile.role}</div>
        </div>

        <div style={{ fontSize: 26, color: "#4a6670" }}>{sub}</div>
      </div>
    ),
    { ...size },
  );
}
