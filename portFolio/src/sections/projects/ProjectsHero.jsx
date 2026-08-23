import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import { SparkleIcon } from '../../components/icons';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-bg-base px-6 pb-16 pt-32 md:px-10 md:pt-40">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-700/15 blur-[110px]" aria-hidden="true" />
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
       
        <motion.h1 variants={fadeInUp} className="font-display text-3xl font-bold text-ink-100 sm:text-4xl lg:text-5xl">
          Things I've Built
        </motion.h1>
        <motion.p variants={fadeInUp} className="max-w-lg text-base leading-relaxed text-ink-400">
          A selection of projects I've built while learning and applying modern technologies to solve practical problems.
        </motion.p>
      </motion.div>
    </section>
  );
}