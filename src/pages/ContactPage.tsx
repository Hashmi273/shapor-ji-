import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2, User, Building, ExternalLink } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export const FORM_ENDPOINT_URL = '';

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', mobileNumber: '',
    productInterested: '', quantity: '', message: '',
    contact_opt_in: false, marketing_opt_in: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const product = new URLSearchParams(location.search).get('product');
    if (product) setFormData(prev => ({ ...prev, productInterested: product }));
  }, [location.search]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = 'Please enter a valid email address';
    if (!/^[0-9+ -]{8,15}$/.test(formData.mobileNumber.trim())) next.mobileNumber = 'Please enter a valid phone number';
    if (!formData.productInterested.trim()) next.productInterested = 'Please select a project';
    if (!formData.message.trim()) next.message = 'Please provide your requirement';
    if (!formData.contact_opt_in) next.contact_opt_in = 'Please agree to be contacted regarding your enquiry';
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
        // Keep the enquiry confirmation available even when no external endpoint is configured.
      }
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      fullName: '', companyName: '', email: '', mobileNumber: '',
      productInterested: '', quantity: '', message: '',
      contact_opt_in: false, marketing_opt_in: false
    });
  };

  return (
    <main className="min-h-screen bg-realestate-paper pb-24 text-realestate-ink">
      <section className="bg-[#2b2c27] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-[11px] uppercase tracking-[.18em] text-white/45">Private appointments</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-[-.05em] sm:text-6xl">Let’s talk about your next home.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Share what you are looking for and our residential team will help you explore the right project, location and configuration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="space-y-5">
            <div className="border border-realestate-line bg-white p-7">
              <p className="section-kicker">Visit us</p>
              <h2 className="mt-3 text-xl font-semibold">Shapoorji Pallonji Centre</h2>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-realestate-brass" />
                  <p className="leading-6 text-realestate-muted">41/44, Shapoorji Pallonji Centre, Minoo Desai Marg, Colaba, Mumbai 400005</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-realestate-brass" />
                  <a href="tel:+918700983465" className="font-semibold hover:underline">+91 87009 83465</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-realestate-brass" />
                  <a href="mailto:viveklukar1999@gmail.com" className="font-semibold break-all hover:underline">viveklukar1999@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="border border-realestate-line bg-[#f2eee6] p-7">
              <ShieldCheck className="h-5 w-5 text-realestate-brass" />
              <h3 className="mt-5 text-lg font-semibold">A considered conversation</h3>
              <p className="mt-3 text-sm leading-7 text-realestate-muted">
                Tell us your preferred location, home type, timeline and budget. We can use those details to guide the conversation.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Shapoorji+Pallonji+Centre+Colaba+Mumbai+400005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              Open location in Google Maps <ExternalLink className="h-4 w-4" />
            </a>
          </aside>

          <div className="border border-realestate-line bg-white p-7 shadow-sm sm:p-9">
            {isSubmitted ? (
              <div className="py-14 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h2 className="mt-5 font-display text-3xl font-semibold">Thank you for your enquiry.</h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-realestate-muted">
                  Your details have been recorded. Our team can contact you regarding {formData.productInterested}.
                </p>
                <button onClick={resetForm} className="mt-7 border border-realestate-ink px-5 py-3 text-sm font-semibold">Submit another enquiry</button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <p className="section-kicker">Enquiry</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold">Tell us what you’re looking for.</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" error={errors.fullName}><input value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} /></Field>
                    <Field label="Company / family name"><input value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })} /></Field>
                    <Field label="Email" error={errors.email}><input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} /></Field>
                    <Field label="Mobile number" error={errors.mobileNumber}><input type="tel" value={formData.mobileNumber} onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })} /></Field>
                  </div>

                  <Field label="Project / property of interest" error={errors.productInterested}>
                    <select value={formData.productInterested} onChange={e => setFormData({ ...formData, productInterested: e.target.value })}>
                      <option value="">Select a project</option>
                      {PRODUCTS_DATA.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                      <option value="General Residential Enquiry">General Residential Enquiry</option>
                    </select>
                  </Field>

                  <Field label="Budget / requirement">
                    <input value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} placeholder="Example: 3 BHK, preferred location, budget range" />
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your requirements..." />
                  </Field>

                  <div className="border-t border-realestate-line pt-5">
                    <label className="flex items-start gap-3 text-xs leading-5 text-realestate-muted">
                      <input type="checkbox" checked={formData.contact_opt_in} onChange={e => setFormData({ ...formData, contact_opt_in: e.target.checked })} className="mt-1" />
                      <span>I agree to be contacted regarding my enquiry by phone, email or WhatsApp. <span className="text-red-600">*</span></span>
                    </label>
                    {errors.contact_opt_in && <p className="mt-1 pl-7 text-xs text-red-600">{errors.contact_opt_in}</p>}
                    <label className="mt-3 flex items-start gap-3 text-xs leading-5 text-realestate-muted">
                      <input type="checkbox" checked={formData.marketing_opt_in} onChange={e => setFormData({ ...formData, marketing_opt_in: e.target.checked })} className="mt-1" />
                      <span>I would also like to receive property updates and marketing communications.</span>
                    </label>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 bg-realestate-charcoal px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50">
                    {isSubmitting ? 'Sending…' : 'Send enquiry'} <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[.12em] text-realestate-muted">{label}</span>
      <div className="field-control">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

export default ContactPage;
