import { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { SITE_CONFIG } from '../config/site.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Verified contact details, email, GitHub, and LinkedIn links for Lowe David C. Tubat.',
    canonicalPath: '/contact',
  });

  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(SITE_CONFIG.contact.email);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setCopied(false);
    }
  };

  const mailtoParams = new URLSearchParams();
  if (subject.trim()) mailtoParams.set('subject', subject.trim());
  if (message.trim()) mailtoParams.set('body', message.trim());
  const mailtoHref = `mailto:${SITE_CONFIG.contact.email}${
    mailtoParams.toString() ? `?${mailtoParams.toString()}` : ''
  }`;

  const socialProfiles = [
    {
      name: 'GitHub',
      handle: '@LoweDavid02',
      href: SITE_CONFIG.links.github,
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      handle: 'Louie David Tubat',
      href: SITE_CONFIG.links.linkedin,
      icon: LinkedinIcon,
    },
    {
      name: 'Facebook',
      handle: 'EldieCetie',
      href: SITE_CONFIG.links.facebook,
      icon: ExternalLink,
    },
    {
      name: 'Instagram',
      handle: '@ldct23',
      href: SITE_CONFIG.links.instagram,
      icon: ExternalLink,
    },
  ];

  return (
    <MainContainer className="space-y-10">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Contact"
        description={SITE_CONFIG.contact.availability}
        as="h1"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <Card className="p-6 space-y-5">
            <h2 className="text-base font-semibold text-text-primary">Direct Channels</h2>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
                    <Mail size={16} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-text-secondary">Primary Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="block truncate text-sm font-medium text-text-primary hover:text-accent-text"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex h-8 shrink-0 items-center gap-1 rounded-md border border-border-subtle bg-bg-secondary px-2.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
                  <Phone size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-text-secondary">Phone</p>
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="text-sm font-medium text-text-primary hover:text-accent-text"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-accent-text">
                  <MapPin size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-text-secondary">Location</p>
                  <p className="text-sm font-medium text-text-primary">
                    {SITE_CONFIG.owner.location}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-base font-semibold text-text-primary">Verified Profiles</h2>
            <ul className="space-y-2.5">
              {socialProfiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <li key={profile.name}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-lg border border-border-subtle bg-bg-secondary px-3.5 py-2.5 text-sm transition-colors hover:border-accent"
                    >
                      <span className="flex items-center gap-2.5 font-medium text-text-primary">
                        <Icon size={15} className="text-accent-text" aria-hidden="true" />
                        <span>{profile.name}</span>
                      </span>
                      <span className="text-xs text-text-secondary">{profile.handle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>

        <Card className="p-6 sm:p-8 lg:col-span-7">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-text-primary">Compose an Email</h2>
            <p className="text-sm text-text-secondary">
              Prepare a subject and message below to open your default email client pre-addressed to{' '}
              <span className="font-mono text-xs text-text-primary">
                {SITE_CONFIG.contact.email}
              </span>
              . No third-party form backend is required.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block text-xs font-medium text-text-secondary"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Full-Stack Web Developer Opportunity"
                className="h-10 w-full rounded-lg border border-border-subtle bg-bg-main px-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs font-medium text-text-secondary"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share project context, role details, or collaboration notes..."
                className="w-full rounded-lg border border-border-subtle bg-bg-main p-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="primary" size="md" href={mailtoHref}>
                <Send size={15} aria-hidden="true" />
                <span>Open in Email Client</span>
              </Button>
              <Button variant="outline" size="md" href={`mailto:${SITE_CONFIG.contact.email}`}>
                <Mail size={15} aria-hidden="true" />
                <span>Direct Email Link</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </MainContainer>
  );
}
