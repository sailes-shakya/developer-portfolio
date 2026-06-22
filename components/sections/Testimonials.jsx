import { testimonials } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-container"
      aria-labelledby="testimonials-heading"
    >
      <Reveal>
        <SectionHeader
          label="Testimonials"
          title="What collaborators say"
          description="Feedback from teams I've worked with — on delivery, leadership, and communication."
          headingId="testimonials-heading"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <GlassCard className="flex h-full flex-col p-6" as="blockquote">
              <p className="flex-1 text-foreground-secondary leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border/10 pt-4">
                <cite className="not-italic">
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </cite>
              </footer>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
