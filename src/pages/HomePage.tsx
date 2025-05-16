import React from 'react';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioGrid />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;