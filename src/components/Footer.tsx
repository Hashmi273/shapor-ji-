import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  FileText 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#220509] text-[#FFF8EE] pt-16 pb-12 border-t-2 border-agarbatti-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#3D0A10]">
          
          {/* Column 1: Brand & Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-[#35080E] flex items-center justify-center border-2 border-agarbatti-gold shadow-md">
                <span className="font-serif font-extrabold text-xl text-agarbatti-gold">SP</span>
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white tracking-tight block">
                  SHAPOORJI PALLONJ
                </span>
                <span className="text-xs uppercase tracking-wider text-[#F3D27E] font-bold">
                  Premium Agarbatti &amp; Incense
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FDF8EE] leading-relaxed font-normal">
              Premium agarbatti and incense fragrances created to add warmth, positivity and beautiful aroma to everyday moments.
            </p>

            {/* Legal Entity Callout Box */}
            <div className="p-4 rounded-xl bg-[#1A0407] border border-agarbatti-gold/40 text-xs text-white space-y-1 shadow-md">
              <div className="flex items-center gap-1.5 text-agarbatti-gold font-bold">
                <ShieldCheck className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <span>Operating Legal Entity: LUKAR ENTERPRISES</span>
              </div>
              <p className="text-xs text-[#F5EBE1] leading-normal font-normal">
                MSME Registered Enterprise (Govt. of India). Operating independently as a consumer incense and fragrance distributor.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-agarbatti-gold"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/fragrances" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Fragrances</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-agarbatti-gold"></span>
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/privacy-policy" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-[#FDF8EE] hover:text-agarbatti-gold transition-colors inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-agarbatti-gold"></span>
              Contact &amp; Registered Office
            </h3>
            
            <div className="space-y-3.5 text-sm text-[#FDF8EE]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-agarbatti-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs sm:text-sm">
                  <strong className="text-white block font-bold text-sm">LUKAR ENTERPRISES</strong>
                  H NO 120, SECOND FLOOR, MADANGIR VILLAGE, DR. AMBEDKAR NAGAR, NEW DELHI, SOUTH DELHI, DELHI - 110062
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <a href="tel:+918700983465" className="hover:text-agarbatti-gold transition-colors text-white font-bold text-sm">
                  +91 8700983465
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <a href="mailto:viveklukar1999@gmail.com" className="hover:text-agarbatti-gold transition-colors text-white font-medium text-sm break-all">
                  viveklukar1999@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 border-b border-[#3D0A10] text-xs text-[#F5EBE1] leading-relaxed">
          <p>
            <strong className="text-[#F3D27E] font-bold">Important Notice:</strong> This website is an independent consumer brand and product showcase for agarbatti and incense products operated by <span className="text-white font-bold">LUKAR ENTERPRISES</span>. It does not represent itself as the official website of any third-party corporate conglomerate.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#FDF8EE] font-medium">
          <div>
            &copy; 2026 <strong className="text-white font-bold">SHAPOORJI PALLONJ</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Legal Entity:</span>
            <span className="text-agarbatti-gold font-bold">LUKAR ENTERPRISES</span>
            <span className="text-agarbatti-800">|</span>
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
