import { useEffect, useState } from 'react';
import {
  AlertCircle,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  FileText,
  GraduationCap,
} from 'lucide-react';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { SITE_CONFIG } from '../config/site.js';
import { EDUCATION_RECORDS, SKILL_GROUPS } from '../data/skills.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { assetUrl } from '../utils/assetUrl.js';

export default function Resume() {
  usePageMeta({
    title: 'Resume / CV',
    description:
      'Curriculum Vitae overview, PDF preview, and resume download for Lowe David C. Tubat.',
    canonicalPath: '/resume',
  });

  const resumeUrl = assetUrl(SITE_CONFIG.resume.filePath);
  const [resumeStatus, setResumeStatus] = useState('checking'); // 'checking' | 'available' | 'missing'
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (!active) return;
        const contentType = res.headers.get('content-type') || '';
        const isPdf = res.ok && !contentType.includes('text/html');
        setResumeStatus(isPdf ? 'available' : 'missing');
      })
      .catch(() => {
        if (active) setResumeStatus('missing');
      });

    return () => {
      active = false;
    };
  }, [resumeUrl]);

  return (
    <MainContainer className="space-y-8">
      <SectionHeading
        eyebrow="Curriculum Vitae"
        title="Resume / CV"
        description={`Prepared for Full-Stack Web Developer roles and internships · Last updated ${SITE_CONFIG.resume.lastUpdated}.`}
        as="h1"
        actions={
          resumeStatus === 'available' ? (
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                variant="primary"
                size="md"
                href={resumeUrl}
                download={SITE_CONFIG.resume.downloadFilename}
              >
                <Download size={16} aria-hidden="true" />
                <span>Download PDF</span>
              </Button>
              <Button variant="secondary" size="md" href={resumeUrl} external>
                <ExternalLink size={15} aria-hidden="true" />
                <span>Open PDF</span>
              </Button>
            </div>
          ) : null
        }
      />

      {resumeStatus === 'missing' ? (
        <EmptyState
          icon={AlertCircle}
          title="Resume PDF file not yet available"
          description={`Expected file at public/${SITE_CONFIG.resume.filePath}. Upload your PDF resume there to enable one-click download and inline preview.`}
        />
      ) : null}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Card className="p-6 space-y-5 lg:col-span-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                {SITE_CONFIG.owner.fullName}
              </h2>
              <p className="text-sm font-medium text-accent-text">{SITE_CONFIG.owner.role}</p>
            </div>
            <Badge variant="accent">BSIS 2022–2026</Badge>
          </div>

          <div className="space-y-2 border-t border-border-subtle pt-4 text-sm text-text-secondary">
            <p className="font-medium text-text-primary">Contact &amp; Location</p>
            <p>{SITE_CONFIG.owner.location}</p>
            <p>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-accent-text hover:underline"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </p>
            <p>
              <a href={SITE_CONFIG.contact.phoneHref} className="hover:underline">
                {SITE_CONFIG.contact.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="space-y-2 border-t border-border-subtle pt-4">
            <p className="text-sm font-medium text-text-primary flex items-center gap-2">
              <GraduationCap size={16} className="text-accent-text" aria-hidden="true" />
              <span>Education</span>
            </p>
            {EDUCATION_RECORDS.map((edu) => (
              <div key={edu.id} className="text-sm text-text-secondary">
                <p className="font-medium text-text-primary">{edu.degree}</p>
                <p>
                  {edu.institution} ({edu.period})
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t border-border-subtle pt-4">
            <p className="text-sm font-medium text-text-primary">Core Stack Summary</p>
            <div className="flex flex-wrap gap-1.5">
              {SKILL_GROUPS.flatMap((group) => group.items.slice(0, 3)).map((skill) => (
                <Badge key={skill} variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t border-border-subtle pt-4">
            <p className="text-sm font-medium text-text-primary">Languages</p>
            <p className="text-sm text-text-secondary">{SITE_CONFIG.owner.languages.join(' · ')}</p>
          </div>
        </Card>

        <Card className="flex flex-col overflow-hidden lg:col-span-7">
          <div className="flex items-center justify-between gap-3 border-b border-border-subtle px-5 py-3.5">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-accent-text" aria-hidden="true" />
              <span className="text-sm font-medium text-text-primary">Document Preview</span>
            </div>
            <button
              type="button"
              onClick={() => setShowPreview((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-bg-secondary px-2.5 py-1 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary cursor-pointer"
            >
              {showPreview ? (
                <>
                  <EyeOff size={13} aria-hidden="true" />
                  <span>Hide Preview</span>
                </>
              ) : (
                <>
                  <Eye size={13} aria-hidden="true" />
                  <span>Show Preview</span>
                </>
              )}
            </button>
          </div>

          {resumeStatus === 'available' && showPreview ? (
            <div className="flex-1 bg-bg-secondary">
              <iframe
                src={resumeUrl}
                title="Lowe David C. Tubat Resume PDF Preview"
                className="h-[640px] w-full border-0"
              />
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16 text-center">
              <FileText size={28} className="text-text-secondary" aria-hidden="true" />
              <p className="text-sm font-medium text-text-primary">
                {resumeStatus === 'missing'
                  ? 'PDF preview unavailable until the resume file is added.'
                  : 'Preview hidden. Use the Download PDF or Open PDF actions above.'}
              </p>
            </div>
          )}
        </Card>
      </div>
    </MainContainer>
  );
}
