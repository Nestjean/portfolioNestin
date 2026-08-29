import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../icons';
import { siteConfig } from '../../constants/siteConfig';
import { socialLinks } from '../../constants/socialLinks';
import useLanguage from '../../context/useLanguage';

const iconMap = { github: GithubIcon, twitter: TwitterIcon, linkedin: LinkedinIcon, instagram: InstagramIcon };

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-surface px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 font-mono text-xs text-ink-400 md:flex-row md:justify-between">
        <p>{t('footer.designedBy').replace('{name}', siteConfig.footName)}</p>
        <p>{t('footer.copyright').replace('{year}', year).replace('{initials}', siteConfig.initials)}</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.id];
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-ink-100/80 transition-colors duration-200 hover:text-violet-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}