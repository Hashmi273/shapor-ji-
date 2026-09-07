import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Home, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#FCF9F2] bg-cream-pattern text-agarbatti-earth px-4">
      <div className="max-w-md w-full bg-[#FFFDF9] p-8 sm:p-10 rounded-2xl border border-agarbatti-cream-border shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-agarbatti-900 to-agarbatti-950 text-agarbatti-gold flex items-center justify-center font-serif font-bold text-2xl mx-auto shadow-md border border-agarbatti-gold/60">
          SP
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-serif font-bold text-agarbatti-900 block">
            404
          </span>
          <h1 className="text-xl font-serif font-bold text-agarbatti-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-agarbatti-earth-muted leading-relaxed">
            The page you are looking for may have been moved or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 btn-gold-primary py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/products"
            className="flex-1 px-4 py-2.5 rounded-xl border border-agarbatti-cream-borderDark text-agarbatti-900 hover:bg-agarbatti-cream-card text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Flower2 className="w-4 h-4 text-agarbatti-gold" />
            <span>View Fragrances</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
