import type { SiteContent } from "./index";

const en: SiteContent = {
  meta: {
    title: "Emirhan Naneli — Full-Stack Developer",
    description:
      "Full-stack developer building scalable microservice backends with Kotlin & Spring Boot and shipping the web and mobile products on top with Next.js, React and React Native.",
  },
  nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
  hero: {
    kicker: "Based in Moscow · Full-Stack Developer",
    tagline:
      "I architect scalable microservices and secure, high-performance APIs with Kotlin & Spring Boot — then build the web and mobile products on top with Next.js, React and React Native.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Download CV",
  },
  about: {
    heading: "About",
    body: "Full-stack developer with 4+ years building scalable microservice backends, REST & GraphQL APIs and secure, high-performance systems — and the Next.js / React / React Native products that sit on top. Currently building Turdex, a business management platform, in Moscow.",
  },
  statLabels: { years: "Years of experience", projects: "Featured projects", tech: "Technologies" },
  skills: {
    heading: "Skills & Tools",
    sub: "The stack I reach for to design, ship and run reliable end-to-end products.",
    groupTitles: {
      languages: "Languages & Frameworks",
      apis: "APIs & Architecture",
      data: "Data & Messaging",
      frontend: "Frontend & Mobile",
      devops: "DevOps & Tooling",
    },
  },
  projects: {
    heading: "Selected Projects",
    sub: "Open-source libraries, SDKs and tools — most are used in production.",
    viewLabel: "View on GitHub",
    descriptions: {
      "service-utils": "A comprehensive Kotlin library that streamlines Spring Boot development with ready-to-use utilities, base abstractions and ecosystem helpers.",
      "modular-portal": "A modular ecosystem that cuts code load on a single project — ship only the features you need, in a very simple way.",
      "paytr-java-sdk": "A Kotlin/Java SDK with a factory class for seamless PayTR payment-gateway integration: payment requests, callback verification and refunds, fully configurable.",
      "simple-backup": "A modern self-hosted database backup manager: automated scheduling, REST API, webhooks and Docker support for MySQL, PostgreSQL and MongoDB.",
      "keycloak-shadcn": "A modern Keycloak theme starter built with Keycloakify v11, React 18 and shadcn/ui — 21+ customised pages, multi-language support and Tailwind styling.",
    },
  },
  experience: {
    heading: "Experience",
    items: {
      turdex: { tag: "Work", period: "2025 — Present", role: "Full-Stack Developer", org: "Turdex · Moscow", desc: "Building Turdex, a full-stack business management platform spanning stock, HR, finance, jobs and document management. Backend in Kotlin on Spring Boot 4 with PostgreSQL & Elasticsearch, exposing REST and GraphQL APIs; web apps (admin + customer portal) in Next.js 16 / React 19; a React Native (Expo) mobile ops app; and Python AI agents (LangChain) for automated document extraction." },
      opensource: { tag: "Open Source", period: "2024 — 2025", role: "Open Source & Indie Development", org: "Self-employed", desc: "Building reusable Spring Boot libraries, payment SDKs and developer tools — several published as packages and used in production." },
      saganetwork: { tag: "Work", period: "2022 — 2024", role: "Backend Developer", org: "Saganetwork Telekomünikasyon A.Ş · Balıkesir", desc: "Built ERP, CRM, social media and marketing platforms with Java & Kotlin on Spring Boot. Designed microservice architectures with REST, GraphQL & WebSocket APIs, JPA (PostgreSQL/MySQL) and NoSQL (MongoDB/Redis); implemented Spring Cloud Gateway, OAuth2, OpenFeign, Kafka & RabbitMQ; containerised with Docker + Vault; handled load balancing via Docker Swarm & Eureka and monitored with Grafana." },
      education: { tag: "Education", period: "2023 — Present", role: "Computer Programming (Associate)", org: "Bandırma Onyedi Eylül University · Gönen V.S.", desc: "Studying software development fundamentals, algorithms and database systems." },
    },
  },
  contact: {
    kicker: "Contact",
    heading: "Let’s build something solid.",
    sub: "Open to backend and full-stack opportunities, freelance work and open-source collaboration. Reach out anytime.",
  },
  footer: { note: "Designed & built with care" },
};

export default en;
