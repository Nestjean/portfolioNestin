import Button from '../../components/ui/Button';
import { GithubIcon, ExternalLinkIcon } from '../../components/icons';

export default function ProjectLinks({ githubUrl, liveUrl }) {
  if (!githubUrl && !liveUrl) return null;
  return (
    <div className="mx-auto flex max-w-4xl flex-wrap gap-4">
      {githubUrl && <Button href={githubUrl} variant="secondary" icon={GithubIcon}>View Code</Button>}
      {liveUrl && <Button href={liveUrl} variant="primary" icon={ExternalLinkIcon}>Live Demo</Button>}
    </div>
  );
}