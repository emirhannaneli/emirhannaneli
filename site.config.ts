import type { IconName } from "@/lib/icons";

/**
 * ──────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — single source of truth for the portfolio.
 *  Edit everything here: profile, social links, skills, projects, experience,
 *  stats, nav and the languages the site is offered in.
 *
 *  Translated TEXT (headings, descriptions, taglines) lives per-language in
 *  `lib/content/en.ts` and `lib/content/tr.ts` — keyed by the ids you define
 *  below. Adding a project/skill/social here + its text there is all it takes.
 *  Available icon names are the keys of `lib/icons.tsx`.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Emirhan Naneli",
  email: "emirhannaneli@gmail.com",
  phone: "+90 546 977 71 05",
  cvPath: "/cv.pdf",
  avatar: "/avatar.png",
  siteUrl: "https://emirman.dev",
  github: "https://github.com/emirhannaneli",
  location: "Moscow",
  countryCode: "RU",
} as const;

/** Section anchors in the nav (labels are translated in lib/content/*). */
export const nav = [
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "experience", href: "#experience" },
  { id: "contact", href: "#contact" },
] as const;

/** Stat values (labels are translated in lib/content/*). */
export const stats = [
  { id: "years", value: "4+" },
  { id: "projects", value: "5" },
  { id: "tech", value: "30+" },
] as const;

/** Skill groups (group titles are translated in lib/content/*; items are neutral tokens). */
export const skillGroups = [
  { id: "languages", icon: "layers", items: ["Java", "Kotlin", "Spring Boot", "Spring Data", "Spring Security", "Spring Cloud", "Spring AOP", "Hibernate", "JPA", "OpenFeign"] },
  { id: "apis", icon: "api", items: ["REST", "GraphQL", "WebSocket", "Microservices", "OAuth2", "API Gateway", "Eureka", "Unit Testing"] },
  { id: "data", icon: "db", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka", "RabbitMQ"] },
  { id: "frontend", icon: "globe", items: ["TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Python", "LangChain"] },
  { id: "devops", icon: "cloud", items: ["Docker", "Kubernetes", "Docker Swarm", "Vault", "Grafana", "Maven", "Gradle", "Git", "Linux"] },
] as const satisfies readonly { id: string; icon: IconName; items: readonly string[] }[];

/** Projects (descriptions are translated in lib/content/* by id). */
export const projects = [
  { id: "service-utils", title: "Service Utils", lang: "Kotlin", dotColor: "#a97bff", year: "2023", stars: "1", tags: ["Kotlin", "Spring Boot", "Library"], link: "https://github.com/emirhannaneli/service-utils" },
  { id: "modular-portal", title: "Modular Portal", lang: "Kotlin", dotColor: "#a97bff", year: "2024", stars: "0", tags: ["Kotlin", "Spring Boot", "Modular"], link: "https://github.com/emirhannaneli/modular-portal" },
  { id: "paytr-java-sdk", title: "PayTR Java SDK", lang: "Kotlin", dotColor: "#a97bff", year: "2024", stars: "0", tags: ["Kotlin", "Payments", "SDK"], link: "https://github.com/emirhannaneli/paytr-java-sdk" },
  { id: "simple-backup", title: "simple-backup", lang: "TypeScript", dotColor: "#3da9fc", year: "2025", stars: "1", tags: ["TypeScript", "Docker", "DevOps"], link: "https://github.com/emirhannaneli/simple-backup" },
  { id: "keycloak-shadcn", title: "keycloak-shadcn", lang: "TypeScript", dotColor: "#3da9fc", year: "2025", stars: "8", tags: ["React", "Keycloak", "shadcn/ui"], link: "https://github.com/emirhannaneli/keycloak-shadcn" },
] as const;

/** Experience entries — ids + order; all text is translated in lib/content/* by id. */
export const experience = [{ id: "turdex" }, { id: "opensource" }, { id: "saganetwork" }, { id: "education" }] as const;

/** Social links (labels live in components/contact.tsx; icons are keys of lib/icons.tsx). */
export const socials = [
  { id: "github", icon: "github", url: "https://github.com/emirhannaneli" },
  { id: "linkedin", icon: "linkedin", url: "https://www.linkedin.com/in/emirhannaneli/" },
  { id: "stackoverflow", icon: "stack", url: "https://stackoverflow.com/users/18353450/emirhan-naneli" },
  { id: "instagram", icon: "instagram", url: "https://instagram.com/emirhnnaneli" },
  { id: "site", icon: "globe", url: "https://emirman.dev" },
] as const satisfies readonly { id: string; icon: IconName; url: string }[];

/** Scrolling tech ticker in the editorial hero. */
export const marquee = ["Java", "Kotlin", "Spring Boot", "Microservices", "GraphQL", "PostgreSQL", "Elasticsearch", "Redis", "Kafka", "RabbitMQ", "TypeScript", "React", "Next.js", "React Native", "Python", "Docker", "Kubernetes", "Grafana"] as const;

/**
 * Languages the site is offered in. Add a locale here, then add its dictionary
 * at `lib/content/<code>.ts` and register it in `lib/content/index.ts`.
 * The default locale is served at `/`, others at `/<code>` (e.g. `/tr`).
 */
export const locales = [
  { code: "en", label: "English", short: "EN", og: "en_US" },
  { code: "tr", label: "Türkçe", short: "TR", og: "tr_TR" },
] as const;
export const defaultLocale = "en";
