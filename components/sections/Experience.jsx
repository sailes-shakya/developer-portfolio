import { experiences } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import ProjectLogo from "@/components/ui/ProjectLogo";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container"
      aria-labelledby="experience-heading"
    >
      <Reveal>
        <SectionHeader
          label="Experience"
          title="Where I've led and shipped"
          description="A timeline of roles — from native Android to tech lead — so you can see depth and progression."
          headingId="experience-heading"
        />
      </Reveal>

      <ol className="relative space-y-6 border-l border-border/15 pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={i * 70}>
            <li className="relative">
              <span
                className="absolute -left-[2.125rem] top-6 h-3 w-3 rounded-full border-2 border-accent bg-[rgb(var(--color-bg))]"
                aria-hidden="true"
              />
              <GlassCard className="p-6" as="article">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <ProjectLogo
                        src={exp.logo}
                        darkSrc={exp.logoDark}
                        alt={`${exp.company} logo`}
                        className="h-12 w-12"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <time
                    dateTime={exp.period}
                    className="text-xs font-medium text-muted"
                  >
                    {exp.period}
                  </time>
                </div>
                <p className="mt-3 text-sm text-foreground-secondary">
                  {exp.summary}
                </p>
                <ul className="mt-4 space-y-2" role="list">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted before:mr-2 before:text-accent before:content-['→']"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" role="list">
                  {exp.stack.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
