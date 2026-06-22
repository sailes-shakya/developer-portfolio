import { siteConfig } from "@/lib/data/site";

export async function getDevToPosts(limit = 6) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${siteConfig.devUsername}&per_page=${limit}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
