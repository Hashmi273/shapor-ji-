import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Flower2, 
  Package, 
  SunMedium, 
  HeartHandshake, 
  CheckCircle2 
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Quality Fragrance',
      desc: 'Formulated with carefully balanced aromatic notes that create a pleasing, gentle fragrance without being harsh.'
    },
    {
      icon: Flame,
      title: 'Consistent Aroma',
      desc: 'Smooth, steady burning characteristics that release a uniform, continuous aroma from the first spark to the end.'
    },
    {
      icon: Flower2,
      title: 'Carefully Selected Fragrances',
      desc: 'A diverse selection of traditional Sandalwood, Chandan, Rose, Jasmine, Mogra, Lavender and sacred resins.'
    },
    {
      icon: Package,
      title: 'Elegant Packaging',
      desc: 'Aroma-sealed inner pouches and beautifully designed boxes that protect the incense sticks and preserve freshness.'
    },
    {
      icon: SunMedium,
      title: 'Everyday & Pooja Use',
      desc: 'Perfect for morning prayers, evening aarti, meditation sessions, yoga studios, and daily home aroma.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Satisfaction',
      desc: 'Dedicated to customer delight with transparent order fulfillment and prompt communication for all inquiries.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FCF9F2] text-agarbatti-earth relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/30 text-agarbatti-800 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-agarbatti-gold" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-agarbatti-900 tracking-tight">
            Why Choose <span className="text-gradient-maroon">Our Agarbatti</span>
          </h2>
          <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
            We focus on purity of scent, long-lasting diffusion, and thoughtful presentation to make your spiritual and living spaces truly serene.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-agarbatti-cream-border bg-white hover:border-agarbatti-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center group-hover:bg-agarbatti-900 group-hover:text-agarbatti-gold transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-agarbatti-900 group-hover:text-agarbatti-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-agarbatti-earth-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-agarbatti-cream-border flex items-center gap-1.5 text-xs font-semibold text-agarbatti-gold">
                  <span>Aromatic Excellence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-agarbatti-gold"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
