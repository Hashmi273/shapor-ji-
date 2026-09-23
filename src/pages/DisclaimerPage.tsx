import React from 'react';
import { AlertCircle, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#f8f6f0] pb-24 text-[#111827]">
      {/* Header */}
      <section className="bg-[#0b1325] text-white py-16 border-b border-[#1e2a44]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Statutory Compliance</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Real Estate &amp; RERA Disclaimer
          </h1>
          <p className="text-xs sm:text-sm text-white/70">
            Shapoorji Pallonji Real Estate • Official Disclosure
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 space-y-8 text-xs sm:text-sm text-[#586071] leading-relaxed">
        {/* RERA Compliance Statement */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-display text-base font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
            <span>Official RERA Regulatory Notice</span>
          </div>
          <p className="text-emerald-950 leading-relaxed">
            All residential and commercial projects showcased on this website are registered with their respective state Real Estate Regulatory Authorities (MahaRERA in Maharashtra, Karnataka RERA in Karnataka). Project details, RERA numbers, and sanctioned floor plans are available on the official state RERA websites for public verification.
          </p>
        </div>

        {/* Artistic Renders & Imagery */}
        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            1. Artistic Renders &amp; Visual Impressions
          </h2>
          <p>
            Images, 3D renderings, virtual walk-throughs, sample apartment photographs, and architectural elevations displayed on this website are artist’s impressions and conceptual representations. Furniture, interior decor items, fixtures, fittings, and landscape foliage are for illustrative representation only and are not part of the standard apartment offering unless expressly stated in the Agreement for Sale.
          </p>
        </div>

        {/* Carpet Area Disclosures */}
        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            2. Carpet Area Specifications
          </h2>
          <p>
            Carpet areas mentioned for each configuration correspond to the net usable floor area of an apartment, excluding the area covered by external walls, service shafts, and exclusive balconies or verandahs, calculated strictly in accordance with Section 2(k) of the Real Estate (Regulation and Development) Act, 2016.
          </p>
        </div>

        {/* Pricing & Commercial Availability */}
        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            3. Pricing &amp; Inventory Availability
          </h2>
          <p>
            Starting prices and payment plans indicated on this portal are indicative and subject to change without prior notice depending on floor rise, view premiums, statutory taxes (GST, Stamp Duty, Registration), and unit availability. Formal quotations and unit allotment letters are provided directly by our authorized sales lounges.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DisclaimerPage;
