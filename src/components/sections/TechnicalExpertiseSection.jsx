import { ArrowRight, Code2, Database, Server, Smartphone, Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '../../data/skills.js';
import { Badge } from '../ui/Badge.jsx';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const GROUP_ICONS = {
  frontend: Code2,
  backend: Server,
  database: Database,
  mobile: Smartphone,
  tools: Wrench,
};

export function TechnicalExpertiseSection() {
  const coreGroups = SKILL_GROUPS.filter((group) => group.id !== 'ui-ux');

  return (
    <section aria-labelledby="expertise-heading" className="space-y-6">
      <SectionHeading
        headingId="expertise-heading"
        eyebrow="Core Capabilities"
        title="Technical Expertise"
        description="Technologies applied across academic, institutional, and full-stack software builds."
        actions={
          <Button variant="ghost" size="sm" to="/about#skills">
            <span>Full Skill Breakdown</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreGroups.map((group) => {
          const Icon = GROUP_ICONS[group.id] || Code2;
          return (
            <Card key={group.id} className="flex flex-col justify-between p-5">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-text-primary">{group.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-text-secondary">{group.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
