import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function AccessibleDialog({
  open,
  onClose,
  title,
  children,
  variant = 'modal',
  className = '',
}) {
  const containerRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    previousFocusRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      if (!containerRef.current) return;
      const focusable = containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        containerRef.current.focus();
      }
    }, 10);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && containerRef.current) {
        const focusables = Array.from(containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR));
        if (focusables.length === 0) {
          event.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [open, onClose]);

  const isDrawer = variant === 'drawer';

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label={title}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          {isDrawer ? (
            <motion.div
              ref={containerRef}
              tabIndex={-1}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.22, ease: 'easeOut' }}
              className={`relative z-10 flex h-full w-72 max-w-[85vw] flex-col border-r border-border-subtle bg-bg-sidebar shadow-xl focus:outline-none ${className}`}
            >
              {children}
            </motion.div>
          ) : (
            <div className="relative z-10 flex min-h-full w-full items-center justify-center p-4 pointer-events-none">
              <motion.div
                ref={containerRef}
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className={`pointer-events-auto relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-xl border border-border-subtle bg-bg-card shadow-2xl focus:outline-none ${className}`}
              >
                {children}
              </motion.div>
            </div>
          )}
        </div>
      ) : null}
    </AnimatePresence>
  );
}
