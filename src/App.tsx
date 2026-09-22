import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import FragrancesPage from './pages/FragrancesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="site-progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}

function AppShell() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState('');
  const openEnquiry = (item = '') => {
    setSelectedEnquiryProduct(item);
    setIsEnquiryModalOpen(true);
  };
  const closeEnquiry = () => {
    setSelectedEnquiryProduct('');
    setIsEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-realestate-sand text-realestate-ink">
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar onOpenEnquiryModal={openEnquiry} />
      <div className="pt-[104px]">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiryModal={openEnquiry} />} />
          <Route path="/products" element={<ProductsPage onOpenEnquiryModal={openEnquiry} />} />
          <Route path="/fragrances" element={<FragrancesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiry} defaultProduct={selectedEnquiryProduct} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
