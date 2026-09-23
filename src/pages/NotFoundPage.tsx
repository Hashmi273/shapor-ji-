import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, ArrowLeft, Phone } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#f8f6f0] text-[#111827] px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-[#e2ded4] shadow-estate text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0b1325] text-[#c5a059] flex items-center justify-center font-display font-bold text-2xl mx-auto shadow-md border border-[#c5a059]/40">
          SP
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#0b1325] block">
            404
          </span>
          <h1 className="text-xl font-display font-bold text-[#0b1325]">
            Residence Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#586071] leading-relaxed">
            The page or development you are looking for might have been relocated or updated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 px-4 py-2.5 rounded-lg bg-[#0b1325] text-white hover:bg-[#c5a059] hover:text-[#0b1325] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/products"
            className="flex-1 px-4 py-2.5 rounded-lg border border-[#e2ded4] text-[#0b1325] hover:bg-[#f7f5f0] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <Building2 className="w-4 h-4 text-[#c5a059]" />
            <span>All Projects</span>
          </Link>
        </div>

        <div className="border-t border-[#e2ded4] pt-4 text-xs text-[#586071]">
          <span>Need assistance? Call our concierge at </span>
          <a href="tel:+918700983465" className="font-semibold text-[#0b1325] hover:underline">
            +91 87009 83465
          </a>
        </div>
      </div>
    </main>
  );
}
