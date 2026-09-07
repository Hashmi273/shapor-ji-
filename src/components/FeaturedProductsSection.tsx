import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flower2, 
  ArrowRight, 
  Send, 
  Eye, 
  Sparkles, 
  Flame, 
  Clock, 
  Package 
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, ProductItem } from '../data/productsData';

interface FeaturedProductsSectionProps {
  onOpenEnquiryModal?: (productName?: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ 
  onOpenEnquiryModal 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? PRODUCTS_DATA.slice(0, 6)
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white text-agarbatti-earth relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/30 text-agarbatti-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-agarbatti-gold" />
              <span>Aromatic Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-agarbatti-900 tracking-tight">
              Our Fragrance <span className="text-gradient-maroon">Collection</span>
            </h2>
            <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
              Explore our handcrafted collection of pure sandalwood, divine rose, night jasmine, sacred chandan, and luxury festive gift boxes.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-agarbatti-900 hover:text-agarbatti-700 transition-colors flex-shrink-0"
          >
            <span>View All ({PRODUCTS_DATA.length}) Fragrances</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-agarbatti-900 text-white shadow-md font-semibold'
                  : 'bg-agarbatti-cream-card text-agarbatti-earth hover:bg-agarbatti-gold-100/60 border border-agarbatti-cream-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FFFDF9] rounded-2xl border border-agarbatti-cream-border shadow-sm hover:shadow-xl hover:border-agarbatti-gold/50 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Product Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-agarbatti-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                
                {/* Category & Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-agarbatti-950/90 text-agarbatti-gold-100 text-[11px] font-semibold backdrop-blur-sm shadow-sm">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-agarbatti-gold text-agarbatti-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Fragrance Family Pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 text-agarbatti-900 text-xs font-semibold backdrop-blur-md">
                  <Flower2 className="w-3.5 h-3.5 text-agarbatti-gold" />
                  <span>{product.fragranceFamily}</span>
                </div>
              </div>

              {/* Product Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-agarbatti-900 group-hover:text-agarbatti-700 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-agarbatti-earth-muted leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Fragrance Notes & Pack Size */}
                <div className="space-y-2 pt-2 border-t border-agarbatti-cream-border text-xs text-agarbatti-earth">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-agarbatti-gold flex-shrink-0" />
                    <span className="line-clamp-1"><strong className="text-agarbatti-900">Notes:</strong> {product.fragranceNotes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-agarbatti-earth-muted">
                    <Package className="w-3.5 h-3.5 text-agarbatti-gold flex-shrink-0" />
                    <span className="line-clamp-1"><strong className="text-agarbatti-earth">Pack Size:</strong> {product.packSize}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-agarbatti-cream-border flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal(product.name) : window.location.href = `/contact?product=${encodeURIComponent(product.name)}`}
                    className="flex-1 btn-gold-primary py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>

                  <Link
                    to="/products"
                    className="px-3.5 py-2.5 rounded-xl border border-agarbatti-cream-borderDark hover:bg-agarbatti-cream-card text-agarbatti-900 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-agarbatti-gold" />
                    <span>View</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catalogue CTA */}
        <div className="mt-14 text-center space-y-3">
          <Link
            to="/products"
            className="btn-maroon-primary px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-lg"
          >
            <span>Explore Full Agarbatti Collection</span>
            <ArrowRight className="w-4 h-4 text-agarbatti-gold" />
          </Link>
          <p className="text-xs text-agarbatti-earth-muted max-w-md mx-auto">
            Available for retail purchase, festive gift orders, and bulk distribution enquiries.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProductsSection;
