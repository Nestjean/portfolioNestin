// Each skill's `tag` is the short label shown in its icon badge, `color` tints
// that badge only — kept muted enough not to fight the violet theme.
export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'HTML', tag: 'HTML', color: '#FF6B4A', description: 'Semantic, accessible markup.' },
      { name: 'CSS', tag: 'CSS', color: '#4A9EFF', description: 'Modern layout and styling.' },
      { name: 'JavaScript', tag: 'JS', color: '#F0D64A', description: 'Core language for interactive web apps.' },
      { name: 'Java', tag: 'JAVA', color: '#E67E4D', description: 'Object-oriented backend development.' },
      { name: 'PHP', tag: 'PHP', color: '#8892BF', description: 'Server-side scripting and web logic.' },
      { name: 'Python', tag: 'PY', color: '#4B9CD3', description: 'General-purpose scripting and backend work.' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'React', tag: 'RX', color: '#56D8F0', description: 'Building interactive, reusable user interfaces.' },
      { name: 'Tailwind CSS', tag: 'TW', color: '#38BDF8', description: 'Utility-first styling for consistent UI.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { name: 'Django', tag: 'DJ', color: '#4CAF6D', description: 'Python framework for robust web apps and APIs.' },
      { name: 'Symfony', tag: 'SF', color: '#A78BFA', description: 'PHP framework for structured applications.' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    skills: [
      { name: 'MySQL', tag: 'MY', color: '#00758F', description: 'Relational database for structured data.' },
      { name: 'PostgreSQL', tag: 'PG', color: '#336791', description: 'Advanced open-source relational database.' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    skills: [
      { name: 'Postman', tag: 'PM', color: '#FF6C37', description: 'Testing and documenting APIs.' },
      { name: 'Git', tag: 'GIT', color: '#F1502F', description: 'Version control for every project.' },
      { name: 'GitHub', tag: 'GH', color: '#E5E5E5', description: 'Hosting repositories and collaboration.' },
      { name: 'Docker', tag: 'DK', color: '#2496ED', description: 'Containerizing apps for consistent environments.' },
      { name: 'Figma', tag: 'FIG', color: '#A259FF', description: 'Designing and reviewing UI before building it.' },
    ],
  },
];

// A short, curated subset — not a duplicate of the full grid above.
export const coreTechnologies = ['React', 'JavaScript', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Git'];

// Lets other pages (Projects) color-match technology tags to Skills.
export const skillColorMap = skillCategories
  .flatMap((category) => category.skills)
  .reduce((map, skill) => ({ ...map, [skill.name]: skill.color }), {});