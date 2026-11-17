import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects.js';
import { Button } from '../ui/Button.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { ProjectGrid } from './ProjectGrid.jsx';

export function FeaturedProjects() {
  const featured = PROJECTS.filter((project) => project.featured).slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="featured-projects-heading" className="space-y-6">
      <SectionHeading
        headingId="featured-projects-heading"
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Core full-stack web and mobile systems documented with architecture notes, real interface previews, and source repositories."
        actions={
          <Button variant="outline" size="sm" to="/projects">
            <span>View All Projects</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Button>
        }
      />
      <ProjectGrid projects={featured} columns={featured.length === 4 ? 2 : 3} />
    </section>
  );
}
