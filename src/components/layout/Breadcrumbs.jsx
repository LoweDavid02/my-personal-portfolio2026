import { Fragment, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { buildBreadcrumbs } from '../../config/navigation.js';
import { getProjectBySlug } from '../../data/projects.js';

export function Breadcrumbs() {
  const location = useLocation();
  const { slug } = useParams();

  const breadcrumbs = useMemo(() => {
    const project = slug ? getProjectBySlug(slug) : null;
    return buildBreadcrumbs(location, project);
  }, [location, slug]);

  return (
    <nav aria-label="Breadcrumb" className="min-w-0">
      <ol className="flex items-center gap-1.5 overflow-x-auto text-xs sm:text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <Fragment key={`${crumb.to}-${crumb.label}`}>
              {index > 0 ? (
                <li aria-hidden="true" className="shrink-0 text-text-secondary">
                  <ChevronRight size={14} />
                </li>
              ) : null}
              <li className="min-w-0 truncate">
                {isLast ? (
                  <span aria-current="page" className="truncate font-medium text-text-primary">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.to}
                    className="truncate text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
