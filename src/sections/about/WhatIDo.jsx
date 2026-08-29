import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import ServiceCard from '../../components/cards/ServiceCard';
import { whatIDoItems } from '../../data/whatIDo';
import { staggerContainer } from '../../animations/variants/stagger';
import { CodeIcon, ServerIcon, DatabaseIcon, LayersIcon } from '../../components/icons';

const iconMap = { code: CodeIcon, server: ServerIcon, database: DatabaseIcon, layers: LayersIcon };

export default function WhatIDo() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-bg-surface/40 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="What I Do" title="Where I Focus My Work" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDoItems.map((item) => (
            <ServiceCard key={item.title} icon={iconMap[item.icon]} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}