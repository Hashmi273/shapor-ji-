import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves
} from 'lucide-react';
import { REAL_ESTATE_PROJECTS } from '../data/realEstateData';
import { EmiCalculator } from '../components/EmiCalculator';

interface HomePageProps {
  onOpenEnquiryModal?: (item?: string) => void;
}

export default function HomePage({ onOpenEnquiryModal }: HomePageProps) {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<'All' | 'Mumbai' | 'Pune' | 'Bengaluru'>('All');
  
  // Hero Search States
  const [searchCity, setSearchCity] = useState('');
  const [searchBhk, setSearchBhk] = useState('');
  const [searchBudget, setSearchBudget] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/products');
  };

  const filteredProjects = selectedCity === 'All'
    ? REAL_ESTATE_PROJECTS
    : REAL_ESTATE_PROJECTS.filter((p) => p.city === selectedCity);

  const trustHighlights = [
    { label: 'Founded in', val: '1865', sub: '158+ years of engineering prowess' },
    { label: 'Footprint', val: '40+ Mn Sq.Ft.', sub: 'Landmark developments delivered' },
    { label: 'RERA Assured', val: '100%', sub: 'Complete legal transparency' },
    { label: 'Happy Families', val: '50,000+', sub: 'Living in trusted SP communities' }
  ];

  return (
    <main className="bg-white text-[#002558]">
      {/* 1. HERO SECTION (Logo Navy & Cerulean Gradient Backdrop) */}
      <section className="relative min-h-[720px] lg:min-h-[820px] overflow-hidden flex flex-col justify-between">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          alt="Shapoorji Pallonji Luxury Architecture"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d45]/95 via-[#002d69]/75 to-[#003882]/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 lg:px-10 lg:pt-36 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            {/* Logo Badge in Hero */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <span className="h-2 w-2 rounded-full bg-[#0090f0] animate-pulse"></span>
              <span>Shapoorji Pallonji Real Estate • Since 1865</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Homes Engineered with <span className="text-[#38a7f4] underline decoration-[#0077c8] decoration-4 underline-offset-8">Monumental Trust.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Explore master-crafted residences in Mumbai, Pune, and Bengaluru—built on 158+ years of landmark engineering, architectural precision, and serene landscaped living.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenEnquiryModal?.('Schedule VIP Site Visit')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0077c8] hover:bg-[#0090f0] text-white px-7 py-4 text-xs font-bold uppercase tracking-wider transition duration-200 rounded-lg shadow-lg"
              >
                <span>Schedule VIP Site Visit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 px-7 py-4 text-xs font-bold uppercase tracking-wider transition duration-200 rounded-lg backdrop-blur-sm"
              >
                <span>Explore Developments</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Search Floating Bar (Pure White 40% Balance) */}
          <div className="mt-14 max-w-4xl bg-white border border-[#d8e3f0] rounded-2xl p-4 sm:p-5 shadow-2xl">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#4a5e7b] mb-1">
                  City / Location
                </label>
                <select
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full text-xs font-bold text-[#002558] bg-transparent border-b border-[#d8e3f0] pb-1.5 focus:outline-none focus:border-[#0077c8]"
                >
                  <option value="">All Locations</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Bengaluru">Bengaluru</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#4a5e7b] mb-1">
                  Configuration
                </label>
                <select
                  value={searchBhk}
                  onChange={(e) => setSearchBhk(e.target.value)}
                  className="w-full text-xs font-bold text-[#002558] bg-transparent border-b border-[#d8e3f0] pb-1.5 focus:outline-none focus:border-[#0077c8]"
                >
                  <option value="">All Typologies</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#4a5e7b] mb-1">
                  Budget
                </label>
                <select
                  value={searchBudget}
                  onChange={(e) => setSearchBudget(e.target.value)}
                  className="w-full text-xs font-bold text-[#002558] bg-transparent border-b border-[#d8e3f0] pb-1.5 focus:outline-none focus:border-[#0077c8]"
                >
                  <option value="">Any Budget</option>
                  <option value="50L-1Cr">₹50 Lakhs - ₹1 Cr</option>
                  <option value="1Cr-2Cr">₹1 Cr - ₹2.5 Cr</option>
                  <option value="2Cr+">₹2.5 Cr - ₹15 Cr</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#003882] hover:bg-[#0077c8] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span>Find Homes</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Trust Stat Bar (Logo Navy) */}
        <div className="relative z-10 border-t border-white/15 bg-[#001d45]/90 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
            {trustHighlights.map((stat, i) => (
              <div key={i} className="border-r border-white/10 px-5 py-4 last:border-r-0 lg:px-8">
                <p className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#38a7f4]">{stat.label}</p>
                <p className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">{stat.val}</p>
                <p className="text-[11px] text-white/70">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED RESIDENTIAL PORTFOLIO (White Background - 40% White Allocation) */}
      <section id="projects" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-[#d8e3f0] pb-8">
            <div>
              <span className="section-kicker">Curated Developments</span>
              <h2 className="section-title mt-2 text-3xl sm:text-5xl text-[#002558]">
                Signature Living Addresses
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4a5e7b] max-w-xl">
                Each project is situated in premier micro-markets with verified clear titles, RERA registrations, and superior master-planning.
              </p>
            </div>

            {/* City Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(['All', 'Mumbai', 'Pune', 'Bengaluru'] as const).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                    selectedCity === city
                      ? 'bg-[#003882] text-white shadow-md'
                      : 'bg-[#f0f6fc] border border-[#d8e3f0] text-[#002558] hover:border-[#0077c8]'
                  }`}
                >
                  {city === 'All' ? 'All Developments' : city}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#d8e3f0] bg-white shadow-sm hover:shadow-xl hover:border-[#0077c8]/40 transition-all duration-300"
              >
                {/* Image & Status Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded-md bg-[#001d45]/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {project.status}
                    </span>
                    <span className="rounded-md bg-[#0077c8] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                      {project.city}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-white font-medium">
                    {project.possessionYear}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#0077c8] font-bold">
                      <MapPin className="h-3.5 w-3.5 text-[#0077c8]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-[#002558] group-hover:text-[#0077c8] transition">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#4a5e7b] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                      <span className="bg-[#f0f6fc] border border-[#d8e3f0] px-2.5 py-1 rounded-md font-bold text-[#003882]">
                        {project.typology.join(' • ')}
                      </span>
                      <span className="bg-[#f0f6fc] border border-[#d8e3f0] px-2.5 py-1 rounded-md text-[#4a5e7b] font-medium">
                        {project.carpetArea}
                      </span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-6 border-t border-[#d8e3f0] pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#4a5e7b]">Starting Price</p>
                      <p className="font-display text-lg font-extrabold text-[#003882]">{project.startingPrice}</p>
                    </div>

                    <button
                      onClick={() => onOpenEnquiryModal?.(project.name)}
                      className="bg-[#003882] hover:bg-[#0077c8] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-sm"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#003882] hover:bg-[#003882] hover:text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#003882] transition rounded-lg"
            >
              <span>Explore Complete Real Estate Portfolio ({REAL_ESTATE_PROJECTS.length} Projects)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL MASTERY (Logo Deep Navy - 60% Theme Component) */}
      <section className="bg-[#001d45] py-20 text-white lg:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#38a7f4]">
                Architectural DNA
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Built to Last for Generations.
              </h2>
              <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
                Since 1865, Shapoorji Pallonji has engineered structures that define the modern subcontinent. We bring that exact industrial-grade precision, earthquake resistance, and acoustic insulation into private residential living.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Advanced MIVAN Formwork construction ensuring crack-resistant finish',
                  'Optimized floor layouts with maximum usable carpet area and cross-ventilation',
                  'IGBC Green Building Certified with solar integration & rainwater recycling',
                  '70%+ dedicated open landscape with native flora and bio-diversity zones'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-[#0090f0] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/fragrances"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38a7f4] hover:underline"
                >
                  <span>Explore Our Living Experience &amp; Amenities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Visual Grid of Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Building2, title: 'Structural Prowess', desc: 'Over a century of building docks, high-rises, and central banks transferred into your home.' },
                { icon: Trees, title: 'Biophilic Design', desc: 'Preserving oxygen-rich native tree canopies, aroma gardens, and bird sanctuaries.' },
                { icon: Waves, title: 'Resort Amenities', desc: 'Olympic lap pools, squash courts, private screening halls, and spa suites.' },
                { icon: ShieldCheck, title: '100% Transparency', desc: 'Clear titles, complete statutory approvals, and timely phased possessions.' }
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-[#0077c8] transition">
                  <item.icon className="h-7 w-7 text-[#0090f0]" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE EMI CALCULATOR (Clean White & Ice Section) */}
      <section className="py-20 lg:py-28 bg-[#f2f6fa]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <EmiCalculator onOpenEnquiryModal={onOpenEnquiryModal} />
        </div>
      </section>

      {/* 5. PRIVATE CONSULTATION / SITE VISIT BOOKING (White Base) */}
      <section className="bg-white py-20 lg:py-24 border-t border-[#d8e3f0]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-10">
          <div>
            <span className="section-kicker">Dedicated Advisory</span>
            <h2 className="section-title mt-2 max-w-2xl text-3xl sm:text-5xl text-[#002558]">
              Experience the Properties in Person.
            </h2>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#4a5e7b]">
              Book a personalized appointment at our Sales Experience Galleries in Mumbai, Pune, or Bengaluru. Our senior advisors provide comprehensive cost sheets, sample flat walkthroughs, and customized payment structures.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-[#002558] font-bold">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0077c8]" />
                <span>Hotline: +91 87009 83465</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0077c8]" />
                <span>Open All 7 Days (10:00 AM – 7:00 PM)</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d8e3f0] bg-[#f8fafc] p-7 sm:p-8 shadow-lg">
            <h3 className="font-display text-xl font-bold text-[#002558]">Schedule a Guided Tour</h3>
            <p className="mt-2 text-xs text-[#4a5e7b]">
              Complimentary pick-up &amp; drop service available for select luxury developments.
            </p>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => onOpenEnquiryModal?.('Schedule VIP Site Visit')}
                className="w-full flex items-center justify-center gap-2 bg-[#003882] hover:bg-[#0077c8] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-md"
              >
                <span>Book Site Visit Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onOpenEnquiryModal?.('Request Master Brochure')}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#003882] hover:bg-white text-[#003882] py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition"
              >
                <Download className="h-3.5 w-3.5 text-[#0077c8]" />
                <span>Download Master Portfolio Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
