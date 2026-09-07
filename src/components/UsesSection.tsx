import React from 'react';
import { Sun } from 'lucide-react';

export const UsesSection: React.FC = () => {
  const useCases = [
    {
      title: 'Puja & Prayer',
      subtitle: 'Morning & Evening Aarti',
      desc: 'Infuse your home mandir and daily prayer rituals with sacred Chandan, Sambrani, and Sandalwood fragrances.',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      badge: 'Devotional'
    },
    {
      title: 'Meditation & Focus',
      subtitle: 'Deep Mindfulness',
      desc: 'Ground the restless mind and enhance spiritual concentration with calming woody and herbal incense smoke.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      badge: 'Mindfulness'
    },
    {
      title: 'Yoga & Wellness',
      subtitle: 'Serene Studio Flow',
      desc: 'Create an uplifting, peaceful environment for pranayama and asanas with gentle French Lavender and Rose incense.',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      badge: 'Wellness'
    },
    {
      title: 'Everyday Home Ambiance',
      subtitle: 'Living Room Freshness',
      desc: 'Dispel cooking odors, welcome guests with soothing floral aroma, and make every room feel cozy and inviting.',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      badge: 'Home Aroma'
    },
    {
      title: 'Festivals & Celebrations',
      subtitle: 'Diwali, Navratri & Pooja',
      desc: 'Elevate festive joy during Diwali, Ganesh Chaturthi, and family functions with rich Mogra and Masala fragrances.',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80',
      badge: 'Festive'
    },
    {
      title: 'Thoughtful Gifting',
      subtitle: 'Auspicious Gift Sets',
      desc: 'Share the gift of aroma and positivity with relatives, colleagues, and friends in embossed presentation gift boxes.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      badge: 'Gifting'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-[#1C100B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/40 text-agarbatti-800 text-xs font-bold uppercase tracking-wider">
            <Sun className="w-4 h-4 text-agarbatti-gold" />
            <span>Versatile Incense Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A080B] tracking-tight">
            Perfect For <span className="text-gradient-maroon">Every Moment</span>
          </h2>
          <p className="text-[#3E261B] text-base leading-relaxed font-medium">
            Whether lighting an incense stick in your home mandir or unwinding in the evening, our agarbatti brings divine peace to every space.
          </p>
        </div>

        {/* 6 Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl border-2 border-[#E5D7C3] overflow-hidden shadow-sm hover:shadow-xl hover:border-agarbatti-gold transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 w-full overflow-hidden bg-agarbatti-cream">
                <img
                  src={item.image}
                  alt={`${item.title} - Agarbatti and Incense setting`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0507]/85 via-transparent to-transparent" />
                
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-agarbatti-gold text-[#1A0407] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {item.badge}
                </span>

                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[11px] text-[#F3D27E] font-bold block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs sm:text-sm text-[#3E261B] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UsesSection;
