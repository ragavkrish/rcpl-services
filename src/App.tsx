import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { EntranceProvider } from './context/EntranceContext';
import { EntranceCurtain } from './components/animation/EntranceCurtain';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { EnquiryModal } from './components/enquiry/EnquiryModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getServiceBySlug, getCategoryBySlug } from './data/services';

const AppContent: React.FC = () => {
  const { route, currentPath } = useRouter();

  // Dynamic Title Management
  useEffect(() => {
    let title = 'RCPL Services — Business Formation, Taxation & Compliance Advisory';
    if (route.name === 'about') {
      title = 'About RCPL Services — Corporate Facilitation Practice';
    } else if (route.name === 'contact') {
      title = 'Contact & Enquiry Desk — RCPL Services';
    } else if (route.name === 'faq') {
      title = 'Frequently Asked Questions — RCPL Services';
    } else if (route.name === 'privacy') {
      title = 'Privacy Policy — RCPL Services';
    } else if (route.name === 'terms') {
      title = 'Terms of Service — RCPL Services';
    } else if (route.name === 'category' && route.params.categorySlug) {
      const cat = getCategoryBySlug(route.params.categorySlug);
      if (cat) {
        title = `${cat.title} Services — RCPL Services`;
      }
    } else if (
      route.name === 'service-detail' &&
      route.params.serviceSlug
    ) {
      const svc = getServiceBySlug(route.params.serviceSlug);
      if (svc) {
        title = `${svc.title} — RCPL Services`;
      }
    } else if (route.name === 'not-found') {
      title = '404 Page Not Found — RCPL Services';
    }

    document.title = title;
  }, [route]);

  const renderCurrentPage = () => {
    switch (route.name) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      case 'category':
        return <CategoryPage categorySlug={route.params.categorySlug || ''} />;
      case 'service-detail':
        return (
          <ServiceDetailPage
            categorySlug={route.params.categorySlug || ''}
            serviceSlug={route.params.serviceSlug || ''}
          />
        );
      case 'not-found':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-[#121B24] font-sans antialiased selection:bg-[#152E4D] selection:text-white">


      {/* Main Responsive Header */}
      <Header />

      {/* Main Dynamic Viewport */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Global Interactive WhatsApp Enquiry Modal */}
      <EnquiryModal />

      {/* Floating WhatsApp Quick Consultation Widget */}
      <FloatingWhatsApp />

      {/* Signature First-Visit Entrance Curtain */}
      <EntranceCurtain />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <EntranceProvider>
        <AppContent />
      </EntranceProvider>
    </RouterProvider>
  );
}
