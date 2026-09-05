import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Zion Marketing — Enterprise Communication';
  }, []);

  return (
    <div className="bg-white min-h-screen text-zion-dark font-sans pt-28 pb-20">
      <div className="bg-[#EEF4FF] border-b border-[#D6E4FF] py-14 text-center reveal">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-white mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-zion-orange" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Legal Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-3">Privacy Policy</h1>
          <p className="text-zion-slate text-sm font-medium">Effective Date: September 2026</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-16 reveal">
        <div className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-[#E2E8F0] shadow-card">
          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">1. Introduction</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              Zion Marketing ("we", "us", "our") operates enterprise communication solutions including Bulk SMS, RCS Business Messaging, WhatsApp Business API, Cloud IVR, OBD Voice Calls, SMPP Connectivity and Site Branding services. This Privacy Policy describes how we collect, process, store and protect your business and personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">2. Information We Collect</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm mb-3">
              We collect information necessary to provide reliable communication services, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zion-dark-gray text-sm pl-2">
              <li><strong className="text-zion-deep-blue">Account & Contact Data:</strong> Name, business email, contact phone number, company name, and billing details.</li>
              <li><strong className="text-zion-deep-blue">Technical & Telemetry Data:</strong> IP addresses, browser types, API access logs, timestamped delivery receipts (DLR), and routing diagnostics.</li>
              <li><strong className="text-zion-deep-blue">Messaging Metadata:</strong> Sender IDs, recipient MSISDNs, message length, throughput metrics (we do not inspect or store payload content beyond necessary delivery routing).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">3. How We Use Information</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              Your information is utilized solely to provision messaging sockets, execute routing through telecommunications carriers, generate billing invoices, deliver technical SLA support, and ensure compliance with TRAI and DLT telecommunications mandates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">4. Communication & Consent</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              We uphold strict opt-in compliance. We only send marketing updates with your explicit affirmative consent. Service-related alerts, OTPs, and technical notices are dispatched as essential parts of your active service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">5. Data Security & Encryption</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              We apply industry-standard security protocols, including TLS 1.3 encryption in transit, AES-256 encryption for stored metadata, restricted role-based access control (RBAC), and continuous network vulnerability monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">6. Data Sharing & Third Parties</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              We do not sell, rent, or trade your data. Telemetry and routing data are transmitted only to licensed telecommunication carriers (SMSCs, telco operators) necessary for message termination, or as required by regulatory authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">7. Your Rights & Data Retention</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              You retain the right to review, update, or request the deletion of your account information. Message logs and delivery records are retained for the statutory period required by telecom regulations before automated purging.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-zion-blue">8. Contact Information</h2>
            <p className="text-zion-dark-gray leading-relaxed text-sm">
              For any privacy inquiries or compliance questions, please contact our Data Protection Officer at <a href="mailto:hello@zionmarketing.in" className="text-zion-orange font-bold hover:underline">hello@zionmarketing.in</a>.
            </p>
          </section>

          <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
            <Link to="/" className="btn-secondary-white inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold">
              <ArrowLeft className="w-4 h-4 text-zion-blue" />
              <span>Back to Home</span>
            </Link>
            <Link to="/terms-and-conditions" className="text-xs font-bold text-zion-orange hover:underline">
              View Terms & Conditions &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
