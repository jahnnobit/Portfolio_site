import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getContent, getProject, projectSlugs } from "@/content";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { ThresholdExplorer } from "@/components/threshold-explorer";
import { Footer } from "@/components/footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const project = getProject(loc, slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/${loc}/work/${slug}`,
      languages: {
        en: `/en/work/${slug}`,
        de: `/de/work/${slug}`,
        "x-default": `/en/work/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/${loc}/work/${slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getContent(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();

  const { ui, profile } = c;
  const d = project.detail;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-border bg-surface/85 px-4 py-2.5 backdrop-blur-md sm:px-5">
          <Link
            href={`/${locale}#work`}
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-ink transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {ui.project.backToAll}
          </Link>
          <div className="flex items-center gap-2">
            <LocaleSwitcher current={locale} />
            <ThemeToggle locale={locale} />
          </div>
        </nav>
      </header>

      <main id="main" className="px-6 pt-32 pb-16 sm:pt-36">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {ui.sections.workTitle}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
              {project.summary}
            </p>

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

            {(project.repo || project.demo) && (
              <div className="mt-6 flex flex-wrap gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" />
                    {ui.project.code}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    {ui.project.liveDemo}
                  </a>
                )}
              </div>
            )}
          </Reveal>

          <div className="mt-14 space-y-12">
            <Section title={ui.project.overview}>
              <p>{d.overview}</p>
            </Section>

            <Section title={ui.project.context}>
              <p>{d.context}</p>
            </Section>

            <Section title={ui.project.methodology}>
              <ol className="space-y-5">
                {d.methodology.map((m, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-ink">
                        {m.step}
                      </p>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink/85">
                        {m.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>

            <Section title={ui.project.results}>
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {d.results.map((r) => (
                    <tr key={r.metric} className="border-b border-border">
                      <th
                        scope="row"
                        className="py-3 pr-4 text-left font-normal text-ink/85"
                      >
                        {r.metric}
                        {r.note && (
                          <span className="block text-xs text-muted">
                            {r.note}
                          </span>
                        )}
                      </th>
                      <td className="py-3 text-right font-mono text-base text-ink">
                        {r.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            {project.interactive && (
              <Reveal>
                <ThresholdExplorer t={ui} />
              </Reveal>
            )}

            <Section title={ui.project.reflection}>
              <p className="font-serif text-lg italic leading-relaxed text-ink/90">
                {d.reflection}
              </p>
            </Section>

            <Section title={ui.project.stack}>
              <ul className="flex flex-wrap gap-2">
                {d.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <div className="mt-14 border-t border-border pt-8">
            <Link
              href={`/${locale}#work`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {ui.project.backToAll}
            </Link>
          </div>
        </article>
      </main>

      <Footer name={profile.name} t={ui} />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section">
      <h2 className="mb-4 text-xl font-semibold text-ink">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-ink/85">
        {children}
      </div>
    </Reveal>
  );
}
