import { useLayoutEffect } from 'react';

/** Locks <body> scroll while `isLocked` is true — used by the mobile menu. */
export default function useLockBodyScroll(isLocked) {
  useLayoutEffect(() => {
    if (!isLocked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isLocked]);
}