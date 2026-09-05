import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Phone, Mail, MapPin, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Zion Marketing — Enterprise Communication & Project Branding';
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobileNumber: '',
    product: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.companyName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.mobileNumber.trim() !== '' &&
    formData.product !== '' &&
    formData.message.trim() !== '' &&
    formData.consent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white min-h-screen text-zion-dark pt-28 pb-20 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#EEF4FF]/80 via-white to-white pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Enterprise & Project Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zion-deep-blue mb-6 tracking-tight">
            Let's <span className="text-zion-orange">Connect</span> Your Business
          </h1>
          <p className="text-base sm:text-lg text-zion-dark-gray leading-relaxed font-normal">
            Get in touch with our enterprise communication and real estate branding specialists for project launches, custom volume pricing, API access, and tailored multi-channel solutions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 reveal-left">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D6E4FF] shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-zion-orange flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
                    <CheckCircle className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zion-deep-blue mb-3">Thank You!</h3>
                  <p className="text-zion-dark-gray text-base leading-relaxed max-w-md mx-auto mb-8">
                    Your enquiry has been received successfully. A Zion Marketing enterprise communication consultant will connect with you within 24 hours.
                  </p>
                  <Link 
                    to="/" 
                    className="btn-orange-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-2">
                        Full Name <span className="text-zion-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F7F9FC] border border-[#D6E4FF] focus:border-zion-orange focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/15 text-zion-deep-blue placeholder-gray-400 text-sm outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-2">
                        Company / Developer Name <span className="text-zion-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Developers / Corp"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F7F9FC] border border-[#D6E4FF] focus:border-zion-orange focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/15 text-zion-deep-blue placeholder-gray-400 text-sm outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-2">
                        Business Email <span className="text-zion-orange">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F7F9FC] border border-[#D6E4FF] focus:border-zion-orange focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/15 text-zion-deep-blue placeholder-gray-400 text-sm outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-2">
                        Mobile Number <span className="text-zion-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98192 91927"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F7F9FC] border border-[#D6E4FF] focus:border-zion-orange focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/15 text-zion-deep-blue placeholder-gray-400 text-sm outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-2">
                      Select Primary Service <span className="text-zion-orange">*</span>
                    </label>
                    <select
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F7F9FC] border border-[#D6E4FF] focus:border-zion-orange focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/15 text-zion-deep-blue text-sm outline-none transition-all font-medium"
                    >
                      <option value="" disabled className="text-gray-400">Select a Solution...</option>
                      <option value="SMS">Bulk SMS (OTP / Transactional / Promotional)</option>
                      <option value="RCS">RCS Business Messaging</option>
                      <option value="WhatsApp">WhatsApp Business API (Official Green Tick / Free Rental)</option>
                      <option value="Meta">Meta Messaging (Facebook & Instagram DM Automation)</option>
                      <option value="IVR">Smart Cloud IVR Solutions</option>
                      <option value="OBD">OBD / Outbound Voice Broadcasts</option>
                      <option value="SMPP">Enterprise SMPP Connectivity (5,000+ TPS)</option>
                      <option value="API">Enterprise Communication APIs & CRM Integration</option>
                      <option value="Real Estate Branding">Real Estate Project Branding & Sales Office Launch</option>
                      <option value="Other">Other / Integrated Omnichannel Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zion-deep-blue uppercase tracking-wider mb-2">
                      Message / Project Details / Location <span className="text-zion-orange">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your upcoming project launch, location (e.g. Mumbai / Maharashtra), expected volume, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F7F9FC] border border-[#D6E4FF] focus:border-zion-orange focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/15 text-zion-deep-blue placeholder-gray-400 text-sm outline-none transition-all font-medium"
                    />
                  </div>

                  {/* Explicit Non-Preselected Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-[#D6E4FF] text-zion-orange focus:ring-zion-orange accent-zion-orange cursor-pointer"
                      />
                      <span className="text-xs text-zion-dark-gray group-hover:text-zion-deep-blue leading-relaxed font-medium">
                        I agree to be contacted by Zion Marketing regarding my enquiry and receive relevant business communication.
                      </span>
                    </label>

                    <p className="text-[11px] text-zion-slate mt-2 pl-7">
                      By submitting this form, you agree to our{' '}
                      <Link to="/terms-and-conditions" className="text-zion-orange font-semibold hover:underline">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy-policy" className="text-zion-orange font-semibold hover:underline">
                        Privacy Policy
                      </Link>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 ${
                      isFormValid
                        ? 'btn-orange-primary shadow-lg shadow-orange-500/25'
                        : 'bg-[#E2E8F0] text-gray-400 cursor-not-allowed border border-gray-200'
                    }`}
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 reveal-right">
            <div className="bg-white p-8 rounded-3xl border border-[#D6E4FF] shadow-card space-y-6">
              <h3 className="text-xl font-extrabold text-zion-deep-blue flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zion-orange" />
                <span>Direct Contact</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF]">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zion-orange shadow-sm flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zion-blue uppercase tracking-wider">Email Us</div>
                    <a href="mailto:hello@zionmarketing.in" className="text-zion-deep-blue font-semibold text-sm hover:text-zion-orange transition-colors">
                      hello@zionmarketing.in
                    </a>
                  </div>
                </div>

                <a 
                  href="tel:+919819291927"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF] hover:border-zion-orange/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zion-blue group-hover:text-zion-orange shadow-sm flex-shrink-0 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zion-blue uppercase tracking-wider">Enterprise Hotline</div>
                    <div className="text-zion-deep-blue group-hover:text-zion-orange font-semibold text-sm transition-colors">+91 98192 91927</div>
                  </div>
                </a>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C+Maharashtra+400064%2C+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF] hover:border-zion-orange/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zion-orange shadow-sm flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zion-blue uppercase tracking-wider">Address / Location</div>
                    <div className="text-zion-deep-blue group-hover:text-zion-orange font-semibold text-sm transition-colors">
                      Mumbai, Maharashtra 400064, India
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* SLA Badge Card */}
            <div className="bg-[#EEF4FF] p-7 rounded-3xl border border-[#D6E4FF]">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-zion-orange" />
                <h4 className="text-base font-bold text-zion-deep-blue">Enterprise & Launch Guarantee</h4>
              </div>
              <p className="text-xs text-zion-dark-gray leading-relaxed font-medium">
                Complete brand-to-site project execution, rapid turnaround, dedicated brand strategists, and 24/7 client management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
