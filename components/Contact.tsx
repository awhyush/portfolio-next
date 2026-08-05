import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="font-mono text-sm font-semibold text-foreground/60">
        04 — Contact
      </h2>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Let&apos;s work together.
        </h3>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/70">
          I&apos;m always open to discussing new projects, opportunities, or
          just talking shop. Reach out and I&apos;ll get back to you.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Email me
          </a>
          <a
            href={profile.github}
            className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
