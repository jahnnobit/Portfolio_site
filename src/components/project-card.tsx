import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { Project, UIStrings } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { SparkChart } from "./spark-chart";
import { GithubIcon } from "./brand-icons";

export function ProjectCard({
  project,
  n,
  locale,
  t,
}: {
  project: Project;
  n: number;
  locale: Locale;
  t: UIStrings;
}) {
  const facets = [
    { label: t.project.problem, value: project.problem },
    { label: t.project.approach, value: project.approach },
    { label: t.project.result, value: project.result },
    { label: t.project.impact, value: project.impact },
  ];
  const href = `/${locale}/work/${project.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors duration-200 hover:border-primary/40">
      <div className="relative h-32 border-b border-border bg-surface-2">
        <SparkChart data={project.chart} />
        <span className="absolute left-4 top-3 font-mono text-xs text-muted">
          {project.chartLabel}
        </span>
        <span className="absolute right-4 top-3 font-mono text-xs text-muted">
          {String(n).padStart(2, "0")}
        </span>
        <span className="absolute bottom-2 left-4 font-mono text-[10px] uppercase tracking-wider text-muted/70">
          {t.project.illustrative}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-ink">
          <Link
            href={href}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {project.summary}
        </p>

        <dl className="mt-5 space-y-3 border-t border-border pt-5">
          {facets.map((f) => (
            <div key={f.label} className="grid grid-cols-[5.5rem_1fr] gap-3">
              <dt className="font-mono text-xs uppercase tracking-wider text-primary">
                {f.label}
              </dt>
              <dd className="text-sm leading-relaxed text-ink/85">{f.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-primary-ink">
            {t.project.readCaseStudy}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </span>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" />
              {t.project.code}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              {t.project.liveDemo}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
