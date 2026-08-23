import { NavLink as RouterNavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Uses layoutId so the underline animates smoothly between whichever link is active,
// instead of every link drawing its own static underline.
export default function NavLink({ to, label, icon: Icon, onClick }) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative inline-flex items-center gap-2 rounded py-1 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
          isActive ? 'text-ink-100' : 'text-ink-400 hover:text-ink-100'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
          <span>{label}</span>
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-violet-400"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </>
      )}
    </RouterNavLink>
  );
}
