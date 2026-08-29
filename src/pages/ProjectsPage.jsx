import ProjectsHero from '../sections/projects/ProjectsHero';
import FeaturedProjects from '../sections/projects/FeaturedProjects';

import ProjectsCTA from '../sections/projects/ProjectsCTA';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero /> 
      <FeaturedProjects />  
      
      <ProjectsCTA />
    </>
  );
}