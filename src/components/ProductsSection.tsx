import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceIcon } from './ServiceVisuals';

export default function ProductsSection() {
  const products = [
    {
      id: 'sms',
      route: '/sms',
      title: 'Bulk SMS',
      badge: 'Fast & Reliable',
      desc: 'Reach customers instantly with reliable, high-volume SMS communication for OTP authentication, transactional updates, and high-impact promotional messaging.',
      features: ['Promotional SMS', 'Transactional SMS', 'Instant OTP (Sub-sec)', 'DLT & TRAI Scrubbing', 'Live Millisecond DLRs'],
      cta: 'Explore Bulk SMS'
    },
    {
      id: 'rcs',
      route: '/rcs',
      title: 'RCS Business Messaging',
      badge: 'Interactive Media',
      desc: 'Deliver rich, interactive and branded customer experiences with next-generation RCS messaging featuring carousels and 1-tap actions.',
      features: ['Rich Media & Carousels', 'Suggested Action Buttons', 'Verified Brand ID', 'Interactive 2-Way Chat', 'Smart SMS Fallback'],
      cta: 'Explore RCS'
    },
    {
      id: 'whatsapp',
      route: '/whatsapp',
      title: 'WhatsApp Business API',
      badge: 'Verified Business',
      desc: 'Engage customers on WhatsApp with verified business communication, automated notifications, 24/7 chatbots, and multi-agent consoles.',
      features: ['Official Meta Cloud API', 'Automated Notifications & Invoices', '24/7 AI Chatbot Journeys', 'Multi-Agent Team Inbox', 'Green Tick Verification'],
      cta: 'Explore WhatsApp API'
    },
    {
      id: 'meta',
      route: '/meta',
      title: 'Meta Messaging',
      badge: 'Engagement & Leads',
      desc: 'Run high-converting customer engagement campaigns and instant lead generation workflows across Facebook and Instagram messaging channels.',
      features: ['Click-to-WhatsApp Ads Sync', 'Messenger & Instagram DM Automation', 'Lead Qualification Chatbots', 'Dynamic Retargeting', 'CRM Contact Sync'],
      cta: 'Explore Meta Messaging'
    },
    {
      id: 'obd',
      route: '/obd',
      title: 'OBD / Voice Calls',
      badge: 'Voice Broadcast',
      desc: 'Reach tens of thousands of customers simultaneously with automated outbound voice call broadcasts and interactive DTMF surveys.',
      features: ['Mass Voice Broadcasting', 'Interactive DTMF Capture', 'Dynamic Audio Personalization', 'Intelligent Retry Logic', 'Granular Call Analytics'],
      cta: 'Explore OBD Voice'
    },
    {
      id: 'ivr',
      route: '/ivr',
      title: 'Smart IVR Solutions',
      badge: 'Automated Voice Menus',
      desc: 'Build intelligent automated voice workflows that connect customers with your business through smart multi-level menus and call routing.',
      features: ['Multi-Level DTMF Menus', 'Skill-Based Call Routing', 'Real-Time Cloud Recording', 'Virtual & Toll-Free Numbers', 'CRM Screen-Pop Sync'],
      cta: 'Explore Smart IVR'
    },
    {
      id: 'smpp',
      route: '/smpp',
      title: 'SMPP Connectivity',
      badge: '5,000+ TPS',
      desc: 'High-performance carrier-grade SMPP v3.4 connectivity designed for telecom aggregators, fintechs, and high-velocity enterprise messaging.',
      features: ['SMPP v3.4 Protocol Support', 'Up to 5,000+ TPS Capacity', 'Direct Tier-1 Carrier Binds', 'Active-Active Redundancy', '24/7 NOC Telemetry Support'],
      cta: 'Explore SMPP Connect'
    },
    {
      id: 'api-integration',
      route: '/api-integration',
      title: 'Enterprise Communication APIs',
      badge: 'CRM Integration',
      desc: 'Integrate multi-channel messaging directly into your existing CRM, ERP, and backend systems with developer-friendly REST APIs and webhooks.',
      features: ['RESTful Webhook Endpoints', 'Salesforce, Zoho & LeadSquared Sync', 'Pre-built SDKs (Node, Python, PHP)', '99.9% Uptime SLA', 'Sub-second API Execution'],
      cta: 'Explore Enterprise APIs'
    },
    {
      id: 'site-branding',
      route: '/site-branding',
      title: 'Real Estate Project & Site Branding',
      badge: 'Project Launch',
      desc: 'From project naming and visual identity to sales office design, site hoardings, sales collateral, and complete launch marketing campaigns.',
      features: ['Project Naming & Logo Design', 'Sales Office Experience & Signage', 'High-Impact Site Hoardings', 'Luxury Sales Collateral Kits', 'Digital Launch & Lead Capture'],
      cta: 'Explore Project Launch'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F7F9FC] relative overflow-hidden border-y border-[#E2E8F0]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 border border-[#D6E4FF] bg-white rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-zion-orange shadow-[0_0_6px_#FF6B00]" />
            <span className="text-xs font-bold text-zion-blue tracking-wider uppercase">Communication Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-5 tracking-tight">
            Communication Solutions That <span className="text-zion-orange">Drive Business</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal leading-relaxed">
            Everything your business needs to communicate, engage and convert customers across channels.
          </p>
        </div>

        {/* Product Cards Grid with New ZION Service Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => {
            return (
              <Link 
                key={product.id}
                to={product.route}
                className="reveal group bg-white border border-[#E2E8F0] hover:border-zion-blue rounded-3xl p-7 card-lift flex flex-col justify-between relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div>
                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-end mb-2">
                    <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-[#FFF4ED] text-zion-orange border border-[#FFD9C2]">
                      {product.badge}
                    </span>
                  </div>

                  {/* Centered Fixed Optical Icon Container (120px x 120px) */}
                  <div className="w-[120px] h-[120px] flex items-center justify-center mx-auto my-3 transition-transform duration-300 group-hover:scale-105">
                    <ServiceIcon type={product.id as any} className="w-full h-full" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-zion-deep-blue mb-2.5 text-center group-hover:text-zion-blue transition-colors">
                    {product.title}
                  </h3>

                  {/* Description in Dark Gray */}
                  <p className="text-zion-dark-gray text-xs sm:text-sm text-center leading-relaxed mb-6 min-h-[50px]">
                    {product.desc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F1F5F9]">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs font-medium text-zion-dark-gray">
                        <div className="w-4 h-4 rounded-full bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-zion-orange" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA (Orange Link with Arrow) */}
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-sm font-bold text-zion-orange group-hover:text-zion-light-orange transition-colors">
                  <span>{product.cta} &rarr;</span>
                  <div className="w-8 h-8 rounded-full bg-[#FFF4ED] group-hover:bg-zion-orange flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-zion-orange group-hover:text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
