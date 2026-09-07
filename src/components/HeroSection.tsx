import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Flower2, 
  Flame, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiryModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-incense-hero text-white overflow-hidden">
      {/* Decorative Warm Glowing Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-agarbatti-gold/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-agarbatti-800/35 rounded-full filter blur-3xl pointer-events-none" />

      {/* Subtle Spiritual Mandala Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #E5C158 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Fragrance Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#35080E] border border-agarbatti-gold/50 text-[#F5E6B8] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
              <Flower2 className="w-4 h-4 text-agarbatti-gold" />
              <span>Premium Agarbatti &amp; Incense Fragrances</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Fragrance That{' '}
              <span className="text-gradient-gold italic font-normal block sm:inline">
                Creates a Feeling.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#FDF8EE] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover premium agarbatti and incense fragrances crafted to bring peace, positivity and a beautiful aroma to every space.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto btn-gold-primary px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-xl group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide border-2 border-agarbatti-gold text-[#FDF8EE] hover:bg-agarbatti-gold/15 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-agarbatti-gold" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mini Fragrance Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-agarbatti-800 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <span>Long-Lasting Aroma</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <span>Pure Natural Notes</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <span>Everyday &amp; Pooja Use</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card - Close-up burning agarbatti stick & fragrant smoke */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-r from-agarbatti-gold/40 to-agarbatti-800/50 rounded-3xl filter blur-md opacity-80"></div>
              
              <div className="relative rounded-2xl bg-[#1A0507] border-2 border-agarbatti-gold/50 overflow-hidden shadow-2xl">
                {/* Hero Incense Visual */}
                <div className="relative h-72 sm:h-84 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80"
                    alt="Close-up of burning agarbatti incense stick with gentle smoke and natural aromatic herbs"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150406] via-[#150406]/35 to-transparent" />
                  
                  {/* Floating Tag Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#1F0508]/95 backdrop-blur-md border border-agarbatti-gold/50 flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-[10px] uppercase text-[#F3D27E] font-bold tracking-wider block">
                        Signature Incense Range
                      </span>
                      <span className="text-sm font-serif font-bold text-white">
                        Sandalwood • Gulab • Chandan • Mogra
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-agarbatti-gold/25 flex items-center justify-center text-agarbatti-gold">
                      <Flame className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Consultation Card Snippet */}
                <div className="p-5 bg-[#150406] space-y-3">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">Retail &amp; Bulk Enquiries</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active Inquiries Desk
                    </span>
                  </div>
                  <p className="text-xs text-[#FDF8EE] leading-relaxed">
                    Looking for premium agarbatti for your home, temple, gifting or wholesale distribution?
                  </p>
                  <button
                    onClick={onOpenEnquiryModal}
                    className="w-full btn-gold-primary py-2.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2"
                  >
                    <span>Request Fragrance Samples &amp; Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Aromatic Badges */}
        <div className="mt-16 pt-8 border-t border-agarbatti-800/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-serif font-bold text-2xl sm:text-3xl text-agarbatti-gold">10+</span>
            <p className="text-xs sm:text-sm text-[#FDF8EE] font-medium">Fragrance Varieties</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-2xl sm:text-3xl text-white">100%</span>
            <p className="text-xs sm:text-sm text-[#FDF8EE] font-medium">Carefully Selected</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-2xl sm:text-3xl text-agarbatti-gold">MSME</span>
            <p className="text-xs sm:text-sm text-[#FDF8EE] font-medium">Registered Business</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-2xl sm:text-3xl text-white">Pure</span>
            <p className="text-xs sm:text-sm text-[#FDF8EE] font-medium">Peace &amp; Positivity</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
