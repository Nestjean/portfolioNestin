

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-bg-surface shadow-2xl">
        <img src="/images/profil/nestin.jpg" alt="Nestin" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
