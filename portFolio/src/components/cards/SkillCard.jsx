import { motion } from 'framer-motion';
import TechIcon from '../ui/TechIcon';
import { fadeInUp } from '../../animations/variants/fadeIn';
import useLanguage from '../../context/useLanguage';

export default function SkillCard({ name, tag, color, description }) {
  const { language } = useLanguage();

  return (
    <motion.div variants={fadeInUp} className="group flex items-start gap-4 rounded-2xl border border-border bg-bg-surface p-5 transition-colors duration-300 hover:border-violet-400/50">
      <TechIcon name={name} color={color} />
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-100">{name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-ink-400">{description[language]}</p>
      </div>
    </motion.div>
  );
}