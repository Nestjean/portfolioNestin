import { GithubIcon, LinkedinIcon } from '../../components/icons';
import { socialLinks } from '../../constants/socialLinks';

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon };

export default function SocialLinksRow() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = iconMap[social.id];
        return (
           <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-300"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}