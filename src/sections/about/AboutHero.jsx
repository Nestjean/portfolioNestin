import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';
import cv from '../../assets/Nestin-CV.pdf';
import { Download } from 'lucide-react';
import useLanguage from '../../context/useLanguage'; 

export default function AboutHero() {
  const { t } = useLanguage();
  return (
     <section className="relative overflow-hidden bg-bg-base px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-700/15 blur-[110px]" aria-hidden="true" />
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div>
          <motion.h1 variants={fadeInUp} className="mt-5 font-display text-3xl font-bold leading-tight text-ink-100 sm:text-4xl lg:text-5xl">
            {t('about.heroTitle')}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-5 max-w-md text-base leading-relaxed text-ink-400">
            {t('about.heroDescription')}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button as="a" href={cv} download="RAZAFINDRABE-Jean-Nestin-CV.pdf" ><span className="flex items-center gap-2">
                      {t('common.downCV')}
                     <Download size={18} strokeWidth={2} />
                 </span></Button>
          </motion.div>
        </div>
        {/* Portrait frame — swap the placeholder for a real photo when ready */}
        <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-br from-violet-500/60 to-violet-700/60"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-surface">
            <img
              src="/src/assets/nestin.jpg"
              alt="Portrait of Your Name, web developer"
              className="aspect-[4/5] w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
