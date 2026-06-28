import type { DeepPartial, SiteContent } from "./index";

const tr: DeepPartial<SiteContent> = {
  meta: {
    title: "Emirhan Naneli — Backend Geliştirici",
    description:
      "Java, Kotlin ve Spring Boot ile ölçeklenebilir mikroservis mimarileri tasarlayan; güvenli, yüksek performanslı API'ler geliştiren backend geliştirici.",
  },
  nav: { about: "Hakkımda", skills: "Yetenekler", projects: "Projeler", experience: "Deneyim", contact: "İletişim" },
  hero: {
    kicker: "Türkiye · Yeni projelere açık",
    tagline:
      "Java, Kotlin ve Spring Boot ile ölçeklenebilir mikroservis mimarileri tasarlar; güvenli ve yüksek performanslı API'ler geliştiririm.",
    ctaPrimary: "İletişime geç",
    ctaSecondary: "CV indir",
  },
  about: {
    heading: "Hakkımda",
    body: "4+ yıldır ölçeklenebilir mikroservis mimarileri, REST & GraphQL API'leri ve güvenli, yüksek performanslı sistemler geliştiren — çoğunlukla hızlı tempolu startup ortamlarında çalışan bir backend geliştiriciyim.",
  },
  statLabels: { years: "Yıllık tecrübe", projects: "Öne çıkan proje", tech: "Teknoloji" },
  skills: {
    heading: "Yetenekler & Araçlar",
    sub: "Güvenilir backend sistemleri tasarlamak, yayınlamak ve işletmek için kullandığım teknolojiler.",
    groupTitles: {
      languages: "Diller & Framework'ler",
      apis: "API & Mimari",
      data: "Veri & Mesajlaşma",
      devops: "DevOps & Araçlar",
    },
  },
  projects: {
    heading: "Seçili Projeler",
    sub: "Açık kaynak kütüphaneler, SDK'lar ve araçlar — çoğu üretimde kullanılıyor.",
    viewLabel: "GitHub'da gör",
    descriptions: {
      "service-utils": "Spring Boot geliştirmesini hızlandıran; hazır yardımcılar, temel soyutlamalar ve ekosistem araçları sunan kapsamlı bir Kotlin kütüphanesi.",
      "modular-portal": "Tek bir projedeki kod yükünü azaltan modüler bir ekosistem — yalnızca ihtiyacınız olan özellikleri çok basit bir şekilde kullanın.",
      "paytr-java-sdk": "PayTR ödeme ağ geçidiyle sorunsuz entegrasyon için factory sınıfı içeren Kotlin/Java SDK'sı: ödeme talepleri, callback doğrulama ve iadeler — tamamen yapılandırılabilir.",
      "simple-backup": "Modern, kendi sunucunuzda barındırılan veritabanı yedekleme yöneticisi: otomatik zamanlama, REST API, webhook ve MySQL, PostgreSQL, MongoDB için Docker desteği.",
      "keycloak-shadcn": "Keycloakify v11, React 18 ve shadcn/ui ile geliştirilen modern bir Keycloak tema başlangıcı — 21+ özelleştirilmiş sayfa, çoklu dil desteği ve Tailwind stili.",
    },
  },
  experience: {
    heading: "Deneyim",
    items: {
      opensource: { tag: "Açık Kaynak", period: "2023 — Günümüz", role: "Açık Kaynak & Bağımsız Geliştirme", org: "Bağımsız", desc: "Yeniden kullanılabilir Spring Boot kütüphaneleri, ödeme SDK'ları ve geliştirici araçları geliştiriyorum — birçoğu paket olarak yayınlandı ve üretimde kullanılıyor." },
      saganetwork: { tag: "İş", period: "2022 — 2024", role: "Backend Geliştirici", org: "Saganetwork Telekomünikasyon A.Ş · Balıkesir", desc: "Java ve Kotlin ile Spring Boot üzerinde ERP, CRM, sosyal medya ve pazarlama platformları geliştirdim. REST, GraphQL & WebSocket API'leri, JPA (PostgreSQL/MySQL) ve NoSQL (MongoDB/Redis) ile mikroservis mimarileri tasarladım; Spring Cloud Gateway, OAuth2, OpenFeign, Kafka & RabbitMQ entegre ettim; Docker + Vault ile konteynerize ettim; Docker Swarm & Eureka ile yük dengeledim ve Grafana ile izledim." },
      education: { tag: "Eğitim", period: "2023 — Günümüz", role: "Bilgisayar Programcılığı (Ön Lisans)", org: "Bandırma Onyedi Eylül Üniversitesi · Gönen MYO", desc: "Yazılım geliştirme temelleri, algoritmalar ve veritabanı sistemleri üzerine eğitim." },
    },
  },
  contact: {
    kicker: "İletişim",
    heading: "Birlikte sağlam bir şey yapalım.",
    sub: "Backend ve full-stack fırsatlara, freelance işlere ve açık kaynak iş birliklerine açığım. İstediğiniz zaman ulaşın.",
  },
  footer: { note: "Özenle tasarlandı & geliştirildi" },
  glossary: { Microservices: "Mikroservis", "Unit Testing": "Birim Testi", Library: "Kütüphane", Payments: "Ödeme", Modular: "Modüler" },
};

export default tr;
