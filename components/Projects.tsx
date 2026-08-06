import { LayoutGrid } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight font-manrope mb-6">
            Things I&apos;ve <span className="text-accent">built</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden p-8 border border-border bg-linear-to-b from-background-elevated/50 to-background hover:border-border-strong transition-all rounded-xl"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-surface border border-border text-accent w-fit">
                  <LayoutGrid className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-semibold text-foreground font-manrope mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted text-lg leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="mb-6 space-y-2 text-muted">
                  {project.points.map((point) => (
                    <li key={point.slice(0, 20)} className="flex gap-2">
                      <span className="text-accent" aria-hidden="true">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, var(--accent), transparent 70%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
