"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    // safety net: never leave content stuck hidden if the observer doesn't fire
    const fallback = setTimeout(() => setShown(true), 1400);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return (
    <div ref={ref} data-reveal className={`${shown ? "is-visible" : ""} ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
