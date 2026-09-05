import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ProductsSection from '../components/ProductsSection';
import ChannelPlaygroundSection from '../components/ChannelPlaygroundSection';
import SolutionsSection from '../components/SolutionsSection';
import IntegrationEcosystemSection from '../components/IntegrationEcosystemSection';
import WhyZionSection from '../components/WhyZionSection';
import VolumeCalculatorSection from '../components/VolumeCalculatorSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <ChannelPlaygroundSection />
      <SolutionsSection />
      <IntegrationEcosystemSection />
      <WhyZionSection />
      <VolumeCalculatorSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

export default HomePage;
