import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const social = [
  { href: siteConfig.social.github, label: "GitHub", icon: FaGithub },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: siteConfig.social.twitter, label: "Twitter", icon: FaTwitter },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-border pb-8 pt-12">
      <div className="section-container !pt-0">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-foreground-secondary">
            © {year} {siteConfig.name} · Next.js
          </p>
          <ul className="flex items-center gap-3" role="list">
            {social.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn brutal-btn-secondary flex h-10 w-10 items-center justify-center !p-0 text-foreground-secondary hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
