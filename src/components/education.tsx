import { BookOpen, GraduationCap } from "lucide-react";
import type { EducationItem, Thesis, UIStrings } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function ThesisCard({ thesis, t }: { thesis: Thesis; t: UIStrings }) {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-6 sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(30rem 16rem at 100% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
          }}
        />
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <BookOpen className="h-4 w-4" aria-hidden />
          {thesis.label}
        </div>
        <h3 className="mt-3 font-serif text-2xl italic leading-snug text-ink">
          {thesis.title}
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink/85">
          {thesis.summary}
        </p>

        <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">
              {t.thesisCard.institution}
            </dt>
            <dd className="mt-1 text-sm text-ink">{thesis.institution}</dd>
            {thesis.partner && (
              <dd className="mt-0.5 text-sm text-muted">{thesis.partner}</dd>
            )}
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">
              {t.thesisCard.status}
            </dt>
            <dd className="mt-1 text-sm text-ink">{thesis.status}</dd>
            <dd className="mt-0.5 text-sm text-muted">{thesis.period}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">
              {t.thesisCard.methods}
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {thesis.methods.map((m, mi) => (
                <span
                  key={`${m}-${mi}`}
                  className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted"
                >
                  {m}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </article>
    </Reveal>
  );
}

export function Education({
  education,
  thesis,
  t,
}: {
  education: EducationItem[];
  thesis?: Thesis;
  t: UIStrings;
}) {
  return (
    <section id="education" className="scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index={t.sections.educationIndex}
          title={t.sections.educationTitle}
          lead={t.sections.educationLead}
        />

        {thesis && (
          <div id="thesis" className="mb-8 scroll-mt-28">
            <ThesisCard thesis={thesis} t={t} />
          </div>
        )}

        <ol className="space-y-4">
          {education.map((item, i) => (
            <Reveal key={`${item.org}-${i}`} delay={i * 60}>
              <li className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                    <GraduationCap
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    {item.credential}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 pl-6 text-sm text-primary">
                  {item.org}
                  {item.location ? (
                    <span className="text-muted"> · {item.location}</span>
                  ) : null}
                </p>
                <ul className="mt-4 space-y-2 pl-6">
                  {item.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="relative pl-4 text-sm leading-relaxed text-ink/85 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
