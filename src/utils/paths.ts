/**
 * Resilient path normalization and base URL resolution across multiple
 * hosting environments (Custom domain rcplservices.com, GitHub Pages repo subpaths,
 * Cloudflare Pages, local preview, and development servers).
 */

declare global {
  interface Window {
    __RCPL_BASE_PATH__?: string;
  }
}

/**
 * Resolves the active base path for the application.
 * Guaranteed never to throw TypeError in any runtime (browser, SSR, node, or test runner).
 */
export function getBasePath(): string {
  // 1. Explicit runtime override on window if defined
  if (typeof window !== 'undefined' && typeof window.__RCPL_BASE_PATH__ === 'string') {
    return window.__RCPL_BASE_PATH__.replace(/\/+$/, '');
  }

  // 2. Custom domain production (rcplservices.com) is ALWAYS root ''
  if (typeof window !== 'undefined' && window.location) {
    const { hostname } = window.location;
    if (hostname === 'rcplservices.com' || hostname.endsWith('.rcplservices.com')) {
      return '';
    }
  }

  // 3. Safely read import.meta.env.BASE_URL with optional chaining
  let envBase = '';
  try {
    if (typeof import.meta !== 'undefined' && import.meta && import.meta.env && typeof import.meta.env.BASE_URL === 'string') {
      envBase = import.meta.env.BASE_URL.trim();
    }
  } catch {
    envBase = '';
  }

  if (envBase && envBase !== '/' && envBase !== './') {
    return envBase.replace(/\/+$/, '');
  }

  // 4. Dynamic browser auto-detection for GitHub Pages subfolder preview (*.github.io/<repo>/)
  if (typeof window !== 'undefined' && window.location) {
    const { pathname, hostname } = window.location;

    // Only inspect for repo subpaths on github.io domains
    if (hostname.endsWith('.github.io')) {
      if (pathname.startsWith('/rcpl-services/') || pathname === '/rcpl-services') {
        return '/rcpl-services';
      }
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0 && !['services', 'about', 'contact', 'faq', 'privacy-policy', 'terms-of-service'].includes(segments[0])) {
        return `/${segments[0]}`;
      }
    }
  }

  return '';
}

/**
 * Extracts and decodes SPA redirect routes from query strings or hash parameters.
 * Supports:
 * - Query redirect: `/?p=/services/registrations` or `/?/services/registrations`
 * - Hash fallback: `/#/services/registrations`
 */
export function extractSpaRedirectRoute(): string | null {
  if (typeof window === 'undefined' || !window.location) {
    return null;
  }

  const { search, hash } = window.location;

  // 1. Query parameter `?p=/path/to/page`
  if (search) {
    const params = new URLSearchParams(search);
    const pParam = params.get('p');
    if (pParam) {
      return decodeURIComponent(pParam);
    }

    // 2. Query redirect format `/?/path/to/page` (standard spa-github-pages)
    if (search.startsWith('?/')) {
      const cleanSearch = search.slice(2).split('&')[0];
      return `/${decodeURIComponent(cleanSearch)}`;
    }
  }

  // 3. Hash routing fallback `/#/path/to/page`
  if (hash && hash.startsWith('#/')) {
    return decodeURIComponent(hash.slice(1));
  }

  return null;
}

/**
 * Strips base path prefix, query parameters, hash fragments, and trailing slashes
 * to return the pure internal application route.
 */
export function normalizePath(pathname: string): string {
  if (!pathname) return '/';

  // Strip query strings and hash anchors
  let clean = pathname.split('?')[0].split('#')[0].trim();

  // Ensure leading slash
  if (!clean.startsWith('/')) {
    clean = `/${clean}`;
  }

  const basePath = getBasePath();
  if (basePath && basePath !== '/') {
    if (clean === basePath) {
      clean = '/';
    } else if (clean.startsWith(`${basePath}/`)) {
      clean = clean.slice(basePath.length);
    }
  }

  // Strip trailing slashes, except for exact '/'
  clean = clean.replace(/\/+$/, '');
  return clean || '/';
}

/**
 * Prepends the active base path to an internal route for use in browser navigation,
 * anchor tags (<a href="...">), and history.pushState.
 */
export function toHref(to: string): string {
  if (!to) {
    const base = getBasePath();
    return base ? `${base}/` : '/';
  }

  // Preserve external and protocol links intact
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
