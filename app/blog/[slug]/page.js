import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/data/site";

async function getBlog(slug) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles/${siteConfig.devUsername}/${slug}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (blog?.url) {
    redirect(blog.url);
  }

  redirect(`https://dev.to/${siteConfig.devUsername}`);
}
