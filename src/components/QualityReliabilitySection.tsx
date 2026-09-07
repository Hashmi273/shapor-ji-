import React from 'react';
import { ShieldCheck, CheckCircle2, Sliders, FileText, Sparkles, Scale, RefreshCw } from 'lucide-react';

export const QualityReliabilitySection: React.FC = () => {
  const qualityProtocols = [
    {
      step: '01',
      title: 'Material Source Verification',
      desc: 'All raw materials and fabricated units originate from vetted manufacturing mills with traceable production batches.'
    },
    {
      step: '02',
      title: 'Dimensional & Tolerance Checks',
      desc: 'Routine dimensional calibration ensures zero variance from project blueprints and structural load requirements.'
    },
    {
      step: '03',
      title: 'Batch Testing & Documentation',
      desc: 'Batch test certs and material conformity records accompany commercial dispatches for complete audit compliance.'
    },
    {
      step: '04',
      title: 'Secure Transit Packaging',
      desc: 'Palletized, shrink-wrapped, and corner-protected packing prevents transit abrasions and jobsite storage degradation.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-950 text-white relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-brand-700/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Assurance Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Quality &amp; Reliability <span className="text-gradient-gold">Without Compromise</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our quality policy ensures every product supplied under <strong className="text-white">SHAPOORJI PALLONJ</strong> meets expected industrial resilience, safety factors, and performance expectations.
          </p>
        </div>

        {/* 4 Protocol Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityProtocols.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-900/70 border border-brand-800 hover:border-brand-gold/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold font-display text-brand-gold/80 block">
                  {item.step}
                </span>
                <h3 className="text-base font-bold font-display text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-800/80 flex items-center gap-1.5 text-[11px] text-brand-gold font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Process</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-850 to-brand-900 border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center justify-center md:justify-start gap-1.5">
              <Scale className="w-4 h-4" />
              <span>Standard Operational Guarantee</span>
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Transparent Documentation with Every Order
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Commercial dispatches are accompanied by manufacturer test certificates, GST invoices, and delivery challans issued directly by <strong className="text-white">LUKAR ENTERPRISES</strong>.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="tel:+918700983465"
              className="btn-gold-primary px-6 py-3 rounded-lg text-xs font-semibold tracking-wide inline-flex items-center gap-2 shadow-lg"
            >
              <span>Speak with Quality Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualityReliabilitySection;
