export default function Badge({ icon: Icon, children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-ink-400 ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />}
      {children}
    </span>
  );
}