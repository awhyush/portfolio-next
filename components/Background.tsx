export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute top-0 left-0 w-px h-px bg-transparent stars-1 animate-[animStar_50s_linear_infinite]" />
      <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-transparent stars-2 animate-[animStar_80s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grid-lines" />
    </div>
  );
}
