import React, { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VolumeCalculatorSection() {
  const [volume, setVolume] = useState<number>(250000);
  const [selectedChannels, setSelectedChannels] = useState<{
    sms: boolean;
    whatsapp: boolean;
    rcs: boolean;
    voice: boolean;
  }>({
    sms: true,
    whatsapp: true,
    rcs: false,
    voice: false,
  });

  const toggleChannel = (channel: keyof typeof selectedChannels) => {
    setSelectedChannels((prev) => ({
      ...prev,
      [channel]: !prev[channel],
    }));
  };

  const calculateTps = (vol: number) => {
    if (vol <= 50000) return '50 - 100 TPS';
    if (vol <= 500000) return '500 - 1,000 TPS';
    if (vol <= 2000000) return '2,000 - 3,500 TPS';
    return '5,000+ Dedicated TPS';
  };

  const formatVolume = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)} Million`;
    return `${(val / 1000).toFixed(0)}K`;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 border border-[#D6E4FF] bg-[#EEF4FF] rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">
              Enterprise Capacity Estimator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-4 tracking-tight">
            Calculate Your <span className="text-zion-orange">Communication Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal leading-relaxed">
            Estimate required throughput, latency SLAs, and infrastructure capacity for your business volume.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#F7F9FC] border-2 border-[#D6E4FF] rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Sliders & Channels (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-zion-deep-blue uppercase tracking-wider">
                    Expected Monthly Volume
                  </label>
                  <span className="text-lg font-black text-zion-orange bg-[#FFF4ED] px-3.5 py-1 rounded-full border border-[#FFD9C2]">
                    {formatVolume(volume)} messages
                  </span>
                </div>

                <input
                  type="range"
                  min="10000"
                  max="5000000"
                  step="10000"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#D6E4FF] rounded-lg appearance-none cursor-pointer accent-zion-orange"
                />

                <div className="flex justify-between text-[11px] font-bold text-zion-slate mt-2">
                  <span>10K / mo</span>
                  <span>1M / mo</span>
                  <span>5M+ / mo</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-3">
                  Select Required Channels
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => toggleChannel('sms')}
                    className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                      selectedChannels.sms
                        ? 'bg-zion-deep-blue text-white border-zion-deep-blue'
                        : 'bg-white text-zion-slate border-[#D6E4FF]'
                    }`}
                  >
                    <span>Bulk SMS (OTP/TX)</span>
                    <CheckCircle2 className={`w-4 h-4 ${selectedChannels.sms ? 'text-zion-orange' : 'text-gray-300'}`} />
                  </button>

                  <button
                    onClick={() => toggleChannel('whatsapp')}
                    className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                      selectedChannels.whatsapp
                        ? 'bg-zion-deep-blue text-white border-zion-deep-blue'
                        : 'bg-white text-zion-slate border-[#D6E4FF]'
                    }`}
                  >
                    <span>WhatsApp API</span>
                    <CheckCircle2 className={`w-4 h-4 ${selectedChannels.whatsapp ? 'text-zion-orange' : 'text-gray-300'}`} />
                  </button>

                  <button
                    onClick={() => toggleChannel('rcs')}
                    className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                      selectedChannels.rcs
                        ? 'bg-zion-deep-blue text-white border-zion-deep-blue'
                        : 'bg-white text-zion-slate border-[#D6E4FF]'
                    }`}
                  >
                    <span>RCS Media Cards</span>
                    <CheckCircle2 className={`w-4 h-4 ${selectedChannels.rcs ? 'text-zion-orange' : 'text-gray-300'}`} />
                  </button>

                  <button
                    onClick={() => toggleChannel('voice')}
                    className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                      selectedChannels.voice
                        ? 'bg-zion-deep-blue text-white border-zion-deep-blue'
                        : 'bg-white text-zion-slate border-[#D6E4FF]'
                    }`}
                  >
                    <span>Voice / IVR</span>
                    <CheckCircle2 className={`w-4 h-4 ${selectedChannels.voice ? 'text-zion-orange' : 'text-gray-300'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Summary Specs Box (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#D6E4FF] shadow-md space-y-4">
              <div className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                Recommended Architecture
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#F1F5F9]">
                  <span className="text-zion-slate font-medium">Throughput Capacity</span>
                  <span className="font-extrabold text-zion-deep-blue">{calculateTps(volume)}</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#F1F5F9]">
                  <span className="text-zion-slate font-medium">Delivery Latency</span>
                  <span className="font-extrabold text-emerald-600">&lt; 450 ms (Sub-second)</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#F1F5F9]">
                  <span className="text-zion-slate font-medium">Uptime Guarantee</span>
                  <span className="font-extrabold text-zion-deep-blue">99.9% Uptime SLA</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#F1F5F9]">
                  <span className="text-zion-slate font-medium">Support Tier</span>
                  <span className="font-extrabold text-zion-orange">24/7 Dedicated Account Lead</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  <span>Request Custom Volume Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
