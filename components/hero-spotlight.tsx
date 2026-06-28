"use client";
import { useEffect, useRef } from "react";

export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // spec §8/§11
    const host = ref.current?.parentElement;
    if (!host) return;
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      host.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      host.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    host.addEventListener("pointermove", onMove);
    return () => host.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-full rounded-[30px]"
      style={{ background: "radial-gradient(420px circle at var(--mx,30%) var(--my,20%),var(--accent-soft),transparent 65%)" }} />
  );
}
