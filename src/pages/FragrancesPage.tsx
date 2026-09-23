import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  Layers,
  Leaf,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
  Zap
} from 'lucide-react';

export default function FragrancesPage() {
  const experiences = [
    {
      num: '01',
      title: 'Structural Integrity & Acoustic Solitude',
      subtitle: 'Engineered for Silence and Safety',
      desc: 'Using high-grade monolithic MIVAN formwork and double-glazed acoustic windows, our residences isolate exterior metropolitan noise while providing supreme earthquake safety and wind resistance.',
      highlights: ['MIVAN Aluminium Formwork', 'Acoustic Sound-Dampening Glass', 'Seismic Zone Compliant Engineering'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '02',
      title: 'Biophilic Landscapes & Microclimate Parks',
      subtitle: 'Breathing Room in the Urban Core',
      desc: 'Our projects allocate between 60% to 75% of total land parcels exclusively to non-vehicular green podiums. Native herbal trees, reflexology footpaths, and rainwater-replenished waterbodies create a cooler, oxygen-rich microclimate.',
      highlights: ['70%+ Dedicated Open Green Spaces', 'Aroma & Sensory Herbal Groves', 'Zero-Vehicle Surface Traffic on Podiums'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '03',
      title: 'Signature Clubhouses & Resort Amenities',
      subtitle: 'Spaces that Enliven Everyday Life',
      desc: 'From Olympic-length lap pools and indoor badminton courts to temperature-controlled children’s splash zones and private screening theatres—every amenity is calibrated for multi-generational recreation.',
      highlights: ['35,000 to 56,000 sq.ft. Multi-Tier Clubs', 'Temperature Controlled Infinity Pools', 'Squash, Tennis & Multi-Sport Arenas'],
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '04',
      title: 'Smart Automation & Sustainable Green Living',
      subtitle: 'Future-Proof Efficiency',
      desc: 'Equipped with EV charging bays, solar rooftop power for common areas, smart app-enabled access gates, and organic waste converters. Certified under IGBC Gold and Platinum green building standards.',
      highlights: ['IGBC Green Building Certified', 'Dedicated EV Vehicle Charging Infrastructure', 'Smart Voice & App Home Automation'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <main className="bg-white pb-24 text-[#002558]">
      {/* Hero */}
      <section className="bg-[#001d45] py-20 text-white border-b border-[#003882]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38a7f4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0077c8]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Living Experience</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              A Considered Approach to Vertical Urban Living.
            </h1>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/80">
              A home is more than square footage. It is the quality of morning sunlight, the quietness of your bedroom, the ease of access to green gardens, and the security of knowing your structure was built by India’s foremost engineering pioneers.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section (White Base) */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="space-y-20">
          {experiences.map((item, idx) => (
            <div
              key={item.num}
              className={`grid gap-10 lg:grid-cols-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="font-display text-4xl font-extrabold text-[#0077c8]">{item.num}</span>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4a5e7b] mt-1">{item.subtitle}</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#002558]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#4a5e7b]">
                  {item.desc}
                </p>

                <div className="mt-6 space-y-2.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-[#002558]">
                      <CheckCircle2 className="h-4 w-4 text-[#0077c8] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="overflow-hidden rounded-2xl border border-[#d8e3f0] shadow-sm aspect-[16/10]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-24 rounded-2xl bg-[#002558] p-8 sm:p-14 text-white text-center shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38a7f4]">Experience in Person</span>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Visit Our Sales Experience Centres
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-sm text-white/80 leading-relaxed">
            Walk through fully furnished sample residences, feel the tactile natural materials, and examine the master scale models with our architects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0077c8] hover:bg-[#0090f0] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-md"
            >
              <span>Schedule Sample Flat Tour</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition"
            >
              <span>Explore All Residences</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
