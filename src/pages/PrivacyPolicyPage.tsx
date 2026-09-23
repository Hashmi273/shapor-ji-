import React from 'react';
import { ShieldCheck, Lock, Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#f8f6f0] pb-24 text-[#111827]">
      <section className="bg-[#0b1325] text-white py-16 border-b border-[#1e2a44]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Customer Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-white/70">
            Shapoorji Pallonji Real Estate • Last Updated: January 2026
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 space-y-8 text-xs sm:text-sm text-[#586071] leading-relaxed">
        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            1. Overview &amp; Commitment to Privacy
          </h2>
          <p>
            Shapoorji Pallonji Real Estate respects your personal privacy. This Privacy Policy describes how we handle, protect, and process the personal information you submit when booking site visits, requesting project brochures, or consulting with our sales relationship executives.
          </p>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li><strong>Identity &amp; Contact Details:</strong> Full name, personal email address, mobile phone number.</li>
            <li><strong>Property Preferences:</strong> Preferred cities (Mumbai, Pune, Bengaluru), desired configurations (1, 2, 3, 4 BHK), budget ranges, and intended purchase timelines.</li>
            <li><strong>Site Visit Scheduling Data:</strong> Preferred appointment dates, times, and sample apartment visit requests.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            3. How We Use Your Information
          </h2>
          <p>
            Your information is used strictly to fulfill your real estate requests: sending requested digital brochures, verifying site visit appointments, providing customized cost sheets, and updating you regarding statutory project milestones and pre-launch booking windows. We do not sell or lease your personal information to third-party marketing brokers.
          </p>
        </div>

        <div className="rounded-xl border border-[#e2ded4] bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-lg font-bold text-[#0b1325]">
            4. Data Security &amp; Contact
          </h2>
          <p>
            We implement stringent technical and organizational security measures to protect your contact data against unauthorized access, loss, or disclosure. If you wish to update your preferences or unsubscribe from property updates, please contact our data desk at <strong className="text-[#0b1325]">realestate@shapoorji.com</strong> or call <strong className="text-[#0b1325]">+91 87009 83465</strong>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
