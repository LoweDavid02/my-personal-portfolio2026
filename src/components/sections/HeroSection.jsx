import { ArrowRight, FileText, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../../config/site.js';
import { assetUrl } from '../../utils/assetUrl.js';
import { Badge } from '../ui/Badge.jsx';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons.jsx';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';

export function HeroSection() {
  const portraitSrc = assetUrl(SITE_CONFIG.owner.portraitImage);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      aria-labelledby="hero-heading"
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10"
    >
      <div className="space-y-6 lg:col-span-7 xl:col-span-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="accent">{SITE_CONFIG.owner.role}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
            <MapPin size={13} aria-hidden="true" />
            <span>Apalit, Pampanga</span>
          </span>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-text-secondary">{SITE_CONFIG.owner.fullName}</p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl lg:leading-[1.12]"
          >
            {SITE_CONFIG.owner.headline}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {SITE_CONFIG.owner.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" to="/projects">
            <span>Explore Projects</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button variant="secondary" size="lg" to="/resume">
            <FileText size={16} aria-hidden="true" />
            <span>View Resume</span>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
          >
            <GithubIcon size={14} aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
          >
            <LinkedinIcon size={14} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
          >
            <Mail size={14} aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 xl:col-span-4">
        <Card className="overflow-hidden p-5">
          <div className="aspect-[4/4] w-full overflow-hidden rounded-lg border border-border-subtle bg-bg-secondary">
            <img
              src={portraitSrc}
              alt={`${SITE_CONFIG.owner.fullName}, ${SITE_CONFIG.owner.role}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="mt-4 space-y-2 border-t border-border-subtle pt-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-text-primary">
                {SITE_CONFIG.owner.fullName}
              </span>
              <span className="font-mono text-[11px] text-accent-text">2022–2026</span>
            </div>
            <p className="text-xs leading-relaxed text-text-secondary">
              {SITE_CONFIG.owner.educationSummary}
            </p>
            <p className="font-mono text-[11px] text-text-secondary">
              React · Laravel · PostgreSQL · React Native
            </p>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
