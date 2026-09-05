import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, MessageSquare, Smartphone, MessageCircle, Phone, Server, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const visualsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([badgeRef.current, subtitleRef.current, ctasRef.current, visualsRef.current, trustRef.current], { opacity: 0, y: 20 });
      
      const words = headlineRef.current?.querySelectorAll('.word') || [];
      gsap.set(words, { opacity: 0, y: 40 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to(words, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'back.out(1.5)' }, '-=0.2')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(visualsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* 50% White Base + Subtle Ambient Blue/Orange Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4FF]/70 via-white to-white pointer-events-none" />
      
      {/* Subtle background radial lights */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#D6E4FF]/40 via-[#FF6B00]/05 to-[#D6E4FF]/40 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle tech background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#102F68_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Pill: Light Blue Background, Blue Border, Orange Dot */}
          <div 
            ref={badgeRef} 
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] shadow-sm mb-7"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zion-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zion-orange shadow-[0_0_6px_#FF6B00]"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-zion-blue uppercase tracking-wider">
              Trusted Enterprise Communication Solutions
            </span>
            <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
          </div>

          {/* Headline (Powering = Deep Blue, Business Communication = Zion Orange, That Connects = Deep Blue) */}
          <h1 
            ref={headlineRef} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zion-deep-blue leading-[1.12] mb-6 tracking-tight"
          >
            <span className="word inline-block mr-3">Powering</span>
            <span className="word inline-block mr-3 text-zion-orange">Business</span>
            <span className="word inline-block mr-3 text-zion-orange">Communication</span>
            <br className="hidden sm:inline" />
            <span className="word inline-block mr-3">That</span>
            <span className="word inline-block relative text-zion-deep-blue">
              Connects.
              <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full text-zion-orange h-3 sm:h-3.5" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 50 12 100 6" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Supporting Text in Dark Gray */}
          <p 
            ref={subtitleRef} 
            className="text-base sm:text-lg md:text-xl text-zion-dark-gray max-w-2xl font-normal mb-10 leading-relaxed"
          >
            Connect with your customers through powerful <span className="font-semibold text-zion-deep-blue">SMS</span>, <span className="font-semibold text-zion-deep-blue">RCS</span>, <span className="font-semibold text-zion-deep-blue">WhatsApp</span>, <span className="font-semibold text-zion-deep-blue">Voice</span> and Enterprise Communication solutions built for scale.
          </p>

          {/* CTA Buttons (Primary: Orange / Secondary: White with Blue Border) */}
          <div ref={ctasRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <Link 
              to="/contact" 
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-orange-500/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a 
              href="#services" 
              className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 text-zion-blue" />
            </a>
          </div>

          {/* Communication Tech Architecture Badges (White cards with Blue icons) */}
          <div 
            ref={visualsRef}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mb-12"
          >
            <div className="bg-white p-3.5 rounded-2xl border border-[#D6E4FF] shadow-sm flex items-center gap-3 hover:border-zion-blue transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-zion-blue flex-shrink-0">
                <MessageSquare className="w-4.5 h-4.5 text-zion-blue" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-zion-deep-blue">Bulk SMS</div>
                <div className="text-[10px] text-zion-slate font-medium">Instant OTP & DLR</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#D6E4FF] shadow-sm flex items-center gap-3 hover:border-zion-blue transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-zion-orange flex-shrink-0">
                <Smartphone className="w-4.5 h-4.5 text-zion-orange" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-zion-deep-blue">RCS Business</div>
                <div className="text-[10px] text-zion-slate font-medium">Rich Verified Media</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#D6E4FF] shadow-sm flex items-center gap-3 hover:border-zion-blue transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-emerald-600 flex-shrink-0">
                <MessageCircle className="w-4.5 h-4.5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-zion-deep-blue">WhatsApp API</div>
                <div className="text-[10px] text-zion-slate font-medium">Official Green Tick</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#D6E4FF] shadow-sm flex items-center gap-3 hover:border-zion-blue transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-zion-blue flex-shrink-0">
                <Server className="w-4.5 h-4.5 text-zion-blue" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-zion-deep-blue">SMPP v3.4</div>
                <div className="text-[10px] text-zion-slate font-medium">High TPS Socket</div>
              </div>
            </div>
          </div>

          {/* Small Trust Indicator Row */}
          <div 
            ref={trustRef}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-[#E2E8F0] text-xs sm:text-sm text-zion-slate font-medium mb-10"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zion-orange" />
              <span>TRAI & DLT Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-zion-blue" />
              <span>99.9% Route Reliability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zion-orange" />
              <span>Direct Carrier Telco Binds</span>
            </div>
          </div>

          {/* Mouse Scroll Down Interactive Animation Widget */}
          <a
            href="#services"
            className="inline-flex flex-col items-center gap-2 group cursor-pointer text-zion-slate hover:text-zion-orange transition-colors"
            aria-label="Scroll down to explore"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-zion-blue/70 group-hover:text-zion-orange transition-colors">
              Scroll Down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-[#D6E4FF] group-hover:border-zion-orange transition-colors flex items-start justify-center p-1.5 bg-white shadow-sm">
              <div className="w-1.5 h-2.5 rounded-full bg-zion-orange animate-mouse-scroll" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
