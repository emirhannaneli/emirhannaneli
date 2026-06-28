import type { ReactElement } from "react";

const svg = (children: ReactElement, props: Record<string, unknown> = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>{children}</svg>
);

export const icons = {
  sun: svg(<><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4 17 17M7 7 5.6 5.6" /></>, { strokeWidth: 1.8 }),
  moon: svg(<path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />, { strokeWidth: 1.8 }),
  download: svg(<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19.5h16" />, { strokeWidth: 1.8 }),
  pin: svg(<><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.4" /></>),
  focus: svg(<path d="m7 9-4 3 4 3M17 9l4 3-4 3M14 5l-4 14" />),
  arrow: svg(<path d="M7 17 17 7M9 7h8v8" />, { strokeWidth: 2 }),
  star: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" /></svg>,
  mail: svg(<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></>, { strokeWidth: 1.8 }),
  phone: svg(<path d="M6.3 3.5h3l1.4 4-2 1.4a12.5 12.5 0 0 0 5.4 5.4l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.2 16.2 0 0 1 4.3 5.7 2 2 0 0 1 6.3 3.5Z" />, { strokeWidth: 1.8 }),
  github: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C18 4.6 19 4.9 19 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" /></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>,
  instagram: svg(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" /></>, { strokeWidth: 1.8 }),
  stack: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57ZM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85Zm1.16-4.21.76-1.61 8.14 3.78-.76 1.62-8.14-3.79Zm2.26-3.99 1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75ZM14.64 2l5.5 7.41-1.44 1.07-5.5-7.41L14.64 2ZM6.59 18.41v-1.8h8.98v1.8H6.59Z" /></svg>,
  globe: svg(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></>),
  layers: svg(<path d="m12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5" />),
  api: svg(<path d="m8 17-5-5 5-5M16 7l5 5-5 5" />),
  db: svg(<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>),
  cloud: svg(<path d="M7 18a4 4 0 0 1-.4-8A6 6 0 0 1 18 9.5 3.5 3.5 0 0 1 17.5 18H7Z" />),
} as const;

export type IconName = keyof typeof icons;
