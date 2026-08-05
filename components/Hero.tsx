import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 sm:py-32">
      <p className="font-mono text-sm text-foreground/60">Hi, I&apos;m</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <h2 className="text-xl font-medium text-foreground/70 sm:text-2xl">
        {profile.role}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
