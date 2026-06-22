export const siteConfig = {
  name: "Sailesh Shakya",
  title: "Senior Software Engineer · Flutter & React Native",
  tagline: "I ship mobile products that feel native, scale in production, and solve real business problems.",
  description:
    "Sailesh Shakya is a senior software engineer from Kathmandu, Nepal. He builds Flutter and React Native apps at FleetPanda — a fuel and fleet delivery management platform — and has led engineering teams at Enabley and CodingMountain.",
  url: "https://saileshshakya.dev",
  email: "Sailesshakya@gmail.com",
  phone: "+977 9841379279",
  location: "Kathmandu, Nepal",
  profileImage: "/profile.png",
  resumeUrl:
    "https://drive.google.com/file/d/1e_OF5wA-uzRZ7jXse7c8iRtqd8sHgABv/view?usp=sharing",
  devUsername: "sailesshakya",
  social: {
    github: "https://github.com/sailes-shakya",
    linkedin: "https://www.linkedin.com/in/dev-sailesh-shakya/",
    twitter: "https://twitter.com/said7388",
  },
  availability: "Open to full-time roles, contract work, and technical leadership opportunities.",
};

export const aboutContent = {
  headline: "Nine years shipping mobile — from native Android to tech lead",
  paragraphs: [
    "I'm Sailesh Shakya, a mobile-first developer with 9+ years taking products from brief to App Store. I started in native Android, moved into Flutter and React Native, and most recently led mobile delivery at Enabley — owning the LMS experience across Flutter and React for enterprise training teams.",
    "I'm now a Senior Software Engineer at FleetPanda, building mobile experiences for a fuel and fleet delivery management platform used by distributors and delivery companies. The product covers order management, route planning, driver dispatch, delivery tracking, bulk plant operations, lubes delivery, and tenant-specific pricing — and I work across the surfaces that keep field teams and dispatchers in sync.",
    "Before that, I spent three years as Senior Mobile Developer & Tech Lead at CodingMountain, shipping client apps across fintech, retail, and media — including Himalayan Java's consumer loyalty app and Bysst's music distribution platform.",
    "Whether you need someone to architect a greenfield app, rescue a struggling release, or lead a mobile team — I bring production depth, clear communication, and end-to-end ownership.",
  ],
  highlights: [
    { label: "Years in mobile", value: "9+" },
    { label: "Current role", value: "Sr. Software Engineer" },
    { label: "Specialty", value: "Cross-platform apps" },
    { label: "Stacks shipped", value: "Flutter · RN · React" },
  ],
};

export const projects = [
  {
    id: "fleetpanda",
    name: "FleetPanda",
    tagline: "Fuel & fleet delivery management platform",
    description:
      "Mobile and web surfaces for a platform that helps fuel distributors and delivery companies run daily operations — order management, route planning, driver dispatch, and live delivery tracking across bulk plant, lubes, and carrier workflows.",
    role: "Senior Software Engineer",
    stack: ["Flutter", "React Native", "TypeScript"],
    logo: "/logos/fleetpanda.jpg",
    image: "/logos/fleetpanda.jpg",
    demo: "https://www.fleetpanda.com",
    code: "",
    outcome: "Dispatch, routing, and field delivery tools for fuel marketers",
    featured: true,
  },
  {
    id: "satark",
    name: "SATARK",
    tagline: "Disaster alert & preparedness — official NDRRMA app",
    description:
      "Built the mobile app for Nepal's National Disaster Risk Reduction and Management Authority (NDRRMA), in partnership with RIMES INGO. Delivers location-based warnings, interactive hazard maps, and real-time alerts for floods, lightning, forest fires, and landslides.",
    role: "Mobile Developer",
    stack: ["Flutter", "Firebase", "Maps"],
    logo: "/logos/satark.png",
    image: "/logos/satark.png",
    demo: "https://play.google.com/store/apps/details?id=com.nddrma.satark",
    code: "",
    outcome: "Live on Google Play — public disaster safety tool for Nepal",
    featured: true,
  },
  {
    id: "enabley",
    name: "Enabley LMS",
    tagline: "Enterprise learning platform — mobile & web",
    description:
      "Designed and built the mobile and web experience for Enabley's learning management system. Unified Flutter and React surfaces so learners and admins stay in sync across devices.",
    role: "Frontend Developer · Tech Lead",
    stack: ["Flutter", "React", "TypeScript", "Firebase"],
    logo: "/logos/enabley.png",
    logoDark: "/logos/enabley-white.png",
    image: "/logos/enabley.png",
    demo: "",
    code: "",
    outcome: "Production LMS used by enterprise training teams",
    featured: true,
  },
  {
    id: "himalayan-java",
    name: "Himalayan Java",
    tagline: "Loyalty & ordering for a national coffee brand",
    description:
      "React Native app connecting customers to Himalayan Java's loyalty program and store experience. Focus on performance, offline resilience, and a polished consumer UI.",
    role: "Mobile Developer",
    stack: ["React Native", "JavaScript"],
    logo: "/logos/himalayan-java.png",
    image: "/logos/himalayan-java.png",
    demo: "",
    code: "",
    outcome: "Consumer-facing app for a major Nepal coffee chain",
    featured: true,
  },
  {
    id: "bysst",
    name: "Bysst Music Distribution",
    tagline: "Independent artist distribution platform",
    description:
      "Flutter app for music distribution with integrated Stripe payments. Artists upload, manage releases, and track distribution from one mobile-first dashboard.",
    role: "Mobile Developer",
    stack: ["Flutter", "Stripe"],
    logo: "/logos/bysst.jpg",
    image: "/logos/bysst.jpg",
    demo: "",
    code: "",
    outcome: "End-to-end distribution workflow on mobile",
    featured: true,
  },
  {
    id: "xplora",
    name: "Xplora Plus",
    tagline: "Cross-platform discovery experience",
    description:
      "Built with Flutter and React — a flexible product shell for content discovery and user engagement, with shared design language across mobile and web.",
    role: "Software Engineer",
    stack: ["Flutter", "React"],
    image: "/image/ayla.jpg",
    demo: "",
    code: "",
    outcome: "Multi-surface product from a single codebase strategy",
    featured: false,
  },
];

export const skillGroups = [
  {
    category: "Mobile",
    skills: ["Flutter", "React Native", "Kotlin", "Android Native"],
  },
  {
    category: "Web",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Tools & Design",
    skills: ["Git", "Firebase", "Figma", "CI/CD"],
  },
];

export const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "FleetPanda",
    period: "Jan 2026 — Present",
    summary:
      "Building mobile experiences for a fuel and fleet delivery management platform — helping distributors manage orders, routes, dispatch, and delivery tracking at scale.",
    highlights: [
      "Ship features across order management, route builder, and driver dispatch workflows",
      "Support bulk plant, lubes delivery, and common carrier / 3PL operations on mobile",
      "Work with tenant-specific pricing, degree day, blend, and comparable product configurations",
      "Collaborate with product and backend on real-time delivery tracking and field-team tooling",
    ],
    stack: ["Flutter", "React Native", "TypeScript"],
    logo: "/logos/fleetpanda.jpg",
  },
  {
    id: 2,
    title: "Mobile Developer",
    company: "RIMES INGO",
    period: "Jan 2024 — Dec 2024",
    summary:
      "Developed SATARK, Nepal's official disaster management mobile app for NDRRMA — delivering location-based hazard alerts, interactive map tracking, and preparedness tools for floods, landslides, lightning, and forest fires.",
    highlights: [
      "Built and shipped the SATARK Android app published on Google Play",
      "Implemented location-based warnings and interactive hazard map views",
      "Integrated official NDRRMA disaster forecasts and timely alert notifications",
      "Collaborated with RIMES and government stakeholders on a public safety product",
    ],
    stack: ["Flutter", "Firebase", "Google Maps"],
    logo: "/logos/satark.png",
  },
  {
    id: 3,
    title: "Software Engineer & Tech Lead",
    company: "Enabley Pvt. Ltd.",
    period: "Jan 2022 — Dec 2025",
    summary: "Led mobile and web delivery for an enterprise LMS platform.",
    highlights: [
      "Owned architecture for Flutter and React client applications",
      "Coordinated cross-functional delivery with product and design",
      "Mentored engineers and established mobile best practices",
    ],
    stack: ["Flutter", "React", "TypeScript"],
    logo: "/logos/enabley.png",
    logoDark: "/logos/enabley-white.png",
  },
  {
    id: 4,
    title: "Senior Mobile Developer & Tech Lead",
    company: "CodingMountain Pvt. Ltd.",
    period: "Jan 2021 — Jul 2024",
    summary: "Shipped multiple client products across Flutter and React Native.",
    highlights: [
      "Delivered apps for fintech, retail, and media clients",
      "Led mobile squad through release cycles and App Store submissions",
      "Introduced reusable component libraries and code review standards",
    ],
    stack: ["Flutter", "React Native", "Firebase"],
  },
  {
    id: 5,
    title: "Android Mobile Developer",
    company: "E-Signature Pvt. Ltd.",
    period: "Jun 2019 — Feb 2020",
    summary: "Native Android development for document and signature workflows.",
    highlights: [
      "Built secure document capture and signing flows",
      "Optimized performance for low-end Android devices",
    ],
    stack: ["Kotlin", "Android SDK"],
  },
  {
    id: 6,
    title: "Android Mobile Developer",
    company: "Longtail e-media",
    period: "Apr 2017 — Dec 2018",
    summary: "Started professional mobile career building consumer Android apps.",
    highlights: [
      "Implemented UI from design specs with Material Design patterns",
      "Collaborated on API integration and offline caching strategies",
    ],
    stack: ["Java", "Android SDK"],
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Sailesh consistently delivers mobile experiences that feel polished on day one. His Flutter work on our LMS was production-ready and maintainable.",
    author: "Product Lead",
    role: "Enabley Pvt. Ltd.",
  },
  {
    id: 2,
    quote:
      "He brings calm leadership to complex projects. Our React Native release shipped on schedule because Sailesh anticipated integration issues early.",
    author: "Engineering Manager",
    role: "CodingMountain Pvt. Ltd.",
  },
  {
    id: 3,
    quote:
      "Rare combination of strong mobile craft and clear communication. He explains trade-offs in plain language — invaluable for non-technical stakeholders.",
    author: "Client Partner",
    role: "Agency collaboration",
  },
];

export const openSource = [
  {
    id: 1,
    name: "developer-portfolio",
    description: "Personal portfolio built with Next.js — this site, open for reference and fork.",
    url: "https://github.com/sailes-shakya/developer-portfolio",
    language: "JavaScript",
    stars: null,
  },
  {
    id: 2,
    name: "Mobile patterns & snippets",
    description: "Reusable Flutter and React Native utilities collected from production projects.",
    url: "https://github.com/sailes-shakya",
    language: "Dart / TypeScript",
    stars: null,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#opensource", label: "Open Source" },
  { href: "#resume", label: "Resume" },
];
