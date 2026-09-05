import React from 'react';
import { ArrowRight, Cpu, Layers, Link as LinkIcon, Server, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntegrationEcosystemSection() {
  const integrations = [
    { name: 'Salesforce', category: 'CRM & Enterprise', desc: 'Sync customer interactions, lead statuses & trigger instant automated dispatches.' },
    { name: 'Zoho CRM', category: 'Sales & Support', desc: 'Seamless 2-way WhatsApp & SMS lead notification pipelines with zero delay.' },
    { name: 'LeadSquared', category: 'Real Estate & EdTech', desc: 'Instant OTP verification, site visit reminders & multi-channel drip journeys.' },
    { name: 'HubSpot', category: 'Inbound Marketing', desc: 'Automated deal updates, meeting alerts & personalized chat broadcasts.' },
    { name: 'Shopify', category: 'E-Commerce', desc: 'Abandoned cart recovery, real-time shipment tracking & automated invoices.' },
    { name: 'Custom Webhooks', category: 'REST API & Sockets', desc: 'Stream real-time delivery DLR receipts straight to your internal databases.' },
    { name: 'Direct Telco Binds', category: 'Tier-1 Carrier Pipes', desc: 'Carrier-grade SMPP links directly connected to Airtel, Jio, VI & Vodafone SMSCs.' },
    { name: 'Cloud & On-Premise', category: 'AWS / GCP / Hybrid', desc: 'Scalable cloud edge infrastructure with multi-datacenter active-active failover.' }
  ];

  return (
    <section className="py-24 bg-[#F7F9FC] relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 border border-[#D6E4FF] bg-white rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">
              Integration Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-4 tracking-tight">
            Connects With Your <span className="text-zion-orange">Existing Software Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal leading-relaxed">
            Plug ZION Communication APIs directly into your CRM, ERP, and backend infrastructure in minutes without rewriting your code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center text-zion-blue font-black text-sm">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF4ED] text-zion-orange border border-[#FFD9C2]">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-1.5">{item.name}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center gap-1 text-[11px] font-bold text-zion-blue">
                <LinkIcon className="w-3 h-3 text-zion-orange" />
                <span>Ready Integration</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#102F68] to-[#071B3A] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-zion-orange mb-1">Custom Stack?</div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">Need a custom webhook or SMPP bind?</h4>
            <p className="text-xs sm:text-sm text-blue-100/80 mt-1">Our technical architects will configure dedicated pipes with SLA guarantees.</p>
          </div>
          <Link
            to="/contact"
            className="btn-orange-primary px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap inline-flex items-center gap-2"
          >
            <span>Talk to Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
