import { motion } from 'framer-motion';
import ContactItem from '../../components/contact/ContactItem';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../components/icons';
import { siteConfig } from '../../constants/siteConfig';
import { socialLinks } from '../../constants/socialLinks';
import { fadeInUp } from '../../animations/variants/fadeIn';
import { staggerContainer } from '../../animations/variants/stagger';
import useLanguage from '../../context/useLanguage';

const socialIconMap = { github: GithubIcon, twitter: TwitterIcon, linkedin: LinkedinIcon, instagram: InstagramIcon };

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <motion.div variants={staggerContainer} className="flex flex-col gap-8">
      <motion.div variants={fadeInUp}>
        <h2 className="font-display text-xl font-semibold text-ink-100">{t('contact.introTitle')}</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">{t('contact.introDescription')}</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-col gap-5">
        <ContactItem icon={MailIcon} label={t('contact.email')} value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
        <ContactItem icon={PhoneIcon} label={t('contact.phone')} value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} />
        <ContactItem icon={MapPinIcon} label={t('contact.location')} value={siteConfig.location} />
        <ContactItem icon={ClockIcon} label={t('contact.availability')} value={t('contact.availabilityValue')} />
      </motion.div>

      <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
        {socialLinks.map((social) => {
          const Icon = socialIconMap[social.id];
          return (
            <a key={social.id} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-300">
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}