import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-progress-bar" 
      style={{ width: `${scrollProgress}%` }} 
      aria-hidden="true" 
    />
  );
}

function FloatingBackToTop() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-7 right-7 z-40 p-3.5 rounded-full bg-white/95 border-2 border-[#D6E4FF] hover:border-zion-orange text-zion-deep-blue hover:text-zion-orange shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group flex items-center justify-center backdrop-blur-md"
    >
      <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

function ScrollRevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    els.forEach((el) => el.classList.remove('active'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    const t = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => observer.observe(el));
    }, 80);

    return () => { observer.disconnect(); clearTimeout(t); };
  }, [pathname]);

  return null;
}

function AppShell() {
  return (
    <div className="min-h-screen bg-white text-zion-dark relative">
      <ScrollProgressBar />
      <CursorGlow />
      <ScrollToTop />
      <ScrollRevealObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sms" element={<ProductPage />} />
        <Route path="/rcs" element={<ProductPage />} />
        <Route path="/whatsapp" element={<ProductPage />} />
        <Route path="/meta" element={<ProductPage />} />
        <Route path="/ivr" element={<ProductPage />} />
        <Route path="/obd" element={<ProductPage />} />
        <Route path="/smpp" element={<ProductPage />} />
        <Route path="/api-integration" element={<ProductPage />} />
        <Route path="/site-branding" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
      </Routes>
      <Footer />
      <FloatingBackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
