import { motion } from 'framer-motion';
import ContactItem from '../../components/contact/ContactItem';
import { MailIcon, MapPinIcon, ClockIcon, GithubIcon, LinkedinIcon } from '../../components/icons';
import { siteConfig } from '../../constants/siteConfig';
import { socialLinks } from '../../constants/socialLinks';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';

const socialIconMap = { github: GithubIcon, linkedin: LinkedinIcon };

export default function ContactInfo() {
  return (
    <motion.div variants={staggerContainer} className="flex flex-col gap-8">
      <motion.div variants={fadeInUp}>
        <h2 className="font-display text-xl font-semibold text-ink-100">Let's talk</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">
          Have a project idea, internship opportunity, or just want to say hi? My inbox is open.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-col gap-5">
        <ContactItem icon={MailIcon} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
        <ContactItem icon={MapPinIcon} label="Location" value={siteConfig.location} />
        <ContactItem icon={ClockIcon} label="Availability" value={siteConfig.availability} />
      </motion.div>

      <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
        {socialLinks.map((social) => {
          const Icon = socialIconMap[social.id];
          return (
            <a key={social.id} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-300">
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}