"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

function subscribe(callback: () => void) {
  window.addEventListener("themechange", callback);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => {
    window.removeEventListener("themechange", callback);
    mq.removeEventListener("change", callback);
  };
}

/** resolved appearance: explicit class wins, otherwise the OS setting */
function currentIsDark() {
  const el = document.documentElement;
  if (el.classList.contains("dark")) return true;
  if (el.classList.contains("light")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useIsDark() {
  return useSyncExternalStore(subscribe, currentIsDark, () => false);
}

function setTheme(dark: boolean) {
  const el = document.documentElement;
  el.classList.remove("dark", "light");
  el.classList.add(dark ? "dark" : "light");
  try {
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {}
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeToggle({ locale }: { locale: "en" | "de" }) {
  const isDark = useIsDark();

  const label =
    locale === "de"
      ? isDark
        ? "Zu hellem Design wechseln"
        : "Zu dunklem Design wechseln"
      : isDark
        ? "Switch to light theme"
        : "Switch to dark theme";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(!isDark)}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors duration-200 hover:bg-surface-2"
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
