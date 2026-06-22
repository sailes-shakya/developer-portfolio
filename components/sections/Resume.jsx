import { siteConfig } from "@/lib/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { HiDocumentArrowDown, HiEnvelope } from "react-icons/hi2";

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-container"
      aria-labelledby="resume-heading"
    >
      <Reveal>
        <GlassCard className="overflow-hidden p-8 sm:p-12" hover={false}>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Resume"
                title="Ready to dive deeper?"
                description="Download my CV for a full picture of experience, skills, and contact details — or email me directly to start a conversation."
                headingId="resume-heading"
              />
              <div className="flex flex-wrap gap-4">
                <Button href={siteConfig.resumeUrl} variant="primary" external>
                  <HiDocumentArrowDown className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </Button>
                <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                  <HiEnvelope className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </Button>
              </div>
            </div>
            <div className="brutal-panel-solid p-6">
              <h3 className="brutal-label !mb-4">Quick facts</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b-2 border-border/20 pb-2">
                  <dt className="font-mono text-xs font-bold uppercase text-muted">Location</dt>
                  <dd className="font-bold text-foreground">{siteConfig.location}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b-2 border-border/20 pb-2">
                  <dt className="font-mono text-xs font-bold uppercase text-muted">Phone</dt>
                  <dd className="font-bold text-foreground">{siteConfig.phone}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b-2 border-border/20 pb-2">
                  <dt className="font-mono text-xs font-bold uppercase text-muted">Focus</dt>
                  <dd className="font-bold text-foreground">Flutter · React Native</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-mono text-xs font-bold uppercase text-muted">Status</dt>
                  <dd className="font-bold text-accent">Open to opportunities</dd>
                </div>
              </dl>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
