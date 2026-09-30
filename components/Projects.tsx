import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
            Things I&apos;ve <span className="text-accent">built.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
          {projects.map((project, index) => (
            <a
              key={project.slug}
              href={project.url}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              className={`group block ${index % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-border bg-background-elevated">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
                {project.tags[0]}
              </p>
              <h3 className="mb-2 flex items-center gap-2 text-3xl font-bold text-foreground">
                {project.title}
                {project.url && (
                  <ExternalLink
                    className="h-5 w-5 text-subtle transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                )}
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-muted">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
