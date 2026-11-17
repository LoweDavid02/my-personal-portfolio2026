import {
  ArrowRight,
  Compass,
  FileText,
  GraduationCap,
  Languages,
  MapPin,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { SITE_CONFIG } from '../config/site.js';
import { EDUCATION_RECORDS, SKILL_GROUPS } from '../data/skills.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { assetUrl } from '../utils/assetUrl.js';

export default function About() {
  usePageMeta({
    title: 'About Me',
    description:
      'Professional profile, career objective, technical skills, and BS in Information Systems education of Lowe David C. Tubat.',
    canonicalPath: '/about',
  });

  const formalPhoto = assetUrl(SITE_CONFIG.owner.formalImage);

  return (
    <MainContainer className="space-y-14">
      <section id="profile" aria-labelledby="profile-heading" className="scroll-mt-20 space-y-6">
        <SectionHeading
          eyebrow="About Me"
          title="Professional Profile"
          description="Information Systems student and full-stack developer focused on dependable web and mobile software."
          as="h1"
          actions={
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" to="/resume">
                <FileText size={14} aria-hidden="true" />
                <span>Resume / CV</span>
              </Button>
              <Button variant="primary" size="sm" to="/projects">
                <span>View Projects</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </div>
          }
        />

        <Card className="p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="aspect-[4/4.5] w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary">
                <img
                  src={formalPhoto}
                  alt={`${SITE_CONFIG.owner.fullName} professional portrait`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-5 lg:col-span-8">
              <div>
                <h2 id="profile-heading" className="text-2xl font-semibold text-text-primary">
                  {SITE_CONFIG.owner.fullName}
                </h2>
                <p className="mt-1 text-sm font-medium text-accent-text">
                  {SITE_CONFIG.owner.role}
                </p>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                <p>
                  I am a motivated, detail-oriented Bachelor of Science in Information Systems
                  student specializing in full-stack web and mobile application development. Since
                  beginning my programming journey in 2022 with Java, HTML, CSS, JavaScript, PHP,
                  MySQL, and Python, I have progressed into architecting end-to-end systems.
                </p>
                <p>
                  Since 2024, my focus has centered on React JS, Vite, Laravel PHP, PostgreSQL,
                  MySQL, React Native, NativeWind, Tailwind CSS, TypeScript, and Figma—building
                  structured academic and institutional applications with clean API integration and
                  responsive, user-centered interfaces.
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-4 border-t border-border-subtle pt-4 sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-text"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-medium text-text-secondary">Location</dt>
                    <dd className="text-sm text-text-primary">{SITE_CONFIG.owner.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Languages
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-text"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-medium text-text-secondary">Languages</dt>
                    <dd className="text-sm text-text-primary">
                      {SITE_CONFIG.owner.languages.join(', ')}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </Card>
      </section>

      <section aria-labelledby="objective-heading" className="space-y-4">
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
              <Target size={18} aria-hidden="true" />
            </span>
            <div className="space-y-2">
              <h2 id="objective-heading" className="text-lg font-semibold text-text-primary">
                Career Objective
              </h2>
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                To contribute to software engineering teams as a Full-Stack Web Developer or
                Software Development Intern where I can apply my React, Laravel, relational
                database, and mobile UI/UX experience to deliver reliable, accessible, and
                maintainable applications while continuing to grow through production engineering
                mentorship.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 space-y-6">
        <SectionHeading
          headingId="skills-heading"
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Tools, frameworks, and engineering practices organized by domain."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <Card key={group.id} className="flex flex-col p-5">
              <h3 className="text-base font-semibold text-text-primary">{group.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="education"
        aria-labelledby="education-heading"
        className="scroll-mt-20 space-y-6"
      >
        <SectionHeading
          headingId="education-heading"
          eyebrow="Academic Foundation"
          title="Education"
        />

        <div className="space-y-4">
          {EDUCATION_RECORDS.map((edu) => (
            <Card key={edu.id} className="p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
                    <GraduationCap size={20} aria-hidden="true" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-text-primary">{edu.degree}</h3>
                    <p className="text-sm font-medium text-accent-text">{edu.institution}</p>
                    <p className="text-xs text-text-secondary">{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{edu.status}</Badge>
                  <Badge variant="accent">{edu.period}</Badge>
                </div>
              </div>

              <ul className="mt-4 space-y-2 border-t border-border-subtle pt-4 text-sm text-text-secondary">
                {edu.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="space-y-4">
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
              <Compass size={18} aria-hidden="true" />
            </span>
            <div className="space-y-2">
              <h2 id="philosophy-heading" className="text-lg font-semibold text-text-primary">
                Development Philosophy
              </h2>
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                Good software starts with clarity: understanding the real workflow before choosing
                libraries, keeping frontend state and backend APIs predictable, designing accessible
                interfaces that work cleanly across mobile and desktop, and documenting systems so
                teammates can maintain them with confidence.
              </p>
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
                >
                  <span>Explore case studies applying these practices</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </MainContainer>
  );
}
