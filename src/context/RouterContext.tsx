import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { normalizePath, toHref, extractSpaRedirectRoute } from '../utils/paths';

export interface RouteParams {
  categorySlug?: string;
  serviceSlug?: string;
}

export interface ParsedRoute {
  name:
    | 'home'
    | 'about'
    | 'contact'
    | 'faq'
    | 'privacy'
    | 'terms'
    | 'category'
    | 'service-detail'
    | 'not-found';
  params: RouteParams;
}

export interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
  route: ParsedRoute;
  openEnquiryModal: (preselectedService?: string) => void;
  closeEnquiryModal: () => void;
  isEnquiryModalOpen: boolean;
  preselectedService: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function parsePath(path: string): ParsedRoute {
  const cleanPath = normalizePath(path);

  if (cleanPath === '/' || cleanPath === '') {
    return { name: 'home', params: {} };
  }
  if (cleanPath === '/about') {
    return { name: 'about', params: {} };
  }
  if (cleanPath === '/contact') {
    return { name: 'contact', params: {} };
  }
  if (cleanPath === '/faq') {
    return { name: 'faq', params: {} };
  }
  if (cleanPath === '/privacy-policy' || cleanPath === '/privacy') {
    return { name: 'privacy', params: {} };
  }
  if (cleanPath === '/terms-of-service' || cleanPath === '/terms') {
    return { name: 'terms', params: {} };
  }
  if (cleanPath === '/services') {
    // Redirect to default category view
    return { name: 'category', params: { categorySlug: 'business-formation' } };
  }

  // Service detail: /services/:cat/:svc
  const serviceDetailMatch = cleanPath.match(/^\/services\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)$/);
  if (serviceDetailMatch) {
    return {
      name: 'service-detail',
      params: {
        categorySlug: serviceDetailMatch[1],
        serviceSlug: serviceDetailMatch[2],
      },
    };
  }

  // Category: /services/:cat
  const categoryMatch = cleanPath.match(/^\/services\/([a-zA-Z0-9_-]+)$/);
  if (categoryMatch) {
    return {
      name: 'category',
      params: {
        categorySlug: categoryMatch[1],
      },
    };
  }

  return { name: 'not-found', params: {} };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return '/';
    }

    // 1. Check if redirect parameters were passed by 404.html fallback
    const redirected = extractSpaRedirectRoute();
    if (redirected) {
      const normalizedRedirect = normalizePath(redirected);
      // Clean up the URL in address bar to display pure canonical path
      try {
        const canonicalHref = toHref(normalizedRedirect);
        window.history.replaceState(null, '', canonicalHref);
      } catch {
        // Safe fallback in restricted environments
      }
      return normalizedRedirect;
    }

    // 2. Direct browser URL access / reload
    return normalizePath(window.location.pathname);
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const navigate = useCallback((to: string) => {
    if (typeof window !== 'undefined') {
      const internalPath = normalizePath(to);
      const browserUrl = toHref(internalPath);

      // Only push new state if target path is different from current
      if (internalPath !== currentPath) {
        window.history.pushState(null, '', browserUrl);
        setCurrentPath(internalPath);
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [currentPath]);

  const openEnquiryModal = useCallback((serviceName = '') => {
    setPreselectedService(serviceName);
    setIsEnquiryModalOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsEnquiryModalOpen(false);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const redirected = extractSpaRedirectRoute();
        const nextPath = redirected ? normalizePath(redirected) : normalizePath(window.location.pathname);
        setCurrentPath(nextPath);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const route = useMemo(() => parsePath(currentPath), [currentPath]);

  const contextValue = useMemo(
    () => ({
      currentPath,
      navigate,
      route,
      openEnquiryModal,
      closeEnquiryModal,
      isEnquiryModalOpen,
      preselectedService,
    }),
    [currentPath, navigate, route, openEnquiryModal, closeEnquiryModal, isEnquiryModalOpen, preselectedService]
  );

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
