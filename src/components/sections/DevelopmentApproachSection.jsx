import { SITE_CONFIG } from '../../config/site.js';
import { Card } from '../ui/Card.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function DevelopmentApproachSection() {
  return (
    <section aria-labelledby="approach-heading" className="space-y-6">
      <SectionHeading
        headingId="approach-heading"
        eyebrow="Engineering Workflow"
        title="Development Approach"
        description="A structured delivery cycle from problem discovery to deployment and verification."
      />

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SITE_CONFIG.methodology.map((phase) => (
          <Card key={phase.step} as="li" className="flex flex-col p-4">
            <span className="font-mono text-xs font-semibold text-accent-text">{phase.step}</span>
            <h3 className="mt-2 text-base font-semibold text-text-primary">{phase.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
              {phase.description}
            </p>
          </Card>
        ))}
      </ol>
    </section>
  );
}
