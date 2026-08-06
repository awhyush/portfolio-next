import { ArrowRight, FileText } from "lucide-react";
import { profile, skills } from "@/lib/data";

const toolStrip = skills.flatMap((group) => group.items);

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-40 pb-20 px-6">
      <div className="text-center max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border backdrop-blur-md mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-medium text-foreground/80 tracking-wide font-manrope">
            Open to new opportunities
          </span>
          <ArrowRight className="w-3 h-3 text-accent" aria-hidden="true" />
        </div>

        <h1
          className="text-6xl md:text-8xl font-semibold tracking-tighter font-manrope leading-[1.1] mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-foreground via-foreground to-foreground/40">
            {profile.name}
          </span>
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-foreground via-foreground to-foreground/40">
            builds for the{" "}
            <span className="text-accent inline-block relative">
              real world
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-accent opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-up"
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
            className="group px-8 py-4 rounded-full bg-background-elevated border border-border-strong text-muted font-medium hover:text-foreground hover:bg-surface-strong transition-all flex items-center gap-2"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            View resume
          </a>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-32 border-y border-border bg-surface backdrop-blur-sm py-10 rounded-2xl">
        <p className="text-center text-sm font-bold tracking-widest text-subtle uppercase mb-6">
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
