import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* Large Blue Gradient Section (30% Blue Block) */}
        <div className="relative rounded-3xl p-8 md:p-16 lg:p-20 overflow-hidden bg-gradient-to-br from-[#102F68] via-[#12397B] to-[#071B3A] shadow-2xl shadow-blue-950/20 reveal-scale text-white">
          
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FF6B00]/25 to-transparent rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1D4F91]/50 to-transparent rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-8 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zion-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zion-orange shadow-[0_0_8px_#FF6B00]"></span>
              </span>
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Start Connecting Today</span>
            </div>
            
            {/* Headline: White + Orange highlight on "Customer Communication?" */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
              Ready to Scale Your <br className="hidden sm:inline" />
              <span className="text-zion-orange">Customer Communication?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl font-normal leading-relaxed">
              Connect with our enterprise team to setup high-throughput SMS, RCS, WhatsApp Business, Voice or custom SMPP routes for your business.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Link 
                to="/contact" 
                className="btn-orange-primary w-full sm:w-auto px-9 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-orange-900/30"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all"
              >
                <Mail className="w-5 h-5 text-zion-orange" /> 
                <span>Talk to Our Team</span>
              </Link>
            </div>

            {/* Quick Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-blue-100/80 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zion-orange" />
                <span>Instant Account Setup</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-300" />
                <span>Custom Enterprise Pricing</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zion-orange" />
                <span>24/7 Technical SLA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
