import type { NavId, StatId, SkillGroupId, ProjectId, ExpId, TokenId } from "../data";

export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export interface SiteContent {
  meta: { title: string; description: string };
  nav: Record<NavId, string>;
  hero: { kicker: string; tagline: string; ctaPrimary: string; ctaSecondary: string };
  about: { heading: string; body: string };
  statLabels: Record<StatId, string>;
  skills: { heading: string; sub: string; groupTitles: Record<SkillGroupId, string> };
  projects: { heading: string; sub: string; viewLabel: string; descriptions: Record<ProjectId, string> };
  experience: {
    heading: string;
    items: Record<ExpId, { tag: string; period: string; role: string; org: string; desc: string }>;
  };
  contact: { kicker: string; heading: string; sub: string };
  footer: { note: string };
  glossary?: Partial<Record<TokenId, string>>;
}
