/**
 * Resolves a public asset path cleanly against Vite's configured BASE_URL.
 */
export function assetUrl(relativePath = '') {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = String(relativePath).replace(/^\/+/, '');
  return `${normalizedBase}${cleanPath}`;
}
