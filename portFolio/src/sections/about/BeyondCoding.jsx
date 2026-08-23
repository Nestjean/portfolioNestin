import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import Badge from '../../components/ui/Badge';
import { beyondCodingItems } from '../../data/beyondCoding';
import { staggerContainer } from '../../animations/variants/stagger';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { CpuIcon, FilmIcon, TrophyIcon, CompassIcon } from '../../components/icons';

const iconMap = { cpu: CpuIcon, film: FilmIcon, trophy: TrophyIcon, compass: CompassIcon };

export default function BeyondCoding() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="px-6 py-20 md:px-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <SectionTitle eyebrow="Beyond Coding" title="Outside the Editor" align="center" />
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
          {beyondCodingItems.map((item) => (
            <Badge key={item.label} icon={iconMap[item.icon]}>
              {item.label}
            </Badge>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}