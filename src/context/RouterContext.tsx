import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { normalizePath, toHref } from '../utils/paths';

interface RouteParams {
  categorySlug?: string;
  serviceSlug?: string;
}

interface ParsedRoute {
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

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
  route: ParsedRoute;
  openEnquiryModal: (preselectedService?: string) => void;
  closeEnquiryModal: () => void;
  isEnquiryModalOpen: boolean;
  preselectedService: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(path: string): ParsedRoute {
  // Normalize path using base-path awareness
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
  if (cleanPath === '/privacy-policy') {
    return { name: 'privacy', params: {} };
  }
  if (cleanPath === '/terms-of-service') {
    return { name: 'terms', params: {} };
  }

  // Category or Service detail: /services/:cat or /services/:cat/:svc
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
    return typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/';
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      const internalPath = normalizePath(to);
      const browserUrl = toHref(internalPath);
      window.history.pushState(null, '', browserUrl);
      setCurrentPath(internalPath);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const openEnquiryModal = (serviceName = '') => {
    setPreselectedService(serviceName);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const route = useMemo(() => parsePath(currentPath), [currentPath]);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        route,
        openEnquiryModal,
        closeEnquiryModal,
        isEnquiryModalOpen,
        preselectedService,
      }}
    >
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
