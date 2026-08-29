import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router preserves scroll position between route changes by default
// (unlike a traditional multi-page site). This resets it on every navigation.
export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
}