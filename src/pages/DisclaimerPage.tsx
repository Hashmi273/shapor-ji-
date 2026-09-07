import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ShieldCheck, Building2, Flower2, ArrowRight } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-white text-agarbatti-earth min-h-screen">
      
      {/* Header */}
      <section className="bg-incense-hero text-white py-14 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-agarbatti-gold" />
            <span>Product &amp; Brand Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            General &amp; Product Disclaimer
          </h1>
          <p className="text-xs sm:text-sm text-agarbatti-gold-100/90">
            Brand: <strong className="text-white">SHAPOORJI PALLONJ</strong> • Operating Entity: <strong className="text-white">LUKAR ENTERPRISES</strong>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed text-sm">
        
        {/* Independent Entity Statement */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold font-serif text-base">
            <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>Independent Brand Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            This website is an independent consumer brand and product showcase for incense and agarbatti products operated exclusively by <strong className="text-amber-950 font-semibold">LUKAR ENTERPRISES</strong> (a registered MSME enterprise based in New Delhi, India). This website is not the official website of, nor does it claim ownership or operation of, any third-party real-estate or corporate conglomerate unless authorized under written bilateral agreement.
          </p>
        </div>

        {/* Product Information & Imagery */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            1. General Informational Purpose of Product Content
          </h2>
          <p>
            All agarbatti product descriptions, fragrance notes, pack size references, and lifestyle photographs presented on this website are for general informational and illustrative purposes only.
          </p>
          <p>
            Actual product packaging, stick counts, burn times, and fragrance profiles may vary slightly depending on seasonal floral yields, natural raw materials, and customized bulk packaging requirements. Exact details and commercial availability should be verified directly with our commercial team.
          </p>
        </div>

        {/* Commercial Inquiries & Quotes */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            2. Commercial Inquiries &amp; Orders
          </h2>
          <p>
            Submitting a contact form or requesting fragrance samples through this website does not represent a confirmed sales order. Final pricing, GST invoicing, and dispatch schedules are formally established through official proforma invoices or communications from <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong>.
          </p>
        </div>

        {/* Safe Usage of Incense */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-agarbatti-900 font-serif">
            3. Safe Usage of Agarbatti Products
          </h2>
          <p>
            Incense sticks should always be burned in well-ventilated areas using suitable heat-resistant holders. Keep burning incense away from flammable materials and out of reach of unattended children and pets.
          </p>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-2xl bg-agarbatti-cream-card border border-agarbatti-cream-border space-y-3">
          <h3 className="text-base font-serif font-bold text-agarbatti-900">
            Questions Regarding Product Availability?
          </h3>
          <p className="text-xs sm:text-sm text-agarbatti-earth-muted">
            For retail queries, sample packs, or wholesale distribution inquiries, please contact our registered office:
          </p>
          <div className="text-xs text-agarbatti-earth space-y-1">
            <p><strong>Legal Entity:</strong> LUKAR ENTERPRISES</p>
            <p><strong>Address:</strong> H NO 120, SECOND FLOOR, MADANGIR VILLAGE, DR. AMBEDKAR NAGAR, NEW DELHI, SOUTH DELHI, DELHI - 110062</p>
            <p><strong>Phone:</strong> +91 8700983465 | <strong>Email:</strong> viveklukar1999@gmail.com</p>
          </div>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-gold-primary px-5 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5"
            >
              <span>Contact Fragrance Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default DisclaimerPage;
