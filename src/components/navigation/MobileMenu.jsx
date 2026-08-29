import { AnimatePresence, motion } from 'framer-motion';
import NavLink from './NavLink';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';
import { navLinks } from '../../constants/navLinks';
import { CloseIcon } from '../icons';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const panelVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 32 } },
  exit: { x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
};

const listVariants = { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } };

export default function MobileMenu({ isOpen, onClose }) {
  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-bg-base/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            key="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-xs flex-col gap-8 bg-bg-surface p-8 shadow-2xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-ink-400 transition-colors hover:bg-overlay hover:text-ink-100"
                aria-label="Close menu"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <motion.ul variants={listVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <motion.li key={link.path} variants={itemVariants}>
                  <NavLink to={link.path} translationKey={link.key} onClick={onClose} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}