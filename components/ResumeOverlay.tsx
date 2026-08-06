import { X } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumeOverlay() {
  return (
    <div
      id="resume-viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
      className="fixed inset-0 z-100 flex-col items-center justify-center bg-backdrop-strong backdrop-blur-sm p-4 sm:p-10"
    >
      <div className="flex w-full max-w-4xl items-center justify-between pb-3">
        <p
          id="resume-viewer-title"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Resume
        </p>
        <a
          href="#"
          aria-label="Close resume"
          className="rounded-full border border-border bg-surface p-2 text-muted hover:text-foreground hover:bg-surface-strong transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
      <iframe
        src={profile.resumeUrl}
        title={`${profile.name} — Resume`}
        className="w-full max-w-4xl flex-1 rounded-lg border border-border bg-white"
      />
    </div>
  );
}
