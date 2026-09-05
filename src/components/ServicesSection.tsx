import React from 'react';
import { Search, Share2, BarChart3, PenTool, Megaphone, Globe } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO & Search Marketing',
    description: 'Dominate search rankings with data-driven SEO strategies. We optimize every page, link, and keyword to bring you qualified organic traffic.',
    color: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'hover:border-blue-500/30',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    iconColor: 'text-blue-400',
    features: ['Technical SEO', 'Content Strategy', 'Link Building'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities across platforms. From content creation to community management — we make your brand the one people follow.',
    color: 'from-zion-orange/20 to-zion-orange/5',
    borderColor: 'hover:border-zion-orange/30',
    iconBg: 'bg-zion-orange/10 group-hover:bg-zion-orange/20',
    iconColor: 'text-zion-orange',
    features: ['Content Calendar', 'Community Growth', 'Analytics'],
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    description: 'Google Ads, Meta Ads, LinkedIn — precision-targeted campaigns that turn ad spend into measurable revenue growth.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'hover:border-emerald-500/30',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    features: ['PPC Campaigns', 'Retargeting', 'ROI Tracking'],
  },
  {
    icon: PenTool,
    title: 'Brand Identity & Design',
    description: 'From logos to full brand systems — we create visual identities that are memorable, consistent, and impossible to ignore.',
    color: 'from-violet-500/20 to-violet-600/5',
    borderColor: 'hover:border-violet-500/30',
    iconBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    iconColor: 'text-violet-400',
    features: ['Logo Design', 'Brand Guidelines', 'Collateral'],
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    description: 'Blogs, videos, infographics, podcasts — compelling content that educates your audience and establishes thought leadership.',
    color: 'from-pink-500/20 to-pink-600/5',
    borderColor: 'hover:border-pink-500/30',
    iconBg: 'bg-pink-500/10 group-hover:bg-pink-500/20',
    iconColor: 'text-pink-400',
    features: ['Blog Writing', 'Video Production', 'Infographics'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Conversion-focused websites that look stunning and load fast. Every pixel is designed to drive action and revenue.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    borderColor: 'hover:border-cyan-500/30',
    iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    features: ['Custom Design', 'Fast & Responsive', 'SEO Ready'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zion-orange/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zion-navy-light/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zion-orange/20 bg-zion-orange/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-zion-orange" />
            <span className="text-xs font-semibold tracking-wider text-zion-orange uppercase">What We Do</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            Services That <span className="text-gradient-orange">Drive Growth</span>
          </h2>
          <p className="reveal max-w-2xl mx-auto text-lg text-white/40 font-light">
            End-to-end digital marketing solutions designed to scale your business, not just your impressions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal group relative p-7 rounded-2xl border border-white/[0.05] ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm transition-all duration-500 card-lift cursor-default`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 transition-colors`}>
                  <Icon className={`w-5 h-5 ${service.iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed mb-5 group-hover:text-white/55 transition-colors">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.04]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-7 right-7 w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <svg className="w-3.5 h-3.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
