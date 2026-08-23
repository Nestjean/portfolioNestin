import { fallbackTechIcon, techIconMap } from '../../data/techIcons';

export default function TechIcon({ name, color }) {
  const iconClassName = techIconMap[name] ?? fallbackTechIcon;

  return (
    <span
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
      style={{
        color: name === 'GitHub' ? '#F5F5F5' : color,
      }}
      aria-hidden="true"
    >
      <i className={`${iconClassName} text-2xl`} />
    </span>
  );
}
