import Link from "next/link";
import { openSource } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="section-container"
      aria-labelledby="opensource-heading"
    >
      <SectionHeader
        label="Open Source"
        title="Code in the open"
        description="Repositories and snippets I share publicly — fork, reference, or reach out if you want to collaborate."
        headingId="opensource-heading"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {openSource.map((repo, i) => (
          <Reveal key={repo.id} delay={i * 80}>
            <GlassCard className="p-6" as="article">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-foreground">{repo.name}</h3>
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted transition-colors hover:text-accent"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <HiArrowTopRightOnSquare className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                {repo.description}
              </p>
              <Badge className="mt-4">{repo.language}</Badge>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
