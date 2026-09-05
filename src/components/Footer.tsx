import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import zionLogo from '/zion-logo.jpg';

export function Footer() {
  return (
    <footer className="bg-[#071B3A] text-white pt-16 pb-10 relative overflow-hidden border-t border-[#102F68]">
      {/* Subtle Orange Accent Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-80" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Logo (span 2 on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white p-1.5 px-3 rounded-lg shadow-sm inline-block">
                <img src={zionLogo} alt="Zion Marketing Logo" className="h-8 object-contain" />
              </div>
            </Link>
            <p className="text-blue-100/70 mt-4 leading-relaxed max-w-sm text-sm font-normal">
              Enterprise Communication & Real Estate Project Branding Solutions that empower developers and businesses to connect, engage and convert customers across channels.
            </p>
            <div className="pt-2 flex flex-col space-y-2.5 text-xs text-blue-100/80">
              <a href="tel:+919819291927" className="flex items-center gap-2.5 hover:text-zion-orange transition-colors">
                <Phone className="w-4 h-4 text-zion-orange" />
                <span className="font-semibold">+91 98192 91927</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zion-orange" />
                <a href="mailto:hello@zionmarketing.in" className="hover:text-zion-orange transition-colors">hello@zionmarketing.in</a>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C+Maharashtra+400064%2C+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-2.5 hover:text-zion-orange transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra 400064, India</span>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zion-orange" />
              <span>Products</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/sms" className="text-blue-100/70 hover:text-zion-orange transition-colors">Bulk SMS</Link></li>
              <li><Link to="/rcs" className="text-blue-100/70 hover:text-zion-orange transition-colors">RCS Messaging</Link></li>
              <li><Link to="/whatsapp" className="text-blue-100/70 hover:text-zion-orange transition-colors">WhatsApp API</Link></li>
              <li><Link to="/meta" className="text-blue-100/70 hover:text-zion-orange transition-colors">Meta Messaging</Link></li>
              <li><Link to="/ivr" className="text-blue-100/70 hover:text-zion-orange transition-colors">IVR Solutions</Link></li>
              <li><Link to="/obd" className="text-blue-100/70 hover:text-zion-orange transition-colors">OBD Voice Calls</Link></li>
              <li><Link to="/smpp" className="text-blue-100/70 hover:text-zion-orange transition-colors">SMPP Connectivity</Link></li>
              <li><Link to="/api-integration" className="text-blue-100/70 hover:text-zion-orange transition-colors">Enterprise APIs</Link></li>
              <li><Link to="/site-branding" className="text-blue-100/70 hover:text-zion-orange transition-colors">Real Estate & Site Branding</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#about" className="text-blue-100/70 hover:text-zion-orange transition-colors">About Us</a></li>
              <li><a href="/#solutions" className="text-blue-100/70 hover:text-zion-orange transition-colors">Solutions</a></li>
              <li><a href="/#process" className="text-blue-100/70 hover:text-zion-orange transition-colors">How It Works</a></li>
              <li><Link to="/contact" className="text-blue-100/70 hover:text-zion-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zion-orange" />
              <span>Legal</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy-policy" className="text-blue-100/70 hover:text-zion-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-blue-100/70 hover:text-zion-orange transition-colors">Terms & Conditions</Link></li>
            </ul>
            <div className="mt-6 p-3.5 rounded-xl bg-[#102F68]/60 border border-[#1D4F91] text-[11px] text-blue-100/80 leading-relaxed font-medium">
              DLT Compliant • 99.9% Uptime SLA • Enterprise Security
            </div>
          </div>
        </div>

        <div className="border-t border-[#102F68] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-100/60">
          <p>
            &copy; 2026 Zion Marketing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-zion-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-zion-orange transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="text-zion-orange font-bold hover:underline">Get In Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
