import useLanguage from '../../context/useLanguage';

// Shows the language you'll switch TO — the common convention for a
// single-button toggle (click "FR" while reading English to view it in French).
export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to French' : 'Switch to English'}
      className="flex h-9 items-center justify-center rounded-full border border-border px-3 font-mono text-xs font-medium text-ink-400 transition-colors duration-200 hover:border-violet-400/50 hover:text-ink-100"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}