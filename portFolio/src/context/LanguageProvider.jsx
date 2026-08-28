import { useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from '../constants/translations';

const STORAGE_KEY = 'portfolio-language';

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem(STORAGE_KEY) || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));

  // Looks up a dot-notation key ('nav.home') in the active language's dictionary.
  // Falls back to the key itself if a translation is missing, so a typo
  // shows up visibly instead of rendering blank text.
  const t = (key) => {
    const value = key.split('.').reduce((acc, part) => acc?.[part], translations[language]);
    return value ?? key;
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
}