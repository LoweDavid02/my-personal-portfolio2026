import { getRelatedProjects } from '../../data/projects.js';
import { ProjectGrid } from './ProjectGrid.jsx';

export function RelatedProjects({ currentProject }) {
  const related = getRelatedProjects(currentProject, 2);

  if (related.length === 0) return null;

  return (
    <section
      aria-labelledby="related-projects-heading"
      className="space-y-5 border-t border-border-subtle pt-10"
    >
      <div className="space-y-1">
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
          Continue Exploring
        </p>
        <h2
          id="related-projects-heading"
          className="text-xl font-semibold text-text-primary sm:text-2xl"
        >
          Related Projects
        </h2>
      </div>
      <ProjectGrid projects={related} columns={2} />
    </section>
  );
}
