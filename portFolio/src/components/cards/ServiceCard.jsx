import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants/fadeIn';

// Icon + title + description card. Shared by "What I Do" and "How I Work"
// so the two grids stay visually consistent without duplicating markup.
export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-2xl border border-white/10 bg-bg-surface p-6 transition-colors duration-300 hover:border-violet-400/50"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition-colors duration-300 group-hover:bg-violet-500/20">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
    </motion.div>
  );
}