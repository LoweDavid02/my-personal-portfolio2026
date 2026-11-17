import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  FolderX,
  Layers,
  UserCheck,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { CaseStudySection } from '../components/projects/CaseStudySection.jsx';
import { ProjectGallery } from '../components/projects/ProjectGallery.jsx';
import { RelatedProjects } from '../components/projects/RelatedProjects.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { GithubIcon } from '../components/ui/BrandIcons.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { getCategoryById } from '../data/categories.js';
import { getProjectBySlug } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  usePageMeta({
    title: project ? project.shortTitle || project.title : 'Project Not Found',
    description: project?.summary || 'Requested project case study could not be located.',
    canonicalPath: `/projects/${slug || ''}`,
  });

  if (!project) {
    return (
      <MainContainer className="py-12">
        <EmptyState
          icon={FolderX}
          title="Project Case Study Not Found"
          description={`No project matches the identifier "${slug}". It may have been moved or is not yet published.`}
          action={
            <Button variant="primary" size="md" to="/projects">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Back to All Projects</span>
            </Button>
          }
        />
      </MainContainer>
    );
  }

  const category = getCategoryById(project.category);
  const cs = project.caseStudy || {};
  const hasLinks = Boolean(
    project.links?.demo || project.links?.github || project.links?.documentation
  );

  return (
    <MainContainer className="space-y-12">
      <div className="space-y-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          <span>Back to Project Directory</span>
        </Link>

        {/* Section A: Project Overview */}
        <header className="space-y-4 border-b border-border-subtle pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{category ? category.label : project.category}</Badge>
            {project.featured ? <Badge variant="success">Featured</Badge> : null}
            {project.statusLabel ? <Badge variant="outline">{project.statusLabel}</Badge> : null}
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {project.title}
          </h1>

          {project.organization ? (
            <p className="text-sm font-medium text-accent-text">{project.organization}</p>
          ) : null}

          <p className="max-w-3xl text-base leading-relaxed text-text-secondary">
            {project.summary}
          </p>

          <dl className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {project.role ? (
              <div className="flex items-start gap-2.5 rounded-lg border border-border-subtle bg-bg-card p-3.5">
                <UserCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-accent-text"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-text-secondary">Role</dt>
                  <dd className="text-sm font-medium text-text-primary">{project.role}</dd>
                </div>
              </div>
            ) : null}

            {project.periodLabel ? (
              <div className="flex items-start gap-2.5 rounded-lg border border-border-subtle bg-bg-card p-3.5">
                <Calendar
                  size={16}
                  className="mt-0.5 shrink-0 text-accent-text"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-text-secondary">Timeline</dt>
                  <dd className="text-sm font-medium text-text-primary">{project.periodLabel}</dd>
                </div>
              </div>
            ) : null}

            {category ? (
              <div className="flex items-start gap-2.5 rounded-lg border border-border-subtle bg-bg-card p-3.5">
                <Layers size={16} className="mt-0.5 shrink-0 text-accent-text" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium text-text-secondary">Category</dt>
                  <dd className="text-sm font-medium text-text-primary">{category.shortLabel}</dd>
                </div>
              </div>
            ) : null}
          </dl>

          {hasLinks ? (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.links.demo ? (
                <Button variant="primary" size="md" href={project.links.demo} external>
                  <ExternalLink size={15} aria-hidden="true" />
                  <span>Live Demo</span>
                </Button>
              ) : null}
              {project.links.github ? (
                <Button variant="secondary" size="md" href={project.links.github} external>
                  <GithubIcon size={15} aria-hidden="true" />
                  <span>GitHub Repository</span>
                </Button>
              ) : null}
              {project.links.documentation ? (
                <Button variant="outline" size="md" href={project.links.documentation} external>
                  <BookOpen size={15} aria-hidden="true" />
                  <span>Documentation</span>
                </Button>
              ) : null}
            </div>
          ) : null}
        </header>
      </div>

      {/* Section I: Screenshots */}
      <CaseStudySection id="screenshots" eyebrow="Interface Preview" title="Screenshots">
        <ProjectGallery
          gallery={project.gallery}
          projectTitle={project.shortTitle || project.title}
        />
      </CaseStudySection>

      {/* Section B & C: Overview, Problem & Solution */}
      {cs.overview || cs.problem || cs.solution ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cs.problem ? (
            <Card className="p-6 space-y-2.5">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
                Problem Statement
              </p>
              <h2 className="text-lg font-semibold text-text-primary">Why It Was Built</h2>
              <p className="text-sm leading-relaxed text-text-secondary">{cs.problem}</p>
            </Card>
          ) : null}

          {cs.solution ? (
            <Card className="p-6 space-y-2.5">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
                Solution
              </p>
              <h2 className="text-lg font-semibold text-text-primary">Software Approach</h2>
              <p className="text-sm leading-relaxed text-text-secondary">{cs.solution}</p>
            </Card>
          ) : null}
        </div>
      ) : null}

      {/* Section E: Technology Stack */}
      {project.technologies?.length > 0 ? (
        <CaseStudySection id="stack" eyebrow="Implementation" title="Technology Stack">
          <Card className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="accent" className="px-3 py-1 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            {project.tags?.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2 border-t border-border-subtle pt-4">
                <span className="text-xs font-medium text-text-secondary">Domain tags:</span>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </Card>
        </CaseStudySection>
      ) : null}

      {/* Section D: Key Features */}
      {cs.features?.length > 0 ? (
        <CaseStudySection id="features" eyebrow="Capabilities" title="Key Features">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cs.features.map((featureGroup) => (
              <Card key={featureGroup.group} className="p-5 space-y-3">
                <h3 className="text-base font-semibold text-text-primary">{featureGroup.group}</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {featureGroup.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-accent-text"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      {/* Section F: Architecture */}
      {cs.architecture?.layers?.length > 0 ? (
        <CaseStudySection id="architecture" eyebrow="System Structure" title="Architecture">
          <Card className="p-6 space-y-5">
            {cs.architecture.summary ? (
              <p className="text-sm leading-relaxed text-text-secondary">
                {cs.architecture.summary}
              </p>
            ) : null}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {cs.architecture.layers.map((layer, index) => (
                <div
                  key={layer.name}
                  className="rounded-lg border border-border-subtle bg-bg-secondary p-4 space-y-1.5"
                >
                  <p className="font-mono text-[11px] font-medium text-accent-text">
                    Layer {index + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary">{layer.name}</h3>
                  <p className="font-mono text-xs text-text-primary">{layer.tech}</p>
                  <p className="text-xs leading-relaxed text-text-secondary">{layer.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </CaseStudySection>
      ) : null}

      {/* Section G & H: Process & Challenges */}
      {cs.process?.length > 0 || cs.challenges?.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cs.process?.length > 0 ? (
            <CaseStudySection id="process" eyebrow="Workflow" title="Development Process">
              <Card className="p-6">
                <ol className="space-y-3 text-sm text-text-secondary">
                  {cs.process.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-bg-secondary font-mono text-xs font-medium text-accent-text">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </CaseStudySection>
          ) : null}

          {cs.challenges?.length > 0 ? (
            <CaseStudySection
              id="challenges"
              eyebrow="Engineering Decisions"
              title="Challenges & Solutions"
            >
              <div className="space-y-4">
                {cs.challenges.map((entry) => (
                  <Card key={entry.challenge} className="p-5 space-y-2">
                    <h3 className="text-sm font-semibold text-text-primary">{entry.challenge}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {entry.resolution}
                    </p>
                  </Card>
                ))}
              </div>
            </CaseStudySection>
          ) : null}
        </div>
      ) : null}

      {/* Section J: Outcomes & Learnings */}
      {cs.outcomes?.length > 0 || cs.learnings?.length > 0 ? (
        <CaseStudySection id="outcomes" eyebrow="Reflection" title="Outcomes & Learnings">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cs.outcomes?.length > 0 ? (
              <Card className="p-6 space-y-3">
                <h3 className="text-base font-semibold text-text-primary">Documented Outcomes</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {cs.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}

            {cs.learnings?.length > 0 ? (
              <Card className="p-6 space-y-3">
                <h3 className="text-base font-semibold text-text-primary">Technical Learnings</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {cs.learnings.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}
          </div>
        </CaseStudySection>
      ) : null}

      {/* Transparent availability notice when public demo is not hosted */}
      {!project.links?.demo ? (
        <Card className="border-dashed bg-bg-sidebar p-5">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0 text-text-secondary"
              aria-hidden="true"
            />
            <div className="space-y-1">
              <h2 className="text-sm font-semibold text-text-primary">
                Deployment &amp; Preview Availability
              </h2>
              <p className="text-xs leading-relaxed text-text-secondary">
                {project.deploymentPlatform
                  ? `Deployed on ${project.deploymentPlatform}; the public preview URL has not yet been linked on this page.`
                  : 'A public live deployment URL is not currently hosted for this project. Source code can be inspected on GitHub, and documented system capabilities reflect verified development progress without estimated production metrics.'}
              </p>
            </div>
          </div>
        </Card>
      ) : null}

      <RelatedProjects currentProject={project} />
    </MainContainer>
  );
}
