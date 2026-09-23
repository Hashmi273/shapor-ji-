import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001d45] text-white border-t border-[#003882]">
      {/* Top Banner / Trust stats in Logo Blue Accent */}
      <div className="border-b border-[#003882]/70 bg-[#001636] py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-[#0088d6] flex-shrink-0" />
              <div>
                <p className="font-display text-lg font-bold text-white">158+ Years</p>
                <p className="text-xs text-white/70">Construction Legacy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-[#0088d6] flex-shrink-0" />
              <div>
                <p className="font-display text-lg font-bold text-white">100% RERA</p>
                <p className="text-xs text-white/70">Registered Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0077c8]/25 text-[#38a7f4] font-bold text-xs flex-shrink-0 border border-[#0077c8]/40">
                40M+
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">40+ Mn Sq.Ft</p>
                <p className="text-xs text-white/70">Delivered Across India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0077c8]/25 text-[#38a7f4] font-bold text-xs flex-shrink-0 border border-[#0077c8]/40">
                50K+
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">50,000+</p>
                <p className="text-xs text-white/70">Happy Homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand Info with White Badge for Logo */}
          <div>
            <div className="inline-block bg-white p-2.5 rounded-lg shadow-md mb-4">
              <img
                src="/sp-logo.png"
                alt="Shapoorji Pallonji Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-white/75 mt-3">
              Shaping India’s skyline since 1865. Creator of monumental landmarks including The Imperial Mumbai, Reserve Bank of India, and modern residential master developments.
            </p>
            <div className="mt-5 flex items-center gap-2.5 text-xs text-[#38a7f4] font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Experience Lounges Open 7 Days (10 AM – 7 PM)
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38a7f4]">Selected Projects</p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-white/75">
              <Link to="/products" className="block transition hover:text-[#38a7f4]">The Imperial Edge, Tardeo</Link>
              <Link to="/products" className="block transition hover:text-[#38a7f4]">BKC 28, Bandra East</Link>
              <Link to="/products" className="block transition hover:text-[#38a7f4]">Vicinia, Powai</Link>
              <Link to="/products" className="block transition hover:text-[#38a7f4]">Northern Lights, Thane</Link>
              <Link to="/products" className="block transition hover:text-[#38a7f4]">Parkwest 2.0, Bengaluru</Link>
              <Link to="/products" className="block transition hover:text-[#38a7f4]">Golfland, Vanaha Pune</Link>
            </div>
          </div>

          {/* Corporate & Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38a7f4]">Company &amp; Legal</p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-white/75">
              <Link to="/about" className="block transition hover:text-[#38a7f4]">About Our 158-Yr Legacy</Link>
              <Link to="/fragrances" className="block transition hover:text-[#38a7f4]">Living Experience &amp; Amenities</Link>
              <Link to="/contact" className="block transition hover:text-[#38a7f4]">Schedule a Site Visit</Link>
              <Link to="/privacy-policy" className="block transition hover:text-[#38a7f4]">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="block transition hover:text-[#38a7f4]">Terms &amp; Conditions</Link>
              <Link to="/disclaimer" className="block transition hover:text-[#38a7f4]">RERA Disclaimer</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38a7f4]">Corporate Office</p>
            <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-white/75">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38a7f4]" />
                <span className="leading-snug">
                  SP Centre, 41/44 Minoo Desai Marg, Colaba, Mumbai 400005, Maharashtra, India
                </span>
              </div>
              <a href="tel:+918700983465" className="flex items-center gap-3 transition hover:text-[#38a7f4]">
                <Phone className="h-4 w-4 text-[#38a7f4]" />
                <span className="font-semibold text-white">+91 87009 83465</span>
              </a>
              <a href="mailto:realestate@shapoorji.com" className="flex items-center gap-3 break-all transition hover:text-[#38a7f4]">
                <Mail className="h-4 w-4 text-[#38a7f4]" />
                <span>realestate@shapoorji.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 rounded-xl bg-[#001430] p-5 text-[11px] leading-relaxed text-white/60 border border-white/10">
          <p>
            <strong className="text-white/90">RERA Disclaimer:</strong> Projects are registered with respective State Real Estate Regulatory Authorities (MahaRERA / Karnataka RERA). Floor layouts, 3D renders, and specifications are conceptual representations. For complete details, verify with the official RERA portal.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shapoorji Pallonji Real Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/disclaimer" className="hover:text-white transition">RERA Compliance</Link>
            <Link to="/contact" className="inline-flex items-center gap-1.5 font-bold text-[#38a7f4] hover:underline">
              Book Private Consultation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
