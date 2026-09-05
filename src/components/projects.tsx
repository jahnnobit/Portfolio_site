import type { Project, UIStrings } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

export function Projects({
  projects,
  locale,
  t,
}: {
  projects: Project[];
  locale: Locale;
  t: UIStrings;
}) {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-surface-2 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index={t.sections.workIndex}
          title={t.sections.workTitle}
          lead={t.sections.workLead}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80} className="h-full">
              <ProjectCard project={p} n={i + 1} locale={locale} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
