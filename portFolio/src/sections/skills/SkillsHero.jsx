import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

export default function SkillsHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pt-40">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
      >
        

        <motion.h1 variants={fadeInUp} className="font-display text-3xl font-bold text-ink-100 sm:text-4xl lg:text-5xl">
          Technologies I Work With
        </motion.h1>

        <motion.p variants={fadeInUp} className="max-w-lg text-base leading-relaxed text-ink-400">
          I work with a diverse set of technologies across frontend, backend, databases, and
          development tools, allowing me to build complete and modern web applications.
        </motion.p>
      </motion.div>
    </section>
  );
}
