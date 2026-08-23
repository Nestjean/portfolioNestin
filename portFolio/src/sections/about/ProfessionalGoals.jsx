import { motion } from 'framer-motion';
import { professionalGoals } from '../../data/professionalGoals';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { CheckIcon, TargetIcon } from '../../components/icons';

// Distinctive by structure, not by decoration: a single wide panel
// instead of a card grid, so it reads differently from the sections around it.
export default function ProfessionalGoals() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="px-6 py-24 md:px-10"
    >
      <motion.div
        variants={fadeInUp}
        className="mx-auto max-w-4xl rounded-3xl border border-violet-500/20 bg-gradient-to-br from-bg-surface to-bg-base p-8 md:p-12"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-violet-300">
            <TargetIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Professional Goals</span>
        </div>

        <h2 className="mt-5 font-display text-2xl font-bold text-ink-100 sm:text-3xl">
          What I'm Working Toward
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {professionalGoals.map((goal) => (
            <li key={goal} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-400" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-ink-400">{goal}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}