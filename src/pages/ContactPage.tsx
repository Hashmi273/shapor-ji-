import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Clock, 
  Flower2, 
  User, 
  Building, 
  ExternalLink, 
  Sparkles 
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export const FORM_ENDPOINT_URL = ''; // Prepared configuration variable for GitHub Pages external form submission

export const ContactPage: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobileNumber: '',
    productInterested: '',
    quantity: '',
    message: '',
    contact_opt_in: false, // MANDATORY
    marketing_opt_in: false // OPTIONAL
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill product if passed in URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prodParam = params.get('product');
    if (prodParam) {
      setFormData((prev) => ({ ...prev, productInterested: prodParam }));
    }
  }, [location.search]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Please enter your mobile number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.productInterested.trim()) {
      errs.productInterested = 'Please select a fragrance or product of interest';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your message or requirement';
    }
    if (!formData.contact_opt_in) {
      errs.contact_opt_in = 'You must agree to be contacted regarding your enquiry to proceed.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    if (FORM_ENDPOINT_URL) {
      try {
        await fetch(FORM_ENDPOINT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.log('Form submission completed locally');
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-[#FCF9F2] bg-cream-pattern min-h-screen text-agarbatti-earth">
      
      {/* Page Hero Header */}
      <section className="bg-incense-hero text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <Flower2 className="w-4 h-4 text-agarbatti-gold" />
            <span>Fragrance Inquiries &amp; Customer Care</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
            Bring Beautiful Fragrance <span className="text-gradient-gold italic font-normal">Into Your Space</span>
          </h1>
          <p className="text-sm sm:text-base text-agarbatti-gold-100/90 max-w-2xl mx-auto leading-relaxed">
            Connect with our team at <strong className="text-white">LUKAR ENTERPRISES</strong> for retail packs, wholesale fragrance orders, festive gift boxes, and sampling requests.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Official Contact & Entity Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Legal Entity Registered Office Card */}
            <div className="bg-[#FFFDF9] p-7 rounded-2xl border border-agarbatti-cream-border shadow-md space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-agarbatti-gold text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Business Entity</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-agarbatti-900">
                  LUKAR ENTERPRISES
                </h3>
                <p className="text-xs text-agarbatti-earth-muted">
                  Operating entity for brand <strong className="text-agarbatti-900">SHAPOORJI PALLONJ</strong>
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-agarbatti-cream-border text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-agarbatti-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-agarbatti-earth-muted uppercase tracking-wider block">
                      Registered Business Address
                    </span>
                    <p className="text-xs sm:text-sm text-agarbatti-earth font-medium leading-relaxed mt-0.5">
                      H NO 120, SECOND FLOOR,<br />
                      MADANGIR VILLAGE, DR. AMBEDKAR NAGAR,<br />
                      NEW DELHI, SOUTH DELHI,<br />
                      DELHI - 110062, INDIA
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-agarbatti-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-agarbatti-earth-muted uppercase tracking-wider block">
                      Mobile &amp; WhatsApp Helpline
                    </span>
                    <a 
                      href="tel:+918700983465"
                      className="text-sm sm:text-base font-bold text-agarbatti-900 hover:text-agarbatti-700 transition-colors block mt-0.5"
                    >
                      +91 8700983465
                    </a>
                    <span className="text-[11px] text-agarbatti-earth-muted">Mon - Sat: 9:30 AM - 6:30 PM IST</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-agarbatti-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-agarbatti-earth-muted uppercase tracking-wider block">
                      Official Inquiries Email
                    </span>
                    <a 
                      href="mailto:viveklukar1999@gmail.com"
                      className="text-sm font-semibold text-agarbatti-900 hover:text-agarbatti-700 transition-colors block mt-0.5 break-all"
                    >
                      viveklukar1999@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* MSME & Registration Card */}
            <div className="bg-agarbatti-950 text-agarbatti-gold-100 p-6 rounded-2xl border border-agarbatti-800 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-agarbatti-gold text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>MSME Registration Information</span>
              </div>
              <p className="text-xs text-agarbatti-gold-100/90 leading-relaxed">
                <strong className="text-white">LUKAR ENTERPRISES</strong> is a verified Micro, Small &amp; Medium Enterprise (MSME) registered under the Ministry of MSME, Government of India.
              </p>
              <div className="p-3 rounded-xl bg-agarbatti-900 border border-agarbatti-800 text-[11px] text-agarbatti-gold-200/80 space-y-1">
                <div className="flex justify-between">
                  <span>Legal Enterprise:</span>
                  <span className="text-white font-semibold">LUKAR ENTERPRISES</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-white font-medium">South Delhi, Delhi</span>
                </div>
                <div className="flex justify-between">
                  <span>Business Sector:</span>
                  <span className="text-agarbatti-gold font-medium">Incense &amp; Fragrance Products</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF9] p-7 sm:p-9 rounded-2xl border border-agarbatti-cream-border shadow-lg">
              
              <div className="mb-6 space-y-1">
                <h2 className="text-2xl font-serif font-bold text-agarbatti-900">
                  Send Fragrance Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-agarbatti-earth-muted">
                  Fill in your details below and our commercial team will contact you with product availability and fragrance samples.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-agarbatti-900">
                    Thank you! Your enquiry has been submitted successfully.
                  </h3>
                  <p className="text-sm text-agarbatti-earth-muted max-w-md mx-auto leading-relaxed">
                    Our team at <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong> will contact you shortly regarding <strong className="text-agarbatti-900">{formData.productInterested}</strong>.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-agarbatti-cream-card border border-agarbatti-cream-border max-w-md mx-auto text-xs text-agarbatti-earth text-left space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-agarbatti-earth-muted">Contact Helpline:</span>
                      <span className="font-semibold text-agarbatti-900">+91 8700983465</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-agarbatti-earth-muted">Email:</span>
                      <span className="font-semibold text-agarbatti-900">viveklukar1999@gmail.com</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        mobileNumber: '',
                        productInterested: '',
                        quantity: '',
                        message: '',
                        contact_opt_in: false,
                        marketing_opt_in: false
                      });
                    }}
                    className="btn-gold-primary px-6 py-2.5 rounded-xl text-xs font-semibold mt-4"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-xl border bg-white ${
                            errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                          } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                        />
                      </div>
                      {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          placeholder="Shop / Retail / Individual"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-xl border border-agarbatti-cream-borderDark bg-white focus:border-agarbatti-gold focus:outline-none focus:ring-1 focus:ring-agarbatti-gold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="name@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-xl border bg-white ${
                            errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                          } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                        />
                      </div>
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 8700983465"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-xl border bg-white ${
                            errors.mobileNumber ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                          } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                        />
                      </div>
                      {errors.mobileNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.mobileNumber}</p>}
                    </div>
                  </div>

                  {/* Product & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                        Product Interested In <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.productInterested}
                        onChange={(e) => setFormData({ ...formData, productInterested: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white ${
                          errors.productInterested ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                        } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                      >
                        <option value="">-- Choose Fragrance / Pack --</option>
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.category})
                          </option>
                        ))}
                        <option value="Custom Gift Box Pack">Festive Gift Box Assortment</option>
                        <option value="Wholesale Distributorship Inquiry">Wholesale Distributorship Inquiry</option>
                      </select>
                      {errors.productInterested && <p className="text-[11px] text-rose-500 mt-1">{errors.productInterested}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                        Quantity / Requirement
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5 Boxes, Festive Gift Packs, Retail Enquiry"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-agarbatti-cream-borderDark bg-white focus:border-agarbatti-gold focus:outline-none focus:ring-1 focus:ring-agarbatti-gold"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-agarbatti-earth uppercase tracking-wider mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share any specific fragrance preferences, delivery location, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                      } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* MANDATORY CONTACT OPT-IN CHECKBOX */}
                  <div className="pt-2 border-t border-agarbatti-cream-border space-y-2">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.contact_opt_in}
                        onChange={(e) => setFormData({ ...formData, contact_opt_in: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-agarbatti-800 border-agarbatti-cream-borderDark focus:ring-agarbatti-gold"
                      />
                      <span className="text-xs text-agarbatti-earth leading-snug">
                        <strong className="text-agarbatti-900">Mandatory:</strong> I agree to be contacted regarding my enquiry through Email, SMS, WhatsApp or Phone Call. (See our <Link to="/privacy-policy" className="text-agarbatti-800 underline hover:text-agarbatti-gold">Privacy Policy</Link>) <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    {errors.contact_opt_in && (
                      <p className="text-[11px] text-rose-500 font-medium pl-6">{errors.contact_opt_in}</p>
                    )}

                    {/* OPTIONAL MARKETING OPT-IN CHECKBOX */}
                    <label className="flex items-start gap-2.5 cursor-pointer select-none pt-1">
                      <input
                        type="checkbox"
                        checked={formData.marketing_opt_in}
                        onChange={(e) => setFormData({ ...formData, marketing_opt_in: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-agarbatti-800 border-agarbatti-cream-borderDark focus:ring-agarbatti-gold"
                      />
                      <span className="text-xs text-agarbatti-earth-muted leading-snug">
                        <span className="font-medium text-agarbatti-earth">Optional:</span> I would also like to receive promotional offers, new product updates and marketing communications through Email, SMS, WhatsApp or Phone Call.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold-primary py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Google Maps Location Embed Section */}
        <div className="mt-12 bg-[#FFFDF9] p-6 rounded-2xl border border-agarbatti-cream-border shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-agarbatti-gold uppercase tracking-wider">
                Geographic Presence &amp; Location
              </span>
              <h3 className="text-lg font-serif font-bold text-agarbatti-900">
                Registered Office Location — Madangir, New Delhi
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Madangir+Village+Dr+Ambedkar+Nagar+New+Delhi+110062"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-agarbatti-900 hover:text-agarbatti-700 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 rounded-xl overflow-hidden border border-agarbatti-cream-border shadow-inner">
            <iframe
              title="Lukar Enterprises Registered Office Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.610363290505!2d77.2285188!3d28.5200371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e41f0219c1%3A0x6b29be19001b9ad9!2sMadangir%2C%20New%20Delhi%2C%20Delhi%20110062!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default ContactPage;
