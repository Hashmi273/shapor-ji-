import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Flower2 } from 'lucide-react';
import { FRAGRANCE_FAMILIES } from '../data/productsData';

export const FragranceExperienceSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF5EB] bg-cream-pattern text-agarbatti-earth relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/30 text-agarbatti-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-agarbatti-gold" />
            <span>Aromatic Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-agarbatti-900 tracking-tight">
            Find Your <span className="text-gradient-maroon">Fragrance</span>
          </h2>
          <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
            Every mood, prayer, and space calls for a unique aroma. Explore our six signature fragrance families crafted for daily harmony and spiritual elevation.
          </p>
        </div>

        {/* 6 Fragrance Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FRAGRANCE_FAMILIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-agarbatti-cream-border overflow-hidden shadow-sm hover:shadow-xl hover:border-agarbatti-gold/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Emoji Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-agarbatti-cream">
                <img
                  src={item.image}
                  alt={`${item.name} Agarbatti fragrance category`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agarbatti-950/80 via-agarbatti-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-sm font-bold text-agarbatti-900 shadow-sm flex items-center gap-1.5">
                  <span>{item.emoji}</span>
                  <span className="font-serif">{item.name}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-agarbatti-gold-100 font-medium">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-agarbatti-earth-muted leading-relaxed">
                  {item.desc}
                </p>

                {/* Popular Notes Pills */}
                <div className="space-y-1.5 pt-2 border-t border-agarbatti-cream-border">
                  <span className="text-[11px] uppercase font-bold text-agarbatti-earth-muted block">
                    Signature Fragrance Notes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.popularNotes.map((note, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-agarbatti-cream-card text-agarbatti-800 text-[11px] font-medium border border-agarbatti-cream-border"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    to={`/products?category=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-agarbatti-900 hover:text-agarbatti-700 transition-colors"
                  >
                    <span>View {item.name} Agarbatti</span>
                    <ArrowRight className="w-3.5 h-3.5 text-agarbatti-gold" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Discovery Banner */}
        <div className="mt-14 text-center">
          <Link
            to="/fragrances"
            className="btn-gold-primary px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-lg"
          >
            <span>Learn More in Fragrance Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FragranceExperienceSection;
