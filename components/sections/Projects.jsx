import Image from "next/image";
import { projects } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import HoverLift from "@/components/ui/HoverLift";
import ProjectLogo from "@/components/ui/ProjectLogo";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-container"
      aria-labelledby="projects-heading"
    >
      <SectionHeader
        label="Projects"
        title="Case studies from production mobile work"
        description="See how I approach real products — from enterprise LMS to consumer apps — and what outcomes teams got."
        headingId="projects-heading"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <HoverLift>
              <GlassCard className="group overflow-hidden p-0" as="article">
                <div className="grid sm:grid-cols-[140px_1fr]">
                  <div className="flex items-center justify-center border-b-[3px] border-border bg-surface p-6 sm:border-b-0 sm:border-r-[3px] sm:p-4">
                    <ProjectLogo
                      src={project.logo || project.image}
                      darkSrc={project.logoDark}
                      alt={`${project.name} logo`}
                      className="h-24 w-24"
                    />
                  </div>
                  <div className="p-6 sm:pl-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      {project.role}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground-secondary">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                    <p className="mt-3 font-mono text-xs font-bold uppercase text-foreground">
                      → {project.outcome}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {project.stack.map((tech) => (
                        <li key={tech}>
                          <Badge>{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex font-mono text-xs font-bold uppercase tracking-wide text-accent underline decoration-[2px] underline-offset-4 hover:text-foreground"
                      >
                        View on Google Play →
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </HoverLift>
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <HoverLift>
                <GlassCard className="p-6" as="article">
                  {project.logo && (
                    <ProjectLogo
                      src={project.logo}
                      darkSrc={project.logoDark}
                      alt={`${project.name} logo`}
                      className="mb-4 h-14 w-14"
                    />
                  )}
                  <h3 className="text-lg font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" role="list">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
