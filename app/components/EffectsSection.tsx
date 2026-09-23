import React from 'react';

export default function EffectsSection() {
  return (
    <section className="landing-section bg-alt" id="effects">
      <div className="section-container">
        <div className="section-header">
          <h2>Effects of Naga Dosha</h2>
          <div className="section-divider"></div>
        </div>

        <div className="effects-grid">
          <div className="effect-card">
            <img src="/images/e2.png" alt="Marriage Delays" className="effect-img" />
            <h5>Marriage Delays</h5>
          </div>
          <div className="effect-card">
            <img src="/images/e3.png" alt="Career Struggles" className="effect-img" />
            <h5>Career Struggles</h5>
          </div>
          <div className="effect-card">
            <img src="/images/e5.png" alt="Financial Instability" className="effect-img" />
            <h5>Financial Instability</h5>
          </div>
          <div className="effect-card">
            <img src="/images/e4.png" alt="Health Issues" className="effect-img" />
            <h5>Health Issues</h5>
          </div>
          <div className="effect-card">
            <img src="/images/e1.png" alt="Childbirth Problems" className="effect-img" />
            <h5>Childbirth Problems</h5>
          </div>
          <div className="effect-card">
            <img src="/images/e6.png" alt="Family Conflicts" className="effect-img" />
            <h5>Family Conflicts</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
