import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site.js';
import { BackToTop } from '../ui/BackToTop.jsx';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons.jsx';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-bg-main">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-6 lg:flex-row lg:items-center lg:justify-between sm:px-6 lg:px-10">
        <div className="space-y-1">
          <p className="text-sm font-medium text-text-primary">
            {SITE_CONFIG.owner.fullName}
            <span className="mx-2 text-border-subtle">·</span>
            <span className="font-normal text-text-secondary">{SITE_CONFIG.owner.role}</span>
          </p>
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} {SITE_CONFIG.owner.fullName}. Built with React, Vite &amp;
            Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            Contact
          </Link>

          <span className="h-3.5 w-px bg-border-subtle" aria-hidden="true" />

          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary transition-colors hover:text-accent-text"
          >
            <GithubIcon size={16} aria-hidden="true" />
          </a>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary transition-colors hover:text-accent-text"
          >
            <LinkedinIcon size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            aria-label="Email"
            className="text-text-secondary transition-colors hover:text-accent-text"
          >
            <Mail size={16} aria-hidden="true" />
          </a>

          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
