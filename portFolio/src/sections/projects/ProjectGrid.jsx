import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import ProjectFilters from './ProjectFilters';
import ProjectCard from '../../components/cards/ProjectCard';
import { projects, projectCategories } from '../../data/projects';
import { staggerContainer } from '../../animations/variants/stagger';

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Featured projects already have their own showcase above — this grid is secondary projects only.
  const secondaryProjects = useMemo(() => projects.filter((project) => !project.featured), []);

  const visibleProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? secondaryProjects
        : secondaryProjects.filter((project) => project.category === activeCategory),
    [activeCategory, secondaryProjects]
  );

  return (
    <section className="bg-bg-surface/40 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="All Projects" title="More Things I've Built" align="center" />

        <div className="mt-10">
          <ProjectFilters categories={projectCategories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {visibleProjects.length === 0 && (
          <p className="mt-12 text-center text-sm text-ink-400">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}