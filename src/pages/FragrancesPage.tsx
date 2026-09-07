import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Flower2, ArrowRight, CheckCircle2, Flame, Heart } from 'lucide-react';
import { FRAGRANCE_FAMILIES } from '../data/productsData';

export const FragrancesPage: React.FC = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-[#FCF9F2] bg-cream-pattern min-h-screen text-agarbatti-earth">
      
      {/* Page Hero */}
      <section className="bg-incense-hero text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-agarbatti-gold" />
            <span>Aromatic Masterclass</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
            The World of <span className="text-gradient-gold italic font-normal">Fragrances</span>
          </h1>
          <p className="text-sm sm:text-base text-agarbatti-gold-100/90 max-w-2xl mx-auto leading-relaxed">
            Explore our curated fragrance universe. Discover how floral, woody, spiritual, and classic notes transform the aura of your home and spiritual rituals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {FRAGRANCE_FAMILIES.map((family, idx) => (
          <div 
            key={family.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column (5 cols) */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-agarbatti-cream-border group bg-white">
                <img
                  src={family.image}
                  alt={`${family.name} Fragrance Profile`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agarbatti-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-agarbatti-gold font-bold uppercase tracking-wider block">
                    Fragrance Family
                  </span>
                  <span className="text-xl font-serif font-bold text-white flex items-center gap-2 mt-0.5">
                    <span>{family.emoji}</span>
                    <span>{family.name}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Details Column (7 cols) */}
            <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-agarbatti-gold">
                  {family.tagline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-agarbatti-900">
                  {family.emoji} {family.name} Incense Blends
                </h2>
                <p className="text-sm sm:text-base text-agarbatti-earth-muted leading-relaxed">
                  {family.desc}
                </p>
              </div>

              {/* Popular Notes */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-agarbatti-earth font-serif">
                  Signature Aromatic Extracts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {family.popularNotes.map((note, nIdx) => (
                    <span 
                      key={nIdx}
                      className="px-3 py-1.5 rounded-xl bg-white border border-agarbatti-cream-border text-xs font-semibold text-agarbatti-800 shadow-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Link
                  to={`/products?category=${encodeURIComponent(family.name)}`}
                  className="btn-gold-primary px-6 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Explore {family.name} Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Consultation Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-agarbatti-cream-border text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-serif font-bold text-agarbatti-900">
            Need Help Selecting the Right Fragrance?
          </h3>
          <p className="text-xs sm:text-sm text-agarbatti-earth-muted max-w-md mx-auto">
            Whether for your home altar, yoga studio, or festive celebration, our commercial team is delighted to recommend the perfect aroma profile.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-maroon-primary px-7 py-3 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
            >
              <span>Speak with Our Fragrance Team</span>
              <ArrowRight className="w-4 h-4 text-agarbatti-gold" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default FragrancesPage;
