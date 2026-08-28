export const skillCategories = [
  {
    id: 'languages',
    title: { en: 'Programming Languages', fr: 'Langages de Programmation' },
    skills: [
      { name: 'HTML', tag: 'HTML', color: '#FF6B4A', description: { en: 'Semantic, accessible markup.', fr: 'Balisage sémantique et accessible.' } },
      { name: 'CSS', tag: 'CSS', color: '#4A9EFF', description: { en: 'Modern layout and styling.', fr: 'Mise en page et style modernes.' } },
      { name: 'JavaScript', tag: 'JS', color: '#F0D64A', description: { en: 'Core language for interactive web apps.', fr: 'Langage principal pour les applications web interactives.' } },
      { name: 'Java', tag: 'JAVA', color: '#E67E4D', description: { en: 'Object-oriented backend development.', fr: 'Développement backend orienté objet.' } },
      { name: 'PHP', tag: 'PHP', color: '#8892BF', description: { en: 'Server-side scripting and web logic.', fr: 'Script côté serveur et logique web.' } },
      { name: 'Python', tag: 'PY', color: '#4B9CD3', description: { en: 'General-purpose scripting and backend work.', fr: 'Script polyvalent et développement backend.' } },
    ],
  },
  {
    id: 'frontend',
    title: { en: 'Frontend Development', fr: 'Développement Frontend' },
    skills: [
      { name: 'React', tag: 'RX', color: '#56D8F0', description: { en: 'Building interactive, reusable user interfaces.', fr: "Création d'interfaces utilisateur interactives et réutilisables." } },
      { name: 'Tailwind CSS', tag: 'TW', color: '#38BDF8', description: { en: 'Utility-first styling for consistent UI.', fr: 'Style utilitaire pour une interface cohérente.' } },
    ],
  },
  {
    id: 'backend',
    title: { en: 'Backend Development', fr: 'Développement Backend' },
    skills: [
      { name: 'Django', tag: 'DJ', color: '#4CAF6D', description: { en: 'Python framework for robust web apps and APIs.', fr: 'Framework Python pour des applications web et API robustes.' } },
      { name: 'Symfony', tag: 'SF', color: '#A78BFA', description: { en: 'PHP framework for structured applications.', fr: 'Framework PHP pour des applications structurées.' } },
    ],
  },
  {
    id: 'database',
    title: { en: 'Databases', fr: 'Bases de Données' },
    skills: [
      { name: 'MySQL', tag: 'MY', color: '#00758F', description: { en: 'Relational database for structured data.', fr: 'Base de données relationnelle pour données structurées.' } },
      { name: 'PostgreSQL', tag: 'PG', color: '#336791', description: { en: 'Advanced open-source relational database.', fr: 'Base de données relationnelle open-source avancée.' } },
    ],
  },
  {
    id: 'tools',
    title: { en: 'Tools & Technologies', fr: 'Outils & Technologies' },
    skills: [
      { name: 'Postman', tag: 'PM', color: '#FF6C37', description: { en: 'Testing and documenting APIs.', fr: "Test et documentation d'API." } },
      { name: 'Git', tag: 'GIT', color: '#F1502F', description: { en: 'Version control for every project.', fr: 'Gestion de versions pour chaque projet.' } },
      { name: 'GitHub', tag: 'GH', color: '#E5E5E5', description: { en: 'Hosting repositories and collaboration.', fr: 'Hébergement de dépôts et collaboration.' } },
      { name: 'Docker', tag: 'DK', color: '#2496ED', description: { en: 'Containerizing apps for consistent environments.', fr: "Conteneurisation d'applications pour des environnements cohérents." } },
      { name: 'Figma', tag: 'FIG', color: '#A259FF', description: { en: 'Designing and reviewing UI before building it.', fr: "Conception et revue d'interfaces avant leur développement." } },
    ],
  },
];

export const coreTechnologies = ['React', 'JavaScript', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Git'];

// Color lookup only — unaffected by the bilingual change above.
export const skillColorMap = skillCategories
  .flatMap((category) => category.skills)
  .reduce((map, skill) => ({ ...map, [skill.name]: skill.color }), {});