import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="font-mono text-sm font-semibold text-foreground/60">
        02 — Projects
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group rounded-lg border border-black/10 p-6 transition-colors hover:border-foreground/30 dark:border-white/10"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.featured && (
                <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-xs font-medium text-foreground/70">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-black/10 px-2.5 py-1 font-mono text-xs text-foreground/60 dark:border-white/10"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              <a
                href={project.href}
                className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                Live demo
              </a>
              <a
                href={project.repo}
                className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
