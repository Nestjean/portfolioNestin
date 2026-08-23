import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants/fadeIn';

// Shared eyebrow + heading + optional description used across every section
// on About (and reusable for Skills/Projects/Contact later).
export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <motion.div variants={fadeInUp} className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-ink-400">{description}</p>}
    </motion.div>
  );
}