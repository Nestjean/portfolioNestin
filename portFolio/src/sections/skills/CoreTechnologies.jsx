import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import { coreTechnologies } from '../../data/skills';
import { fallbackTechIcon, techIconMap } from '../../data/techIcons';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn';

export default function CoreTechnologies() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="px-6 py-20 md:px-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <SectionTitle eyebrow="Core Technologies" title="What I Reach For Most" align="center" />
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
          {coreTechnologies.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-ink-400">
              <i className={`${techIconMap[tech] ?? fallbackTechIcon} text-base`} aria-hidden="true" />
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
