import { motion } from 'framer-motion';
import { CheckIcon } from '../../components/icons';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn';

export default function ProjectFeaturesList({ features }) {
  if (!features?.length) return null;
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mx-auto max-w-4xl">
      <motion.h2 variants={fadeInUp} className="font-display text-lg font-semibold text-ink-100">Key Features</motion.h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <motion.li key={feature} variants={fadeInUp} className="flex items-start gap-3">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-400" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-ink-400">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}