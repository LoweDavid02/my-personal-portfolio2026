import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site.js';

export function usePageMeta({ title, description, canonicalPath = '/' }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_CONFIG.owner.fullName}`
      : `${SITE_CONFIG.owner.fullName} — ${SITE_CONFIG.owner.role}`;

    document.title = fullTitle;

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const siteUrl = import.meta.env.VITE_SITE_URL;
    if (siteUrl) {
      const normalizedSite = siteUrl.replace(/\/+$/, '');
      const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
      const canonicalHref = `${normalizedSite}${normalizedPath}`;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalHref);
    }
  }, [title, description, canonicalPath]);
}
