import { Code2, Layout, Server, Database } from "lucide-react";
import { skills } from "@/lib/data";

const icons: Record<string, typeof Code2> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  "Data & Infra": Database,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <div
                key={group.category}
                className="group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white font-manrope mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-1.5 text-sm text-zinc-400">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
