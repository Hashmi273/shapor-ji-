import React, { useState, useRef } from 'react';
import { 
  MessageSquare, 
  Smartphone, 
  MessageCircle, 
  Phone, 
  Code2, 
  Check, 
  Copy, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  PhoneOutgoing,
  Server,
  Share2,
  Building2,
  Sliders,
  Play,
  TrendingUp,
  Activity,
  Layers,
  Flame,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import whatsappMockup from '../assets/simulator-whatsapp.png';
import rcsMockup from '../assets/simulator-rcs.png';
import smsMockup from '../assets/simulator-sms.png';

type ProductId = 'sms' | 'rcs' | 'whatsapp' | 'meta' | 'ivr' | 'obd' | 'smpp' | 'api' | 'site-branding';

interface ProductItem {
  id: ProductId;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  route: string;
}

export default function ChannelPlaygroundSection() {
  const [activeTab, setActiveTab] = useState<ProductId>('sms');
  const [copied, setCopied] = useState(false);
  const [obdDialing, setObdDialing] = useState(false);
  const [obdStatus, setObdStatus] = useState<'idle' | 'calling' | 'connected'>('idle');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const productList: ProductItem[] = [
    {
      id: 'sms',
      name: 'Bulk SMS',
      tagline: 'Promotional, OTP & Transactional SMS',
      icon: MessageSquare,
      route: '/sms'
    },
    {
      id: 'rcs',
      name: 'RCS Messaging',
      tagline: 'Rich interactive next-gen messaging',
      icon: Smartphone,
      route: '/rcs'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp API',
      tagline: 'Automated 2-way business chat',
      icon: MessageCircle,
      route: '/whatsapp'
    },
    {
      id: 'meta',
      name: 'Meta Messaging',
      tagline: 'Facebook & Instagram customer engagement',
      icon: Share2,
      route: '/meta'
    },
    {
      id: 'ivr',
      name: 'IVR Solutions',
      tagline: 'Intelligent automated voice response',
      icon: Phone,
      route: '/ivr'
    },
    {
      id: 'obd',
      name: 'OBD Voice Calls',
      tagline: 'High-volume outbound calling',
      icon: PhoneOutgoing,
      route: '/obd'
    },
    {
      id: 'smpp',
      name: 'SMPP Connect',
      tagline: 'Carrier-grade messaging connectivity',
      icon: Server,
      route: '/smpp'
    },
    {
      id: 'api',
      name: 'Enterprise APIs',
      tagline: 'Direct CRM & software integration',
      icon: Code2,
      route: '/api-integration'
    },
    {
      id: 'site-branding',
      name: 'Real Estate Branding',
      tagline: 'Project launch & sales office design',
      icon: Building2,
      route: '/site-branding'
    }
  ];

  const codeSnippets = {
    curl: `curl -X POST "https://api.zionmarketing.in/v1/messages/send" \\
  -H "Authorization: Bearer YOUR_ZION_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp",
    "to": "+919876543210",
    "template": "booking_confirmation",
    "parameters": {
      "customer_name": "Aarav Sharma",
      "booking_id": "ZN-89210",
      "status": "Confirmed"
    }
  }'`,
    node: `import { ZionClient } from '@zion/communication-sdk';

const zion = new ZionClient({ apiKey: process.env.ZION_API_KEY });

// Send High-Priority Alert / OTP
const response = await zion.messages.send({
  channel: 'whatsapp',
  to: '+919876543210',
  template: 'booking_confirmation',
  params: { customerName: 'Aarav Sharma', bookingId: 'ZN-89210' }
});

console.log('Dispatched in 240ms:', response.messageId);`,
    python: `from zion import ZionClient

client = ZionClient(api_key="YOUR_ZION_API_KEY")

# Dispatch multi-channel transactional update
response = client.messages.create(
    channel="whatsapp",
    to="+919876543210",
    template="booking_confirmation",
    variables={"name": "Aarav Sharma", "id": "ZN-89210"}
)
print(f"Delivered with status: {response.status}")`
  };

  const [activeCodeLang, setActiveCodeLang] = useState<'curl' | 'node' | 'python'>('node');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const triggerObdDemo = () => {
    setObdDialing(true);
    setObdStatus('calling');
    setTimeout(() => {
      setObdStatus('connected');
      setTimeout(() => {
        setObdDialing(false);
        setObdStatus('idle');
      }, 4000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#EEF4FF] to-transparent rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center gap-2 border border-[#D6E4FF] bg-[#EEF4FF] rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">
              Interactive Channel Simulator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-4 tracking-tight">
            Experience the <span className="text-zion-orange">Communication Infrastructure</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal leading-relaxed">
            Test how your customer messages, rich cards, automated bots and API payloads perform across all 9 enterprise channels.
          </p>
        </div>

        {/* 9-Product Horizontal Scrollable Selector */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Scroll Navigation Arrows (Desktop) */}
          <button 
            onClick={scrollLeft}
            aria-label="Scroll Left"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#D6E4FF] shadow-md items-center justify-center text-zion-deep-blue hover:bg-[#EEF4FF] hover:border-zion-orange transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-zion-blue" />
          </button>

          <button 
            onClick={scrollRight}
            aria-label="Scroll Right"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#D6E4FF] shadow-md items-center justify-center text-zion-deep-blue hover:bg-[#EEF4FF] hover:border-zion-orange transition-all"
          >
            <ChevronRight className="w-5 h-5 text-zion-blue" />
          </button>

          {/* Card Scroll Track */}
          <div 
            ref={scrollContainerRef}
            className="flex items-stretch gap-3 overflow-x-auto no-scrollbar pb-3 pt-1 px-2 scroll-smooth"
          >
            {productList.map((prod) => {
              const Icon = prod.icon;
              const isActive = activeTab === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveTab(prod.id)}
                  className={`flex-shrink-0 text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 w-[200px] sm:w-[220px] flex flex-col justify-between ${
                    isActive
                      ? 'bg-zion-deep-blue text-white shadow-xl shadow-blue-950/20 ring-2 ring-zion-orange scale-[1.02]'
                      : 'bg-[#F7F9FC] text-zion-deep-blue hover:bg-[#EEF4FF] border border-[#D6E4FF] hover:border-zion-blue/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/10 text-zion-orange' : 'bg-white text-zion-blue border border-[#D6E4FF]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-zion-orange' : 'text-zion-slate'}`}>
                      {prod.id === 'site-branding' ? 'Real Estate' : 'Channel'}
                    </span>
                  </div>
                  <div>
                    <h4 className={`text-sm font-extrabold mb-1 ${isActive ? 'text-white' : 'text-zion-deep-blue'}`}>
                      {prod.name}
                    </h4>
                    <p className={`text-[11px] line-clamp-2 leading-relaxed ${isActive ? 'text-blue-100' : 'text-zion-dark-gray'}`}>
                      {prod.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulator Container */}
        <div className="max-w-5xl mx-auto bg-[#F7F9FC] border-2 border-[#D6E4FF] rounded-3xl p-6 sm:p-10 shadow-xl relative min-h-[480px]">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-bold text-zion-deep-blue">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Interactive Simulator — {productList.find(p => p.id === activeTab)?.name}</span>
            </div>
            <span className="text-xs font-bold text-zion-orange bg-[#FFF4ED] px-3 py-1 rounded-full border border-[#FFD9C2]">
              Enterprise SLA: 99.9%
            </span>
          </div>

          {/* 1. BULK SMS PREVIEW */}
          {activeTab === 'sms' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Direct Carrier Telco Routes
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Fast, Reliable Business Messaging
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  High-throughput SMS engine with 100% TRAI DLT compliance, automated template scrubbing, and instant sub-second delivery receipts.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Sub-500ms latency guarantee on priority OTP routes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Instant millisecond delivery telemetry & webhooks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>DLT header & template approval assistance</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/sms" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore Bulk SMS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-[280px] sm:max-w-[300px] w-full mx-auto relative group">
                  <img 
                    src={smsMockup} 
                    alt="Bulk SMS & OTP Phone Demo" 
                    className="w-full h-auto object-contain rounded-[32px] drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 2. RCS MESSAGING PREVIEW */}
          {activeTab === 'rcs' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Next-Gen Rich Communication Services
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Rich & Interactive Customer Experiences
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  Deliver high-resolution hero banners, interactive carousels, 1-tap call triggers, and calendar bookings inside native messaging apps.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Verified Google & Carrier Trust Badge</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>3x higher engagement than traditional text SMS</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Smart Fallback to Bulk SMS when offline</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/rcs" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore RCS Capabilities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-[280px] sm:max-w-[300px] w-full mx-auto relative group">
                  <img 
                    src={rcsMockup} 
                    alt="RCS Business Messaging Demo" 
                    className="w-full h-auto object-contain rounded-[32px] drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 3. WHATSAPP API PREVIEW */}
          {activeTab === 'whatsapp' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Official WhatsApp Business Channel
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Automated Conversational Commerce & Care
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  Deliver pre-approved HSM notifications, rich media catalogs, and 24/7 automated chatbot resolution with zero platform rental fees.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Official Green Tick Verified Brand Identity</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Sub-second delivery with real-time read receipts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Free Platform Rental & 24-hr FBM Onboarding</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/whatsapp" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore WhatsApp Features</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-[280px] sm:max-w-[300px] w-full mx-auto relative group">
                  <img 
                    src={whatsappMockup} 
                    alt="WhatsApp Business API Demo" 
                    className="w-full h-auto object-contain rounded-[32px] drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4. META MESSAGING PREVIEW */}
          {activeTab === 'meta' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Facebook & Instagram Social Funnels
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Click-to-Chat & Lead Qualification Bots
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  Turn social followers and ad clicks into immediate qualified conversations. Automate Instagram story replies, DMs, and Messenger pipelines.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>5x higher lead conversion than static landing pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Instant automated response to Instagram Story mentions & DMs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Click-to-WhatsApp direct Meta ad funnel sync</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/meta" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore Meta Messaging</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="max-w-sm mx-auto bg-white rounded-3xl border-2 border-[#D6E4FF] shadow-lg p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        IG
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zion-deep-blue">Instagram DM Automation</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">● Lead Bot Active</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-zion-orange bg-[#FFF4ED] px-2 py-0.5 rounded-full">
                      Ad Click Trigger
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="bg-[#F1F5F9] p-3 rounded-2xl rounded-tl-sm text-zion-deep-blue">
                      <p className="font-semibold text-[11px] mb-1">Sponsored Ad Response:</p>
                      <p className="text-zion-dark-gray text-[11px]">
                        Hi! I saw your luxury 3BHK launch campaign. Can you share floor plans and price sheets?
                      </p>
                    </div>

                    <div className="bg-[#102F68] text-white p-3 rounded-2xl rounded-tr-sm ml-auto max-w-[90%]">
                      <p className="text-[11px] leading-relaxed">
                        Hello! Here is the official project brochure and pricing breakdown:
                      </p>
                      <div className="mt-2 grid grid-cols-2 gap-1.5">
                        <button className="p-1.5 rounded-lg bg-white/20 text-[10px] font-bold text-center hover:bg-white/30">
                          📥 PDF Brochure
                        </button>
                        <button className="p-1.5 rounded-lg bg-zion-orange text-[10px] font-bold text-center hover:bg-orange-600">
                          📞 Book Visit
                        </button>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>Contact synced to Salesforce CRM in 320ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. IVR SOLUTIONS PREVIEW */}
          {activeTab === 'ivr' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Cloud Voice Infrastructure
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Smart IVR Menus & Skill-Based Routing
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  Never miss an inbound customer inquiry. Deploy multi-level DTMF voice menus with zero physical hardware and full CRM screen-pop telemetry.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Dedicated 10-digit virtual & 1800 toll-free numbers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Real-time cloud call recording & quality analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Zero hardware — 100% scalable cloud concurrent channels</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/ivr" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore IVR Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="max-w-sm mx-auto bg-white rounded-3xl border-2 border-[#D6E4FF] shadow-lg p-5 space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="text-xs font-bold text-zion-deep-blue">Incoming Call: 1800-ZION-COMM</div>
                    <span className="text-[10px] font-bold text-zion-orange bg-[#FFF4ED] px-2 py-0.5 rounded-full animate-pulse">
                      ● Live Routing
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-between hover:border-zion-orange transition-colors cursor-pointer">
                      <span className="text-xs font-bold text-zion-deep-blue">Press 1: Sales & Launch Inquiries</span>
                      <span className="w-6 h-6 rounded-full bg-white text-zion-orange font-black text-xs flex items-center justify-center shadow-sm">1</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-between hover:border-zion-orange transition-colors cursor-pointer">
                      <span className="text-xs font-bold text-zion-deep-blue">Press 2: Technical Support & APIs</span>
                      <span className="w-6 h-6 rounded-full bg-white text-zion-orange font-black text-xs flex items-center justify-center shadow-sm">2</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-between hover:border-zion-orange transition-colors cursor-pointer">
                      <span className="text-xs font-bold text-zion-deep-blue">Press 3: Billing & Volume Pricing</span>
                      <span className="w-6 h-6 rounded-full bg-white text-zion-orange font-black text-xs flex items-center justify-center shadow-sm">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. OBD VOICE CALLS PREVIEW */}
          {activeTab === 'obd' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  High-Capacity Voice Broadcasting
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Automated Outbound Voice Campaigns (OBD)
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  Dial tens of thousands of customers simultaneously with personalized audio announcements, instant DTMF polling, and automated retry logic.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Thousands of simultaneous concurrent carrier voice channels</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Dynamic text-to-speech variables (names, balances, dates)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Granular call pickup rates & listen duration telemetry</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/obd" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore OBD Voice</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="max-w-sm mx-auto bg-white rounded-3xl border-2 border-[#D6E4FF] shadow-lg p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#102F68] text-zion-orange flex items-center justify-center font-bold text-xs">
                        OBD
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zion-deep-blue">Voice Broadcast Engine</div>
                        <div className="text-[10px] text-zion-slate">5,000 Concurrent Channels</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Carrier Active
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zion-deep-blue">Simulated Outbound Call</span>
                      <span className="text-[10px] font-mono text-zion-orange">
                        {obdStatus === 'calling' ? 'Dialing...' : obdStatus === 'connected' ? 'Connected (00:08)' : 'Ready'}
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#D6E4FF] space-y-2">
                      <div className="flex items-center gap-2 text-xs text-zion-dark-gray">
                        <Play className="w-3.5 h-3.5 text-zion-orange flex-shrink-0" />
                        <span className="font-mono text-[11px]">audio_prompt_launch_v2.wav</span>
                      </div>
                      <div className="h-1.5 bg-[#EEF4FF] rounded-full overflow-hidden">
                        <div className={`h-full bg-zion-orange transition-all duration-1000 ${obdStatus === 'connected' ? 'w-3/4' : 'w-0'}`} />
                      </div>
                    </div>

                    <button
                      onClick={triggerObdDemo}
                      disabled={obdDialing}
                      className="w-full py-2.5 rounded-xl bg-zion-deep-blue hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <PhoneOutgoing className="w-3.5 h-3.5 text-zion-orange" />
                      <span>{obdDialing ? 'Simulating Broadcast...' : 'Test Outbound Call Blast'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7. SMPP CONNECT PREVIEW */}
          {activeTab === 'smpp' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Carrier-Grade High-Velocity Pipe
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  5,000+ TPS Dedicated SMPP v3.4 Binds
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  Engineered for aggregators, fintechs, and high-velocity applications needing direct socket connections with dual-site redundancy.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Up to 5,000+ TPS throughput per dedicated transceiver socket</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Direct Tier-1 telco operator SMSC interconnects</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Active-active multi-datacenter socket failover</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/smpp" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore SMPP Connect</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="max-w-sm mx-auto bg-[#071B3A] text-white rounded-3xl border border-[#102F68] shadow-2xl p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-zion-orange" />
                      <span className="font-bold text-blue-100">SMPP Session Monitor</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                      BOUND_TRX
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between p-2 rounded-lg bg-white/5">
                      <span className="text-blue-300">Host IP / Port:</span>
                      <span className="text-white font-bold">103.24.12.8:2775</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-white/5">
                      <span className="text-blue-300">System ID:</span>
                      <span className="text-zion-orange font-bold">ZION_ENT_PROD01</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-white/5">
                      <span className="text-blue-300">Live Throughput:</span>
                      <span className="text-emerald-400 font-bold">4,850 TPS</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-white/5">
                      <span className="text-blue-300">Socket Latency:</span>
                      <span className="text-white font-bold">12ms (Direct Tier-1)</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[10px] text-blue-200">
                    <span>Auto Windowing: 100</span>
                    <span className="text-zion-orange font-bold">24/7 NOC Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 8. ENTERPRISE APIS PREVIEW */}
          {activeTab === 'api' && (
            <div className="space-y-6 transition-all duration-300 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                    Developer-First RESTful Engine
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-zion-deep-blue">
                    One Unified API Endpoint for All Channels
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-[#D6E4FF]">
                  {(['node', 'python', 'curl'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveCodeLang(lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors ${
                        activeCodeLang === lang
                          ? 'bg-zion-deep-blue text-white'
                          : 'text-zion-slate hover:text-zion-deep-blue'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl bg-[#071B3A] border border-[#102F68] p-5 overflow-hidden font-mono text-xs text-blue-100 shadow-xl">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-sans font-bold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zion-orange" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>

                <pre className="overflow-x-auto pt-2 leading-relaxed font-mono">
                  <code>{codeSnippets[activeCodeLang]}</code>
                </pre>
              </div>

              <div className="flex items-center justify-between text-xs text-zion-dark-gray pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold">HTTPS TLS 1.3 • Webhooks • JSON Payloads • 99.9% Uptime SLA</span>
                </div>
                <Link to="/api-integration" className="text-zion-orange font-bold hover:underline flex items-center gap-1">
                  <span>Full API Reference</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* 9. REAL ESTATE BRANDING PREVIEW */}
          {activeTab === 'site-branding' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300 animate-fadeIn">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                  Full-Spectrum Real Estate Capabilities
                </span>
                <h3 className="text-2xl font-extrabold text-zion-deep-blue">
                  Project Launch & Sales Office Branding
                </h3>
                <p className="text-sm text-zion-dark-gray leading-relaxed">
                  From iconic naming and visual identity to 3D sales gallery design, site hoardings, luxury coffee-table brochures, and digital launch funnels.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Sales Gallery Architecture & Customer Journey Touchpoints</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>High-Impact Site Perimeter Hoardings & Landmark Arches</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zion-deep-blue">
                    <Check className="w-4 h-4 text-zion-orange" />
                    <span>Omnichannel Launch: RCS Carousels, WhatsApp Bots & Microsites</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/site-branding" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold">
                    <span>Explore Real Estate Branding</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="max-w-sm mx-auto bg-white rounded-3xl border-2 border-[#D6E4FF] shadow-lg p-5 space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-zion-orange" />
                      <span className="text-xs font-bold text-zion-deep-blue">Project Launch Suite</span>
                    </div>
                    <span className="text-[10px] font-bold text-zion-blue bg-[#EEF4FF] px-2 py-0.5 rounded-full border border-[#D6E4FF]">
                      360° Real Estate
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-center">
                    <div className="p-3 rounded-2xl bg-[#F7F9FC] border border-[#D6E4FF]">
                      <div className="text-lg font-black text-zion-orange">01</div>
                      <div className="text-xs font-bold text-zion-deep-blue mt-0.5">Naming & Logo</div>
                      <div className="text-[10px] text-zion-slate mt-0.5">Master Identity</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#F7F9FC] border border-[#D6E4FF]">
                      <div className="text-lg font-black text-zion-blue">02</div>
                      <div className="text-xs font-bold text-zion-deep-blue mt-0.5">Sales Office</div>
                      <div className="text-[10px] text-zion-slate mt-0.5">Spatial Experience</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#F7F9FC] border border-[#D6E4FF]">
                      <div className="text-lg font-black text-zion-blue">03</div>
                      <div className="text-xs font-bold text-zion-deep-blue mt-0.5">Site Hoardings</div>
                      <div className="text-[10px] text-zion-slate mt-0.5">Grand Landmark</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#F7F9FC] border border-[#D6E4FF]">
                      <div className="text-lg font-black text-zion-orange">04</div>
                      <div className="text-xs font-bold text-zion-deep-blue mt-0.5">Collaterals</div>
                      <div className="text-[10px] text-zion-slate mt-0.5">Luxury Kits & CP</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FFF4ED] border border-[#FFD9C2] text-center">
                    <span className="text-[11px] font-bold text-zion-orange">
                      Omnichannel Launch Campaign Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}



