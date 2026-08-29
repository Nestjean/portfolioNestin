export default function TextAreaField({ id, label, error, ...props }) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink-100">{label}</label>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 w-full resize-none rounded-xl border bg-bg-base px-4 py-3 text-sm text-ink-100 placeholder:text-ink-400/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 ${
          error ? 'border-red-400/60' : 'border-border'
        }`}
        {...props} 
      />
      {error && <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}