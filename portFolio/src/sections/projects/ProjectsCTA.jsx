import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { ArrowRightIcon } from '../../components/icons';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';
import useLanguage from '../../context/useLanguage';
import { Send } from 'lucide-react';
import cv from '../../assets/Nestin-CV.pdf';
import { Download } from 'lucide-react';

export default function ProjectsCTA() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="px-6 py-24 text-center md:px-10"
    >
      <motion.h2 variants={fadeInUp} className="font-display text-2xl font-bold text-ink-100 sm:text-3xl">
        {t('projects.ctaTitle')}
      </motion.h2>
      <motion.p variants={fadeInUp} className="mx-auto mt-3 max-w-md text-base text-ink-400">
        {t('projects.ctaDescription')}
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/contact" variant="primary" icon={Send}>{t('common.contactMe')}</Button>
        <Button  as="a" href={cv} download="RAZAFINDRABE-Jean-Nestin-CV.pdf"><span className="flex items-center gap-2">
                      {t('common.downCV')}
                     <Download size={18} strokeWidth={2} />
                 </span></Button>
      </motion.div>
    </motion.section>
  );
}