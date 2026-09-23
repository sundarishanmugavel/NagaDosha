import React from 'react';

export default function RemediesSection() {
  return (
    <section className="landing-section" id="remedies">
      <div className="section-container">
        <div className="section-header">
          <h2>Remedies for Naga Dosha</h2>
          <div className="section-divider"></div>
        </div>

        <div className="remedies-grid">
          <div>
            <div className="remedies-cards">
              <div className="remedy-card">
                <i className="fa-solid fa-om rc-icon"></i>
                <h5>Naga Puja</h5>
                <p>Perform puja on Naga Panchami</p>
              </div>
              <div className="remedy-card">
                <i className="fa-solid fa-hands rc-icon"></i>
                <h5>Rudrabhishekam</h5>
                <p>Offer prayers to Lord Shiva</p>
              </div>
              <div className="remedy-card">
                <i className="fa-solid fa-book-open rc-icon"></i>
                <h5>Chant Mantras</h5>
                <p>Chant powerful mantras</p>
              </div>
              <div className="remedy-card">
                <i className="fa-solid fa-bottle-droplet rc-icon"></i>
                <h5>Donate Milk</h5>
                <p>Donate milk, clothes or essentials</p>
              </div>
              <div className="remedy-card">
                <i className="fa-solid fa-calendar-check rc-icon"></i>
                <h5>Naga Panchami</h5>
                <p>Worship snakes on Naga Panchami</p>
              </div>
              <div className="remedy-card">
                <i className="fa-solid fa-vihara rc-icon"></i>
                <h5>Visit Temples</h5>
                <p>Seek blessings at Naga Temples</p>
              </div>
            </div>
            <div className="btn-center-wrapper" style={{ marginTop: '28px' }}>
              <a
                href="https://www.astroved.com/dosha-pariharam/?promo=AVP_CP1_naga_dosha"
                target="_blank"
                rel="noreferrer"
                className="banner-btn"
                style={{ fontSize: '1rem', padding: '14px 42px', minWidth: '260px' }}
              >
                View All Remedies &rarr;
              </a>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="consultation-card-real">
            <div className="consultation-card-bg">
              <img src="/images/shivan.png" alt="Astrologer Consultation" className="consultation-bg-art" />
              <div className="consultation-overlay"></div>
            </div>
            <div className="consultation-card-content">
              <h3 className="consultation-heading">
                Talk To Our Astrologer To Know More About <span className="text-gold-accent">Naga Dosha</span>
              </h3>
              <p className="consultation-desc">
                Get detailed insights and powerful remedies to reduce its effects on your life.
              </p>
              <div className="consultation-features">
                <div className="cf-item">
                  <i className="fa-solid fa-circle-check"></i> 1-on-1 Personalized Session
                </div>
                <div className="cf-item">
                  <i className="fa-solid fa-circle-check"></i> Accurate Dosha Analysis
                </div>
              </div>
              <a
                href="https://www.astroved.com/AstrologerScheduler.aspx?id=115&promo=SL_SP_LAC-1"
                target="_blank"
                rel="noreferrer"
                className="btn-consultation-real"
              >
                <span>Talk to Astrologer</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
