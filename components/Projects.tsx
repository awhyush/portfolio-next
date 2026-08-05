import { ArrowRight, LayoutGrid, ImageIcon, Wallet, Network } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/data";

const icons: Record<string, typeof LayoutGrid> = {
  orbit: LayoutGrid,
  pixelforge: ImageIcon,
  ledgerly: Wallet,
  notegraph: Network,
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-auto flex items-center gap-5 pt-6 text-sm font-medium">
      <a
        href={project.href}
        className="flex items-center gap-1.5 text-white hover:text-[#ef233c] transition-colors"
      >
        Live demo <ArrowRight className="w-3.5 h-3.5" />
      </a>
      <a
        href={project.repo}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
      >
        <GithubIcon className="w-3.5 h-3.5" /> Source
      </a>
    </div>
  );
}

export default function Projects() {
  const [primary, secondary, ...rest] = projects;
  const Icon0 = icons[primary.slug];
  const Icon1 = icons[secondary.slug];

  return (
    <section id="projects" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6">
            Things I&apos;ve <span className="text-[#ef233c]">built</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light">
            A handful of projects spanning full-stack apps, APIs, and tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[700px]">
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden p-8 border border-white/10 bg-gradient-to-b from-zinc-900/50 to-black hover:border-white/20 transition-all rounded-xl">
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c] w-fit">
                <Icon0 className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-semibold text-white font-manrope mb-4 tracking-tight">
                {primary.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {primary.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {primary.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <ProjectLinks project={primary} />
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, #ef233c, transparent 70%)" }}
            />
          </div>

          <div className="lg:col-span-2 group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl flex flex-col">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-blue-400 w-fit">
              <Icon1 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white font-manrope mb-2">
              {secondary.title}
            </h3>
            <p className="text-zinc-400">{secondary.description}</p>
            <ProjectLinks project={secondary} />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, #3b82f6, transparent 70%)" }}
            />
          </div>

          {rest.map((project) => {
            const Icon = icons[project.slug];
            return (
              <div
                key={project.slug}
                className="group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl flex flex-col"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-purple-400 w-fit">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white font-manrope mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400">{project.description}</p>
                <ProjectLinks project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
