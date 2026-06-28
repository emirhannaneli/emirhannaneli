// Re-exports the structural data from the single site config and derives the
// id/token unions used across the app. Edit the data in `site.config.ts`.
import { profile, nav, stats, skillGroups, projects, experience, socials, marquee } from "@/site.config";

export { profile, nav, stats, skillGroups, projects, experience, socials, marquee };

export type NavId = (typeof nav)[number]["id"];
export type StatId = (typeof stats)[number]["id"];
export type SkillGroupId = (typeof skillGroups)[number]["id"];
export type ProjectId = (typeof projects)[number]["id"];
export type ExpId = (typeof experience)[number]["id"];
export type SocialId = (typeof socials)[number]["id"];
export type TokenId =
  | (typeof skillGroups)[number]["items"][number]
  | (typeof projects)[number]["tags"][number];
