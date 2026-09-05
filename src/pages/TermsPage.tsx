import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Zion Marketing — Enterprise Communication';
  }, []);

  return (
    <div className="bg-white min-h-screen text-zion-dark font-sans pt-28 pb-20">
      <div className="bg-[#EEF4FF] border-b border-[#D6E4FF] py-14 text-center reveal">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-white mb-4 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Service Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-3">Terms & Conditions</h1>
          <p className="text-zion-slate text-sm font-medium">Effective Date: September 2026</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-16 reveal">
        <div className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-[#E2E8F0] shadow-card">
          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">1. Agreement to Terms</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              These Terms and Conditions constitute a legally binding agreement between you and Zion Marketing regarding your access to and use of our communication gateway, APIs, web dashboards, SMPP binds and associated enterprise services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">2. Description of Services</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              Zion Marketing provides enterprise cloud communication infrastructure, including Bulk SMS (Promotional, Transactional, OTP), RCS Business Messaging, WhatsApp Business API, Cloud IVR systems, Outbound Dialing (OBD) voice broadcasts, SMPP connectivity, and Site Branding digital design services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">3. Acceptable Use Policy & Messaging Compliance</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm mb-3">
              Users must strictly adhere to Indian telecommunications regulations, TRAI DLT guidelines, and carrier acceptable use policies. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zion-dark-gray text-sm pl-2">
              <li>Messages must only be dispatched to recipients who have provided explicit affirmative consent or ongoing transaction relationship.</li>
              <li>Promotional traffic must strictly adhere to permissible time windows specified by telecom regulations.</li>
              <li>Unsolicited spam, fraudulent phishing, deceptive content, harassment, or illegal material is strictly prohibited and results in immediate account termination.</li>
              <li>All SMS headers and content templates must be registered and approved on regulatory DLT portals.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">4. Platform Availability & SLA</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              Zion Marketing endeavors to maintain a 99.9% platform availability SLA. Scheduled maintenance windows will be communicated in advance. We are not liable for upstream carrier-level downtime, mobile handset disconnects, or disruptions beyond our direct infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">5. Billing, Credits & Payment Terms</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              Services are billed according to agreed volume tiers, prepaid message credit balances, or enterprise monthly postpaid billing schedules as stipulated in your specific service agreement. Unused promotional credits are subject to standard expiration terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">6. Intellectual Property & Brand Rights</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              All proprietary software, APIs, routing algorithms, documentation, and the Zion Marketing brand identity remain the exclusive property of Zion Marketing. You retain full ownership of the campaign content and assets you upload to our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">7. Governing Law & Jurisdiction</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">8. Contact Us</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              For questions regarding these Terms & Conditions, please contact us at <a href="mailto:hello@zionmarketing.in" className="text-zion-orange font-bold hover:underline">hello@zionmarketing.in</a>.
            </p>
          </section>

          <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
            <Link to="/" className="btn-secondary-white inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold">
              <ArrowLeft className="w-4 h-4 text-zion-blue" />
              <span>Back to Home</span>
            </Link>
            <Link to="/privacy-policy" className="text-xs font-bold text-zion-orange hover:underline">
              View Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
