import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';

export function AboutPreviewSection() {
  return (
    <section aria-labelledby="about-preview-heading">
      <Card className="p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-3 lg:col-span-8">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
              Background
            </p>
            <h2
              id="about-preview-heading"
              className="text-xl font-semibold text-text-primary sm:text-2xl"
            >
              Information Systems Student &amp; Full-Stack Builder
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
              Pursuing a Bachelor of Science in Information Systems at La Verdad Christian College
              (2022–2026). Starting with Java, PHP, MySQL, and Python fundamentals in 2022, I have
              focused since 2024 on building full-stack web and mobile systems using React JS,
              Laravel, PostgreSQL, React Native, and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 border-t border-border-subtle pt-4 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <div className="flex items-start gap-2.5 text-sm">
              <GraduationCap
                size={18}
                className="mt-0.5 shrink-0 text-accent-text"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-text-primary">La Verdad Christian College</p>
                <p className="text-xs text-text-secondary">BS in Information Systems (2022–2026)</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button variant="secondary" size="sm" to="/about">
                <span>About Me</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
              <Link
                to="/experience"
                className="inline-flex h-8 items-center rounded-md px-2.5 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                Experience &amp; Training →
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
