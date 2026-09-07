import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export const AboutBrandSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FCF9F2] bg-cream-pattern text-[#1C100B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/40 text-agarbatti-800 text-xs font-bold uppercase tracking-wider">
            <Flower2 className="w-4 h-4 text-agarbatti-gold" />
            <span>Fragrance Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A080B] tracking-tight">
            About <span className="text-gradient-maroon">SHAPOORJI PALLONJ</span>
          </h2>
          <p className="text-[#3E261B] text-base leading-relaxed font-medium">
            Crafting premium incense and agarbatti fragrances designed to bring peace, calm, and pure aromatic bliss to your home and spiritual rituals.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual of Burning Agarbatti Sticks in Brass Holder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#E5D7C3] group bg-white">
              <img
                src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
                alt="Close-up of burning agarbatti sticks in an incense holder with soft fragrant smoke rising"
                className="w-full h-84 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0508]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F3D27E]">
                  Our Fragrance Philosophy
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  Purity, Positivity &amp; Serenity
                </h3>
              </div>
            </div>

            {/* Legal Entity Highlight Box */}
            <div className="p-4 rounded-xl bg-white border border-[#E5D7C3] text-xs text-[#2D1A12] space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-[#1A080B] font-bold font-serif text-sm">
                <ShieldCheck className="w-4 h-4 text-agarbatti-gold" />
                <span>Operating Business Entity</span>
              </div>
              <p className="text-[#3E261B] leading-relaxed font-medium">
                Brand <strong className="text-[#1A080B]">SHAPOORJI PALLONJ</strong> is commercially operated by <strong className="text-[#1A080B]">LUKAR ENTERPRISES</strong> (MSME Registered Enterprise, New Delhi).
              </p>
            </div>
          </div>

          {/* Right Column: Values & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#1A080B] leading-snug">
                Traditional Inspiration with Modern Elegance
              </h3>
              <p className="text-[#2D1A12] text-sm sm:text-base leading-relaxed">
                At <strong className="text-[#1A080B]">SHAPOORJI PALLONJ</strong>, we believe that fragrance is more than a scent—it is an emotion that creates tranquility, uplifts the spirit, and transforms ordinary moments into sacred experiences.
              </p>
              <p className="text-[#2D1A12] text-sm sm:text-base leading-relaxed">
                Our fragrance collection draws inspiration from timeless Indian aromatic traditions—from sacred Chandan and Mysore Sandalwood to blooming morning Gulab, Mogra, and French Lavender. Each blend is created with attention to fragrance purity, consistent burning, and long-lasting freshness.
              </p>
            </div>

            {/* 2 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#E5D7C3] bg-white shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center font-bold">
                  <Flower2 className="w-4 h-4 text-agarbatti-gold" />
                </div>
                <h4 className="font-bold text-[#1A080B] text-sm font-serif">Curated Fragrance Profiles</h4>
                <p className="text-xs text-[#3E261B] leading-relaxed">
                  Carefully chosen natural notes that provide a balanced, non-overpowering, and delightful aroma.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E5D7C3] bg-white shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-agarbatti-800/15 text-agarbatti-800 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4 text-agarbatti-800" />
                </div>
                <h4 className="font-bold text-[#1A080B] text-sm font-serif">Aroma Consistency</h4>
                <p className="text-xs text-[#3E261B] leading-relaxed">
                  Smooth, even burn with enduring fragrant trails that linger pleasantly throughout your rooms.
                </p>
              </div>
            </div>

            {/* Commitments Checklist */}
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#1A080B] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <span>Ideal for daily prayer, meditation, yoga, festivals &amp; home freshening</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-agarbatti-gold flex-shrink-0" />
                <span>Aroma-protecting inner packaging that keeps incense fresh</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-agarbatti-800 hover:text-agarbatti-950 transition-colors"
              >
                <span>Read More About Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutBrandSection;
