import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';
import SocialLinksRow from './SocialLinksRow';
import HeroVisual from './HeroVisual';
import { siteConfig } from '../../constants/siteConfig';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';


export default function HeroSection() {
  return (
    
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-bg-base px-6 pt-28 md:px-10">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet-700/20 blur-[120px]"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,20rem)] md:grid-cols-2 md:gap-16"
      >
        <div className="order-1">
         

          <motion.h1 variants={fadeInUp} className="font-display text-4xl font-bold leading-[1.1] text-ink-100 sm:text-5xl lg:text-6xl">
            {siteConfig.name}
            
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-3 text-lg font-medium text-violet-300 sm:text-xl">
            {siteConfig.role}
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-6 max-w-md text-base leading-relaxed text-ink-400">
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <CTAButtons />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <SocialLinksRow />
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="order-2">
          <HeroVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}
