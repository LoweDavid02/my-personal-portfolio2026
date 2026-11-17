import { Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site.js';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons.jsx';
import { IconLink } from '../ui/IconLink.jsx';
import { ThemeToggle } from '../ui/ThemeToggle.jsx';

export function SidebarFooter({ collapsed = false }) {
  if (collapsed) {
    return (
      <div className="flex shrink-0 flex-col items-center gap-2 border-t border-border-subtle px-2 py-3">
        <ThemeToggle variant="icon" />
        <IconLink
          href={SITE_CONFIG.links.github}
          label="GitHub Profile"
          icon={GithubIcon}
          size={16}
        />
      </div>
    );
  }

  return (
    <div className="shrink-0 space-y-3 border-t border-border-subtle p-3">
      <div>
        <p className="mb-1.5 px-1 text-[11px] font-medium uppercase tracking-wider text-text-secondary">
          Theme
        </p>
        <ThemeToggle variant="segmented" />
      </div>

      <div className="flex items-center justify-between gap-2 px-0.5">
        <div className="flex items-center gap-1.5">
          <IconLink
            href={SITE_CONFIG.links.github}
            label="GitHub Profile"
            icon={GithubIcon}
            size={15}
            className="h-8 w-8 p-0"
          />
          <IconLink
            href={SITE_CONFIG.links.linkedin}
            label="LinkedIn Profile"
            icon={LinkedinIcon}
            size={15}
            className="h-8 w-8 p-0"
          />
          <IconLink
            href={`mailto:${SITE_CONFIG.contact.email}`}
            label="Send Email"
            icon={Mail}
            external={false}
            size={15}
            className="h-8 w-8 p-0"
          />
        </div>
        <span className="font-mono text-[11px] text-text-secondary">BSIS &apos;26</span>
      </div>
    </div>
  );
}
