import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, Flower2, Building2, Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-white text-agarbatti-earth min-h-screen">
      
      {/* Header */}
      <section className="bg-incense-hero text-white py-14 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-agarbatti-gold" />
            <span>Privacy &amp; Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-agarbatti-gold-100/90">
            Brand: <strong className="text-white">SHAPOORJI PALLONJ</strong> • Legal Entity: <strong className="text-white">LUKAR ENTERPRISES</strong>
          </p>
          <p className="text-[11px] text-agarbatti-gold-200/70">
            Last Updated: September 2026
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-700 leading-relaxed text-sm">
        
        {/* Intro */}
        <div className="p-5 rounded-2xl bg-agarbatti-cream-card border border-agarbatti-cream-border space-y-2">
          <h2 className="text-base font-bold text-agarbatti-900 font-serif">
            1. Scope &amp; Operating Entity
          </h2>
          <p className="text-xs sm:text-sm text-agarbatti-earth-muted">
            This Privacy Policy explains how <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong> (the legal commercial entity operating the consumer fragrance brand <strong className="text-agarbatti-900">SHAPOORJI PALLONJ</strong>) collects, handles, stores, and protects personal and commercial data provided by users through our website forms and communication channels.
          </p>
        </div>

        {/* Section 2: Info Collected */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            2. Information Collected Through Enquiry Forms
          </h2>
          <p>
            When you visit our website, request agarbatti samples, or submit product enquiries, we collect information needed to communicate with you:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
            <li><strong>Personal Contact Information:</strong> Full Name, Email Address, Mobile / WhatsApp Number.</li>
            <li><strong>Business &amp; Retail Details:</strong> Company/Shop Name, delivery address, city, state.</li>
            <li><strong>Enquiry &amp; Requirement Details:</strong> Selected agarbatti fragrance, quantity requirement, festive gift inquiries, and message details.</li>
            <li><strong>Consent Records:</strong> Your explicit consent for mandatory enquiry follow-ups and optional marketing updates.</li>
          </ul>
        </div>

        {/* Section 3: How info is used */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            3. How Your Information is Used
          </h2>
          <p>
            The collected information is used strictly for legitimate customer service and commercial purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
            <li>Responding to product enquiries, sample requests, and providing fragrance recommendations.</li>
            <li>Contacting you via Phone Call, SMS, WhatsApp, or Email regarding your specific inquiry.</li>
            <li>Sending promotional offers, new fragrance launches, and festival updates ONLY if you selected the optional marketing opt-in.</li>
            <li>Processing orders, invoicing (Lukar Enterprises GST billing), and coordinating logistics.</li>
          </ul>
        </div>

        {/* Section 4: Data Protection */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            4. Data Protection &amp; Security
          </h2>
          <p>
            We take reasonable administrative, technical, and physical precautions to safeguard your personal details against unauthorized access, loss, or misuse. We do not sell, rent, or lease your contact information to third-party telemarketers.
          </p>
        </div>

        {/* Section 5: Cookies */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            5. Cookies &amp; Website Analytics
          </h2>
          <p>
            Our website uses standard essential cookies and lightweight analytics to monitor page performance, remember user preferences, and provide smooth navigation. You can adjust your browser settings to decline cookies at any time.
          </p>
        </div>

        {/* Section 6: Third-party services */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            6. Third-Party Services
          </h2>
          <p>
            We may use trusted service providers for website hosting (such as GitHub Pages), maps embedding (Google Maps), and email/form delivery. These third parties process data solely as necessary to perform their respective technical services.
          </p>
        </div>

        {/* Section 7: User Rights */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            7. User Rights &amp; Opt-Out
          </h2>
          <p>
            You have the right to request access to your submitted details, update incorrect information, or opt-out of marketing communications at any time by contacting our grievance desk.
          </p>
        </div>

        {/* Section 8: Contact Information */}
        <div className="p-6 rounded-2xl bg-agarbatti-950 text-agarbatti-gold-100 border border-agarbatti-800 space-y-3">
          <div className="flex items-center gap-2 text-agarbatti-gold text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Contact &amp; Grievance Desk</span>
          </div>
          <h3 className="text-base font-serif font-bold text-white">
            LUKAR ENTERPRISES
          </h3>
          <div className="text-xs space-y-1 text-agarbatti-gold-100/90">
            <p><strong>Address:</strong> H NO 120, SECOND FLOOR, MADANGIR VILLAGE, DR. AMBEDKAR NAGAR, NEW DELHI, SOUTH DELHI, DELHI - 110062</p>
            <p><strong>Mobile:</strong> +91 8700983465</p>
            <p><strong>Email:</strong> viveklukar1999@gmail.com</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
