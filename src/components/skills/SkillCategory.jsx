import { motion } from 'framer-motion';
import SkillCard from '../cards/SkillCard';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn';
import useLanguage from '../../context/useLanguage';

export default function SkillCategory({ title, skills }) {
  const { language } = useLanguage();

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
      <motion.h3 variants={fadeInUp} className="font-display text-lg font-semibold text-ink-100">
        {title[language]}
      </motion.h3>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}