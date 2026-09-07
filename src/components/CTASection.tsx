import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight, Flower2, ShieldCheck, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenEnquiryModal?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section className="py-20 lg:py-24 bg-incense-hero text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-agarbatti-gold/15 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <Flower2 className="w-4 h-4 text-agarbatti-gold" />
            <span>Fragrance Inquiries &amp; Bulk Orders</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Bring Beautiful Fragrance <span className="text-gradient-gold italic font-normal block sm:inline">Into Your Space</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-agarbatti-gold-100/90 max-w-2xl mx-auto leading-relaxed">
            Experience the soothing calmness of <strong className="text-white">SHAPOORJI PALLONJ</strong> incense products. For retail sample packs, festive gifting, or wholesale distribution, connect with our team at <strong className="text-white">LUKAR ENTERPRISES</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenEnquiryModal}
              className="w-full sm:w-auto btn-gold-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xl group"
            >
              <span>Shop / Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+918700983465"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wide border-1.5 border-agarbatti-gold/40 text-agarbatti-gold hover:bg-agarbatti-gold/10 hover:border-agarbatti-gold transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-agarbatti-gold" />
              <span>Call Helpline: +91 8700983465</span>
            </a>
          </div>

          {/* Direct Line Strip */}
          <div className="pt-8 border-t border-agarbatti-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-agarbatti-gold-100/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-agarbatti-gold" />
              <span>Legal Entity: <strong className="text-white font-medium">LUKAR ENTERPRISES</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-agarbatti-gold" />
              <span>Email: <strong className="text-white font-medium">viveklukar1999@gmail.com</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-agarbatti-gold" />
              <span>MSME Registered Enterprise</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
