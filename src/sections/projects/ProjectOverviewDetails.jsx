import { motion } from 'framer-motion';
import DetailSection from '../../components/ui/DetailSection';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn'; 
import useLanguage from '../../context/useLanguage'; 

export default function ProjectOverviewDetails({ project }) {
  const { language, t } = useLanguage();
  return ( 
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
      variants={staggerContainer} 
      className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2"
    >
      <motion.div variants={fadeInUp}><DetailSection title={t('projects.overview')}>{project.overview[language]}</DetailSection></motion.div>
      <motion.div variants={fadeInUp}><DetailSection title={t('projects.problem')}>{project.problem[language]}</DetailSection></motion.div>
      <motion.div variants={fadeInUp}><DetailSection title={t('projects.solution')}>{project.solution[language]}</DetailSection></motion.div>
      <motion.div variants={fadeInUp}><DetailSection title={t('projects.challenges')}>{project.challenges[language]}</DetailSection></motion.div>
      <motion.div variants={fadeInUp} className="sm:col-span-2">
        <DetailSection title={t('projects.lessons')}>{project.lessons[language]}</DetailSection>
      </motion.div>
    </motion.div>
  );
}