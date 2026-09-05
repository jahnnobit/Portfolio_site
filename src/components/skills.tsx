import { Check } from "lucide-react";
import type { SkillGroup, UIStrings } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Skills({
  skillGroups,
  t,
}: {
  skillGroups: SkillGroup[];
  t: UIStrings;
}) {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-surface-2 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index={t.sections.skillsIndex}
          title={t.sections.skillsTitle}
          lead={t.sections.skillsLead}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.skills.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm text-ink/85">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
