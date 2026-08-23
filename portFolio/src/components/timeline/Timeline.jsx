import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { staggerContainer } from '../../animations/variants/stagger';

export default function Timeline({ items }) {
  return (
    <motion.ol variants={staggerContainer} className="relative flex flex-col gap-8 md:gap-10">
      {/* Vertical rail — left-aligned on mobile, centered on desktop */}
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      {items.map((item, index) => (
        <TimelineItem key={item.year + item.title} {...item} align={index % 2 === 0 ? 'left' : 'right'} />
      ))}
    </motion.ol>
  );
}