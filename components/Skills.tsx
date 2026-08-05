import { Code2, Layout, Server, Wrench, Brain } from "lucide-react";
import { skills } from "@/lib/data";

const categoryStyle: Record<
  string,
  { icon: typeof Code2; color: string; text: string; border: string; glow: string }
> = {
  Languages: {
    icon: Code2,
    color: "#ef233c",
    text: "text-[#ef233c]",
    border: "hover:border-[#ef233c]/40",
    glow: "#ef233c",
  },
  Frontend: {
    icon: Layout,
    color: "#3b82f6",
    text: "text-blue-400",
    border: "hover:border-blue-400/40",
    glow: "#3b82f6",
  },
  Backend: {
    icon: Server,
    color: "#eab308",
    text: "text-yellow-400",
    border: "hover:border-yellow-400/40",
    glow: "#eab308",
  },
  Tools: {
    icon: Wrench,
    color: "#a855f7",
    text: "text-purple-400",
    border: "hover:border-purple-400/40",
    glow: "#a855f7",
  },
  "Core Concepts": {
    icon: Brain,
    color: "#22c55e",
    text: "text-green-400",
    border: "hover:border-green-400/40",
    glow: "#22c55e",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6">
            What I work <span className="text-[#ef233c]">with</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((group) => {
            const style = categoryStyle[group.category] ?? categoryStyle.Languages;
            const Icon = style.icon;
            return (
              <div
                key={group.category}
                className={`group relative overflow-hidden p-6 border border-white/10 bg-black transition-all rounded-xl ${style.border}`}
              >
                <div
                  className={`mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 ${style.text}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white font-manrope mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-400 transition-colors hover:text-white ${style.border}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${style.glow}, transparent 70%)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
