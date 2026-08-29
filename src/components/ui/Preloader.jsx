import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

// Shown once when the site first loads. The timeout is a deliberate minimum
// display time — the point is a brief, intentional brand moment, not a
// loading indicator tied to actual asset load time.
export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  useLockBodyScroll(isVisible);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), shouldReduceMotion ? 400 : 1400);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.span
            className="font-display text-6xl font-bold text-ink-100 sm:text-7xl"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            N
            <motion.span
              className="text-violet-400"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              .
            </motion.span>
          </motion.span>
          <span className="sr-only">Loading portfolio</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}