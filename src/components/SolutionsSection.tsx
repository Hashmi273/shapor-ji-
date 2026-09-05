import React from 'react';
import { Building2, ShoppingCart, Home, GraduationCap, Heart, Plane, Store, Briefcase } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Banking & Fintech',
    description: 'Secure instant OTPs, transaction alerts and verified customer notification infrastructure for financial institutions.',
    tag: 'High Security'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Order tracking, promotional broadcasts, cart recovery alerts and automated WhatsApp customer support chat.',
    tag: 'High Conversion'
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Instant property alerts, VIP buyer broadcasts, automated site visit reminders and verified lead nurturing.',
    tag: 'Lead Gen'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Admission announcements, exam schedules, fee reminders and seamless parent-teacher communication updates.',
    tag: 'Instant Alerts'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Critical appointment reminders, digital health reports, emergency notifications and patient check-ins.',
    tag: 'Critical Care'
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Flight schedule updates, digital boarding passes, booking vouchers and 2-way concierge messaging.',
    tag: 'Guest Experience'
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'Store promotional campaigns, loyalty rewards, discount vouchers and in-store pickup notifications.',
    tag: 'Footfall Boost'
  },
  {
    icon: Briefcase,
    title: 'Enterprises',
    description: 'Scalable multi-channel communication infrastructure, carrier SMPP links and enterprise CRM integrations.',
    tag: 'High TPS'
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#102F68]">
      {/* Background subtle graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1D4F91]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#071B3A] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* White Heading with Orange Highlight on "Every Business" */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-zion-orange shadow-[0_0_6px_#FF6B00]"></span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Built For <span className="text-zion-orange">Every Business</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 font-normal">
            Tailored enterprise communication workflows designed specifically for your industry vertical.
          </p>
        </div>

        {/* White Industry Cards on Blue Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index} 
                className="reveal group bg-white p-6 rounded-2xl border border-white/80 shadow-lg shadow-black/10 hover:shadow-2xl hover:border-zion-orange transition-all duration-300 card-lift"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Header: Blue Icon + Orange Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] group-hover:border-zion-orange group-hover:bg-[#FFF4ED] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-zion-blue group-hover:text-zion-orange transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF4ED] text-zion-orange border border-[#FFD9C2]">
                    {solution.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zion-deep-blue mb-2.5 group-hover:text-zion-blue transition-colors">
                  {solution.title}
                </h3>
                <p className="text-zion-dark-gray text-xs sm:text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
