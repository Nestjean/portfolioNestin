import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import ServiceCard from '../../components/cards/ServiceCard';
import { workPrinciples } from '../../data/workPrinciples';
import { staggerContainer } from '../../animations/variants/stagger';
import { PuzzleIcon, CodeIcon, BookIcon, UsersIcon } from '../../components/icons';

const iconMap = { puzzle: PuzzleIcon, code: CodeIcon, book: BookIcon, users: UsersIcon };

export default function WorkPrinciples() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-bg-base px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="How I Work" title="My Development Philosophy" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workPrinciples.map((item) => (
            <ServiceCard key={item.title} icon={iconMap[item.icon]} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}