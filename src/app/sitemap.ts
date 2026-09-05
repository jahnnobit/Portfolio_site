import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { projectSlugs } from "@/content";

const SITE_URL = "https://jahnnobitalukdar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}`]),
        ),
      },
    });
    for (const slug of projectSlugs()) {
      entries.push({
        url: `${SITE_URL}/${locale}/work/${slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
