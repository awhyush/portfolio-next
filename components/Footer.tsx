import { profile } from "@/lib/data";

const platformLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const elsewhereLinks = [
  { href: profile.website, label: "Website" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, label: "Email" },
  { href: profile.resumeUrl, label: "Resume" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45" />
            <span className="text-2xl font-bold font-manrope tracking-tight">
              {profile.name}
            </span>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            {profile.role} based in {profile.location}, building fast and
            reliable web apps end to end.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">
            Site
          </h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {platformLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">
            Elsewhere
          </h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {elsewhereLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 opacity-20 pointer-events-none">
        <h1 className="text-[15vw] leading-none font-bold font-manrope tracking-tighter text-stroke select-none">
          {profile.name.toUpperCase()}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-[10px] uppercase tracking-widest">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with
          Next.js.
        </p>
        <p className="mt-4 md:mt-0">v0.2.0 · red-noir</p>
      </div>
    </footer>
  );
}
