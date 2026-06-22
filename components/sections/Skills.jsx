import { skillGroups } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-container"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <SectionHeader
          label="Skills"
          title="Tech stack I ship with"
          description="Tools and frameworks I use daily to build, release, and maintain mobile and web products."
          headingId="skills-heading"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <GlassCard className="h-full p-6" as="article">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-3" role="list">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-foreground-secondary"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
