export default function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-ink-400">{label}</span>
        <span className="block text-sm font-medium text-ink-100">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className="-m-2 flex items-center gap-4 rounded-xl p-2 transition-colors duration-200 hover:bg-overlay">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
}