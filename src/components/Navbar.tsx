import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Building2,
  Calendar,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenEnquiryModal?: (item?: string) => void;
}

export function Navbar({ onOpenEnquiryModal }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const nav = [
    { label: 'All Developments', to: '/products' },
    { label: 'Living Experience', to: '/fragrances' },
    { label: 'Our Legacy (1865)', to: '/about' },
    { label: 'Sales & Contact', to: '/contact' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[70] transition-all duration-300">
      {/* 1. Top Utility Micro-Bar */}
      <div className="hidden md:block bg-[#001d45] text-white/80 border-b border-white/10 text-[11px] font-medium tracking-wide">
        <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          {/* Left Trust Indicators */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong className="font-bold text-white">Shapoorji Pallonji Real Estate</strong>
              <span className="text-white/40">•</span>
              <span>Official Developer Portal</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-white/70">
              <ShieldCheck className="h-3.5 w-3.5 text-[#38a7f4]" />
              <span>100% RERA Registered</span>
            </span>
            <span className="hidden xl:inline text-white/60">
              Founded 1865 (158+ Years of Trust)
            </span>
          </div>

          {/* Right Quick Jump & Assistance */}
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">Top Cities:</span>
              <Link to="/products" className="hover:text-[#38a7f4] transition">Mumbai</Link>
              <span className="text-white/30">•</span>
              <Link to="/products" className="hover:text-[#38a7f4] transition">Pune</Link>
              <span className="text-white/30">•</span>
              <Link to="/products" className="hover:text-[#38a7f4] transition">Bengaluru</Link>
            </div>

            <div className="h-3.5 w-[1px] bg-white/20"></div>

            <a
              href="https://wa.me/918700983465"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <MessageSquare className="h-3 w-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,37,88,0.08)] border-b border-[#d8e3f0]'
            : 'bg-white border-b border-[#e5edf6]'
        }`}
      >
        <div className="mx-auto flex h-[76px] sm:h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo Brand Crest */}
          <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <img
              src="/sp-logo.png"
              alt="Shapoorji Pallonji Real Estate Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <div className="hidden sm:block border-l-2 border-[#d8e3f0] pl-3 py-1">
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0077c8] leading-tight">
                Real Estate
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-[#4a5e7b] font-semibold">
                Since 1865
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {nav.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-4 py-2 text-xs xl:text-[13px] font-bold tracking-wide transition rounded-lg ${
                    isActive
                      ? 'text-[#0077c8] bg-[#f0f6fc]'
                      : 'text-[#002558] hover:text-[#0077c8] hover:bg-[#f8fafc]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-[#0077c8] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Desk: Hotline & VIP CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            {/* Phone Number Pill */}
            <a
              href="tel:+918700983465"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#f0f6fc] border border-[#d8e3f0] text-xs font-extrabold text-[#002558] hover:border-[#0077c8] hover:text-[#0077c8] transition shadow-2xs whitespace-nowrap"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0077c8] text-white">
                <Phone className="h-3 w-3" />
              </div>
              <div className="leading-none text-left">
                <span className="block text-[9px] font-bold text-[#4a5e7b] uppercase tracking-wider">Priority Desk</span>
                <span className="block text-xs font-bold text-[#003882] mt-0.5">+91 87009 83465</span>
              </div>
            </a>

            {/* Book Site Visit CTA */}
            <button
              onClick={() => onOpenEnquiryModal?.('Schedule Site Visit')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003882] to-[#0077c8] hover:from-[#002e6b] hover:to-[#005acf] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Site Visit</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#38a7f4]" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="tel:+918700983465"
              className="p-2.5 rounded-lg bg-[#f0f6fc] text-[#003882] border border-[#d8e3f0]"
              aria-label="Call Helpline"
            >
              <Phone className="h-4 w-4 text-[#0077c8]" />
            </a>

            <button
              onClick={() => onOpenEnquiryModal?.('Schedule Site Visit')}
              className="bg-[#003882] px-3.5 py-2 text-xs font-bold text-white uppercase tracking-wider rounded-lg shadow-sm"
            >
              Visit
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-[#002558] hover:text-[#0077c8] transition"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Slide-Down Drawer */}
      {open && (
        <div className="border-t border-[#d8e3f0] bg-white px-6 py-6 lg:hidden shadow-2xl animate-fade-in">
          <div className="space-y-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-3 text-sm font-bold text-[#002558] hover:bg-[#f0f6fc] hover:text-[#0077c8] rounded-xl transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-[#d8e3f0] pt-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#4a5e7b] px-1">
              <span>Customer Helpline:</span>
              <a href="tel:+918700983465" className="font-bold text-[#003882]">+91 87009 83465</a>
            </div>

            <button
              onClick={() => {
                setOpen(false);
                onOpenEnquiryModal?.('Schedule Site Visit');
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#003882] to-[#0077c8] py-3.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl shadow-md"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule VIP Site Visit</span>
            </button>

            <a
              href="https://wa.me/918700983465"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 py-3 text-xs font-bold rounded-xl"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
