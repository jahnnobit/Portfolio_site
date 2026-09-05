import { ArrowUpRight, MapPin } from "lucide-react";
import type { Profile, UIStrings } from "@/content/types";
import { Reveal } from "./reveal";

export function Hero({ profile, t }: { profile: Profile; t: UIStrings }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-16 sm:pt-40 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(58rem 26rem at 72% -12%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* meta row */}
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-muted">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-medium text-ink">
              {profile.availabilityShort}
            </span>
            <span className="text-border" aria-hidden>
              /
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {profile.location}
            </span>
          </p>
        </Reveal>

        {/* name */}
        <Reveal delay={60}>
          <h1 className="mt-5 text-pretty text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[4.25rem]">
            {profile.name}
          </h1>
        </Reveal>

        {/* role */}
        <Reveal delay={120}>
          <p className="mt-3 font-serif text-2xl font-normal text-primary sm:text-3xl">
            {profile.role}
          </p>
        </Reveal>

        {/* tagline */}
        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        {/* availability note */}
        <Reveal delay={230}>
          <p className="mt-7 max-w-2xl border-l-2 border-primary/40 pl-4 text-[15px] leading-relaxed text-ink/75 lg:whitespace-nowrap">
            {profile.currently}
          </p>
        </Reveal>

        {/* actions */}
        <Reveal delay={290}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-primary-ink"
            >
              {t.hero.viewWork}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-base font-medium text-ink transition-colors duration-200 hover:bg-surface-2"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
