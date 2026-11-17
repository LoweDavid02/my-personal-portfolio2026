export function CaseStudySection({ id, title, eyebrow, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 space-y-4 ${className}`}
    >
      <div className="space-y-1">
        {eyebrow ? (
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
            {eyebrow}
          </p>
        ) : null}
        <h2 id={`${id}-heading`} className="text-xl font-semibold text-text-primary sm:text-2xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
