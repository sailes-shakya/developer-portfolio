import { siteConfig, projects } from "@/lib/data/site";

export const seoConfig = {
  siteName: siteConfig.name,
  siteUrl: siteConfig.url,
  locale: "en_US",
  jobTitle: "Senior Software Engineer",
  roleFocus: "Flutter & React Native Developer",
  twitterHandle: "@said7388",
  keywords: [
    "Sailesh Shakya",
    "senior software engineer",
    "mobile developer Nepal",
    "Flutter developer",
    "React Native developer",
    "cross-platform app developer",
    "FleetPanda",
    "Enabley",
    "Kathmandu developer",
    "remote mobile developer",
    "tech lead mobile",
    "iOS Android developer",
    "TypeScript developer",
    "portfolio",
  ],
  defaultDescription:
    "Sailesh Shakya is a Senior Software Engineer and mobile developer from Kathmandu, Nepal. He builds production Flutter and React Native apps at FleetPanda, led delivery at Enabley, and ships cross-platform products for enterprise and consumer teams.",
  longDescription:
    "Hire Sailesh Shakya — Senior Software Engineer with 9+ years building Flutter, React Native, and React applications. Experience at FleetPanda, Enabley, and CodingMountain. Available for full-time, contract, and technical leadership roles.",
};

export function absoluteUrl(path = "") {
  const base = seoConfig.siteUrl.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return path ? `${base}${suffix}` : base;
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${seoConfig.siteUrl}/#person`,
    name: siteConfig.name,
    givenName: "Sailesh",
    familyName: "Shakya",
    jobTitle: seoConfig.jobTitle,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    image: absoluteUrl(siteConfig.profileImage),
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      addressCountry: "NP",
    },
    worksFor: {
      "@type": "Organization",
      name: "FleetPanda",
      url: "https://www.fleetpanda.com",
    },
    alumniOf: [
      { "@type": "Organization", name: "RIMES INGO" },
      { "@type": "Organization", name: "Enabley Pvt. Ltd." },
      { "@type": "Organization", name: "CodingMountain Pvt. Ltd." },
    ],
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      `https://dev.to/${siteConfig.devUsername}`,
    ],
    knowsAbout: [
      "Flutter",
      "React Native",
      "React",
      "TypeScript",
      "Mobile Application Development",
      "Cross-platform Development",
      "Software Engineering",
      "Technical Leadership",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    name: `${siteConfig.name} — Portfolio`,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    inLanguage: "en-US",
    publisher: {
      "@id": `${seoConfig.siteUrl}/#person`,
    },
  };
}

export function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${seoConfig.siteUrl}/#profilepage`,
    url: seoConfig.siteUrl,
    name: `${siteConfig.name} — ${seoConfig.roleFocus}`,
    description: seoConfig.defaultDescription,
    mainEntity: {
      "@id": `${seoConfig.siteUrl}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function buildProjectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected Projects",
    description: "Mobile and web applications built by Sailesh Shakya",
    itemListElement: projects.slice(0, 4).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        author: {
          "@id": `${seoConfig.siteUrl}/#person`,
        },
      },
    })),
  };
}

export function buildStructuredData() {
  return [
    buildPersonSchema(),
    buildWebSiteSchema(),
    buildProfilePageSchema(),
    buildProjectsSchema(),
  ];
}

export function buildRootMetadata() {
  const title = `${siteConfig.name} | ${seoConfig.jobTitle} — ${seoConfig.roleFocus}`;
  const description = seoConfig.defaultDescription;

  return {
    metadataBase: new URL(seoConfig.siteUrl),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: seoConfig.keywords,
    authors: [{ name: siteConfig.name, url: seoConfig.siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: {
      canonical: seoConfig.siteUrl,
    },
    openGraph: {
      type: "website",
      locale: seoConfig.locale,
      url: seoConfig.siteUrl,
      title,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: seoConfig.twitterHandle,
      site: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/profile.png",
    },
    manifest: "/manifest.webmanifest",
  };
}
