import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="font-mono text-sm font-semibold text-foreground/60">
        03 — Skills
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold">{group.category}</h3>
            <ul className="space-y-1.5 text-sm text-foreground/70">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
