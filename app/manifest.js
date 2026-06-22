import { siteConfig } from "@/lib/data/site";
import { seoConfig, absoluteUrl } from "@/lib/seo";

export default function manifest() {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: siteConfig.name,
    description: seoConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#070b14",
    theme_color: "#0d9488",
    lang: "en",
    icons: [
      {
        src: absoluteUrl("/profile.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
