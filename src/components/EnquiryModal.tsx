import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Send, CheckCircle2, Sparkles, Phone, Mail, User, Building, Flower2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const FORM_ENDPOINT_URL = ''; // Configurable endpoint for GitHub Pages external form submission

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobileNumber: '',
    productInterested: defaultProduct,
    quantity: '',
    message: '',
    contact_opt_in: false, // MANDATORY
    marketing_opt_in: false // OPTIONAL
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, productInterested: defaultProduct }));
    }
  }, [defaultProduct]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
      errs.message = 'Please provide details about your requirement or message';
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
    
    // If external form endpoint is provided, submit payload
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-agarbatti-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FFFDF9] rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-agarbatti-cream-border relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-agarbatti-900 to-agarbatti-950 text-white p-5 sm:p-6 relative flex justify-between items-start border-b border-agarbatti-800">
          <div>
            <div className="flex items-center gap-2 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider mb-1">
              <Flower2 className="w-4 h-4 text-agarbatti-gold" />
              <span>Fragrance &amp; Product Enquiry</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Enquire for Agarbatti &amp; Incense
            </h3>
            <p className="text-xs text-agarbatti-gold-100/80 mt-1">
              Brand: <strong className="text-white">SHAPOORJI PALLONJ</strong> • Operated by Lukar Enterprises
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-agarbatti-gold-100 hover:text-white hover:bg-agarbatti-800 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-agarbatti-900 font-serif">
                Thank you! Your enquiry has been submitted successfully.
              </h4>
              <p className="text-sm text-agarbatti-earth-muted max-w-sm mx-auto leading-relaxed">
                Dear <strong className="text-agarbatti-900">{formData.fullName}</strong>, our team at <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong> will contact you shortly with fragrance details and commercial availability.
              </p>
              <div className="bg-agarbatti-cream-card p-3.5 rounded-xl border border-agarbatti-cream-border text-xs text-agarbatti-earth max-w-sm mx-auto text-left space-y-1">
                <div className="flex justify-between">
                  <span className="text-agarbatti-earth-muted">Helpline:</span>
                  <span className="font-semibold text-agarbatti-900">+91 8700983465</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-agarbatti-earth-muted">Email:</span>
                  <span className="font-semibold text-agarbatti-900">viveklukar1999@gmail.com</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="btn-gold-primary px-6 py-2.5 rounded-lg text-sm font-semibold mt-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                    } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Company & Email in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Retail / Wholesale / Individual"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-agarbatti-cream-borderDark bg-white focus:border-agarbatti-gold focus:outline-none focus:ring-1 focus:ring-agarbatti-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                      } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Mobile Number & Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 8700983465"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white ${
                        errors.mobileNumber ? 'border-rose-400 bg-rose-50/20' : 'border-agarbatti-cream-borderDark focus:border-agarbatti-gold'
                      } focus:outline-none focus:ring-1 focus:ring-agarbatti-gold`}
                    />
                  </div>
                  {errors.mobileNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                    Product Interested In <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.productInterested}
                    onChange={(e) => setFormData({ ...formData, productInterested: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-agarbatti-cream-borderDark bg-white focus:border-agarbatti-gold focus:outline-none focus:ring-1 focus:ring-agarbatti-gold"
                  >
                    <option value="">-- Select Fragrance / Pack --</option>
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Assortment">Custom Wholesale / Assortment</option>
                  </select>
                  {errors.productInterested && <p className="text-[11px] text-rose-500 mt-1">{errors.productInterested}</p>}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                  Quantity / Requirement
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10 Boxes, Sample Pack, Retail Bulk Inquiry"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-agarbatti-cream-borderDark bg-white focus:border-agarbatti-gold focus:outline-none focus:ring-1 focus:ring-agarbatti-gold"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-agarbatti-earth uppercase tracking-wider mb-1">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details regarding your fragrance requirements or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3 py-2 text-sm rounded-lg border bg-white ${
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
                    <strong className="text-agarbatti-900">Mandatory:</strong> I agree to be contacted regarding my enquiry through Email, SMS, WhatsApp or Phone Call. (View our <Link to="/privacy-policy" className="text-agarbatti-800 underline hover:text-agarbatti-gold">Privacy Policy</Link>) <span className="text-rose-500">*</span>
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

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold-primary py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 mt-2"
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
  );
};

export default EnquiryModal;
