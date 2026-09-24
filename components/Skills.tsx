import { Code2, Layout, Server, Wrench, Brain } from "lucide-react";
import { skills } from "@/lib/data";

const categoryStyle: Record<
  string,
  { icon: typeof Code2; text: string; border: string; glow: string }
> = {
  Languages: {
    icon: Code2,
    text: "text-accent",
    border: "hover:border-accent/40",
    glow: "var(--accent)",
  },
  Frontend: {
    icon: Layout,
    text: "text-blue-400",
    border: "hover:border-blue-400/40",
    glow: "#3b82f6",
  },
  Backend: {
    icon: Server,
    text: "text-yellow-400",
    border: "hover:border-yellow-400/40",
    glow: "#eab308",
  },
  Tools: {
    icon: Wrench,
    text: "text-purple-400",
    border: "hover:border-purple-400/40",
    glow: "#a855f7",
  },
  "Core Concepts": {
    icon: Brain,
    text: "text-green-400",
    border: "hover:border-green-400/40",
    glow: "#22c55e",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
            What I work <span className="text-accent">with.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((group) => {
            const style = categoryStyle[group.category] ?? categoryStyle.Languages;
            const Icon = style.icon;
            return (
              <div
                key={group.category}
                className={`group relative overflow-hidden rounded-2xl bg-background-elevated p-6 border border-transparent transition-all ${style.border}`}
              >
                <div
                  className={`mb-4 inline-flex p-3 rounded-lg bg-surface border border-border ${style.text}`}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted transition-colors hover:text-foreground ${style.border}`}
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
