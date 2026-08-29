import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { ArrowRightIcon } from '../../components/icons';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

export default function SkillsCTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="px-6 py-24 text-center md:px-10"
    >
      <motion.h2 variants={fadeInUp} className="font-display text-2xl font-bold text-ink-100 sm:text-3xl">
        See These Skills Applied
      </motion.h2>
      <motion.p variants={fadeInUp} className="mx-auto mt-3 max-w-md text-base text-ink-400">
        Take a look at the projects where these technologies come together.
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-8">
        <Button to="/projects" variant="primary" icon={ArrowRightIcon}>
          View Projects
        </Button>
      </motion.div>
    </motion.section>
  );
}