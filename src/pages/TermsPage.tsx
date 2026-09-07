import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, Building2, Flower2 } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-white text-agarbatti-earth min-h-screen">
      
      {/* Header */}
      <section className="bg-incense-hero text-white py-14 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-agarbatti-gold" />
            <span>Website &amp; Product Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-agarbatti-gold-100/90">
            Brand: <strong className="text-white">SHAPOORJI PALLONJ</strong> • Operating Entity: <strong className="text-white">LUKAR ENTERPRISES</strong>
          </p>
          <p className="text-[11px] text-agarbatti-gold-200/70">
            Effective Date: September 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-700 leading-relaxed text-sm">
        
        {/* Intro */}
        <div className="p-5 rounded-2xl bg-agarbatti-cream-card border border-agarbatti-cream-border space-y-2">
          <h2 className="text-base font-bold text-agarbatti-900 font-serif">
            1. Agreement to Terms
          </h2>
          <p className="text-xs sm:text-sm text-agarbatti-earth-muted">
            By accessing or using the brand website of <strong className="text-agarbatti-900">SHAPOORJI PALLONJ</strong> (operated by <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong>), you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </p>
        </div>

        {/* Section 2: Website Usage */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            2. Website Usage
          </h2>
          <p>
            You agree to use this website in a lawful and responsible manner. You must not attempt to disrupt the website, introduce malicious software, or submit fake/spam inquiries through the contact forms.
          </p>
        </div>

        {/* Section 3: Product Information & Images */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            3. Product Information, Fragrance Notes &amp; Images
          </h2>
          <p>
            All product images, packaging photos, fragrance descriptions, and pack sizes displayed on this website are provided for illustrative and informational purposes. Actual box artwork, stick thickness, burn durations, and fragrance intensity may slightly vary across manufacturing batches.
          </p>
        </div>

        {/* Section 4: Enquiries & Availability */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            4. Inquiries, Product Availability &amp; Pricing
          </h2>
          <p>
            Submitting an enquiry does not constitute a confirmed financial transaction or price reservation. Commercial supply, wholesale volume pricing, and shipping schedules are confirmed directly by our sales desk at <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong>.
          </p>
        </div>

        {/* Section 5: Intellectual Property */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            5. Intellectual Property &amp; Non-Affiliation
          </h2>
          <p>
            The original graphic designs, text copy, and website arrangement are the intellectual property of <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong> or licensed for use.
          </p>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <strong>Important Brand Notice:</strong>
            <p>
              This website is an independent consumer brand showcase for incense and agarbatti products operated by Lukar Enterprises. It makes no claim of ownership or affiliation with any third-party real-estate or corporate conglomerates unless authorized under written agreement.
            </p>
          </div>
        </div>

        {/* Section 6: Limitation of Liability */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            6. Limitation of Liability
          </h2>
          <p>
            LUKAR ENTERPRISES shall not be liable for any indirect, incidental, or consequential damages resulting from the use of this website or reliance on general website descriptions prior to confirmed order documentation.
          </p>
        </div>

        {/* Section 7: Changes to Website */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            7. Website Modifications
          </h2>
          <p>
            We reserve the right to update product offerings, fragrance descriptions, and website terms at any time without prior notice.
          </p>
        </div>

        {/* Section 8: Governing Law */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            8. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These terms shall be governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-agarbatti-900">New Delhi, India</strong>.
          </p>
        </div>

        {/* Section 9: Contact */}
        <div className="p-6 rounded-2xl bg-agarbatti-950 text-agarbatti-gold-100 border border-agarbatti-800 space-y-3">
          <div className="flex items-center gap-2 text-agarbatti-gold text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Commercial &amp; Legal Desk</span>
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

export default TermsPage;
