import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Send, CheckCircle2, Sparkles, Phone, Mail, User, Building, Flower2 } from 'lucide-react';


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
      errs.productInterested = 'Please select a project or property interest';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]">
      <div 
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden border border-[#d9d2c7] bg-[#fbfaf7] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#2b2c27] text-white p-5 sm:p-6 relative flex justify-between items-start border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-[#b59767] text-xs font-semibold uppercase tracking-wider mb-1">
              <Flower2 className="w-4 h-4 text-[#b59767]" />
              <span>Residential Property Enquiry</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Enquire about a Property
            </h3>
            <p className="text-xs text-[#b59767]-100/80 mt-1">
              Property Sales &amp; Enquiries • Shapoorji Pallonji Real Estate
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#b59767]-100 hover:text-white hover:bg-agarbatti-800 transition-colors"
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
              <h4 className="text-xl font-bold text-[#252621] font-serif">
                Thank you! Your enquiry has been submitted successfully.
              </h4>
              <p className="text-sm text-[#34352f]-muted max-w-sm mx-auto leading-relaxed">
                Dear <strong className="text-[#252621]">{formData.fullName}</strong>, our team at <strong className="text-[#252621]">SHAPOORJI PALLONJI REAL ESTATE PRIVATE LIMITED</strong> will contact you shortly with fragrance details and commercial availability.
              </p>
              <div className="bg-[#f1ede5] p-3.5 rounded-xl border border-[#ded8ce] text-xs text-[#34352f] max-w-sm mx-auto text-left space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#34352f]-muted">Helpline:</span>
                  <span className="font-semibold text-[#252621]">+91 8700983465</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#34352f]-muted">Email:</span>
                  <span className="font-semibold text-[#252621]">viveklukar1999@gmail.com</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-[#262723] text-white hover:bg-[#3a3b34] transition px-6 py-2.5 rounded-lg text-sm font-semibold mt-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
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
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#ded8ce]Dark focus:border-[#a48352]'
                    } focus:outline-none focus:ring-1 focus:ring-[#a48352]`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Company & Email in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Retail / Wholesale / Individual"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#ded8ce]Dark bg-white focus:border-[#a48352] focus:outline-none focus:ring-1 focus:ring-[#a48352]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
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
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#ded8ce]Dark focus:border-[#a48352]'
                      } focus:outline-none focus:ring-1 focus:ring-[#a48352]`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Mobile Number & Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
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
                        errors.mobileNumber ? 'border-rose-400 bg-rose-50/20' : 'border-[#ded8ce]Dark focus:border-[#a48352]'
                      } focus:outline-none focus:ring-1 focus:ring-[#a48352]`}
                    />
                  </div>
                  {errors.mobileNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
                    Product Interested In <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.productInterested}
                    onChange={(e) => setFormData({ ...formData, productInterested: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#ded8ce]Dark bg-white focus:border-[#a48352] focus:outline-none focus:ring-1 focus:ring-[#a48352]"
                  >
                    <option value="">-- Select Project / Property --</option>
                    {['Runwal 7 Mahalaxmi','Runwal The Central Park','Runwal Auris','Runwal Lands End','Runwal Woods','Puranik’s Abitante Fiore','General Residential Enquiry'].map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  {errors.productInterested && <p className="text-[11px] text-rose-500 mt-1">{errors.productInterested}</p>}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
                  Budget / Requirement
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹2 Cr – ₹3 Cr, 3 BHK, investment or end use"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#ded8ce]Dark bg-white focus:border-[#a48352] focus:outline-none focus:ring-1 focus:ring-[#a48352]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#34352f] uppercase tracking-wider mb-1">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details regarding your property requirement or preferred location..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3 py-2 text-sm rounded-lg border bg-white ${
                    errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#ded8ce]Dark focus:border-[#a48352]'
                  } focus:outline-none focus:ring-1 focus:ring-[#a48352]`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              {/* MANDATORY CONTACT OPT-IN CHECKBOX */}
              <div className="pt-2 border-t border-[#ded8ce] space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.contact_opt_in}
                    onChange={(e) => setFormData({ ...formData, contact_opt_in: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-agarbatti-800 border-[#ded8ce]Dark focus:ring-agarbatti-gold"
                  />
                  <span className="text-xs text-[#34352f] leading-snug">
                    <strong className="text-[#252621]">Mandatory:</strong> I agree to be contacted regarding my enquiry through Email, SMS, WhatsApp or Phone Call. (View our <Link to="/privacy-policy" className="text-agarbatti-800 underline hover:text-[#b59767]">Privacy Policy</Link>) <span className="text-rose-500">*</span>
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
                    className="mt-0.5 w-4 h-4 rounded text-agarbatti-800 border-[#ded8ce]Dark focus:ring-agarbatti-gold"
                  />
                  <span className="text-xs text-[#34352f]-muted leading-snug">
                    <span className="font-medium text-[#34352f]">Optional:</span> I would also like to receive promotional offers, new product updates and marketing communications through Email, SMS, WhatsApp or Phone Call.
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
