'use client';

import React, { useState, useRef } from 'react';

interface CalculatorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalculatorForm({ isOpen, onClose }: CalculatorFormProps) {
  const [genderOpen, setGenderOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Select');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [calculateClickCount, setCalculateClickCount] = useState(0);

  // Form input states
  const [name, setName] = useState('');
  const [dobDD, setDobDD] = useState('');
  const [dobMM, setDobMM] = useState('');
  const [dobYYYY, setDobYYYY] = useState('');
  const [tobHH, setTobHH] = useState('');
  const [tobMM, setTobMM] = useState('');
  const [tobSS, setTobSS] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  // Element Refs for Auto-Advance / Auto-Focus
  const dobDDRef = useRef<HTMLInputElement>(null);
  const dobMMRef = useRef<HTMLInputElement>(null);
  const dobYYYYRef = useRef<HTMLInputElement>(null);
  const tobHHRef = useRef<HTMLInputElement>(null);
  const tobMMRef = useRef<HTMLInputElement>(null);
  const tobSSRef = useRef<HTMLInputElement>(null);

  // Date of Birth Handlers
  const handleDobDDChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 2);
    setDobDD(digits);
    if (digits.length === 2) {
      dobMMRef.current?.focus();
    }
  };

  const handleDobMMChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 2);
    setDobMM(digits);
    if (digits.length === 2) {
      dobYYYYRef.current?.focus();
    }
  };

  const handleDobYYYYChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    setDobYYYY(digits);
  };

  const handleDobMMKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !dobMM) {
      dobDDRef.current?.focus();
    }
  };

  const handleDobYYYYKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !dobYYYY) {
      dobMMRef.current?.focus();
    }
  };

  // Time of Birth Handlers
  const handleTobHHChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 2);
    setTobHH(digits);
    if (digits.length === 2) {
      tobMMRef.current?.focus();
    }
  };

  const handleTobMMChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 2);
    setTobMM(digits);
    if (digits.length === 2) {
      tobSSRef.current?.focus();
    }
  };

  const handleTobSSChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 2);
    setTobSS(digits);
  };

  const handleTobMMKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !tobMM) {
      tobHHRef.current?.focus();
    }
  };

  const handleTobSSKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !tobSS) {
      tobMMRef.current?.focus();
    }
  };

  const handleGenderSelect = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedGender(val);
    setGenderOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculateClickCount((prev) => prev + 1);
    setFormSubmitted(true);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedGender('Select');
      setName('');
      setDobDD('');
      setDobMM('');
      setDobYYYY('');
      setTobHH('');
      setTobMM('');
      setTobSS('');
      setCountry('');
      setCity('');
    }, 350);
  };

  const isNagaDoshaPositive = calculateClickCount % 2 === 1;

  if (!isOpen) return null;

  return (
    <section
      id="calculator-section"
      className="calculator-section"
      style={{
        padding: 0,
        minHeight: 'auto',
        margin: 0,
        background: 'transparent',
        display: 'block',
        position: 'relative',
        zIndex: 25,
      }}
    >
      <div
        className="container calculator-container form-animated-container"
        style={{ maxWidth: '1350px', margin: '-15px auto 10px auto', padding: '0 16px 0 16px' }}
      >
        {!formSubmitted ? (
          <div className="premium-naga-form-container" id="nagaFormCard" style={{ display: 'block' }}>
            <button className="btn-dismiss" id="btnDismissForm" onClick={handleResetAndClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="premium-naga-title" id="formMainTitle">
              Enter Your Details
            </h3>
            <div className="om-divider" id="formMainDivider">
              <span className="om-line"></span>
              <span className="om-symbol">ॐ</span>
              <span className="om-line"></span>
            </div>

            <form id="nagaCalculatorForm" className="dosha-form-new" onSubmit={handleSubmit}>
              <div className="modern-form-grid">
                {/* Full Name */}
                <div className="modern-fg">
                  <label>Full Name</label>
                  <div className="modern-input-wrapper">
                    <i className="fa-regular fa-user"></i>
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Gender Dropdown with z-index stacking fix */}
                <div className="modern-fg" style={{ position: 'relative', zIndex: genderOpen ? 500 : 2 }}>
                  <label>Gender</label>
                  <div
                    className={`modern-input-wrapper custom-select-wrapper ${genderOpen ? 'open' : ''}`}
                    id="genderSelectWrapper"
                    style={{ padding: 0, position: 'relative', zIndex: genderOpen ? 500 : 2 }}
                    onClick={() => setGenderOpen(!genderOpen)}
                  >
                    <i className="fa-solid fa-venus-mars"></i>
                    <div
                      className="custom-select-trigger"
                      style={{ padding: '14px 15px 14px 45px', width: '100%' }}
                    >
                      <span
                        className="custom-select-value"
                        style={{ fontWeight: 500, color: '#1e293b' }}
                      >
                        {selectedGender}
                      </span>
                      <i
                        className="fa-solid fa-chevron-down drop-icon"
                        style={{ position: 'static', marginLeft: 'auto' }}
                      ></i>
                    </div>
                    {genderOpen && (
                      <div
                        className="custom-select-options"
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: 0,
                          width: '100%',
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          border: '1.5px solid #d97706',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.18)',
                          zIndex: 1000,
                          overflow: 'hidden',
                          opacity: 1,
                          visibility: 'visible',
                          transform: 'none',
                        }}
                      >
                        <div
                          className="custom-option"
                          data-value="Male"
                          onClick={(e) => handleGenderSelect('Male', e)}
                        >
                          Male
                        </div>
                        <div
                          className="custom-option"
                          data-value="Female"
                          onClick={(e) => handleGenderSelect('Female', e)}
                        >
                          Female
                        </div>
                      </div>
                    )}
                    <input type="hidden" name="gender" value={selectedGender} />
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="modern-fg">
                  <label>Date of Birth</label>
                  <div className="modern-input-wrapper">
                    <i className="fa-regular fa-calendar"></i>
                    <div className="multi-input-modern">
                      <input
                        ref={dobDDRef}
                        type="text"
                        placeholder="DD"
                        maxLength={2}
                        value={dobDD}
                        onChange={(e) => handleDobDDChange(e.target.value)}
                      />
                      <span className="sep">/</span>
                      <input
                        ref={dobMMRef}
                        type="text"
                        placeholder="MM"
                        maxLength={2}
                        value={dobMM}
                        onChange={(e) => handleDobMMChange(e.target.value)}
                        onKeyDown={handleDobMMKeyDown}
                      />
                      <span className="sep">/</span>
                      <input
                        ref={dobYYYYRef}
                        type="text"
                        placeholder="YYYY"
                        maxLength={4}
                        value={dobYYYY}
                        onChange={(e) => handleDobYYYYChange(e.target.value)}
                        onKeyDown={handleDobYYYYKeyDown}
                      />
                    </div>
                  </div>
                </div>

                {/* Time of Birth */}
                <div className="modern-fg">
                  <label>Time of Birth</label>
                  <div className="modern-input-wrapper">
                    <i className="fa-regular fa-clock"></i>
                    <div className="multi-input-modern">
                      <input
                        ref={tobHHRef}
                        type="text"
                        placeholder="HH"
                        maxLength={2}
                        value={tobHH}
                        onChange={(e) => handleTobHHChange(e.target.value)}
                      />
                      <span className="sep">:</span>
                      <input
                        ref={tobMMRef}
                        type="text"
                        placeholder="MM"
                        maxLength={2}
                        value={tobMM}
                        onChange={(e) => handleTobMMChange(e.target.value)}
                        onKeyDown={handleTobMMKeyDown}
                      />
                      <span className="sep">:</span>
                      <input
                        ref={tobSSRef}
                        type="text"
                        placeholder="SS"
                        maxLength={2}
                        value={tobSS}
                        onChange={(e) => handleTobSSChange(e.target.value)}
                        onKeyDown={handleTobSSKeyDown}
                      />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="modern-fg">
                  <label>Country</label>
                  <div className="modern-input-wrapper">
                    <i className="fa-solid fa-globe"></i>
                    <input
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>

                {/* City */}
                <div className="modern-fg">
                  <label>City</label>
                  <div className="modern-input-wrapper">
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-submit-modern">
                  <span>Calculate My Dosha</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Form Result Container */
          <div id="formResultContainer" style={{ display: 'block', padding: 0, position: 'relative' }}>
            <button className="btn-dismiss" id="btnDismissResult" onClick={handleResetAndClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="premium-result-card" id="premiumResultCard">
              <div className="result-header">
                <div
                  className={`result-icon-ring ${!isNagaDoshaPositive ? 'success' : ''}`}
                  id="resultIconRing"
                >
                  <i
                    id="nagaResultIcon"
                    className={
                      isNagaDoshaPositive
                        ? 'fa-solid fa-triangle-exclamation'
                        : 'fa-solid fa-check'
                    }
                  ></i>
                </div>
                <h2
                  id="nagaResultTitle"
                  className="result-title"
                  style={{ color: isNagaDoshaPositive ? '#4a1c11' : '#15803d' }}
                >
                  <span id="nagaResultText">
                    {isNagaDoshaPositive
                      ? 'You are under the influence of Naga Dosha'
                      : 'You are NOT under the influence of Naga Dosha'}
                  </span>
                </h2>
                {isNagaDoshaPositive && (
                  <p className="result-subtitle" id="nagaResultSubtitle">
                    Astrological readings suggest an imbalance. Discover customized remedies to clear
                    negative karmic influences.
                  </p>
                )}
              </div>

              {isNagaDoshaPositive && (
                <div id="nagaActionCards" className="result-actions" style={{ display: 'flex' }}>
                  <div className="ra-card">
                    <div className="ra-icon">
                      <i className="fa-solid fa-hands-praying"></i>
                    </div>
                    <div className="ra-content">
                      <h4>Perform Remedies</h4>
                      <p>Participate in sacred rituals to pacify Naga Dosha.</p>
                      <a
                        href="https://www.astroved.com/dosha-pariharam/?promo=AVP_CP1_naga_dosha"
                        target="_blank"
                        rel="noreferrer"
                        className="ra-btn"
                      >
                        Explore Rituals{' '}
                        <i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                      </a>
                    </div>
                  </div>
                  <div className="ra-card ra-secondary">
                    <div className="ra-icon">
                      <i className="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <div className="ra-content">
                      <h4>Ease My Naga Dosha</h4>
                      <p>Seek relief from Naga Dosha and invite peace, protection, and family well-being.</p>
                      <a
                        href="https://www.astroved.com/dosha-pariharam/sarpa-dosha-remedies/?promo=AVP_CP2_naga_dosha"
                        target="_blank"
                        rel="noreferrer"
                        className="ra-btn-alt"
                      >
                        Ease My Naga Dosha{' '}
                        <i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
