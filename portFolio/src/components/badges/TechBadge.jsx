import { skillColorMap } from '../../data/skills';
import { fallbackTechIcon, techIconMap } from '../../data/techIcons';

export default function TechBadge({ name }) {
  const color = skillColorMap[name] ?? '#9A7BFF';
  const iconClassName = techIconMap[name] ?? fallbackTechIcon;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
      style={{ color, borderColor: `${color}40`, backgroundColor: `${color}14` }}
    >
      <i
        className={`${iconClassName} text-sm`}
        style={{ color: name === 'GitHub' ? '#F5F5F5' : undefined }}
        aria-hidden="true"
      />
      {name}
    </span>
  );
}
