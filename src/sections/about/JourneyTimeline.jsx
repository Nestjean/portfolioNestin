import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import Timeline from '../../components/timeline/Timeline';
import { journeyItems } from '../../data/journey';
import { staggerContainer } from '../../animations/variants/stagger';
import useLanguage from '../../context/useLanguage';

export default function JourneyTimeline() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-bg-base px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow={t('about.journeyEyebrow')} title={t('about.journeyTitle')} align="center" />
        <div className="mt-16">
          <Timeline items={journeyItems} />
        </div>
      </div>
    </motion.section>
  );
}