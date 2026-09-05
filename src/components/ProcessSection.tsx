import React from 'react';
import { Sparkles, Layers, Terminal, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Layers,
    title: 'Choose Your Solution',
    description: 'Select from our comprehensive communication stack — Bulk SMS, RCS, WhatsApp Business, IVR, OBD Voice, SMPP or Site Branding based on your goals.',
    detail: 'Product Selection • Custom SLA • Channel Audit'
  },
  {
    number: '02',
    icon: Terminal,
    title: 'Integrate With Your Business',
    description: 'Our integration engineers help you connect effortlessly via RESTful APIs, webhooks, SMPP v3.4 sockets or enterprise self-serve dashboards.',
    detail: 'API Credentials • Webhook Setup • Sandbox Testing'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch Your Communication',
    description: 'Start sending high-volume notifications, transactional OTPs, marketing broadcasts and automated workflows with direct telco routing.',
    detail: 'Template Approval • DLT Routing • Live Dispatch'
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Track & Optimize',
    description: 'Monitor live delivery rates, message reads, latency reports and engagement telemetry in real-time through intelligent analytics.',
    detail: 'Real-Time DLR • Failure Retry • Volume Scaling'
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#EEF4FF] border-y border-[#D6E4FF]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-white mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-5 tracking-tight">
            Simple. Scalable. <span className="text-zion-orange">Connected.</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal">
            Get your enterprise business communication live and delivering measurable results in four simple steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Blue Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-[#102F68] -translate-x-1/2 hidden sm:block rounded-full" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${isEven ? 'lg:flex-row-reverse' : ''} reveal`} 
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step Center Node: Orange Circle with White Number */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-zion-orange text-white font-black text-lg shadow-lg shadow-orange-500/30 z-10 border-4 border-white">
                    {step.number}
                  </div>

                  {/* Step Card: Clean White Card */}
                  <div className={`w-full lg:w-1/2 pl-0 sm:pl-20 lg:pl-0 ${isEven ? 'lg:pr-14 text-left lg:text-right' : 'lg:pl-14 text-left'}`}>
                    <div className="group bg-white p-7 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center text-zion-blue">
                          <Icon className="w-5 h-5 text-zion-blue" />
                        </div>
                        <span className="sm:hidden font-black text-zion-orange text-base">Step {step.number}</span>
                      </div>

                      <h3 className="text-xl font-bold text-zion-deep-blue mb-2.5 group-hover:text-zion-blue transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zion-dark-gray text-sm leading-relaxed mb-5">
                        {step.description}
                      </p>
                      <div className={`inline-flex items-center gap-2 text-xs font-bold text-zion-blue bg-[#EEF4FF] px-3.5 py-1.5 rounded-lg border border-[#D6E4FF] ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
