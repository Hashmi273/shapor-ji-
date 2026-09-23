import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Building2,
  CheckCircle2,
  Globe2,
  History,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users2,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '1865',
      title: 'The Inception of SP Group',
      desc: 'Founded as Littlewood Pallonji & Co. in Bombay, embarking on foundational infrastructure projects that shaped colonial Mumbai.'
    },
    {
      year: '1939',
      title: 'Brabourne Stadium & Landmark Sports Venues',
      desc: 'Constructed the iconic Brabourne Stadium for the Cricket Club of India (CCI), celebrated as an engineering masterpiece.'
    },
    {
      year: '1975',
      title: 'Palace of the Sultan of Oman (Qasr Al Alam)',
      desc: 'First Indian construction firm to build overseas, handpicked by His Majesty Sultan Qaboos bin Said to build his official ceremonial palace in Muscat.'
    },
    {
      year: '1981',
      title: 'Reserve Bank of India Headquarters',
      desc: 'Constructed the 25-storey imposing Reserve Bank of India skyscraper in Fort, South Mumbai.'
    },
    {
      year: '2010',
      title: 'The Imperial Twin Towers, Mumbai',
      desc: 'Redefined India’s vertical skyline by erecting The Imperial (256m), India’s tallest residential skyscrapers for over a decade.'
    },
    {
      year: 'Today',
      title: 'Leading Pan-India Sustainable Urbanism',
      desc: 'Delivering over 40+ million square feet of smart residential master developments, biophilic townships, and IGBC certified ecosystems.'
    }
  ];

  const landmarkProjects = [
    {
      name: 'The Imperial Towers, Mumbai',
      type: 'Luxury Residential (256m)',
      desc: 'South Mumbai’s iconic luxury twin skyscrapers, setting a global benchmark for vertical living in India.'
    },
    {
      name: 'Reserve Bank of India HQ, Mumbai',
      type: 'National Financial Monument',
      desc: 'The central banking nerve center of the Republic of India, built with timeless structural stone.'
    },
    {
      name: 'Palace of the Sultan of Oman',
      type: 'Royal Ceremonial Palace',
      desc: 'One of the Middle East’s most revered architectural wonders located in Old Muscat.'
    },
    {
      name: 'The Taj Mahal Tower, Mumbai',
      type: 'Hospitality Icon',
      desc: 'Constructed the iconic adjoining modern tower for Mumbai’s historic Taj Mahal Palace hotel.'
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-24 text-[#002558]">
      {/* Hero Header */}
      <section className="bg-[#001d45] text-white py-20 border-b border-[#003882]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#38a7f4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0077c8]/40">
              <History className="w-3.5 h-3.5" />
              <span>158+ Years of Monumental Trust • Since 1865</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Shaping India’s Skylines. Building Legacies That Endure.
            </h1>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/80">
              From building the Reserve Bank of India and Royal Palaces across the globe to pioneering luxury residential skyscrapers, Shapoorji Pallonji Real Estate represents over a century and a half of unmatched craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Numbers (White Background) */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-center shadow-sm">
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#003882]">1865</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-[#0077c8]">Year Founded</p>
            <p className="mt-2 text-xs text-[#4a5e7b]">158+ years of structural excellence</p>
          </div>
          <div className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-center shadow-sm">
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#003882]">40M+</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-[#0077c8]">Sq.Ft Delivered</p>
            <p className="mt-2 text-xs text-[#4a5e7b]">Across major Indian metropolises</p>
          </div>
          <div className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-center shadow-sm">
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#003882]">50,000+</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-[#0077c8]">Homeowners</p>
            <p className="mt-2 text-xs text-[#4a5e7b]">Thriving multi-generational communities</p>
          </div>
          <div className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-center shadow-sm">
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#003882]">50+</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-[#0077c8]">Countries</p>
            <p className="mt-2 text-xs text-[#4a5e7b]">Global footprint across SP Group</p>
          </div>
        </div>

        {/* Historic Landmarks Grid */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <span className="section-kicker">Enduring Benchmarks</span>
            <h2 className="section-title mt-2 text-3xl sm:text-4xl text-[#002558]">
              Landmarks that Define Nations
            </h2>
            <p className="mt-3 text-sm text-[#4a5e7b]">
              A glimpse into the monumental structures engineered by Shapoorji Pallonji over the last century.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {landmarkProjects.map((p, i) => (
              <div key={i} className="rounded-2xl border border-[#d8e3f0] bg-white p-6 shadow-sm hover:shadow-md hover:border-[#0077c8]/50 transition">
                <div className="w-12 h-12 rounded-xl bg-[#f0f6fc] text-[#0077c8] flex items-center justify-center">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-[#002558]">{p.name}</h3>
                <p className="text-[11px] font-bold text-[#0077c8] uppercase tracking-wider mt-1">{p.type}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#4a5e7b]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Historic Timeline */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-kicker">Chronicle of Excellence</span>
            <h2 className="section-title mt-2 text-3xl sm:text-4xl text-[#002558]">
              Six Eras of Craftsmanship
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="grid gap-6 rounded-2xl border border-[#d8e3f0] bg-[#f8fafc] p-6 sm:p-8 sm:grid-cols-[120px_1fr] items-start shadow-sm"
              >
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0077c8]">
                  {m.year}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#002558]">{m.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4a5e7b] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Trust Box */}
        <div className="mt-20 rounded-2xl bg-[#002558] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#38a7f4]">Become Part of the Legacy</span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
              Find Your Ideal Home in Our Landmark Developments.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-xl">
              Connect with our portfolio advisors for bespoke site visits and detailed financial consultations.
            </p>
          </div>
          <Link
            to="/products"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0077c8] hover:bg-[#0090f0] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-md"
          >
            <span>View All Residences</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
