"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import type { Locale } from "@/i18n/config";
import type { UIStrings } from "@/content/types";

export function Nav({
  locale,
  t,
  name,
  resumeUrl,
}: {
  locale: Locale;
  t: UIStrings;
  name: string;
  resumeUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#education", label: t.nav.education },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border px-4 py-2.5 transition-colors duration-200 sm:px-5 ${
          scrolled
            ? "bg-surface/85 shadow-[0_1px_20px_rgba(18,51,63,0.08)] backdrop-blur-md"
            : "bg-surface/60 backdrop-blur"
        }`}
      >
        <a
          href="#top"
          className="rounded-md font-sans text-sm font-semibold tracking-tight text-ink"
        >
          {name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} />
          <a
            href={resumeUrl}
            className="hidden cursor-pointer items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-ink sm:inline-flex"
          >
            <FileText className="h-4 w-4" aria-hidden />
            {t.nav.cv}
          </a>
          <ThemeToggle locale={locale} />
          <button
            type="button"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-surface p-3 shadow-lg lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base text-ink transition-colors hover:bg-surface-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-base font-medium text-white"
          >
            <FileText className="h-4 w-4" aria-hidden />
            {t.nav.downloadCv}
          </a>
        </div>
      )}
    </header>
  );
}
