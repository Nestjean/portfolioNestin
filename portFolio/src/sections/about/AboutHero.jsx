import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { SparkleIcon, ArrowRightIcon } from '../../components/icons';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-bg-base px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-700/15 blur-[110px]"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2"
      >
        <div>
          

          <motion.h1
            variants={fadeInUp}
            className="mt-5 font-display text-3xl font-bold leading-tight text-ink-100 sm:text-4xl lg:text-5xl"
          >
            A Developer Who Loves Turning Ideas Into Reality
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-5 max-w-md text-base leading-relaxed text-ink-400">
            I'm RAZAFINDRABE Jean Nestin, a third-year Computer Science student at the National School of Computer Science in Fianarantsoa. I'm a Full-Stack Developer who enjoys turning ideas into functional, engaging, and reliable web applications, from designing the first component, to building the backend and deploying the final product.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <Button to="/skills" variant="primary">
              Download My CV
            </Button>
          </motion.div>
        </div>

        {/* Portrait frame — swap the placeholder for a real photo when ready */}
        <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-br from-violet-500/60 to-violet-700/60"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-surface">
            <img
              src="/src/assets/nestin.jpg"
              alt="Portrait of Your Name, web developer"
              className="aspect-[4/5] w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
