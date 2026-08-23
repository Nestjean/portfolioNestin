import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import FeaturedProject from './FeaturedProject';
import { projects } from '../../data/projects';
import { staggerContainer } from '../../animations/variants/stagger';

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  if (featured.length === 0) return null;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="bg-bg-base px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Highlights" title="Featured Projects" align="center" />
        <div className="mt-14 flex flex-col gap-20">
          {featured.map((project, index) => (
            <FeaturedProject key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}