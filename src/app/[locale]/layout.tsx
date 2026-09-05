import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Figtree, Noto_Sans, Newsreader } from "next/font/google";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/content";

// Only applies an EXPLICIT choice. No stored value → CSS prefers-color-scheme decides (no FOUC).
const THEME_INIT = `(function(){try{var s=localStorage.getItem('theme');if(s==='dark'||s==='light'){document.documentElement.classList.add(s);}}catch(e){}})();`;

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://jahnnobitalukdar.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const { profile } = getContent(loc);
  const description =
    loc === "de"
      ? `${profile.name} — Masterstudentin Digital Health & Data Science an der ${profile.university}. Klinische Daten und Wearable-Daten für bessere Versorgung.`
      : `${profile.name} — Digital Health & Data Science MSc student at ${profile.university}, turning clinical and wearable data into decisions that improve patient outcomes.`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${profile.name} — ${profile.role}`,
      template: `%s · ${profile.name}`,
    },
    description,
    keywords: [
      "Jahnnobi Talukdar",
      "digital health",
      "data science",
      "health informatics",
      "FHIR",
      "machine learning",
      profile.university,
    ],
    authors: [{ name: profile.name }],
    alternates: {
      canonical: `/${loc}`,
      languages: { en: "/en", de: "/de", "x-default": "/en" },
    },
    openGraph: {
      title: `${profile.name} — ${profile.role}`,
      description,
      url: `${SITE_URL}/${loc}`,
      siteName: profile.name,
      locale: loc === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} — ${profile.role}`,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${figtree.variable} ${notoSans.variable} ${newsreader.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          {locale === "de" ? "Zum Inhalt springen" : "Skip to content"}
        </a>
        {props.children}
      </body>
    </html>
  );
}
