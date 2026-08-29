import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../../components/ui/Button';
import { ArrowRightIcon } from '../../components/icons';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

export default function AboutCTA() {
  const { t } = useLanguage();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="relative overflow-hidden px-6 py-24 text-center md:px-10"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-700/20 blur-[100px]"
        aria-hidden="true"
      />

      <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">{t('about.ctaTitle')}</motion.h2>
      <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-md text-base text-ink-400">{t('about.ctaDescription')}</motion.p>
      <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/projects" variant="primary" icon={ArrowRightIcon}>{t('common.viewProjects')}</Button>
        <Button to="/contact" variant="secondary">{t('common.contactMe')}</Button>
      </motion.div>
    </motion.section>
  );
}
