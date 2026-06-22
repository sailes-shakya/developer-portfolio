import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import OpenSource from "@/components/sections/OpenSource";
import Resume from "@/components/sections/Resume";
import { getDevToPosts } from "@/lib/blog";
import { seoConfig } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata = {
  title: `${siteConfig.name} | ${seoConfig.jobTitle} — ${seoConfig.roleFocus}`,
  description: seoConfig.longDescription,
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} | ${seoConfig.jobTitle}`,
    description: seoConfig.longDescription,
    url: seoConfig.siteUrl,
    type: "profile",
  },
};

export default async function Home() {
  const posts = await getDevToPosts(6);

  return (
    <>
      <h1 className="sr-only">
        {siteConfig.name} — {seoConfig.jobTitle} and {seoConfig.roleFocus} from{" "}
        {siteConfig.location}
      </h1>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Blog posts={posts} />
      <OpenSource />
      <Resume />
    </>
  );
}
