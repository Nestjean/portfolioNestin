// ⚠️ Les champs overview/problem/solution/features/challenges/lessons des
// projets 1, 2 et 4 contiennent encore du texte d'instruction (placeholder),
// donc identique en EN/FR pour l'instant — à remplacer par du vrai contenu
// puis à traduire quand ce sera fait. Le reste (title, description,
// technologies) est réel et donc traduit.

export const projectCategories = [
  { id: 'all', label: { en: 'All', fr: 'Tous' } },
  { id: 'fullstack', label: { en: 'Full Stack', fr: 'Full Stack' } },
  { id: 'frontend', label: { en: 'Frontend', fr: 'Frontend' } },
  { id: 'backend', label: { en: 'Backend', fr: 'Backend' } },
  { id: 'java', label: { en: 'Java', fr: 'Java' } },
];

export const projects = [
  {
    id: 'project-one',
    title: { en: 'Hotel Reservation and Management', fr: 'Réservation et Gestion Hôtelière' },
    category: 'fullstack',
    description: {
      en: 'A web application that allows users to browse available rooms, make reservations, and manage their bookings efficiently.',
      fr: 'Une application web permettant aux utilisateurs de consulter les chambres disponibles, effectuer des réservations et gérer efficacement leurs réservations.',
    },
    image: '/src/assets/hotManag.png',
    technologies: ['React', 'Tailwind CSS', 'Symfony', 'PostgreSQL'],
    // TODO — replace with real content in both languages
    overview: { en: 'Give a short overview of the project: what it is and who it is for.', fr: 'Give a short overview of the project: what it is and who it is for.' },
    problem: { en: 'Describe the real problem this project was built to solve.', fr: 'Describe the real problem this project was built to solve.' },
    solution: { en: 'Explain what you built and the key decisions behind it.', fr: 'Explain what you built and the key decisions behind it.' },
    features: [
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
    ],
    challenges: { en: 'Describe a real technical challenge you ran into and how you resolved it.', fr: 'Describe a real technical challenge you ran into and how you resolved it.' },
    lessons: { en: 'Describe what you learned from building this project.', fr: 'Describe what you learned from building this project.' },
    githubUrl: 'https://github.com/Nestjean/hotelManagementApp',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'project-two',
    title: { en: 'Online Medical Appointment Management System', fr: 'Système de Gestion de Rendez-vous Médicaux en Ligne' },
    category: 'fullstack',
    description: {
      en: 'A web application that allows patients to book, manage, and track medical appointments online while helping healthcare professionals efficiently manage their schedules.',
      fr: 'Une application web permettant aux patients de prendre, gérer et suivre leurs rendez-vous médicaux en ligne, tout en aidant les professionnels de santé à gérer efficacement leurs plannings.',
    },
    image: '/src/assets/login.png',
    technologies: ['React', 'Tailwind CSS', 'Java', 'MySQL'],
    overview: { en: 'Give a short overview of the project: what it is and who it is for.', fr: 'Give a short overview of the project: what it is and who it is for.' },
    problem: { en: 'Describe the real problem this project was built to solve.', fr: 'Describe the real problem this project was built to solve.' },
    solution: { en: 'Explain what you built and the key decisions behind it.', fr: 'Explain what you built and the key decisions behind it.' },
    features: [
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
    ],
    challenges: { en: 'Describe a real technical challenge you ran into and how you resolved it.', fr: 'Describe a real technical challenge you ran into and how you resolved it.' },
    lessons: { en: 'Describe what you learned from building this project.', fr: 'Describe what you learned from building this project.' },
    githubUrl: 'https://github.com/Nestjean/Cabinet_Medical',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'project-three',
    title: { en: 'Portfolio Website', fr: 'Site Portfolio' },
    category: 'fullstack',
    description: {
      en: 'A personal portfolio website built to present my profile, skills, featured projects, and contact information in a clean responsive interface.',
      fr: 'Un site portfolio personnel conçu pour présenter mon profil, mes compétences, mes projets phares et mes informations de contact dans une interface propre et responsive.',
    },
    image: '/src/assets/portFolioNestin.png',
    technologies: ['React', 'Tailwind CSS'],
    overview: {
      en: 'A personal portfolio designed to showcase my work, technical skills, and professional profile.',
      fr: 'Un portfolio personnel conçu pour mettre en valeur mon travail, mes compétences techniques et mon profil professionnel.',
    },
    problem: {
      en: 'I needed a central place where visitors could quickly understand who I am, what I build, and how to contact me.',
      fr: "J'avais besoin d'un espace centralisé où les visiteurs pouvaient rapidement comprendre qui je suis, ce que je construis, et comment me contacter.",
    },
    solution: {
      en: 'I built a responsive React portfolio with reusable sections, project highlights, skills, and a contact page.',
      fr: 'J\'ai construit un portfolio React responsive avec des sections réutilisables, une mise en avant des projets, les compétences, et une page de contact.',
    },
    features: [
      { en: 'Responsive layout', fr: 'Mise en page responsive' },
      { en: 'Project showcase', fr: 'Présentation des projets' },
      { en: 'Skills overview', fr: 'Aperçu des compétences' },
    ],
    challenges: {
      en: 'Balancing a clean visual style with enough information to make the portfolio useful and easy to scan.',
      fr: "Trouver l'équilibre entre un style visuel épuré et suffisamment d'informations pour que le portfolio reste utile et facile à parcourir.",
    },
    lessons: {
      en: 'I improved my component structure, responsive layout decisions, and visual consistency across pages.',
      fr: 'J\'ai amélioré ma structuration des composants, mes choix de mise en page responsive, et la cohérence visuelle entre les pages.',
    },
    githubUrl: 'https://github.com/Nestjean/projectFree',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'project-four',
    title: { en: 'Cooperative Revenue Management', fr: 'Gestion des Recettes de Coopérative' },
    category: 'fullstack',
    description: {
      en: 'A web application that helps transportation cooperatives efficiently manage daily revenue, expenses, trips, and driver commissions while providing clear financial reports and profit tracking.',
      fr: 'Une application web qui aide les coopératives de transport à gérer efficacement les recettes quotidiennes, les dépenses, les trajets et les commissions des chauffeurs, tout en fournissant des rapports financiers clairs et un suivi des bénéfices.',
    },
    image: '/src/assets/acceuilCoop.jpeg',
    technologies: ['React', 'Tailwind CSS', 'Django', 'PostgreSQL'],
    overview: { en: 'Give a short overview of the project: what it is and who it is for.', fr: 'Give a short overview of the project: what it is and who it is for.' },
    problem: { en: 'Describe the real problem this project was built to solve.', fr: 'Describe the real problem this project was built to solve.' },
    solution: { en: 'Explain what you built and the key decisions behind it.', fr: 'Explain what you built and the key decisions behind it.' },
    features: [
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
      { en: 'Replace with a real feature', fr: 'Replace with a real feature' },
    ],
    challenges: { en: 'Describe a real technical challenge you ran into and how you resolved it.', fr: 'Describe a real technical challenge you ran into and how you resolved it.' },
    lessons: { en: 'Describe what you learned from building this project.', fr: 'Describe what you learned from building this project.' },
    githubUrl: 'https://github.com/Nestjean/newProject',
    liveUrl: '',
    featured: true,
  },
];