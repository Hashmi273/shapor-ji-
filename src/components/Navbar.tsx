import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Flower2, 
  Flame, 
  Info, 
  Send, 
  ChevronRight, 
  Layers 
} from 'lucide-react';

interface NavbarProps {
  onOpenEnquiryModal?: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Fragrances', path: '/fragrances' },
    { name: 'Why Choose Us', path: '/#why-choose-us' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Spiritual Announcement Bar */}
      <div className="bg-agarbatti-950 text-agarbatti-gold-100 text-xs border-b border-agarbatti-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-agarbatti-gold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal Entity: <strong className="text-white font-semibold">LUKAR ENTERPRISES</strong></span>
            </span>
            <span className="text-agarbatti-800">|</span>
            <span className="text-agarbatti-gold-200 hidden md:inline">
              Premium Agarbatti &amp; Incense Fragrance Products
            </span>
          </div>
          <div className="flex items-center space-x-5 text-agarbatti-gold-100">
            <a 
              href="tel:+918700983465" 
              className="hover:text-agarbatti-gold transition-colors flex items-center gap-1.5"
              title="Call Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-agarbatti-gold" />
              <span>+91 8700983465</span>
            </a>
            <span className="text-agarbatti-800">|</span>
            <a 
              href="mailto:viveklukar1999@gmail.com" 
              className="hover:text-agarbatti-gold transition-colors flex items-center gap-1.5"
              title="Email Inquiries"
            >
              <Mail className="w-3.5 h-3.5 text-agarbatti-gold" />
              <span className="hidden lg:inline">viveklukar1999@gmail.com</span>
              <span className="lg:hidden">Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-agarbatti-cream-border py-3' 
            : 'bg-[#FFFDF9]/90 backdrop-blur-sm border-b border-agarbatti-cream-border/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Brand Logo & Incense Emblem */}
          <Link to="/" className="flex items-center space-x-3 group py-1" aria-label="SHAPOORJI PALLONJ Homepage">
            <img 
              src="./images/logo.png" 
              alt="SHAPOORJI PALLONJ - Premium Agarbatti & Incense" 
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    active 
                      ? 'text-agarbatti-900 font-semibold bg-agarbatti-gold-100/50' 
                      : 'text-agarbatti-earth hover:text-agarbatti-900 hover:bg-agarbatti-cream-card'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-agarbatti-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : window.location.href = '/contact'}
              className="btn-gold-primary px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5"
            >
              <span>Shop / Enquire Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : window.location.href = '/contact'}
              className="btn-gold-primary px-3 py-1.5 rounded-md text-xs font-semibold"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-agarbatti-900 hover:bg-agarbatti-cream-card focus:outline-none focus:ring-2 focus:ring-agarbatti-gold"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown / Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#FFFDF9] border-b border-agarbatti-cream-border shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="bg-agarbatti-950 text-agarbatti-gold-100 p-3 rounded-lg text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-agarbatti-gold font-medium">
                <ShieldCheck className="w-4 h-4 text-agarbatti-gold" />
                <span>Legal Entity: <strong>LUKAR ENTERPRISES</strong></span>
              </div>
              <p className="text-[11px] text-agarbatti-gold-200/80">
                Premium Indian Incense &amp; Fragrance Brand (MSME Registered)
              </p>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-agarbatti-900 text-white font-semibold'
                        : 'text-agarbatti-earth hover:bg-agarbatti-cream-card hover:text-agarbatti-900'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-agarbatti-cream-border space-y-2 text-xs text-agarbatti-earth-muted">
              <a 
                href="tel:+918700983465" 
                className="flex items-center gap-2 text-agarbatti-earth font-medium hover:text-agarbatti-gold p-1"
              >
                <Phone className="w-4 h-4 text-agarbatti-gold" />
                <span>+91 8700983465</span>
              </a>
              <a 
                href="mailto:viveklukar1999@gmail.com" 
                className="flex items-center gap-2 text-agarbatti-earth font-medium hover:text-agarbatti-gold p-1"
              >
                <Mail className="w-4 h-4 text-agarbatti-gold" />
                <span className="truncate">viveklukar1999@gmail.com</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenEnquiryModal) onOpenEnquiryModal();
                else window.location.href = '/contact';
              }}
              className="w-full btn-gold-primary py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-md mt-2"
            >
              <span>Submit Product Enquiry</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
