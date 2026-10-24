/**
 * Utility for handling path normalization and base URL resolution across
 * multiple hosting platforms (GitHub Pages subpath, Cloudflare Pages root domain,
 * custom domains, and local dev server).
 */

export function getBasePath(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/+$/, '');
}

/**
 * Strips the base path prefix from a browser pathname to get the internal app route.
 * E.g., '/rcpl-services/about' -> '/about'
 *       '/rcpl-services/' -> '/'
 *       '/rcpl-services' -> '/'
 *       '/about' -> '/about'
 */
export function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const basePath = getBasePath();
  let clean = pathname.split('?')[0].split('#')[0];
  if (basePath && (clean === basePath || clean.startsWith(`${basePath}/`))) {
    clean = clean.slice(basePath.length);
  }
  clean = clean.replace(/\/+$/, '');
  return clean || '/';
}

/**
 * Prepends the base path to an internal route for use in <a href="..."> and history.pushState.
 * E.g., '/' -> '/rcpl-services/' (if base is '/rcpl-services/') or '/'
 *       '/about' -> '/rcpl-services/about'
 */
export function toHref(to: string): string {
  if (!to) return getBasePath() ? `${getBasePath()}/` : '/';

  // Return external or protocol links as-is (e.g., https://, mailto:, tel:)
  if (
    to.startsWith('http://') ||
    to.startsWith('https://') ||
    to.startsWith('mailto:') ||
    to.startsWith('tel:') ||
    to.startsWith('//') ||
    to.startsWith('#')
  ) {
    return to;
  }

  const basePath = getBasePath();
  const cleanTo = to.startsWith('/') ? to : `/${to}`;
  if (!basePath) {
    return cleanTo;
  }
  if (cleanTo === '/') {
    return `${basePath}/`;
  }
  return `${basePath}${cleanTo}`;
}
