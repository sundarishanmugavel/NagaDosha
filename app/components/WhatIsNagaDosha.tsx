import React from 'react';

export default function WhatIsNagaDosha() {
  return (
    <section className="landing-section bg-alt" id="what-is">
      <div className="section-container">
        <div className="what-is-grid">
          <div className="what-is-img-container">
            <img src="/images/shivan.png" alt="Lord Shiva Naga Dosha" className="what-is-img" />
          </div>
          <div className="what-is-text">
            <h3>
              What is <span className="highlight-gold">Naga Dosha?</span>
            </h3>
            <p>
              Naga Dosha occurs in a birth chart when Rahu and Ketu are placed in certain houses in
              relation to each other. It is believed to be the result of past life karma related to
              serpents.
            </p>

            <div className="info-cards-grid">
              <div className="info-card-small">
                <div className="info-card-icon">
                  <i className="fa-solid fa-hands-praying"></i>
                </div>
                <h5>Karmic Influence</h5>
                <p>Result of past life actions towards serpents.</p>
              </div>

              <div className="info-card-small">
                <div className="info-card-icon">
                  <i className="fa-solid fa-star-and-crescent"></i>
                </div>
                <h5>Astrological Impact</h5>
                <p>Affects different areas like marriage, career, health.</p>
              </div>

              <div className="info-card-small">
                <div className="info-card-icon">
                  <i className="fa-solid fa-spa"></i>
                </div>
                <h5>Remedies Available</h5>
                <p>Can be reduced with proper remedies and prayers.</p>
              </div>

              <div className="info-card-small">
                <div className="info-card-icon">
                  <i className="fa-solid fa-dove"></i>
                </div>
                <h5>Peace & Prosperity</h5>
                <p>Brings harmony, happiness and success in life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
