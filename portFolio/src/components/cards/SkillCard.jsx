import { motion } from 'framer-motion';
import TechIcon from '../ui/TechIcon';
import { fadeInUp } from '../../animations/variants/fadeIn';

export default function SkillCard({ name, tag, color, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group flex items-start gap-4 rounded-2xl border border-white/10 p-5 transition-colors duration-300 hover:border-violet-400/50"
    >
      <TechIcon name={name} tag={tag} color={color} />
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-100">{name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-ink-400">{description}</p>
      </div>
    </motion.div>
  );
}
