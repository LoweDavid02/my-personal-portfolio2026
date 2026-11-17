import { useState } from 'react';
import { Expand, ImageOff, X } from 'lucide-react';
import { assetUrl } from '../../utils/assetUrl.js';
import { AccessibleDialog } from '../ui/AccessibleDialog.jsx';

export function ProjectGallery({ gallery = [], projectTitle }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-subtle bg-bg-secondary/50 px-6 py-10 text-center">
        <ImageOff size={22} className="text-text-secondary" aria-hidden="true" />
        <p className="text-sm font-medium text-text-primary">Additional screenshots pending</p>
        <p className="max-w-md text-xs text-text-secondary">
          Real application screenshots for {projectTitle} can be added under{' '}
          <code className="font-mono">public/images/projects/</code>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {gallery.map((item, idx) => {
          const src = assetUrl(item.src);
          return (
            <figure
              key={`${item.src}-${idx}`}
              className="overflow-hidden rounded-xl border border-border-subtle bg-bg-card"
            >
              <button
                type="button"
                onClick={() => setSelectedItem({ ...item, resolvedSrc: src })}
                aria-label={`Inspect screenshot: ${item.alt || projectTitle}`}
                className="group relative block w-full overflow-hidden bg-bg-secondary text-left cursor-pointer"
              >
                <img
                  src={src}
                  alt={item.alt || `${projectTitle} screenshot ${idx + 1}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full bg-bg-secondary p-2 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-bg-card/90 px-2.5 py-1 text-xs font-medium text-text-primary shadow-sm backdrop-blur-xs">
                  <Expand size={13} aria-hidden="true" />
                  <span>Inspect</span>
                </span>
              </button>
              {item.caption ? (
                <figcaption className="border-t border-border-subtle px-4 py-3 text-xs leading-relaxed text-text-secondary">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>

      <AccessibleDialog
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.alt || `${projectTitle} screenshot`}
      >
        {selectedItem ? (
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-5 py-3.5">
              <p className="text-sm font-medium text-text-primary">
                {selectedItem.caption || selectedItem.alt || projectTitle}
              </p>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close screenshot preview"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-text-primary transition-colors hover:border-accent cursor-pointer"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>
            <div className="bg-bg-main p-4">
              <img
                src={selectedItem.resolvedSrc}
                alt={selectedItem.alt || projectTitle}
                className="mx-auto max-h-[75vh] w-auto rounded-lg border border-border-subtle object-contain"
              />
            </div>
          </div>
        ) : null}
      </AccessibleDialog>
    </>
  );
}
