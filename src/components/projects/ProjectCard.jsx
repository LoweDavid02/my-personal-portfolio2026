import { ArrowRight, ExternalLink, FolderCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategoryById } from '../../data/categories.js';
import { assetUrl } from '../../utils/assetUrl.js';
import { Badge } from '../ui/Badge.jsx';
import { GithubIcon } from '../ui/BrandIcons.jsx';
import { Card } from '../ui/Card.jsx';

export function ProjectCard({ project }) {
  const category = getCategoryById(project.category);
  const coverSrc = project.coverImage ? assetUrl(project.coverImage) : null;
  const displayTitle = project.shortTitle || project.title;

  return (
    <Card interactive as="article" className="flex h-full flex-col overflow-hidden">
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block aspect-[16/10] w-full overflow-hidden border-b border-border-subtle bg-bg-secondary"
      >
        {coverSrc ? (
          <img
            src={coverSrc}
            alt={project.coverAlt || displayTitle}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-text-secondary">
            <FolderCode size={28} aria-hidden="true" />
            <span className="text-xs font-medium">Project preview not yet added</span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <Badge variant="accent">{category ? category.shortLabel : project.category}</Badge>
          {project.periodLabel ? (
            <span className="font-mono text-[11px] text-text-secondary">{project.periodLabel}</span>
          ) : null}
        </div>

        <h3 className="text-lg font-semibold leading-snug text-text-primary">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent-text"
          >
            {displayTitle}
          </Link>
        </h3>

        {project.statusLabel ? (
          <p className="mt-1 text-xs font-medium text-text-secondary">{project.statusLabel}</p>
        ) : null}

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        {project.technologies?.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 ? (
              <Badge variant="outline">+{project.technologies.length - 5}</Badge>
            ) : null}
          </div>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border-subtle pt-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text transition-colors hover:underline"
          >
            <span>View Details</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${displayTitle} GitHub repository`}
                className="inline-flex items-center gap-1 rounded-md border border-border-subtle px-2.5 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
              >
                <GithubIcon size={13} aria-hidden="true" />
                <span>Code</span>
              </a>
            ) : null}

            {project.links?.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${displayTitle} live demo`}
                className="inline-flex items-center gap-1 rounded-md border border-border-subtle px-2.5 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
              >
                <ExternalLink size={13} aria-hidden="true" />
                <span>Demo</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}
