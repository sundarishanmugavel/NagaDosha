'use client';

import React from 'react';

interface ProblemGridProps {
  onOpenCalculator?: () => void;
}

export default function ProblemGrid({ onOpenCalculator }: ProblemGridProps) {
  const handleBannerClick = (e: React.MouseEvent) => {
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
    <section className="landing-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Are You Facing These Problems?</h2>
          <div className="section-divider"></div>
        </div>
        <div className="problems-grid">
          <div className="problem-card">
            <img src="/images/w1.png" alt="Marriage Delays" className="pc-img" />
            <div className="pc-icon-wrapper">
              <i className="fa-solid fa-heart"></i>
            </div>
            <h4>Marriage Delays</h4>
            <p>Facing obstacles in getting married or delays in marriage.</p>
          </div>

          <div className="problem-card">
            <img src="/images/w5.png" alt="Career Obstacles" className="pc-img" />
            <div className="pc-icon-wrapper">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h4>Career Obstacles</h4>
            <p>Struggles in career growth, job stability or success.</p>
          </div>

          <div className="problem-card">
            <img src="/images/w3.png" alt="Financial Issues" className="pc-img" />
            <div className="pc-icon-wrapper">
              <i className="fa-solid fa-coins"></i>
            </div>
            <h4>Financial Issues</h4>
            <p>Money problems, instability and unexpected losses.</p>
          </div>

          <div className="problem-card">
            <img src="/images/w2.png" alt="Family Problems" className="pc-img" />
            <div className="pc-icon-wrapper">
              <i className="fa-solid fa-users"></i>
            </div>
            <h4>Family Problems</h4>
            <p>Conflicts, misunderstandings and lack of harmony.</p>
          </div>

          <div className="problem-card">
            <img src="/images/w4.png" alt="Childbirth Issues" className="pc-img" />
            <div className="pc-icon-wrapper">
              <i className="fa-solid fa-baby-carriage"></i>
            </div>
            <h4>Childbirth Issues</h4>
            <p>Difficulties in conceiving or concerns related to children.</p>
          </div>
        </div>

        {/* Banner Section */}
        <div className="chart-banner">
          <div className="banner-content">
            <h3>Your Birth Chart Holds the Answer</h3>
            <p>Find out if Naga Dosha is influencing your life and get the right remedies.</p>
            <a
              href="#calculator-section"
              id="btn-banner-check"
              className="banner-btn"
              onClick={handleBannerClick}
            >
              Check Your Naga Dosha &rarr;
            </a>
          </div>
          <img src="/images/book2.png" alt="Birth Chart Naga Book" className="banner-right-img" />
        </div>
      </div>
    </section>
  );
}
