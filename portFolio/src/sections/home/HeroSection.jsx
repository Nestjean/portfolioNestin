import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';
import SocialLinksRow from './SocialLinksRow';
import HeroVisual from './HeroVisual';
import { siteConfig } from '../../constants/siteConfig';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';
import useLanguage from '../../context/useLanguage';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-bg-base px-6 pt-28 md:px-10">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet-700/20 blur-[120px]" aria-hidden="true" />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <motion.p variants={fadeInUp} className="mb-4 font-mono text-sm tracking-wide text-violet-300">
            {t('home.eyebrow')}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-display text-4xl font-bold leading-[1.1] text-ink-100 sm:text-5xl lg:text-6xl">
             {t('home.greeting')} {siteConfig.name}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-3 text-lg font-medium text-violet-300 sm:text-xl">
            {t('home.role')}
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-6 max-w-md text-base leading-relaxed text-ink-400">
            {t('home.tagline')}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10"><CTAButtons /></motion.div>
          <motion.div variants={fadeInUp} className="mt-10"><SocialLinksRow /></motion.div>
        </div>
        <motion.div variants={fadeInUp} className="order-1 md:order-2"><HeroVisual /></motion.div>
      </motion.div>
    </section>
  );
}