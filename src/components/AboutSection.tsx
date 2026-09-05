import React from 'react';
import { Target, Lightbulb, TrendingUp, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Result-Focused',
    text: 'Every strategy is tied to measurable KPIs. No vanity metrics — only outcomes that move the needle for your business.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    text: 'We blend data with creativity. Our campaigns don\'t just perform — they stand out and make people stop scrolling.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Obsessed',
    text: 'From startups to enterprises, we architect marketing systems built for compounding, sustainable growth.',
  },
  {
    icon: Award,
    title: 'Transparent Partnership',
    text: 'Real-time dashboards, weekly reports, and honest conversations. You always know where your investment is going.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-zion-orange/[0.04] rounded-full blur-[200px] animate-morph" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Visual */}
          <div className="reveal-left relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Main card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zion-navy-light/50 to-zion-navy-deep border border-white/[0.06] overflow-hidden">
                {/* Logo area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-zion-orange to-zion-orange-dark flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-zion-orange/20">
                      <span className="text-5xl font-extrabold text-white">Z</span>
                    </div>
                    <h3 className="text-2xl font-bold">Zion Marketing</h3>
                    <p className="text-sm text-white/40 mt-2">Since 2020 • India</p>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-zion-orange/20 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-zion-orange/20 rounded-br-3xl" />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 lg:-right-8 glass rounded-xl px-4 py-3 animate-float shadow-xl">
                <p className="text-xs text-white/50 mb-0.5">Client Growth</p>
                <p className="text-lg font-bold text-emerald-400">+340%</p>
              </div>

              <div className="absolute -bottom-4 -left-4 lg:-left-8 glass rounded-xl px-4 py-3 animate-float-delayed shadow-xl">
                <p className="text-xs text-white/50 mb-0.5">Avg. ROI</p>
                <p className="text-lg font-bold text-zion-orange">12x</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zion-orange/20 bg-zion-orange/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-zion-orange" />
              <span className="text-xs font-semibold tracking-wider text-zion-orange uppercase">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Marketing That Means <span className="text-gradient-orange">Business</span>
            </h2>

            <p className="text-lg text-white/45 font-light leading-relaxed mb-10">
              Zion Marketing isn't another agency that throws spaghetti at the wall. We're a
              performance-obsessed team that combines deep analytics with bold creative to build
              brands that don't just exist online — they dominate.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group p-4 rounded-xl border border-white/[0.04] hover:border-zion-orange/15 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-zion-orange/10 flex items-center justify-center mb-3 group-hover:bg-zion-orange/20 transition-colors">
                      <Icon className="w-4 h-4 text-zion-orange" strokeWidth={1.8} />
                    </div>
                    <h4 className="text-sm font-bold mb-1.5">{item.title}</h4>
                    <p className="text-xs text-white/35 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
