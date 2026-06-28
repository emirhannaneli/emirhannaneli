"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: "dark", toggle: () => {} });

/** Inline, pre-hydration script: applies the stored theme before paint (no flash). */
export const THEME_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('emn_theme');if(t==='light'||t==='dark'){d.setAttribute('data-theme',t);}}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const stored = (() => { try { return localStorage.getItem("emn_theme"); } catch { return null; } })();
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);
  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try { localStorage.setItem("emn_theme", next); } catch {}
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);
  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
