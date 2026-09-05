import type { Locale } from "@/i18n/config";
import type { Content, Project } from "./types";
import { en } from "./en";
import { de } from "./de";

const registry: Record<Locale, Content> = { en, de };

export function getContent(locale: Locale): Content {
  return registry[locale];
}

export function getProject(
  locale: Locale,
  slug: string,
): Project | undefined {
  return registry[locale].projects.find((p) => p.slug === slug);
}

export function projectSlugs(): string[] {
  return en.projects.map((p) => p.slug);
}

export type { Content, Project } from "./types";
