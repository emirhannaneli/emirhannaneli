import type { IconName } from "./icons";

export const profile = {
  name: "Emirhan Naneli",
  email: "emirhannaneli@gmail.com",
  phone: "+90 546 977 71 05",
  cvPath: "/cv.pdf",
  avatar: "/avatar.png",
  siteUrl: "https://emirman.dev",
  github: "https://github.com/emirhannaneli",
} as const;

export const nav = [
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "experience", href: "#experience" },
  { id: "contact", href: "#contact" },
] as const;
export type NavId = (typeof nav)[number]["id"];

export const stats = [
  { id: "years", value: "4+" },
  { id: "projects", value: "5" },
  { id: "tech", value: "20+" },
] as const;
export type StatId = (typeof stats)[number]["id"];

export const skillGroups = [
  { id: "languages", icon: "layers", items: ["Java", "Kotlin", "Spring Boot", "Spring Data", "Spring Security", "Spring Cloud", "Spring AOP", "Hibernate", "JPA", "OpenFeign"] },
  { id: "apis", icon: "api", items: ["REST", "GraphQL", "WebSocket", "Microservices", "OAuth2", "API Gateway", "Eureka", "Unit Testing"] },
  { id: "data", icon: "db", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ"] },
  { id: "devops", icon: "cloud", items: ["Docker", "Kubernetes", "Docker Swarm", "Vault", "Grafana", "Maven", "Gradle", "Git", "Linux"] },
] as const satisfies readonly { id: string; icon: IconName; items: readonly string[] }[];
export type SkillGroupId = (typeof skillGroups)[number]["id"];

export const projects = [
  { id: "service-utils", title: "Service Utils", lang: "Kotlin", dotColor: "#a97bff", year: "2023", stars: "1", tags: ["Kotlin", "Spring Boot", "Library"], link: "https://github.com/emirhannaneli/service-utils" },
  { id: "modular-portal", title: "Modular Portal", lang: "Kotlin", dotColor: "#a97bff", year: "2024", stars: "0", tags: ["Kotlin", "Spring Boot", "Modular"], link: "https://github.com/emirhannaneli/modular-portal" },
  { id: "paytr-java-sdk", title: "PayTR Java SDK", lang: "Kotlin", dotColor: "#a97bff", year: "2024", stars: "0", tags: ["Kotlin", "Payments", "SDK"], link: "https://github.com/emirhannaneli/paytr-java-sdk" },
  { id: "simple-backup", title: "simple-backup", lang: "TypeScript", dotColor: "#3da9fc", year: "2025", stars: "1", tags: ["TypeScript", "Docker", "DevOps"], link: "https://github.com/emirhannaneli/simple-backup" },
  { id: "keycloak-shadcn", title: "keycloak-shadcn", lang: "TypeScript", dotColor: "#3da9fc", year: "2025", stars: "8", tags: ["React", "Keycloak", "shadcn/ui"], link: "https://github.com/emirhannaneli/keycloak-shadcn" },
] as const;
export type ProjectId = (typeof projects)[number]["id"];

export const experience = [{ id: "opensource" }, { id: "saganetwork" }, { id: "education" }] as const;
export type ExpId = (typeof experience)[number]["id"];

export const socials = [
  { id: "github", icon: "github", url: "https://github.com/emirhannaneli" },
  { id: "linkedin", icon: "linkedin", url: "https://www.linkedin.com/in/emirhannaneli/" },
  { id: "stackoverflow", icon: "stack", url: "https://stackoverflow.com/users/18353450/emirhan-naneli" },
  { id: "instagram", icon: "instagram", url: "https://instagram.com/emirhnnaneli" },
  { id: "site", icon: "globe", url: "https://emirman.dev" },
] as const satisfies readonly { id: string; icon: IconName; url: string }[];
export type SocialId = (typeof socials)[number]["id"];

export const marquee = ["Java", "Kotlin", "Spring Boot", "Microservices", "GraphQL", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "Docker", "Kubernetes", "Grafana"] as const;

export type TokenId =
  | (typeof skillGroups)[number]["items"][number]
  | (typeof projects)[number]["tags"][number];
