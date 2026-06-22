import { aboutContent } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-container"
      aria-labelledby="about-heading"
    >
      <SectionHeader
        label="About"
        title={aboutContent.headline}
        description="Learn who I am, how I work, and what you can expect when we collaborate."
        headingId="about-heading"
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={80}>
          <GlassCard className="p-8">
            {aboutContent.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-foreground-secondary leading-relaxed ${
                  i > 0 ? "mt-4" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </GlassCard>
        </Reveal>

        <Reveal delay={160}>
          <ul className="grid grid-cols-2 gap-4" role="list">
            {aboutContent.highlights.map((item) => (
              <li key={item.label}>
                <GlassCard className="p-5 text-center" as="article">
                  <p className="text-2xl font-bold text-accent">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                    {item.label}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
