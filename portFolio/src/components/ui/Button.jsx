import { Link } from 'react-router-dom';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none';

const variants = {
  primary:
    'bg-violet-500 text-ink-100 hover:bg-violet-400 hover:shadow-[0_0_24px_4px_rgba(124,92,255,0.45)] active:scale-[0.98]',
  secondary:
    'border border-white/15 text-ink-100 hover:border-violet-400 hover:bg-white/5 active:scale-[0.98]',
};

export default function Button({ to, href, onClick, variant = 'primary', icon: Icon, children, ...props }) {
  const className = `${baseStyles} ${variants[variant]}`;
  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (to) {
    return <Link to={to} className={className} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>{content}</a>;
  }

  return <button onClick={onClick} className={className} {...props}>{content}</button>;
}