import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Filter,
  Layers,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';
import { REAL_ESTATE_PROJECTS, RealEstateProject } from '../data/realEstateData';

interface Props {
  onOpenEnquiryModal?: (item?: string) => void;
}

export default function ProductsPage({ onOpenEnquiryModal }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedBhk, setSelectedBhk] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    return REAL_ESTATE_PROJECTS.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        [project.name, project.location, project.city, project.tagline, ...project.typology]
          .join(' ')
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCity = selectedCity === 'All' || project.city === selectedCity;
      const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
      const matchesBhk =
        selectedBhk === 'All' ||
        project.typology.some((t) => t.toLowerCase().includes(selectedBhk.toLowerCase()));

      return matchesSearch && matchesCity && matchesStatus && matchesBhk;
    });
  }, [searchQuery, selectedCity, selectedStatus, selectedBhk]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCity('All');
    setSelectedStatus('All');
    setSelectedBhk('All');
  };

  return (
    <main className="bg-white pb-24 text-[#002558]">
      {/* Page Header (Logo Navy Spectrum) */}
      <section className="bg-[#001d45] text-white border-b border-[#003882] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38a7f4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0077c8]/40">
              <Sparkles className="w-3 h-3" />
              <span>Residential Developments Portfolio</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Addresses That Become Part of the City.
            </h1>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/80">
              Explore our master-planned towers, integrated townships, and ultra-luxury sea-facing residences across Mumbai, Pune, and Bengaluru.
            </p>
          </div>

          {/* Search Input in Header */}
          <div className="mt-8 flex max-w-2xl items-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 focus-within:border-[#0077c8] transition">
            <Search className="h-4 w-4 text-[#38a7f4] flex-shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, location, or landmark (e.g. Bandra, Powai, Bengaluru)..."
              className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-white/50 outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 text-white/60 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter Toolbar (40% White Bar with Clean Borders) */}
      <div className="border-b border-[#d8e3f0] bg-white sticky top-[88px] z-30 shadow-sm">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="flex items-center gap-1 font-bold uppercase tracking-wider text-[#4a5e7b] mr-2">
                <Filter className="h-3.5 w-3.5 text-[#0077c8]" /> Filter By:
              </span>

              {/* City */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#d8e3f0] bg-[#f0f6fc] text-xs font-bold text-[#002558] focus:outline-none focus:border-[#0077c8]"
              >
                <option value="All">All Cities</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>

              {/* Status */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#d8e3f0] bg-[#f0f6fc] text-xs font-bold text-[#002558] focus:outline-none focus:border-[#0077c8]"
              >
                <option value="All">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Newly Launched">Newly Launched</option>
              </select>

              {/* Typology */}
              <select
                value={selectedBhk}
                onChange={(e) => setSelectedBhk(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#d8e3f0] bg-[#f0f6fc] text-xs font-bold text-[#002558] focus:outline-none focus:border-[#0077c8]"
              >
                <option value="All">All Typologies</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK Luxury</option>
              </select>

              {(selectedCity !== 'All' || selectedStatus !== 'All' || selectedBhk !== 'All' || searchQuery !== '') && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-bold text-rose-600 hover:underline px-2"
                >
                  Reset Filters
                </button>
              )}
            </div>

            <div className="text-xs text-[#4a5e7b] font-medium">
              Showing <strong className="text-[#002558]">{filteredProjects.length}</strong> of{' '}
              {REAL_ESTATE_PROJECTS.length} Developments
            </div>
          </div>
        </div>
      </div>

      {/* Projects List (White Base 40%) */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#d8e3f0] p-12 text-center bg-[#f8fafc]">
            <p className="font-display text-xl font-bold text-[#002558]">No developments match your criteria</p>
            <p className="mt-2 text-xs text-[#4a5e7b]">
              Try resetting the city, typology, or keyword filter to view our complete portfolio.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-5 bg-[#003882] text-white hover:bg-[#0077c8] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#d8e3f0] bg-white shadow-sm hover:shadow-xl hover:border-[#0077c8]/40 transition-all duration-300"
              >
                {/* Visual */}
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

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#0077c8] font-bold">
                      <MapPin className="h-3.5 w-3.5 text-[#0077c8]" />
                      <span>{project.location}</span>
                    </div>

                    <h2 className="mt-2 font-display text-xl font-bold text-[#002558] group-hover:text-[#0077c8] transition">
                      {project.name}
                    </h2>

                    <p className="mt-2 text-xs text-[#4a5e7b] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Typology & Area */}
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                      <span className="bg-[#f0f6fc] border border-[#d8e3f0] px-2.5 py-1 rounded-md font-bold text-[#003882]">
                        {project.typology.join(' • ')}
                      </span>
                      <span className="bg-[#f0f6fc] border border-[#d8e3f0] px-2.5 py-1 rounded-md text-[#4a5e7b] font-medium">
                        {project.carpetArea}
                      </span>
                    </div>

                    {/* RERA */}
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#4a5e7b]">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                      <span>RERA: <strong className="text-[#002558] font-mono">{project.reraNumber}</strong></span>
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="mt-6 border-t border-[#d8e3f0] pt-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[#4a5e7b]">Starting Price</p>
                        <p className="font-display text-xl font-extrabold text-[#003882]">{project.startingPrice}</p>
                      </div>

                      <button
                        onClick={() => onOpenEnquiryModal?.(`Download Brochure: ${project.name}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077c8] hover:underline"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Brochure</span>
                      </button>
                    </div>

                    <button
                      onClick={() => onOpenEnquiryModal?.(`Schedule Site Visit: ${project.name}`)}
                      className="w-full flex items-center justify-center gap-2 bg-[#003882] hover:bg-[#0077c8] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-sm"
                    >
                      <span>Book Private Tour</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
