import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Flower2, 
  Search, 
  Send, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Package, 
  Flame, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, ProductItem } from '../data/productsData';

interface ProductsPageProps {
  onOpenEnquiryModal?: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiryModal }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);

  // Sync category if passed via query param (e.g. from Fragrance Experience)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    if (catParam) {
      // Find matching category or family
      const found = PRODUCT_CATEGORIES.find(c => c.toLowerCase().includes(catParam.toLowerCase()));
      if (found) setSelectedCategory(found);
    }
  }, [location.search]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.fragranceNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-[#FCF9F2] bg-cream-pattern min-h-screen text-agarbatti-earth">
      
      {/* Page Header Hero */}
      <section className="bg-incense-hero text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <Flower2 className="w-4 h-4 text-agarbatti-gold" />
            <span>Incense Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
            Our Fragrance <span className="text-gradient-gold italic font-normal">Collection</span>
          </h1>
          <p className="text-sm sm:text-base text-agarbatti-gold-100/90 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of traditional sandalwood, blooming florals, sacred temple chandan, and artisanal masala incense sticks. Operated by <strong className="text-white">LUKAR ENTERPRISES</strong>.
          </p>
        </div>
      </section>

      {/* Catalogue Filter & Search Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-[#FFFDF9] p-4 sm:p-5 rounded-2xl shadow-lg border border-agarbatti-cream-border flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by fragrance, note or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-agarbatti-cream-borderDark bg-white text-sm focus:outline-none focus:border-agarbatti-gold focus:ring-1 focus:ring-agarbatti-gold"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-agarbatti-900 text-white shadow-sm'
                    : 'bg-agarbatti-cream-card text-agarbatti-earth hover:bg-agarbatti-gold-100/70 border border-agarbatti-cream-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="hidden lg:block text-xs font-medium text-agarbatti-earth-muted whitespace-nowrap">
            Showing <strong className="text-agarbatti-900">{filteredProducts.length}</strong> items
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-agarbatti-cream-border p-8 space-y-4">
            <Flower2 className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold font-serif text-agarbatti-900">No matching fragrances found</h3>
            <p className="text-xs sm:text-sm text-agarbatti-earth-muted max-w-sm mx-auto">
              We could not find any incense products matching "{searchQuery}". Try searching for Sandalwood, Rose, Jasmine, or reset your filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Products'); }}
              className="btn-gold-primary px-5 py-2 rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FFFDF9] rounded-2xl border border-agarbatti-cream-border shadow-sm hover:shadow-xl hover:border-agarbatti-gold/60 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-60 w-full overflow-hidden bg-agarbatti-cream">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-agarbatti-950/90 text-agarbatti-gold-100 text-[11px] font-semibold backdrop-blur-sm">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-agarbatti-gold text-agarbatti-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Fragrance Family Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 text-agarbatti-900 text-xs font-semibold backdrop-blur-md">
                    <Flower2 className="w-3.5 h-3.5 text-agarbatti-gold" />
                    <span>{product.fragranceFamily}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-serif font-bold text-agarbatti-900 group-hover:text-agarbatti-700 transition-colors leading-snug">
                      {product.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-agarbatti-earth-muted leading-relaxed line-clamp-2">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Fragrance Notes & Pack Size */}
                  <div className="space-y-2 pt-2 border-t border-agarbatti-cream-border text-xs text-agarbatti-earth">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-agarbatti-gold flex-shrink-0" />
                      <span className="line-clamp-1"><strong className="text-agarbatti-900">Aroma:</strong> {product.fragranceNotes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-agarbatti-earth-muted">
                      <Package className="w-3.5 h-3.5 text-agarbatti-gold flex-shrink-0" />
                      <span className="line-clamp-1"><strong className="text-agarbatti-earth">Pack Size:</strong> {product.packSize}</span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-1.5 pt-2 border-t border-agarbatti-cream-border">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-agarbatti-earth-muted block">
                      Fragrance Highlights
                    </span>
                    <ul className="space-y-1 text-xs text-agarbatti-earth">
                      {product.keyFeatures.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-agarbatti-gold flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-agarbatti-cream-border flex items-center gap-2.5">
                    <button
                      onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal(product.name) : window.location.href = `/contact?product=${encodeURIComponent(product.name)}`}
                      className="flex-1 btn-gold-primary py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enquire Now</span>
                    </button>

                    <button
                      onClick={() => setActiveProductModal(product)}
                      className="px-3.5 py-2.5 rounded-xl border border-agarbatti-cream-borderDark hover:bg-agarbatti-cream-card text-agarbatti-900 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                      title="View Fragrance Details"
                    >
                      <Eye className="w-3.5 h-3.5 text-agarbatti-gold" />
                      <span>View Product</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-agarbatti-950/75 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-[#FFFDF9] rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-agarbatti-cream-border max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-agarbatti-900 to-agarbatti-950 text-white p-6 relative flex justify-between items-start border-b border-agarbatti-800">
              <div className="space-y-1">
                <span className="px-2.5 py-1 rounded bg-agarbatti-gold/20 text-agarbatti-gold text-xs font-semibold">
                  {activeProductModal.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                  {activeProductModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveProductModal(null)}
                className="p-1.5 rounded-full text-agarbatti-gold-100 hover:text-white hover:bg-agarbatti-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative h-56 w-full rounded-xl overflow-hidden bg-agarbatti-cream">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold font-serif text-agarbatti-900 uppercase tracking-wider mb-2">
                  Fragrance Story &amp; Profile
                </h4>
                <p className="text-xs sm:text-sm text-agarbatti-earth leading-relaxed">
                  {activeProductModal.detailedDesc}
                </p>
              </div>

              {/* Fragrance Notes & Burn Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-agarbatti-cream-card border border-agarbatti-cream-border text-xs">
                <div>
                  <span className="text-agarbatti-earth-muted block font-medium">Fragrance Notes:</span>
                  <span className="font-semibold text-agarbatti-900">{activeProductModal.fragranceNotes}</span>
                </div>
                <div>
                  <span className="text-agarbatti-earth-muted block font-medium">Pack Format:</span>
                  <span className="font-semibold text-agarbatti-900">{activeProductModal.packSize}</span>
                </div>
                {activeProductModal.burnTime && (
                  <div className="sm:col-span-2 pt-2 border-t border-agarbatti-cream-border">
                    <span className="text-agarbatti-earth-muted font-medium">Burn Time: </span>
                    <span className="font-semibold text-agarbatti-900">{activeProductModal.burnTime}</span>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold font-serif text-agarbatti-900 uppercase tracking-wider mb-2">
                  Key Product Attributes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProductModal.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white border border-agarbatti-cream-border text-xs text-agarbatti-earth flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-agarbatti-gold flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div>
                <h4 className="text-sm font-bold font-serif text-agarbatti-900 uppercase tracking-wider mb-2">
                  Recommended For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProductModal.idealFor.map((use, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-agarbatti-gold-100 text-agarbatti-800 text-xs font-medium border border-agarbatti-gold/30">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Legal Notice */}
              <div className="p-3.5 rounded-lg bg-agarbatti-cream-card border border-agarbatti-cream-border text-[11px] text-agarbatti-earth-muted">
                <strong className="text-agarbatti-900">Note:</strong> Actual packaging design, stick counts, and fragrance intensity may be customized for specific retail batches or bulk supply by <strong className="text-agarbatti-900">LUKAR ENTERPRISES</strong>.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-agarbatti-cream-card border-t border-agarbatti-cream-border flex justify-end gap-3">
              <button
                onClick={() => setActiveProductModal(null)}
                className="px-4 py-2 rounded-xl border border-agarbatti-cream-borderDark text-xs font-semibold text-agarbatti-earth hover:bg-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const prodName = activeProductModal.name;
                  setActiveProductModal(null);
                  if (onOpenEnquiryModal) onOpenEnquiryModal(prodName);
                  else window.location.href = `/contact?product=${encodeURIComponent(prodName)}`;
                }}
                className="btn-gold-primary px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enquire for this Fragrance</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default ProductsPage;
