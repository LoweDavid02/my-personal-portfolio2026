import { ArrowRight, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site.js';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';

export function ContactCtaSection() {
  return (
    <section aria-labelledby="contact-cta-heading">
      <Card className="flex flex-col justify-between gap-6 bg-bg-sidebar p-6 lg:flex-row lg:items-center lg:p-8">
        <div className="min-w-0 max-w-xl space-y-2">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
            Get in Touch
          </p>
          <h2
            id="contact-cta-heading"
            className="text-xl font-semibold text-text-primary sm:text-2xl"
          >
            Open to Engineering Roles &amp; Collaborations
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            {SITE_CONFIG.contact.availability}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
          <Button variant="primary" size="md" href={`mailto:${SITE_CONFIG.contact.email}`}>
            <Mail size={16} aria-hidden="true" />
            <span>Email Directly</span>
          </Button>
          <Button variant="secondary" size="md" to="/contact">
            <span>Contact Details</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Button>
        </div>
      </Card>
    </section>
  );
}
