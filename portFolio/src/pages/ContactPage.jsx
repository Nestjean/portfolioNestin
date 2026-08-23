import { motion } from 'framer-motion';
import ContactHero from '../sections/contact/ContactHero';
import ContactInfo from '../sections/contact/ContactInfo'; 
import ContactForm from '../components/forms/ContactForm'; 
import { staggerContainer } from '../animations/variants/stagger'; 

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-bg-base px-6 pb-24 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16"
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </section>
    </>
  );
}