import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export function Tooltip({ content, disabled = false, children }) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipId = useId();

  const updateCoords = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setCoords({
      top: rect.top + rect.height / 2,
      left: rect.right + 16,
    });
  }, []);

  const show = useCallback(() => {
    if (disabled) return;
    updateCoords();
    setVisible(true);
  }, [disabled, updateCoords]);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    const handleScrollOrResize = () => setVisible(false);
    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);

    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && triggerRef.current) {
      ro = new ResizeObserver(updateCoords);
      ro.observe(triggerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
      if (ro) ro.disconnect();
    };
  }, [visible, updateCoords]);

  if (disabled || !content) {
    return children;
  }

  return (
    <div
      ref={triggerRef}
      className="relative inline-flex w-full justify-center"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && typeof document !== 'undefined'
        ? createPortal(
            <span
              id={tooltipId}
              role="tooltip"
              style={{
                position: 'fixed',
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                transform: 'translateY(-50%)',
              }}
              className="pointer-events-none z-50 hidden md:inline-flex items-center whitespace-nowrap rounded-md border border-border-subtle bg-bg-card px-2.5 py-1 text-xs font-medium text-text-primary shadow-md"
            >
              {content}
            </span>,
            document.body
          )
        : null}
    </div>
  );
}
