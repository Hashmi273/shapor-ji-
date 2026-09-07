import React from 'react';
import { 
  Users, 
  MessageSquare, 
  FileSpreadsheet, 
  Truck, 
  Headset, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CustomerApproachSection: React.FC = () => {
  const workflowSteps = [
    {
      num: '1',
      icon: MessageSquare,
      title: 'Requirement Consultation',
      desc: 'Share your bill of quantities (BOQ), material specifications, and desired delivery timelines.'
    },
    {
      num: '2',
      icon: FileSpreadsheet,
      title: 'Formal Commercial Quote',
      desc: 'Receive transparent pricing, itemized GST billing, and logistics schedule from Lukar Enterprises.'
    },
    {
      num: '3',
      icon: CheckCircle2,
      title: 'Quality & Batch Validation',
      desc: 'Materials are pre-checked and bundled to ensure dimensional accuracy and zero defect packaging.'
    },
    {
      num: '4',
      icon: Truck,
      title: 'Scheduled On-Site Dispatch',
      desc: 'Coordinated transportation directly to your project site or designated warehouse location.'
    },
    {
      num: '5',
      icon: Headset,
      title: 'Ongoing After-Sales Support',
      desc: 'Continuous point-of-contact support for repeat orders, technical queries, and documentation.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-4 h-4 text-brand-gold" />
            <span>Service Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-900 tracking-tight">
            Our Customer-Focused <span className="text-gradient-gold">Approach</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial technical scoping to post-delivery reconciliation, our structured procurement process guarantees clarity, speed, and peace of mind.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-brand-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-900 text-brand-gold flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold font-display text-slate-300 group-hover:text-brand-gold transition-colors">
                      0{step.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-brand-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-brand-gold">
                  <span>Step 0{step.num} Complete</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Callout */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="btn-gold-primary px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-lg"
          >
            <span>Initiate Your Procurement Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CustomerApproachSection;
