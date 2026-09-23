'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is Naga Dosha?',
    answer:
      'Naga Dosha (or Sarpa Dosha) occurs in Vedic astrology when shadow planets Rahu or Ketu afflict key houses in your birth chart (Janma Kundali). It is believed to represent unresolved karmic patterns that require spiritual remedies.',
  },
  {
    question: 'How is Naga Dosha calculated?',
    answer:
      'It is calculated by analyzing the exact positions of Rahu and Ketu relative to the Lagna (Ascendant), Moon sign, and Sun sign at the time of your birth using authentic Vedic ephemeris algorithms.',
  },
  {
    question: 'Can Naga Dosha affect marriage?',
    answer:
      'Yes, when Rahu or Ketu is placed in the 1st, 2nd, 5th, 7th, or 8th house, it can cause delays in finding a suitable partner, misunderstandings, or friction in married life. Performing pacification pujas helps neutralize these effects.',
  },
  {
    question: 'How can Naga Dosha be reduced?',
    answer:
      'Naga Dosha can be effectively pacified by performing dedicated remedies such as Naga Puja on Naga Panchami, Rudrabhishekam for Lord Shiva, chanting Rahu-Ketu mantras, wearing energized gemstone remedies, and visiting sacred temples.',
  },
];

interface FaqSectionProps {
  onOpenCalculator?: () => void;
}

export default function FaqSection({ onOpenCalculator }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleChipClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (targetId === '#calculator-section' && onOpenCalculator) {
      onOpenCalculator();
      return;
    }
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="landing-section faq-redesigned-section" id="faq">
      <div className="section-container">
        <div className="footer-sections-grid">
          {/* FAQ Left Panel */}
          <div className="faq-column">
            <div className="section-header-left">
              <div className="header-badge-icon">
                <i className="fa-solid fa-circle-question"></i>
              </div>
              <div>
                <h2 className="faq-redesigned-title">Frequently Asked Questions</h2>
                <p className="faq-redesigned-sub">
                  Find clear answers to common questions about Naga Dosha &amp; remedies
                </p>
              </div>
            </div>

            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`faq-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="faq-question" onClick={() => toggleFaq(index)}>
                      <span>{faq.question}</span>
                      <div className="faq-toggle-btn">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div
                      className="faq-answer"
                      style={{
                        maxHeight: isActive ? '320px' : '0px',
                        padding: isActive ? '0 24px 22px 24px' : '0 24px',
                        overflow: 'hidden',
                        transition: 'all 0.35s ease-in-out',
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Searches Right Panel */}
          <div className="related-column">
            <div className="related-panel-card">
              <div className="section-header-left">
                <div className="header-badge-icon icon-amber">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                  <h2 className="faq-redesigned-title">Related Searches</h2>
                  <p className="faq-redesigned-sub">Explore popular topics &amp; guide queries</p>
                </div>
              </div>

              <div className="related-chips">
                <a
                  href="#what-is"
                  className="related-chip"
                  onClick={(e) => handleChipClick(e, '#what-is')}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> What is Naga Dosha?
                </a>
                <a
                  href="#types"
                  className="related-chip"
                  onClick={(e) => handleChipClick(e, '#types')}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Types of Naga Dosha
                </a>
                <a
                  href="#calculator-section"
                  className="related-chip"
                  onClick={(e) => handleChipClick(e, '#calculator-section')}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Naga Dosha in Horoscope
                </a>
                <a
                  href="#effects"
                  className="related-chip"
                  onClick={(e) => handleChipClick(e, '#effects')}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Symptoms of Naga Dosha
                </a>
                <a
                  href="#remedies"
                  className="related-chip"
                  onClick={(e) => handleChipClick(e, '#remedies')}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Remedies for Naga Dosha
                </a>
                <a
                  href="#faq"
                  className="related-chip"
                  onClick={(e) => handleChipClick(e, '#faq')}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> How long does Naga Dosha last?
                </a>
              </div>

              <div className="related-cta-box">
                <div className="rcb-header-line">
                  <div className="rcb-icon">
                    <i className="fa-solid fa-user-astronaut"></i>
                  </div>
                  <strong className="rcb-title">Ask About Naga Dosha</strong>
                </div>
                <a
                  href="https://www.astroved.com/AstrologerScheduler.aspx?id=115&promo=SL_SP_LAC-1"
                  target="_blank"
                  rel="noreferrer"
                  className="rcb-btn"
                >
                  Consult Astrologer <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
