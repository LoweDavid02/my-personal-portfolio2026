import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const handleScrollTop = () => {
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label="Back to top"
      className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent-text cursor-pointer"
    >
      <ArrowUp size={14} aria-hidden="true" />
      <span>Back to top</span>
    </button>
  );
}
