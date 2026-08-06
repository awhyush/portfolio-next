import { ExternalLink, LayoutGrid } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6">
            Things I&apos;ve <span className="text-[#ef233c]">built</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden p-8 border border-white/10 bg-gradient-to-b from-zinc-900/50 to-black hover:border-white/20 transition-all rounded-xl"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c] w-fit">
                  <LayoutGrid className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-semibold text-white font-manrope mb-2 tracking-tight flex items-center gap-3">
                  {project.title}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-[#ef233c] transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="mb-6 space-y-2 text-zinc-400">
                  {project.points.map((point) => (
                    <li key={point.slice(0, 20)} className="flex gap-2">
                      <span className="text-[#ef233c]" aria-hidden="true">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, #ef233c, transparent 70%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
