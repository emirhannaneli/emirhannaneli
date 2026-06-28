"use client";
import { icons } from "@/lib/icons";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      aria-pressed={theme === "light"}
      className="grid h-[38px] w-[38px] place-items-center rounded-[11px] border border-[var(--border)] bg-[var(--chip)] text-[var(--text)] transition-colors hover:border-[var(--border-2)]"
    >
      {theme === "light" ? icons.moon : icons.sun}
    </button>
  );
}
