export function SectionHeading({
  id,
  headingId,
  eyebrow,
  title,
  description,
  actions = null,
  as: HeadingTag = 'h2',
  className = '',
}) {
  const resolvedHeadingId = headingId || (id ? `${id}-title` : undefined);

  return (
    <div
      id={id}
      className={`scroll-mt-20 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className="min-w-0 max-w-2xl space-y-1.5">
        {eyebrow ? (
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-text">
            {eyebrow}
          </p>
        ) : null}
        <HeadingTag
          id={resolvedHeadingId}
          className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          {title}
        </HeadingTag>
        {description ? (
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2 lg:shrink-0">{actions}</div>
      ) : null}
    </div>
  );
}
