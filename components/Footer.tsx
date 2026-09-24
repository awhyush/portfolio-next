import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const platformLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-[14vw] leading-[0.85] font-black tracking-tighter md:text-8xl">
          Craft more.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="max-w-xs leading-relaxed text-subtle">
              {profile.role} based in {profile.location}, building fast and
              reliable web apps end to end.
            </p>
          </div>

          <nav aria-label="Footer site links">
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">
              Site
            </h4>
            <ul className="space-y-4 text-muted text-sm">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">
              Elsewhere
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border-strong text-muted transition-all hover:-translate-y-2 hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-subtle text-[10px] uppercase tracking-widest">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with
          Next.js.
        </p>
        <p className="mt-4 md:mt-0">v0.3.0 · midnight-editorial</p>
      </div>
    </footer>
  );
}
