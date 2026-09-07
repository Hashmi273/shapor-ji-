import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutBrandSection from '../components/AboutBrandSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import FragranceExperienceSection from '../components/FragranceExperienceSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProductExperienceSection from '../components/ProductExperienceSection';
import UsesSection from '../components/UsesSection';
import QualitySection from '../components/QualitySection';
import CTASection from '../components/CTASection';

interface HomePageProps {
  onOpenEnquiryModal?: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <main className="min-h-screen">
      <HeroSection onOpenEnquiryModal={() => onOpenEnquiryModal && onOpenEnquiryModal()} />
      <AboutBrandSection />
      <FeaturedProductsSection onOpenEnquiryModal={onOpenEnquiryModal} />
      <FragranceExperienceSection />
      <WhyChooseUsSection />
      <ProductExperienceSection />
      <UsesSection />
      <QualitySection />
      <CTASection onOpenEnquiryModal={() => onOpenEnquiryModal && onOpenEnquiryModal()} />
    </main>
  );
};

export default HomePage;
