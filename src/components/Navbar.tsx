import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Smartphone, MessageCircle, Phone, PhoneOutgoing, Server, Building2, ChevronDown, ArrowRight } from 'lucide-react';
import zionLogo from '/zion-logo.jpg';

const products = [
  { name: 'Bulk SMS', path: '/sms', icon: MessageSquare, description: 'Promotional, OTP & Transactional SMS' },
  { name: 'RCS Messaging', path: '/rcs', icon: Smartphone, description: 'Rich interactive next-gen messaging' },
  { name: 'WhatsApp API', path: '/whatsapp', icon: MessageCircle, description: 'Automated 2-way business chat' },
  { name: 'Meta Messaging', path: '/meta', icon: MessageSquare, description: 'FB & Instagram customer engagement' },
  { name: 'IVR Solutions', path: '/ivr', icon: Phone, description: 'Intelligent automated voice response' },
  { name: 'OBD Voice Calls', path: '/obd', icon: PhoneOutgoing, description: 'High-volume outbound calling' },
  { name: 'SMPP Connect', path: '/smpp', icon: Server, description: 'Carrier-grade protocol (5,000+ TPS)' },
  { name: 'Enterprise APIs', path: '/api-integration', icon: Server, description: 'Direct CRM & software integration' },
  { name: 'Real Estate Branding', path: '/site-branding', icon: Building2, description: 'Project launch & sales office design' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-md shadow-slate-900/5' 
          : 'py-5 bg-white/90 backdrop-blur-sm border-b border-[#EEF4FF]'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center group" onClick={() => setMobileMenuOpen(false)}>
            <img src={zionLogo} alt="Zion Marketing Logo" className="h-[32px] lg:h-[38px] object-contain transition-transform group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors hover:text-zion-orange ${
                location.pathname === '/' ? 'text-zion-orange' : 'text-zion-blue'
              }`}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1.5 text-zion-blue hover:text-zion-orange text-sm font-semibold transition-colors py-2 outline-none group-hover:text-zion-orange">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-zion-orange group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 pt-3 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white border border-[#D6E4FF] rounded-2xl p-6 shadow-2xl shadow-blue-950/10 relative overflow-hidden">
                  {/* Subtle top brand line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zion-blue via-zion-orange to-zion-blue" />
                  
                  <div className="grid grid-cols-2 gap-3 relative z-10 pt-2">
                    {products.map((product) => {
                      const Icon = product.icon;
                      return (
                        <Link 
                          key={product.name} 
                          to={product.path}
                          className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-[#EEF4FF] border border-transparent hover:border-[#D6E4FF] transition-all duration-200 group/item"
                        >
                          <div className="bg-[#EEF4FF] p-2.5 rounded-lg border border-[#D6E4FF] group-hover/item:border-zion-orange group-hover/item:bg-white transition-all duration-200">
                            <Icon className="w-5 h-5 text-zion-blue group-hover/item:text-zion-orange transition-colors" />
                          </div>
                          <div>
                            <div className="text-zion-blue font-bold text-sm group-hover/item:text-zion-orange transition-colors flex items-center gap-1.5">
                              <span>{product.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-zion-orange" />
                            </div>
                            <div className="text-zion-slate text-xs mt-0.5 leading-relaxed">{product.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-zion-slate">
                    <span className="font-medium">Enterprise Grade Communication & Branding</span>
                    <Link to="/contact" className="text-zion-orange font-bold hover:underline flex items-center gap-1">
                      Schedule a Consultation &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <a href="/#solutions" className="text-zion-blue hover:text-zion-orange text-sm font-semibold transition-colors">
              Solutions
            </a>
            <a href="/#about" className="text-zion-blue hover:text-zion-orange text-sm font-semibold transition-colors">
              About Us
            </a>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors hover:text-zion-orange ${
                location.pathname === '/contact' ? 'text-zion-orange' : 'text-zion-blue'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+919819291927"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-zion-deep-blue bg-[#EEF4FF] hover:bg-[#D6E4FF] border border-[#D6E4FF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zion-orange" />
              <span>+91 98192 91927</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-orange-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="lg:hidden relative z-50 text-zion-blue hover:text-zion-orange p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className={`flex flex-col h-full pt-28 px-6 pb-8 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-8'} transition-transform duration-300`}>
          <nav className="flex flex-col space-y-5 flex-1">
            <Link 
              to="/" 
              className="text-xl font-bold text-zion-blue hover:text-zion-orange transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-3">
              <button 
                className="flex items-center justify-between w-full text-xl font-bold text-zion-blue focus:outline-none"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span>Products</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${productsOpen ? 'rotate-180 text-zion-orange' : 'text-zion-blue'}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 flex flex-col space-y-3 border-l-2 border-zion-orange ml-2 py-2">
                  {products.map((product) => (
                    <Link 
                      key={product.name} 
                      to={product.path}
                      className="text-zion-slate hover:text-zion-orange py-1 text-base font-medium flex items-center space-x-3 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <product.icon className="w-4 h-4 text-zion-orange" />
                      <span>{product.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="/#solutions" 
              className="text-xl font-bold text-zion-blue hover:text-zion-orange transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="/#about" 
              className="text-xl font-bold text-zion-blue hover:text-zion-orange transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <Link 
              to="/contact" 
              className="text-xl font-bold text-zion-blue hover:text-zion-orange transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="space-y-3 mt-8">
            <a 
              href="tel:+919819291927" 
              className="w-full text-center py-3.5 rounded-full font-bold text-sm text-zion-deep-blue bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 text-zion-orange" />
              <span>Call Us: +91 98192 91927</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-orange-primary w-full text-center py-3.5 rounded-full font-bold text-sm block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started &rarr;
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
