import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../../components/ui/Button';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

export default function ProjectsCTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="px-6 py-24 text-center md:px-10"
    >
      <motion.h2 variants={fadeInUp} className="font-display text-2xl font-bold text-ink-100 sm:text-3xl">
        Have a Project in Mind?
      </motion.h2>
      <motion.p variants={fadeInUp} className="mx-auto mt-3 max-w-md text-base text-ink-400">
        I'm always open to discussing new ideas or opportunities to build something meaningful together.
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/contact" variant="primary" icon={Send}>Contact Me</Button>
        <Button to="/skills" variant="secondary">View Skills</Button>
      </motion.div>
    </motion.section>
  );
}
