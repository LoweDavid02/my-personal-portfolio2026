import { ArrowRight, Award, Briefcase, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { CERTIFICATIONS, EXPERIENCE_TIMELINE } from '../data/experience.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Experience() {
  usePageMeta({
    title: 'Experience & Training',
    description:
      'Academic project experience, software development training, and certifications of Lowe David C. Tubat.',
    canonicalPath: '/experience',
  });

  return (
    <MainContainer className="space-y-14">
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="scroll-mt-20 space-y-6"
      >
        <SectionHeading
          headingId="experience-heading"
          eyebrow="Experience & Training"
          title="Academic & Project Experience"
          description="Documented software engineering responsibilities across institutional builds, capstone systems, and foundational training."
          as="h1"
          actions={
            <Button variant="secondary" size="sm" to="/resume">
              <span>View Resume / CV</span>
            </Button>
          }
        />

        <div className="relative space-y-6 border-l border-border-subtle pl-6 sm:pl-8">
          {EXPERIENCE_TIMELINE.map((item) => (
            <article key={item.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-6 -left-[31px] flex h-3 w-3 rounded-full border-2 border-bg-main bg-accent sm:-left-[39px]"
              />

              <Card className="p-6 space-y-4">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{item.type}</Badge>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-accent-text">
                        <Calendar size={12} aria-hidden="true" />
                        <span>{item.period}</span>
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                      {item.role}
                    </h2>
                    <p className="flex items-center gap-1.5 text-sm font-medium text-text-secondary">
                      <Briefcase size={14} aria-hidden="true" />
                      <span>{item.organization}</span>
                    </p>
                  </div>

                  {item.projectSlug ? (
                    <Link
                      to={`/projects/${item.projectSlug}`}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent-text hover:underline"
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>

                <p className="text-sm leading-relaxed text-text-secondary">{item.summary}</p>

                <ul className="space-y-1.5 text-sm text-text-secondary">
                  {item.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </article>
          ))}
        </div>
      </section>

      <section
        id="certifications"
        aria-labelledby="certifications-heading"
        className="scroll-mt-20 space-y-6"
      >
        <SectionHeading
          headingId="certifications-heading"
          eyebrow="Credentials"
          title="Certifications"
          description="Verified technical credentials and formal training certificates."
        />

        {CERTIFICATIONS.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <Card key={cert.id} className="p-5 space-y-2">
                <h3 className="text-base font-semibold text-text-primary">{cert.title}</h3>
                <p className="text-sm text-text-secondary">
                  {cert.issuer} · {cert.issuedAt}
                </p>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent-text hover:underline"
                  >
                    Verify Credential
                  </a>
                ) : null}
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Award}
            title="No external certifications published yet"
            description="Only verified third-party credentials are displayed here. Current technical capabilities and completed academic systems can be reviewed under Projects and About Me."
            action={
              <Button variant="secondary" size="sm" to="/projects">
                <span>Explore Documented Projects</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            }
          />
        )}
      </section>
    </MainContainer>
  );
}
