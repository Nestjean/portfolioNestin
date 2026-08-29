import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons';

export default function ProjectNavigation({ previousProject, nextProject }) {
  if (!previousProject && !nextProject) return null;

  return (
    <div className="mx-auto flex max-w-4xl items-center justify-between border-t border-border pt-8">
      {previousProject ? (
        <Link to={`/projects/${previousProject.id}`} className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-100">
          <ChevronLeftIcon className="h-4 w-4" /> {previousProject.title}
        </Link>
      ) : <span />}

      {nextProject && (
        <Link to={`/projects/${nextProject.id}`} className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-100">
          {nextProject.title} <ChevronRightIcon className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}