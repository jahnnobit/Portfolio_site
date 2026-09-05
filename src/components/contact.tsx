import { Mail, ArrowUpRight } from "lucide-react";
import type { Profile, UIStrings } from "@/content/types";
import { Reveal } from "./reveal";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

export function Contact({
  profile,
  t,
}: {
  profile: Profile;
  t: UIStrings;
}) {
  const items = [
    {
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
      external: false,
    },
    {
      label: t.contact.linkedin,
      value: profile.socials.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: profile.socials.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
    {
      label: t.contact.github,
      value: profile.socials.github.replace(/^https?:\/\/(www\.)?/, ""),
      href: profile.socials.github,
      Icon: GithubIcon,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-surface-2 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-widest text-primary">
              {t.sections.contactIndex}
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            {t.sections.contactTitle}
          </h2>
          <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-muted">
            {t.sections.contactLead}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map(({ label, value, href, Icon, external }, i) => (
            <Reveal key={label} delay={i * 60} className="h-full">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-colors group-hover:text-primary"
                    aria-hidden
                  />
                </div>
                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {label}
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-ink">
                    {value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
