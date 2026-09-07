import React from 'react';
import { Flame, CheckCircle2, Flower2 } from 'lucide-react';

export const ProductExperienceSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Fragrance',
      desc: 'Select from Sandalwood, Chandan, Gulab, Mogra, Lavender or traditional Masala blends tailored to your mood.'
    },
    {
      step: '02',
      title: 'Light & Relax',
      desc: 'Light the tip of the incense stick, gently blow out the flame, and place it securely in an agarbatti holder.'
    },
    {
      step: '03',
      title: 'Enjoy the Aroma',
      desc: 'Watch the gentle aromatic smoke spiral upwards, diffusing a soothing, authentic Indian fragrance across the room.'
    },
    {
      step: '04',
      title: 'Create a Peaceful Atmosphere',
      desc: 'Immerse yourself in positive energy, focused prayer, deep meditation, or calm everyday relaxation.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-dark-incense text-white relative overflow-hidden">
      {/* Background Glowing Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-agarbatti-gold/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-agarbatti-800/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2A060B] border border-agarbatti-gold/50 text-[#F5E6B8] text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-agarbatti-gold" />
            <span>The Aromatic Ritual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            More Than Fragrance.{' '}
            <span className="text-gradient-gold italic font-normal block sm:inline">
              It's an Experience.
            </span>
          </h2>
          <p className="text-[#FDF8EE] text-sm sm:text-base leading-relaxed font-normal">
            Every burning stick of SHAPOORJI PALLONJ agarbatti creates a serene sanctuary in your home.
          </p>
        </div>

        {/* 4 Experience Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1C0A0D]/90 border border-agarbatti-800 hover:border-agarbatti-gold transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div className="space-y-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-agarbatti-gold block group-hover:text-[#F3D27E] transition-colors">
                  {item.step}
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FDF8EE]/90 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-agarbatti-900 flex items-center gap-1.5 text-xs text-agarbatti-gold font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Simple &amp; Sacred</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Callout Feature Box */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#220509] via-[#1A0507] to-[#220509] border-2 border-agarbatti-gold/40 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F3D27E] flex items-center justify-center lg:justify-start gap-1.5">
              <Flower2 className="w-4 h-4" />
              <span>Authentic Incense Craftsmanship</span>
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Breathe in Positivity, Exhale the Daily Stress
            </h4>
            <p className="text-xs sm:text-sm text-[#FDF8EE] max-w-xl leading-relaxed">
              From dawn aarti to evening meditation, our fragrant smoke brings sacred tranquility to every corner of your home.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="tel:+918700983465"
              className="btn-gold-primary px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide inline-flex items-center gap-2 shadow-lg"
            >
              <span>Connect with Fragrance Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductExperienceSection;
