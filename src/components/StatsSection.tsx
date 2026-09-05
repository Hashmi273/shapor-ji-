import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap, Send, ShieldCheck, Headphones } from 'lucide-react';

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          countersRef.current.forEach((counter) => {
            if (!counter) return;
            const target = parseFloat(counter.getAttribute('data-target') || '0');
            if (target > 0) {
              gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                ease: 'power3.out',
                snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
                onUpdate: function() {
                  if (target % 1 !== 0) {
                    counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                  }
                }
              });
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      icon: Zap, 
      value: 99.9, 
      suffix: '%', 
      label: 'Platform Reliability', 
      desc: 'Carrier-grade uptime SLA',
      hasAnim: true 
    },
    { 
      icon: Send, 
      value: 10, 
      suffix: 'M+', 
      label: 'Messages Delivered', 
      desc: 'Monthly multi-channel volume',
      hasAnim: true 
    },
    { 
      icon: ShieldCheck, 
      value: null, 
      displayText: 'Enterprise', 
      suffix: 'Ready',
      label: 'Security & Compliance', 
      desc: 'DLT & TRAI certified routes',
      hasAnim: false 
    },
    { 
      icon: Headphones, 
      value: null, 
      displayText: '24/7', 
      suffix: 'Live',
      label: 'Dedicated Support', 
      desc: 'Round-the-clock SLA assistance',
      hasAnim: false 
    }
  ];

  return (
    <section ref={containerRef} className="py-16 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="reveal group relative bg-[#EEF4FF] border border-[#D6E4FF] hover:border-zion-blue rounded-2xl p-7 text-center transition-all duration-300 shadow-sm hover:shadow-md card-lift"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Orange Icon */}
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D6E4FF] group-hover:border-zion-orange flex items-center justify-center mx-auto mb-4 shadow-sm transition-colors">
                  <Icon className="w-6 h-6 text-zion-orange group-hover:scale-110 transition-transform" />
                </div>

                {/* Stat Numbers (Deep Blue with Orange Suffix) */}
                <div className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue mb-1.5 tracking-tight">
                  {stat.hasAnim ? (
                    <>
                      <span 
                        ref={el => countersRef.current[idx] = el} 
                        data-target={stat.value?.toString()}
                      >
                        0
                      </span>
                      <span className="text-zion-orange ml-0.5">{stat.suffix}</span>
                    </>
                  ) : (
                    <>
                      <span>{stat.displayText}</span>
                      <span className="text-zion-orange text-2xl sm:text-3xl ml-1">{stat.suffix}</span>
                    </>
                  )}
                </div>

                <div className="text-sm font-bold text-zion-blue tracking-wide uppercase mb-1">
                  {stat.label}
                </div>
                
                <div className="text-xs text-zion-slate font-medium">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
