import type { UIStrings } from "@/content/types";

export function Footer({ name, t }: { name: string; t: UIStrings }) {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {name}. {t.footer.builtWith}
        </p>
        <a
          href="#top"
          className="rounded-md text-sm text-muted transition-colors hover:text-ink"
        >
          {t.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
