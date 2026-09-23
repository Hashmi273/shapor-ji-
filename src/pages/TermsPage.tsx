import React from 'react';
import { Scale, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] pb-24 text-[#111827]">
      <section className="bg-[#0b1325] text-white py-16 border-b border-[#1e2a44]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Terms &amp; Conditions</h1>
          <p className="text-xs sm:text-sm text-white/70">
            Shapoorji Pallonji Real Estate • Last Updated: January 2026
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 space-y-8 text-xs sm:text-sm text-[#586071] leading-relaxed">
        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing this website of <strong className="text-[#0b1325]">Shapoorji Pallonji Real Estate</strong>, you acknowledge that you have read, understood, and agreed to be bound by the following terms and statutory conditions.
          </p>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">2. Informational Purpose Only</h2>
          <p>
            All information, architectural renders, specifications, floor layouts, dimensions, and amenities showcased on this portal are for conceptual and informational purposes only and do not constitute an offer, invitation to offer, contract, or binding legal agreement between the developer and any buyer.
          </p>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">3. RERA Registrations &amp; Allotment</h2>
          <p>
            All projects displayed are registered under the respective State Real Estate Regulatory Authorities (MahaRERA / Karnataka RERA). The formal sale and purchase of any residential apartment is solely governed by the written Agreement for Sale executed between the parties, in compliance with the Real Estate (Regulation and Development) Act, 2016.
          </p>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">4. Intellectual Property</h2>
          <p>
            All trade names, logos, renders, architectural visual drawings, site plans, and textual content are the intellectual property of Shapoorji Pallonji Group or its affiliated real estate divisions. Unauthorized copying or redistribution is strictly prohibited.
          </p>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">5. Governing Law &amp; Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-[#0b1325]">Mumbai, Maharashtra, India</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
