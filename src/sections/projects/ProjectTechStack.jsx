import TechBadge from '../../components/badges/TechBadge';

export default function ProjectTechStack({ technologies }) {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="font-display text-lg font-semibold text-ink-100">Technologies</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => <TechBadge key={tech} name={tech} />)}
      </div>
    </div>
  );
}