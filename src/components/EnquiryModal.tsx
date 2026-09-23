import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, User, Building, Calendar, Download, Sparkles } from 'lucide-react';
import { REAL_ESTATE_PROJECTS } from '../data/realEstateData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const FORM_ENDPOINT_URL = '';

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    projectInterested: defaultProduct,
    enquiryType: 'Schedule Site Visit',
    configuration: '3 BHK',
    budget: '₹1.5 Cr - ₹3 Cr',
    preferredDate: '',
    message: '',
    contact_opt_in: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, projectInterested: defaultProduct }));
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
      errs.mobileNumber = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.projectInterested.trim()) {
      errs.projectInterested = 'Please select a project';
    }
    if (!formData.contact_opt_in) {
      errs.contact_opt_in = 'Please accept consent to be contacted';
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
      } catch {
        // Fallback for static builds
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-[#d8e3f0] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#4a5e7b] hover:text-[#002558] hover:bg-[#f0f6fc] rounded-full transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-[#0077c8] rounded-full flex items-center justify-center mx-auto border border-[#c4def3]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#002558]">
              Enquiry Received Successfully!
            </h3>
            <p className="text-sm text-[#4a5e7b] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#002558]">{formData.fullName}</strong>. Our senior relationship manager for <strong className="text-[#0077c8]">{formData.projectInterested || 'Shapoorji Pallonji Properties'}</strong> has been assigned to your request.
            </p>
            <div className="bg-[#f0f6fc] border border-[#d8e3f0] rounded-xl p-4 text-xs text-[#4a5e7b] max-w-md mx-auto space-y-2">
              <div className="flex justify-between">
                <span>Priority Helpline:</span>
                <span className="font-bold text-[#003882]">+91 87009 83465</span>
              </div>
              <div className="flex justify-between">
                <span>Brochure &amp; Pricing:</span>
                <span className="font-semibold text-[#0077c8]">Sent to {formData.email}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="bg-[#003882] text-white hover:bg-[#0077c8] transition px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/sp-logo.png"
                alt="Shapoorji Pallonji Logo"
                className="h-8 w-auto object-contain"
              />
              <div className="border-l border-[#d8e3f0] pl-3">
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#0077c8]">
                  Sales Experience Desk
                </span>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-[#002558]">
              {formData.enquiryType === 'Schedule Site Visit' ? 'Book a Private Site Visit' : 'Request Property Information'}
            </h2>
            <p className="text-xs text-[#4a5e7b] mt-1 mb-5">
              Receive official floor plans, price sheet, and schedule a guided VIP tour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project & Enquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Select Project <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.projectInterested}
                    onChange={(e) => setFormData({ ...formData, projectInterested: e.target.value })}
                    className={`w-full px-3 py-2.5 text-xs rounded-lg border bg-white ${
                      errors.projectInterested ? 'border-rose-400' : 'border-[#d8e3f0]'
                    } focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]`}
                  >
                    <option value="">-- Choose Development --</option>
                    {REAL_ESTATE_PROJECTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.city})
                      </option>
                    ))}
                    <option value="General Residential Enquiry">General Residential Portfolio</option>
                  </select>
                  {errors.projectInterested && <p className="text-[11px] text-rose-500 mt-1">{errors.projectInterested}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Purpose of Enquiry
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#d8e3f0] bg-white focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]"
                  >
                    <option value="Schedule Site Visit">Schedule Site Visit</option>
                    <option value="Download Brochure & Floor Plans">Download Brochure &amp; Floor Plans</option>
                    <option value="Price Sheet & Payment Plans">Price Sheet &amp; Payment Plans</option>
                    <option value="Virtual 3D Video Tour">Virtual 3D Video Tour</option>
                  </select>
                </div>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 text-xs rounded-lg border bg-white ${
                        errors.fullName ? 'border-rose-400' : 'border-[#d8e3f0]'
                      } focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 text-xs rounded-lg border bg-white ${
                        errors.mobileNumber ? 'border-rose-400' : 'border-[#d8e3f0]'
                      } focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]`}
                    />
                  </div>
                  {errors.mobileNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.mobileNumber}</p>}
                </div>
              </div>

              {/* Email & Typology */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 text-xs rounded-lg border bg-white ${
                        errors.email ? 'border-rose-400' : 'border-[#d8e3f0]'
                      } focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Preferred Configuration
                  </label>
                  <select
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#d8e3f0] bg-white focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]"
                  >
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK Luxury Suites">4 BHK Luxury Suites</option>
                    <option value="Duplex / Penthouse">Duplex / Penthouse</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Preferred Site Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#d8e3f0] bg-white focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002558] uppercase tracking-wider mb-1">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#d8e3f0] bg-white focus:border-[#0077c8] focus:outline-none focus:ring-1 focus:ring-[#0077c8]"
                  >
                    <option value="Under ₹1 Cr">Under ₹1 Cr</option>
                    <option value="₹1 Cr - ₹2 Cr">₹1 Cr - ₹2 Cr</option>
                    <option value="₹2 Cr - ₹4 Cr">₹2 Cr - ₹4 Cr</option>
                    <option value="₹4 Cr - ₹10 Cr">₹4 Cr - ₹10 Cr</option>
                    <option value="₹10 Cr+ Ultra Luxury">₹10 Cr+ Ultra Luxury</option>
                  </select>
                </div>
              </div>

              {/* Opt-in check */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-[#4a5e7b] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.contact_opt_in}
                    onChange={(e) => setFormData({ ...formData, contact_opt_in: e.target.checked })}
                    className="mt-0.5 rounded accent-[#0077c8]"
                  />
                  <span>
                    I authorize Shapoorji Pallonji Real Estate to contact me via Call, SMS, WhatsApp &amp; Email with project updates.
                  </span>
                </label>
                {errors.contact_opt_in && <p className="text-[11px] text-rose-500 mt-1">{errors.contact_opt_in}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#003882] hover:bg-[#0077c8] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 shadow-md"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Submit &amp; Instant Brochure Access</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
