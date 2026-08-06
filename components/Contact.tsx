import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-32 px-6 text-center bg-background-elevated/40"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold font-manrope mb-8 tracking-tighter">
          Let&apos;s <span className="text-accent">build</span> something.
        </h2>
        <p className="text-xl text-muted mb-12">
          I&apos;m always open to discussing new projects, opportunities, or
          just talking shop. Reach out and I&apos;ll get back to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="shiny-cta group w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2 text-foreground font-medium">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email me
            </span>
          </a>
          <a
            href={profile.linkedin}
            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-background-elevated border border-border-strong text-muted font-medium hover:text-foreground hover:bg-surface-strong transition-all flex items-center justify-center gap-2"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
