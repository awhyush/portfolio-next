import { ArrowRight, Globe } from "lucide-react";
import { profile, skills } from "@/lib/data";

const toolStrip = skills.flatMap((group) => group.items).slice(0, 6);

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-40 pb-20 px-6">
      <div className="text-center max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef233c]" />
          </span>
          <span className="text-xs font-medium text-red-100/90 tracking-wide font-manrope">
            Open to new opportunities
          </span>
          <ArrowRight className="w-3 h-3 text-red-400" />
        </div>

        <h1
          className="text-6xl md:text-8xl font-semibold tracking-tighter font-manrope leading-[1.1] mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            {profile.name}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            builds for the{" "}
            <span className="text-[#ef233c] inline-block relative">
              real world
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-[#ef233c] opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
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
          className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#projects" className="shiny-cta group">
            <span className="relative z-10 flex items-center gap-2 text-white font-medium">
              View my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href={profile.website}
            className="group px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            Visit my site
          </a>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-32 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-10 opacity-60 hover:opacity-100 transition-opacity rounded-2xl">
        <div className="px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase shrink-0">
            Tools I reach for:
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center w-full">
            {toolStrip.map((tool) => (
              <div key={tool} className="flex items-center gap-2 font-manrope font-semibold">
                <div className="w-6 h-6 bg-white/20 rounded-full" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
