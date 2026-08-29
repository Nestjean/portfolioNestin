import { useParams, Navigate } from 'react-router-dom';
import ProjectHeader from '../sections/projects/ProjectHeader';
import ProjectOverviewDetails from '../sections/projects/ProjectOverviewDetails';
import ProjectFeaturesList from '../sections/projects/ProjectFeaturesList';
import ProjectTechStack from '../sections/projects/ProjectTechStack';
import ProjectLinks from '../sections/projects/ProjectLinks';
import ProjectNavigation from '../sections/projects/ProjectNavigation';
import { projects, projectCategories } from '../data/projects';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const index = projects.findIndex((project) => project.id === projectId);

  if (index === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = projects[index];
  const categoryLabel = projectCategories.find((category) => category.id === project.category)?.label;
  const previousProject = projects[index - 1] ?? null;
  const nextProject = projects[index + 1] ?? null;

  return (
    <div className="bg-bg-base px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <ProjectHeader project={{ ...project, categoryLabel }} />
        <ProjectOverviewDetails project={project} />
        <ProjectFeaturesList features={project.features} />
        <ProjectTechStack technologies={project.technologies} />
        <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
      </div>
    </div>
  );
}