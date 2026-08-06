import { X } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumeOverlay() {
  return (
    <div
      id="resume-viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
      className="fixed inset-0 z-100 flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10"
    >
      <div className="flex w-full max-w-4xl items-center justify-between pb-3">
        <p
          id="resume-viewer-title"
          className="font-mono text-xs uppercase tracking-widest text-zinc-400"
        >
          Resume
        </p>
        <a
          href="#"
          aria-label="Close resume"
          className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
      <iframe
        src={profile.resumeUrl}
        title={`${profile.name} — Resume`}
        className="w-full max-w-4xl flex-1 rounded-lg border border-white/10 bg-white"
      />
    </div>
  );
}
