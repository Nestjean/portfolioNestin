import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TechBadge from '../badges/TechBadge';
import { GithubIcon, ExternalLinkIcon } from '../icons';
import { fadeInUp } from '../../animations/variants/fadeIn'; 
import { useLanguage } from '../../context/useLanguage'; 

export default function ProjectCard({ id, title, description, image, technologies, githubUrl, liveUrl }) { 
  const { language } = useLanguage();
  const visibleTech = technologies.slice(0, 3);
  const extraCount = technologies.length - visibleTech.length;

  return (
    <motion.article
      variants={fadeInUp}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-surface transition-colors duration-300 hover:border-violet-400/50"
    >
      <Link to={`/projects/${id}`} className="block overflow-hidden bg-bg-surface">
        <img
          src={image}
          alt={`Screenshot of ${title[language]}`}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(event) => { event.currentTarget.style.visibility = 'hidden'; }}
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-ink-100">
          <Link to={`/projects/${id}`} className="hover:text-violet-300">{title[language]}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">{description[language]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTech.map((tech) => <TechBadge key={tech} name={tech} />)}
          {extraCount > 0 && (
            <span className="rounded-full border border-border px-3 py-1 text-xs text-ink-400">+{extraCount}</span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-ink-400 hover:text-ink-100">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-ink-400 hover:text-ink-100">
              <ExternalLinkIcon className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}