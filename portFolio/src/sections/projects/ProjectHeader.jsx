import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger'; 
import useLanguage from '../../context/useLanguage';

export default function ProjectHeader({ project }) {
   const { language } = useLanguage();
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto max-w-4xl text-center">
      {project.categoryLabel && (
        <motion.div variants={fadeInUp}>
          <Badge>{project.categoryLabel[language]}</Badge>
        </motion.div>
      )}
      <motion.h1 variants={fadeInUp} className="mt-4 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        {project.title[language]}
      </motion.h1>
      <motion.p variants={fadeInUp} className="mt-4 text-base leading-relaxed text-ink-400">
        {project.description[language]}
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-8 overflow-hidden rounded-2xl border border-border bg-bg-surface">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title[language]}`}
          className="w-full object-cover"
          onError={(event) => { event.currentTarget.style.visibility = 'hidden'; }}
        />
      </motion.div>
    </motion.div>
  );
}