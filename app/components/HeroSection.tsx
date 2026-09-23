'use client';

import React from 'react';

interface HeroSectionProps {
  onOpenCalculator?: () => void;
}

export default function HeroSection({ onOpenCalculator }: HeroSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenCalculator) {
      onOpenCalculator();
    } else {
      const calcSection = document.getElementById('calculator-section');
      if (calcSection) {
        calcSection.style.display = 'block';
        calcSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="breadcrumbs">
        <a href="#">Home</a> &gt; <a href="#">Free Tools</a> &gt; <span>Naga Dosha Calculator</span>
      </div>

      {/* Mobile Top Banner Image */}
      <div className="mobile-top-banner">
        <img src="/images/image_copy_8.png" alt="Naga Dosha Calculator" className="mobile-banner-img" />
      </div>

      <div className="container hero-container-cinematic">
        <div className="golden-particles"></div>
        {/* Left side empty to show background image */}
        <div className="hero-left-empty"></div>

        {/* Right side form panel */}
        <div className="hero-content-right">
          {/* Main Title */}
          <h1 className="hero-title-premium">
            Naga Dosha <span className="gold-gradient">Calculator</span>
          </h1>

          {/* Decorative Line with Om */}
          <div className="hero-divider-premium">
            <span className="d-line-l"></span>
            <span className="om-symbol">ॐ</span>
            <span className="d-line-r"></span>
          </div>

          {/* Subtitle Text */}
          <p className="hero-subtitle-premium">
            Facing unexplained delays in marriage, career obstacles, or relationship struggles? These could
            be silent symptoms of a hidden planetary affliction.
          </p>

          {/* Main CTA Button */}
          <a
            href="#calculator-section"
            id="btn-show-calculator"
            className="btn-cta-premium"
            onClick={handleClick}
          >
            <span>Check Your Dosha Free</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
