import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data/site";

export default function Blog({ posts = [] }) {
  const visible = posts.filter((p) => p?.cover_image).slice(0, 3);

  return (
    <section
      id="blog"
      className="section-container"
      aria-labelledby="blog-heading"
    >
      <SectionHeader
        label="Blog"
        title="Writing & technical notes"
        description="Articles on mobile development, tooling, and lessons from production — read the latest or browse all posts."
        headingId="blog-heading"
      />

      {visible.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <GlassCard className="group overflow-hidden p-0" as="article">
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.cover_image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <time
                      dateTime={post.published_at}
                      className="text-xs text-muted"
                    >
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="mt-2 line-clamp-2 text-base font-bold text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <GlassCard className="p-8 text-center">
            <p className="text-foreground-secondary">
              New posts are on the way. Follow me on{" "}
              <Link
                href={`https://dev.to/${siteConfig.devUsername}`}
                className="font-semibold text-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                dev.to
              </Link>{" "}
              for updates.
            </p>
          </GlassCard>
        </Reveal>
      )}

      <Reveal delay={120} className="mt-8 text-center">
        <Button
          href={`https://dev.to/${siteConfig.devUsername}`}
          variant="secondary"
          external
        >
          Read all articles
        </Button>
      </Reveal>
    </section>
  );
}
