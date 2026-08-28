import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants/fadeIn'; 
import { staggerContainer } from '../../animations/variants/stagger';
import useLanguage from '../../context/useLanguage';

export default function SkillsHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-bg-base px-6 pb-16 pt-32 md:px-10 md:pt-40">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-violet-700/15 blur-[110px]"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
      >
       

        <motion.h1 variants={fadeInUp} className="font-display text-3xl font-bold text-ink-100 sm:text-4xl lg:text-5xl">
          {t('skills.heroTitle')}
        </motion.h1>

        <motion.p variants={fadeInUp} className="max-w-lg text-base leading-relaxed text-ink-400">
          {t('skills.heroDescription')}
        </motion.p>
      </motion.div>
    </section>
  );
}