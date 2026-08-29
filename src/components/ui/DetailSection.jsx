// Generic title + content block — reused for Overview, Problem, Solution,
// Challenges, and Lessons Learned so those five sections share one component
// instead of five near-identical ones.
export default function DetailSection({ title, children }) {
  if (!children) return null;
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-ink-100">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-400">{children}</p>
    </div>
  );
}