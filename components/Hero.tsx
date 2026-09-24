import { ArrowRight, FileText } from "lucide-react";
import { profile, skills } from "@/lib/data";

const toolStrip = skills.flatMap((group) => group.items);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-16 bg-radial-editorial">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 backdrop-blur-md animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-medium tracking-wide text-foreground/80">
            Open to new opportunities
          </span>
        </div>

        <h1
          className="animate-fade-up text-[13vw] leading-[0.85] font-black tracking-tighter md:text-[12vw]"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.name}
        </h1>

        <p
          className="animate-fade-up mt-4 text-[6vw] leading-[0.95] font-semibold tracking-tighter text-muted md:text-[4vw]"
          style={{ animationDelay: "0.3s" }}
        >
          builds for the{" "}
          <span className="relative inline-block text-accent">
            real world
          </span>
        </p>

        <div
          className="animate-fade-up mx-auto mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#projects" className="shiny-cta group">
            <span className="relative z-10 flex items-center gap-2 text-foreground font-medium">
              View my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </a>

          <a
            href="#resume-viewer"
            className="btn-invert group flex items-center gap-2 rounded-full px-8 py-4 font-medium"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            View resume
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex w-full max-w-6xl flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm md:flex-row animate-fade-up">
        <div className="text-center md:text-left">
          <p className="text-muted">{profile.role}</p>
          <p className="text-subtle">Based in {profile.location}</p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="group border-b border-border-strong pb-0.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {profile.email}
        </a>
      </div>

      <div className="mx-auto mt-16 w-full max-w-5xl rounded-2xl border-y border-border bg-surface py-10 backdrop-blur-sm">
        <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-subtle">
          Tools I reach for
        </p>
        <p className="sr-only">{toolStrip.join(", ")}</p>
        <div
          className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused]">
            {[...toolStrip, ...toolStrip].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 font-mono text-sm text-muted hover:border-accent/50 hover:text-foreground transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
