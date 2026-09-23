import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  User,
  Building,
  Calendar,
  ExternalLink,
  Sparkles,
  Clock
} from 'lucide-react';
import { REAL_ESTATE_PROJECTS } from '../data/realEstateData';

export const FORM_ENDPOINT_URL = '';

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ label, error, required, children }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-wider text-[#002558] mb-1.5">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <div className="[&>input]:w-full [&>input]:rounded-lg [&>input]:border [&>input]:border-[#d8e3f0] [&>input]:bg-[#f8fafc] [&>input]:px-3.5 [&>input]:py-2.5 [&>input]:text-xs [&>input]:outline-none focus-within:[&>input]:border-[#0077c8] focus-within:[&>input]:bg-white [&>select]:w-full [&>select]:rounded-lg [&>select]:border [&>select]:border-[#d8e3f0] [&>select]:bg-[#f8fafc] [&>select]:px-3.5 [&>select]:py-2.5 [&>select]:text-xs [&>select]:outline-none focus-within:[&>select]:border-[#0077c8] focus-within:[&>select]:bg-white [&>textarea]:w-full [&>textarea]:rounded-lg [&>textarea]:border [&>textarea]:border-[#d8e3f0] [&>textarea]:bg-[#f8fafc] [&>textarea]:px-3.5 [&>textarea]:py-2.5 [&>textarea]:text-xs [&>textarea]:outline-none focus-within:[&>textarea]:border-[#0077c8] focus-within:[&>textarea]:bg-white">
      {children}
    </div>
    {error && <p className="mt-1 text-[11px] text-rose-500">{error}</p>}
  </div>
);

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    projectInterested: '',
    configuration: '3 BHK',
    preferredCity: 'Mumbai',
    preferredDate: '',
    message: '',
    contact_opt_in: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const product = new URLSearchParams(location.search).get('project') || new URLSearchParams(location.search).get('product');
    if (product) setFormData((prev) => ({ ...prev, projectInterested: product }));
  }, [location.search]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = 'Please enter a valid email address';
    if (!/^[0-9+ -]{8,15}$/.test(formData.mobileNumber.trim())) next.mobileNumber = 'Please enter a valid phone number';
    if (!formData.projectInterested.trim()) next.projectInterested = 'Please select a project';
    if (!formData.contact_opt_in) next.contact_opt_in = 'Please agree to be contacted';
    setErrors(next);
    return Object.keys(next).length === 0;
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
        // Fallback for static build
      }
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      projectInterested: '',
      configuration: '3 BHK',
      preferredCity: 'Mumbai',
      preferredDate: '',
      message: '',
      contact_opt_in: true
    });
  };

  return (
    <main className="min-h-screen bg-white pb-24 text-[#002558]">
      {/* Header */}
      <section className="bg-[#001d45] text-white py-20 border-b border-[#003882]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38a7f4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0077c8]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sales &amp; Experience Centres</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Connect with Our Residential Portfolio Advisors.
            </h1>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/80">
              Whether you are looking for an ultra-luxury sea-facing residence in South Mumbai or an integrated lifestyle township in Bengaluru or Pune, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Left Column: Office & Gallery Locations */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#d8e3f0] bg-white p-7 shadow-sm">
              <span className="section-kicker">Corporate Headquarters</span>
              <h2 className="mt-2 font-display text-xl font-bold text-[#002558]">Shapoorji Pallonji Centre</h2>
              <div className="mt-5 space-y-4 text-xs text-[#4a5e7b]">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0077c8]" />
                  <p className="leading-relaxed">
                    41/44 Minoo Desai Marg, Colaba, Mumbai 400005, Maharashtra, India
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0077c8]" />
                  <a href="tel:+918700983465" className="font-bold text-[#003882] hover:text-[#0077c8]">+91 87009 83465</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0077c8]" />
                  <a href="mailto:realestate@shapoorji.com" className="hover:underline">realestate@shapoorji.com</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0077c8]" />
                  <span>Monday to Sunday: 10:00 AM – 7:00 PM</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#d8e3f0] pt-4">
                <a
                  href="https://maps.google.com/?q=Shapoorji+Pallonji+Centre+Colaba+Mumbai+400005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#003882] hover:text-[#0077c8]"
                >
                  <span>Open Headquarters in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Regional Galleries */}
            <div className="rounded-2xl border border-[#d8e3f0] bg-white p-7 shadow-sm space-y-4">
              <span className="section-kicker">Regional Experience Galleries</span>
              
              <div className="border-b border-[#d8e3f0] pb-3">
                <p className="font-bold text-xs text-[#002558]">Bengaluru Experience Gallery</p>
                <p className="text-[11px] text-[#4a5e7b] mt-0.5">Parkwest 2.0 Site Office, 1/1 Hosakere Road, Binnypet, Bengaluru 560026</p>
              </div>

              <div className="border-b border-[#d8e3f0] pb-3">
                <p className="font-bold text-xs text-[#002558]">Pune Experience Gallery</p>
                <p className="text-[11px] text-[#4a5e7b] mt-0.5">Vanaha Valley Gallery, Near Oxford Golf Resort, Bavdhan, Pune 411021</p>
              </div>

              <div>
                <p className="font-bold text-xs text-[#002558]">Thane Experience Gallery</p>
                <p className="text-[11px] text-[#4a5e7b] mt-0.5">Northern Lights Sales Lounge, Pokhran Road No. 2, Thane West 400610</p>
              </div>
            </div>
          </aside>

          {/* Right Column: Interactive Form (White Base) */}
          <div className="rounded-2xl border border-[#d8e3f0] bg-white p-8 sm:p-10 shadow-lg">
            {isSubmitted ? (
              <div className="py-14 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-[#0077c8]" />
                <h2 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-[#002558]">
                  Enquiry Registered Successfully
                </h2>
                <p className="mx-auto mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-[#4a5e7b]">
                  Thank you, <strong className="text-[#002558]">{formData.fullName}</strong>. A dedicated relationship executive for <strong className="text-[#0077c8]">{formData.projectInterested}</strong> will contact you shortly with project brochures and pricing sheets.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-7 bg-[#003882] hover:bg-[#0077c8] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="section-kicker">Direct Property Consultation</span>
                  <h2 className="font-display text-2xl font-bold text-[#002558] mt-1">
                    Request a Personalized Consultation
                  </h2>
                  <p className="text-xs text-[#4a5e7b] mt-1">
                    Fill in your details below to receive official project brochures, floor layouts, and cost estimates.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" required error={errors.fullName}>
                      <input
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikram Singhania"
                      />
                    </Field>

                    <Field label="Mobile Number" required error={errors.mobileNumber}>
                      <input
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email Address" required error={errors.email}>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                      />
                    </Field>

                    <Field label="Interested Development" required error={errors.projectInterested}>
                      <select
                        value={formData.projectInterested}
                        onChange={(e) => setFormData({ ...formData, projectInterested: e.target.value })}
                      >
                        <option value="">-- Choose Development --</option>
                        {REAL_ESTATE_PROJECTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.city})
                          </option>
                        ))}
                        <option value="General Residential Consultation">General Residential Consultation</option>
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Preferred Typology">
                      <select
                        value={formData.configuration}
                        onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                      >
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                        <option value="4 BHK Luxury">4 BHK Luxury</option>
                        <option value="Penthouse">Penthouse</option>
                      </select>
                    </Field>

                    <Field label="Preferred Site Visit Date">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </Field>
                  </div>

                  <Field label="Message / Specific Requirements">
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your preferred floor, budget range, or any special requirements..."
                    />
                  </Field>

                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-[#4a5e7b] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contact_opt_in}
                        onChange={(e) => setFormData({ ...formData, contact_opt_in: e.target.checked })}
                        className="mt-0.5 rounded accent-[#0077c8]"
                      />
                      <span>
                        I authorize Shapoorji Pallonji Real Estate to contact me via Phone, SMS, WhatsApp &amp; Email with project information.
                      </span>
                    </label>
                    {errors.contact_opt_in && <p className="text-[11px] text-rose-500 mt-1">{errors.contact_opt_in}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#003882] hover:bg-[#0077c8] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 mt-4 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
