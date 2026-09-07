import React from 'react';
import { Sparkles, Heart, Package, ShieldCheck, CheckCircle2, Flower2 } from 'lucide-react';

export const QualitySection: React.FC = () => {
  const qualityPillars = [
    {
      title: 'Fragrance Purity & Balance',
      desc: 'Selected fragrance formulations created to deliver a true, delightful aroma that is pleasing and never overwhelming.'
    },
    {
      title: 'Even & Smooth Burning',
      desc: 'Uniform rolling and balanced bamboo core ensuring steady burning with soft, gentle aromatic smoke dispersion.'
    },
    {
      title: 'Aroma-Sealed Packaging',
      desc: 'Moisture-protective inner sleeves designed to lock in delicate top fragrance notes until the moment of lighting.'
    },
    {
      title: 'Thoughtful Customer Care',
      desc: 'Dedicated point-of-contact for retail questions, customized festive gift boxes, and bulk ordering needs.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF5EB] text-agarbatti-earth relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/30 text-agarbatti-800 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-agarbatti-gold" />
            <span>Our Quality Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-agarbatti-900 tracking-tight">
            Crafted <span className="text-gradient-maroon">With Care</span>
          </h2>
          <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
            From the selection of natural resins and floral extracts to the final gold-embossed packaging, every detail is handled with deep respect for the aromatic craft.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-agarbatti-cream-border hover:border-agarbatti-gold/60 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center font-bold">
                  <Flower2 className="w-5 h-5 text-agarbatti-gold" />
                </div>
                <h3 className="text-base font-serif font-bold text-agarbatti-900">
                  {item.title}
                </h3>
                <p className="text-xs text-agarbatti-earth-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-agarbatti-cream-border flex items-center gap-1.5 text-[11px] text-agarbatti-gold font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Crafted Attention</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QualitySection;
