import { profile, experience } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="font-mono text-sm font-semibold text-foreground/60">
        01 — About
      </h2>
      <div className="mt-6 grid gap-12 sm:grid-cols-5">
        <div className="sm:col-span-3">
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 20)}
              className="mb-4 text-base leading-relaxed text-foreground/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="sm:col-span-2">
          <h3 className="mb-4 text-sm font-semibold">Experience</h3>
          <ol className="space-y-6 border-l border-black/10 pl-5 dark:border-white/10">
            {experience.map((job) => (
              <li key={job.role + job.company} className="relative">
                <span className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full bg-foreground/40" />
                <p className="text-sm font-medium">{job.role}</p>
                <p className="text-sm text-foreground/60">
                  {job.company} · {job.period}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground/70">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 20)}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
