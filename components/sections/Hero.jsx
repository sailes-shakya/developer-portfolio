import Image from "next/image";
import { siteConfig } from "@/lib/data/site";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-container flex min-h-[90vh] flex-col justify-center !pb-16 !pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Badge className="mb-6">Senior Software Engineer</Badge>
          <h2
            id="hero-heading"
            className="text-hero font-bold leading-[1.1] tracking-tight text-foreground"
          >
            Mobile products that feel{" "}
            <span className="text-gradient font-extrabold">native</span> in your
            hand.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground-secondary">
            {siteConfig.tagline} Explore case studies, skills, and writing — or
            download my resume to see if we&apos;re a fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View projects</Button>
            <Button href="#resume" variant="secondary">
              Download resume
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">{siteConfig.availability}</p>
        </Reveal>

        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <GlassCard className="relative overflow-hidden p-6 sm:p-8" hover={false}>
            <div className="iphone-frame mx-auto">
              <div className="iphone-screen">
                <div className="iphone-island" aria-hidden="true" />
                <Image
                  src={siteConfig.profileImage}
                  alt={`Illustration of ${siteConfig.name} coding at a desk`}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 260px, 280px"
                />
                <div className="iphone-screen-glare" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-foreground">
                {siteConfig.name}
              </p>
              <p className="text-sm text-foreground-secondary">
                {siteConfig.title}
              </p>
              <p className="mt-1 text-xs text-muted">{siteConfig.location}</p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
