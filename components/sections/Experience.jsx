import { experiences } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import ProjectLogo from "@/components/ui/ProjectLogo";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container"
      aria-labelledby="experience-heading"
    >
      <SectionHeader
        label="Experience"
        title="Where I've led and shipped"
        description="A timeline of roles — from native Android to tech lead — so you can see depth and progression."
        headingId="experience-heading"
      />

      <ExperienceTimeline>
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={i * 70}>
            <li className="relative">
              <span
                className="absolute -left-[2.375rem] top-6 h-4 w-4 border-[3px] border-border bg-accent shadow-brutal-sm"
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
                    className="brutal-badge !text-[10px]"
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
      </ExperienceTimeline>
    </section>
  );
}
