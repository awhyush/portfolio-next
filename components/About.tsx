import { User, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { profile, experience, education, achievements } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6">
            The person behind <br />
            <span className="text-[#ef233c]">the code</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          <div className="lg:col-span-2 group relative overflow-hidden p-8 border border-white/10 bg-gradient-to-b from-zinc-900/50 to-black hover:border-white/20 transition-all rounded-xl">
            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c]">
              <User className="w-6 h-6" aria-hidden="true" />
            </div>
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="mb-4 text-lg leading-relaxed text-zinc-400 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-3 group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl">
            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c]">
              <Briefcase className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-white font-manrope mb-6">
              Experience
            </h3>
            <ol className="space-y-8 border-l border-white/10 pl-5">
              {experience.map((job) => (
                <li key={job.company + job.period} className="relative">
                  <span className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full bg-[#ef233c]" aria-hidden="true" />
                  {job.roles ? (
                    <>
                      <p className="text-sm font-medium text-white">{job.company}</p>
                      <p className="text-sm text-zinc-500">{job.period}</p>
                      <div className="mt-3 space-y-4">
                        {job.roles.map((role) => (
                          <div key={role.title}>
                            <p className="text-sm font-medium text-zinc-300">
                              {role.title}
                            </p>
                            <p className="text-xs text-zinc-500">{role.period}</p>
                            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-zinc-400">
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
                      <p className="text-sm font-medium text-white">{job.role}</p>
                      <p className="text-sm text-zinc-500">
                        {job.company} · {job.period}
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-400">
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
                          className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-zinc-500"
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c]">
              <GraduationCap className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white font-manrope mb-2">
              Education
            </h3>
            <p className="text-sm font-medium text-white">{education.degree}</p>
            <p className="text-sm text-zinc-500">
              {education.school} · {education.period}
            </p>
            <p className="mt-1 text-sm text-zinc-400">{education.detail}</p>
          </div>

          <div className="lg:col-span-3 group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c]">
              <Trophy className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white font-manrope mb-3">
              Achievements
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {achievements.map((point) => (
                <li key={point.slice(0, 20)} className="flex gap-2">
                  <span className="text-[#ef233c]" aria-hidden="true">—</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
