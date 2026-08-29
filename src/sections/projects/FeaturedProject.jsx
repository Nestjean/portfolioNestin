import { motion } from 'framer-motion';
import TechBadge from '../../components/badges/TechBadge';
import { GithubIcon, ExternalLinkIcon } from '../../components/icons';
import { fadeInUp } from '../../animations/variants/fadeIn'; 
import useLanguage from '../../context/useLanguage'; 

export default function FeaturedProject({ project, reverse }) { 
  const { language, t } = useLanguage();
  return (
    <motion.article
      variants={fadeInUp} 
      className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <a
  href={project.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="block overflow-hidden rounded-2xl border border-border bg-bg-surface"
  aria-label={`Open ${project.title[language]} on GitHub`}
>
  <img
    src={project.image}
    alt={`Screenshot of ${project.title[language]}`}
    className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
    loading="lazy"
    onError={(event) => {
      event.currentTarget.style.visibility = 'hidden';
    }}
  />
</a>

      <div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">{t('projects.highlightsEyebrow')}</span>
        <h3 className="mt-2 font-display text-2xl font-bold text-ink-100">{project.title[language]}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-400">{project.description[language]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => <TechBadge key={tech} name={tech} />)}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ink-100 transition-all duration-300 hover:border-violet-400 hover:bg-white/5 active:scale-[0.98]"
              aria-label={`Open ${project.title[language]} repository on GitHub`}
              title="GitHub repository"
            >
              <GithubIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-ink-100">
              <ExternalLinkIcon className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
