import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { profile, experience, education, achievements } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
            The person <br />
            behind <span className="text-accent">the code.</span>
          </h2>
        </div>

        {/* Benefits-style bento pair */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          <div className="lg:col-span-2 rounded-3xl bg-background-elevated p-8 md:p-10">
            <p className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.95] text-foreground">
              2+ years.{" "}
              <span className="text-muted">
                Shipping real products across healthcare and fintech.
              </span>
            </p>
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="mt-6 text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/15 via-background-elevated to-blue-500/15 border border-border p-8 md:p-10">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-subtle mb-4">
                Impact at a glance
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">3s+</p>
                  <p className="mt-1 text-sm text-muted">Faster initial page load for 100K+ users</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">40%</p>
                  <p className="mt-1 text-sm text-muted">Faster UI development via a shared design system</p>
                </div>
              </div>
            </div>
            <span
              className="animate-float absolute right-8 top-8 badge-float text-sm"
              aria-hidden="true"
            >
              {education.detail}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          <div className="lg:col-span-3 rounded-3xl bg-background-elevated p-8">
            <div className="mb-6 inline-flex p-3 rounded-lg bg-surface border border-border text-accent">
              <Briefcase className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-6">Experience</h3>
            <ol className="space-y-8 border-l border-border pl-5">
              {experience.map((job) => (
                <li key={job.company + job.period} className="relative">
                  <span className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  {job.roles ? (
                    <>
                      <p className="text-sm font-medium text-foreground">{job.company}</p>
                      <p className="text-sm text-subtle">{job.period}</p>
                      <div className="mt-3 space-y-4">
                        {job.roles.map((role) => (
                          <div key={role.title}>
                            <p className="text-sm font-medium text-muted">
                              {role.title}
                            </p>
                            <p className="text-xs text-subtle">{role.period}</p>
                            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted">
                              {role.points.map((point) => (
                                <li key={point.slice(0, 20)}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-foreground">{job.role}</p>
                      <p className="text-sm text-subtle">
                        {job.company} · {job.period}
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
                        {job.points.map((point) => (
                          <li key={point.slice(0, 20)}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {job.stack && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {job.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-subtle"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-3xl bg-background-elevated p-8">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-surface border border-border text-accent">
                <GraduationCap className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2">Education</h3>
              <p className="text-sm font-medium text-foreground">{education.degree}</p>
              <p className="text-sm text-subtle">
                {education.school} · {education.period}
              </p>
              <p className="mt-1 text-sm text-muted">{education.detail}</p>
            </div>

            <div className="rounded-3xl bg-background-elevated p-8">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-surface border border-border text-accent">
                <Trophy className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3">Achievements</h3>
              <ul className="space-y-2 text-sm text-muted">
                {achievements.map((point) => (
                  <li key={point.slice(0, 20)} className="flex gap-2">
                    <span className="text-accent" aria-hidden="true">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
