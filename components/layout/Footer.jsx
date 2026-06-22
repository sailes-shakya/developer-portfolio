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
    <footer className="border-t border-border/10 pb-8 pt-12">
      <div className="section-container !pt-0">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-foreground-secondary">
            © {year} {siteConfig.name}. Built with Next.js.
          </p>
          <ul className="flex items-center gap-4" role="list">
            {social.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-foreground-secondary transition-colors hover:bg-accent/10 hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
