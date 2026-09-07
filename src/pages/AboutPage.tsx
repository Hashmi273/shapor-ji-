import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flower2, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Sun, 
  Flame, 
  Package, 
  ArrowRight 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: 'Fragrance Authenticity',
      desc: 'Formulating agarbatti aromas with carefully selected floral extracts, natural gums, and sacred woods inspired by Indian traditions.'
    },
    {
      title: 'Aromatic Consistency',
      desc: 'Maintaining smooth, reliable, and uniform burning characteristics across every pack of incense sticks.'
    },
    {
      title: 'Quality Packaging',
      desc: 'Using protective inner pouches to preserve essential fragrance notes against humidity and loss of aroma.'
    },
    {
      title: 'Customer Delight',
      desc: 'Providing helpful guidance, prompt inquiry responses, and transparent commercial order fulfillment.'
    },
    {
      title: 'Statutory Compliance',
      desc: 'Operating with full regulatory compliance under registered MSME legal entity Lukar Enterprises (New Delhi).'
    },
    {
      title: 'Continuous Refinement',
      desc: 'Constantly evaluating customer feedback to refine aroma intensity, burn durations, and festive gift packaging.'
    }
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-24 bg-[#FCF9F2] bg-cream-pattern min-h-screen text-agarbatti-earth">
      
      {/* Page Hero Header */}
      <section className="bg-incense-hero text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
            <Flower2 className="w-4 h-4 text-agarbatti-gold" />
            <span>Brand Story &amp; Values</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
            About <span className="text-gradient-gold italic font-normal">SHAPOORJI PALLONJ</span>
          </h1>
          <p className="text-sm sm:text-base text-agarbatti-gold-100/90 max-w-2xl mx-auto leading-relaxed">
            Crafting premium agarbatti and incense fragrances created to add warmth, positivity and beautiful aroma to everyday moments. Operated by <strong className="text-white">LUKAR ENTERPRISES</strong>.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/30 text-agarbatti-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-agarbatti-gold" />
              <span>Our Passion for Aroma</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-agarbatti-900 leading-tight">
              Aroma That Transforms Every Space Into a Sanctuary
            </h2>

            <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
              <strong className="text-agarbatti-900">SHAPOORJI PALLONJ</strong> is a dedicated consumer fragrance brand focusing on premium agarbatti, incense sticks, and sacred dhoop products.
            </p>

            <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
              We believe that lighting an incense stick is a sacred daily ritual—whether it is the quiet devotion of morning puja, focused meditation, evening family prayer, or simply making your living room feel welcoming. Our fragrances are designed to elevate those moments with gentle, long-lasting aromas.
            </p>

            {/* Legal Entity Notice */}
            <div className="p-4 rounded-xl bg-white border border-agarbatti-cream-border text-xs text-agarbatti-earth space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 font-bold font-serif text-agarbatti-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-agarbatti-gold" />
                <span>Operating Legal Identity</span>
              </div>
              <p className="text-agarbatti-earth-muted leading-relaxed">
                Legal Entity: <strong>LUKAR ENTERPRISES</strong><br />
                Address: H NO 120, Second Floor, Madangir Village, Dr. Ambedkar Nagar, New Delhi - 110062<br />
                MSME Registered Enterprise (Ministry of Micro, Small and Medium Enterprises, Govt. of India).
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-agarbatti-cream-border bg-white">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80"
                alt="Sandalwood incense burning with aromatic floral arrangement"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agarbatti-950/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase text-agarbatti-gold font-bold tracking-wider">
                  Our Guiding Ethos
                </span>
                <span className="text-xl font-serif font-bold text-white mt-1">
                  Fragrance That Creates a Feeling.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-[#FAF5EB] border-y border-agarbatti-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="p-8 rounded-2xl bg-white border border-agarbatti-cream-border shadow-sm space-y-4 hover:border-agarbatti-gold/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-agarbatti-gold-100 text-agarbatti-800 flex items-center justify-center font-bold">
                <Flower2 className="w-6 h-6 text-agarbatti-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-agarbatti-900">
                Our Mission
              </h3>
              <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
                To create and distribute high-quality agarbatti and incense products that enrich everyday spiritual practices, bring natural tranquility into homes, and provide reliable value to our customers.
              </p>
              <ul className="space-y-2 text-xs text-agarbatti-earth pt-2 border-t border-agarbatti-cream-border">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agarbatti-gold" />
                  <span>Carefully selected fragrance profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agarbatti-gold" />
                  <span>Aroma-sealed packaging for lasting freshness</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-2xl bg-white border border-agarbatti-cream-border shadow-sm space-y-4 hover:border-agarbatti-gold/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-agarbatti-800/10 text-agarbatti-800 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 text-agarbatti-800" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-agarbatti-900">
                Our Vision
              </h3>
              <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
                To be a beloved Indian fragrance brand trusted for aroma consistency, elegant presentation, and heartfelt customer connection across homes, temples, and gift recipients.
              </p>
              <ul className="space-y-2 text-xs text-agarbatti-earth pt-2 border-t border-agarbatti-cream-border">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agarbatti-gold" />
                  <span>Expanding diverse fragrance varieties</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agarbatti-gold" />
                  <span>Long-term trust with distributors &amp; consumers</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-gold-100 border border-agarbatti-gold/30 text-agarbatti-800 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-agarbatti-gold" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-agarbatti-900 tracking-tight">
            Our Core <span className="text-gradient-maroon">Values</span>
          </h2>
          <p className="text-agarbatti-earth-muted text-sm sm:text-base leading-relaxed">
            The foundational commitments that guide every product batch and client interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-agarbatti-cream-border bg-white hover:border-agarbatti-gold/60 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-serif font-bold text-agarbatti-900">
                  {val.title}
                </h3>
                <span className="w-2 h-2 rounded-full bg-agarbatti-gold"></span>
              </div>
              <p className="text-xs sm:text-sm text-agarbatti-earth-muted leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-agarbatti-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agarbatti-900 border border-agarbatti-gold/40 text-agarbatti-gold text-xs font-semibold uppercase tracking-wider">
              <Flower2 className="w-4 h-4 text-agarbatti-gold" />
              <span>Explore Our Fragrances</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Experience the Purity of SHAPOORJI PALLONJ
            </h2>

            <p className="text-sm sm:text-base text-agarbatti-gold-100/80 leading-relaxed">
              Browse our complete collection of traditional and floral agarbatti sticks or reach out for customized gift packaging.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="btn-gold-primary px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide inline-flex items-center gap-2"
              >
                <span>View Products Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide border border-agarbatti-gold/40 text-agarbatti-gold hover:bg-agarbatti-gold/10"
              >
                <span>Contact Commercial Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
