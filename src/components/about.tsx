import { FileText, GraduationCap } from "lucide-react";
import type { Content, EducationItem, UIStrings } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About({
  about,
  education,
  resumeUrl,
  t,
}: {
  about: Content["about"];
  education: EducationItem[];
  resumeUrl: string;
  t: UIStrings;
}) {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-surface-2 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index={t.sections.aboutIndex}
          title={t.sections.aboutTitle}
        />
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink/85">
                  {p}
                </p>
              ))}
              <p className="font-serif text-lg italic text-primary">
                {t.about.philosophyPull}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-3xl border border-border bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                  <GraduationCap className="h-4 w-4 text-primary" aria-hidden />
                  {t.sections.educationTitle}
                </p>
                <ol className="mt-5 space-y-5">
                  {education.map((item, i) => (
                    <li
                      key={`${item.org}-${i}`}
                      className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-primary after:absolute after:left-[3.5px] after:top-4 after:h-[calc(100%+0.75rem)] after:w-px after:bg-border last:after:hidden"
                    >
                      <p className="text-sm font-semibold leading-snug text-ink">
                        {item.credential}
                      </p>
                      <p className="mt-0.5 text-sm text-primary">
                        {item.org}
                        {item.location ? (
                          <span className="text-muted"> · {item.location}</span>
                        ) : null}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-muted">
                        {item.period}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <a
                href={resumeUrl}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/40"
              >
                <div>
                  <p className="font-sans text-base font-semibold text-ink">
                    {t.about.fullCv}
                  </p>
                  <p className="mt-1 text-sm text-muted group-hover:text-ink">
                    {t.nav.downloadCv} →
                  </p>
                </div>
                <FileText className="h-6 w-6 shrink-0 text-primary" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
