import React from 'react';
import { Layers, Shield, TrendingUp, Activity, Code, Headphones, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Multi-Channel Communication',
    description: 'Reach customers across SMS, RCS, WhatsApp, Voice and more from a single unified API and dashboard.'
  },
  {
    icon: Shield,
    title: 'Enterprise Infrastructure',
    description: 'Engineered for maximum reliability with 99.9% uptime SLA and direct carrier telco connectivity.'
  },
  {
    icon: TrendingUp,
    title: 'High-Throughput Scale',
    description: 'Scale from thousands to tens of millions of messages effortlessly with intelligent load balancing.'
  },
  {
    icon: Activity,
    title: 'Real-Time Delivery',
    description: 'Track every single dispatch with millisecond delivery timestamps, analytics and conversion telemetry.'
  },
  {
    icon: Code,
    title: 'API & SMPP Integration',
    description: 'Instant developer integration with modern RESTful APIs, webhooks, SDKs and raw SMPP sockets.'
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Enterprise technical account managers and round-the-clock support engineers ready to assist you.'
  },
  {
    icon: Lock,
    title: 'Secure Communication',
    description: 'End-to-end data encryption, TRAI DLT registration support and complete data privacy.'
  },
  {
    icon: Zap,
    title: 'Campaign Automation',
    description: 'Trigger automated messaging based on user behavior, schedule campaigns and A/B test templates.'
  }
];

const WhyZionSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-zion-orange shadow-[0_0_6px_#FF6B00]" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Why Zion Marketing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-5 tracking-tight">
            Why Businesses Choose <span className="text-zion-orange">Zion</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal">
            Enterprise-grade communication infrastructure built for reliability, scale and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="reveal group bg-white p-6 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] group-hover:border-zion-orange group-hover:bg-[#FFF4ED] flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-zion-blue group-hover:text-zion-orange transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2.5 group-hover:text-zion-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zion-dark-gray text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyZionSection;
