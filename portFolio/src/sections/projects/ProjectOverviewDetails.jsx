import { motion } from 'framer-motion';
import DetailSection from '../../components/ui/DetailSection';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn';

export default function ProjectOverviewDetails({ project }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
      variants={staggerContainer} 
      className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2"
    >
      <motion.div variants={fadeInUp}><DetailSection title="Overview">{project.overview}</DetailSection></motion.div>
      <motion.div variants={fadeInUp}><DetailSection title="Problem">{project.problem}</DetailSection></motion.div>
      <motion.div variants={fadeInUp}><DetailSection title="Solution">{project.solution}</DetailSection></motion.div>
      <motion.div variants={fadeInUp}><DetailSection title="Challenges">{project.challenges}</DetailSection></motion.div>
      <motion.div variants={fadeInUp} className="sm:col-span-2">
        <DetailSection title="What I Learned">{project.lessons}</DetailSection>
      </motion.div>
    </motion.div>
  );
}