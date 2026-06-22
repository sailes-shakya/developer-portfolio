import { redirect } from "next/navigation";
import Blog from "@/components/sections/Blog";
import { getDevToPosts } from "@/lib/blog";
import { absoluteUrl, seoConfig } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata = {
  title: "Blog — Mobile Development & Engineering",
  description: `Read articles by ${siteConfig.name} on Flutter, React Native, mobile architecture, and lessons from production apps.`,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: `Technical writing on mobile development by ${siteConfig.name}.`,
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getDevToPosts(24);

  if (posts.length === 0) {
    redirect(`https://dev.to/${siteConfig.devUsername}`);
  }

  return (
    <div className="pt-20">
      <Blog posts={posts} />
    </div>
  );
}
