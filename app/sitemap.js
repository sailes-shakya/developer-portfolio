import { seoConfig, absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: seoConfig.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
