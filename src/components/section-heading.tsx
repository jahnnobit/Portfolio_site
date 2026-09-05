import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-xs font-medium tracking-widest text-primary">
          {index}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {lead && (
        <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
