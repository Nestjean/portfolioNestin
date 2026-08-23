import { motion } from 'framer-motion';
import TimelineDot from './TimelineDot';
import { fadeInUp } from '../../animations/variants/fadeIn';

// Chronological order genuinely matters here, so alternating sides is used
// deliberately — not as decoration, but to make the sequence easy to scan.
export default function TimelineItem({ year, title, description, align }) {
  const isLeft = align === 'left';

  return (
    <motion.li
      variants={fadeInUp}
      className="relative pl-8 md:grid md:grid-cols-[1fr_2rem_1fr] md:items-start md:gap-6 md:pl-0"
    >
      {/* Mobile: dot sits on the left rail */}
      <span className="absolute left-0 top-1 md:hidden">
        <TimelineDot />
      </span>

      {/* Desktop left slot */}
      <div className={`hidden md:block ${isLeft ? 'text-right' : ''}`}>
        {isLeft && <Card year={year} title={title} description={description} />}
      </div>

      {/* Desktop center dot */}
      <div className="hidden md:flex md:justify-center md:pt-1.5">
        <TimelineDot />
      </div>

      {/* Desktop right slot */}
      <div className="hidden md:block">
        {!isLeft && <Card year={year} title={title} description={description} />}
      </div>

      {/* Mobile: single-column content */}
      <div className="md:hidden">
        <Card year={year} title={title} description={description} />
      </div>
    </motion.li>
  );
}

function Card({ year, title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-bg-surface p-5">
      <span className="font-mono text-xs font-medium text-violet-400">{year}</span>
      <h3 className="mt-1 font-display text-base font-semibold text-ink-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
    </div>
  );
}