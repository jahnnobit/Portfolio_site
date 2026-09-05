"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;

  function hrefFor(target: Locale) {
    // strip the current locale prefix, keep the rest of the path, drop any hash
    const rest = pathname.startsWith(`/${current}`)
      ? pathname.slice(current.length + 1)
      : "";
    const clean = rest.split("#")[0].split("?")[0];
    return `/${target}${clean}`;
  }

  return (
    <div
      className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <a
            key={loc}
            href={hrefFor(loc)}
            hrefLang={loc}
            aria-current={active ? "true" : undefined}
            className={`cursor-pointer rounded-full px-2.5 py-1 uppercase transition-colors duration-200 ${
              active ? "bg-primary text-white" : "text-muted hover:text-ink"
            }`}
          >
            {loc}
          </a>
        );
      })}
    </div>
  );
}
