'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CalculatorForm from './components/CalculatorForm';
import ProblemGrid from './components/ProblemGrid';
import WhatIsNagaDosha from './components/WhatIsNagaDosha';
import DoshaTypesCarousel from './components/DoshaTypesCarousel';
import EffectsSection from './components/EffectsSection';
import RemediesSection from './components/RemediesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
    setTimeout(() => {
      const calcSection = document.getElementById('calculator-section');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  const handleCloseCalculator = () => {
    setIsCalculatorOpen(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroSection onOpenCalculator={handleOpenCalculator} />
        <CalculatorForm isOpen={isCalculatorOpen} onClose={handleCloseCalculator} />
        <ProblemGrid onOpenCalculator={handleOpenCalculator} />
        <WhatIsNagaDosha />
        <DoshaTypesCarousel />
        <EffectsSection />
        <RemediesSection />
        <FaqSection onOpenCalculator={handleOpenCalculator} />
      </main>
      <Footer />
    </>
  );
}
