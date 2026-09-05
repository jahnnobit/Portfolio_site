import { Award, Briefcase } from "lucide-react";
import type { Certificate, ExperienceItem, UIStrings } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function CertificateCard({ cert, i }: { cert: Certificate; i: number }) {
  const content = (
    <>
      <div className="flex items-center gap-2 text-primary">
        <Award className="h-4 w-4 shrink-0" aria-hidden />
        <span className="font-mono text-xs uppercase tracking-wider text-muted">
          {cert.date}
        </span>
      </div>
      <h4 className="mt-2 text-sm font-semibold leading-snug text-ink">
        {cert.name}
      </h4>
      <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
      {cert.credentialId && (
        <p className="mt-2 font-mono text-xs text-muted">
          ID: {cert.credentialId}
        </p>
      )}
    </>
  );

  const className =
    "block rounded-3xl border border-border bg-surface p-5 transition-colors duration-200 h-full";

  return (
    <Reveal delay={i * 60}>
      {cert.url ? (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} hover:border-primary/40`}
        >
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </Reveal>
  );
}

export function Experience({
  experience,
  certifications,
  t,
}: {
  experience?: ExperienceItem[];
  certifications?: Certificate[];
  t: UIStrings;
}) {
  if (
    (!experience || experience.length === 0) &&
    (!certifications || certifications.length === 0)
  ) {
    return null;
  }

  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index={t.sections.experienceIndex}
          title={t.sections.experienceTitle}
          lead={t.sections.experienceLead}
        />

        {experience && experience.length > 0 && (
          <ol className="space-y-4">
            {experience.map((item, i) => (
              <Reveal key={`${item.org}-${i}`} delay={i * 60}>
                <li className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                      <Briefcase
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      {item.role}
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
                  {item.stack && item.stack.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2 pl-6">
                      {item.stack.map((s, si) => (
                        <li
                          key={`${s}-${si}`}
                          className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        )}

        {certifications && certifications.length > 0 && (
          <>
            <h3 className="mb-4 mt-12 text-lg font-semibold text-ink">
              {t.sections.certificatesTitle}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => (
                <CertificateCard key={`${cert.name}-${i}`} cert={cert} i={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
