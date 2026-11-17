import { ProjectCard } from './ProjectCard.jsx';

export function ProjectGrid({ projects = [], columns = 3 }) {
  const gridCols =
    columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
