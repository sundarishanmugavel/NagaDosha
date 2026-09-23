'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isDesktopSearchActive, setIsDesktopSearchActive] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const desktopSearchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.innerWidth <= 1040) {
      setIsMobileSearchOpen((prev) => {
        const nextState = !prev;
        if (nextState) {
          setTimeout(() => mobileSearchInputRef.current?.focus(), 100);
        }
        return nextState;
      });
    } else {
      setIsDesktopSearchActive((prev) => {
        const nextState = !prev;
        if (nextState) {
          setTimeout(() => desktopSearchInputRef.current?.focus(), 100);
        }
        return nextState;
      });
    }
  };

  const toggleMobileMenu = (open?: boolean) => {
    const nextState = open !== undefined ? open : !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = nextState ? 'hidden' : '';
    }
  };

  const toggleDropdown = (key: string, e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1040) {
      e.preventDefault();
      setActiveMobileDropdown((prev) => (prev === key ? null : key));
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img
              src="https://www.astroved.com/astropedia/assets/images/astropedia-logo.svg"
              alt="Naga Dosha Calculator Logo"
            />
          </div>

          <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <a href="#">
              Home <i className="fas fa-caret-down"></i>
            </a>
            <a href="#">
              108 Divya Desam <span className="badge-new">New</span>
            </a>

            <div className={`dropdown ${activeMobileDropdown === 'festivals' ? 'active' : ''}`}>
              <a
                href="#"
                className="nav-item-new"
                onClick={(e) => toggleDropdown('festivals', e)}
              >
                Festivals <i className="fas fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Moon Phases(Thithi)</a>
                <a href="#">Yearly Calendar</a>
                <a href="#">Hindu Calendar</a>
              </div>
            </div>

            <div className={`dropdown ${activeMobileDropdown === 'fasting' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('fasting', e)}>
                Fasting <i className="fas fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Weekly</a>
              </div>
            </div>

            <div className={`dropdown ${activeMobileDropdown === 'deities' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('deities', e)}>
                Deities <i className="fas fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Gods</a>
                <a href="#">Goddess</a>
                <a href="#">Mantras</a>
                <a href="#">Virtual Pooja</a>
              </div>
            </div>

            <div className={`dropdown ${activeMobileDropdown === 'temples' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('temples', e)}>
                Temples <i className="fas fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">North India</a>
                <a href="#">South India</a>
                <a href="#">West India</a>
                <a href="#">East India</a>
                <a href="#">108 Divya Desam</a>
              </div>
            </div>

            <div className={`dropdown ${activeMobileDropdown === 'astrology' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('astrology', e)}>
                Astrology <i className="fas fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Hora</a>
                <a href="#">Planets</a>
                <a href="#">Vastu</a>
                <a href="#">Numerology</a>
                <a href="#">Nakshatras (Stars)</a>
                <a href="#">Panchangam</a>
                <a href="#">Today Tithi [Moon Phase]</a>
                <a href="#">
                  Rahukalam{' '}
                  <i
                    className="fas fa-caret-right"
                    style={{ float: 'right', marginTop: '4px', color: 'var(--border-color)' }}
                  ></i>
                </a>
                <a href="#">Birth Date Astrology</a>
                <a href="#">Marriage Prediction</a>
                <a href="#">Ask Saibaba</a>
                <a href="#">Moon Signs</a>
                <a href="#">Choghadiya</a>
                <a href="#">Jupiter Retrograde</a>
              </div>
            </div>

            <div className={`dropdown ${activeMobileDropdown === 'free-tools' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('free-tools', e)}>
                Free Tools <i className="fas fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Love Calculator</a>
                <a href="#">Dasa Bhukti</a>
                <a href="#">Horoscope Matching</a>
                <a href="#">Nalla Neram</a>
                <a href="#">Chandrashtama</a>
                <a href="#">Birth Chart</a>
                <a href="#">Hora Watch</a>
                <a href="#">More Free Tools</a>
              </div>
            </div>

            <a href="#">Astrology Services</a>
          </nav>

          <div className="header-actions">
            <div className={`search-container ${isDesktopSearchActive ? 'active' : ''}`}>
              <input
                ref={desktopSearchInputRef}
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <a
                href="#"
                className="icon-link"
                id="search-toggle"
                aria-label="Search"
                onClick={handleSearchToggle}
              >
                <i className="fas fa-search"></i>
              </a>
            </div>

            <a href="#" className="icon-link" aria-label="Location">
              <i className="fas fa-map-marker-alt"></i>
              <span className="action-text">Chennai</span>
            </a>
            <a href="#" className="icon-link" aria-label="Calendar">
              <i className="fas fa-calendar-alt"></i>
              <span className="action-text">04 Aug</span>
            </a>

            <button
              className="mobile-nav-toggle"
              id="mobileNavToggle"
              aria-label="Toggle Navigation"
              onClick={() => toggleMobileMenu()}
            >
              <i className={isMobileMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'}></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        id="mobileNavBackdrop"
        onClick={() => toggleMobileMenu(false)}
      ></div>

      <div
        className={`mobile-search-bar ${isMobileSearchOpen ? 'open' : ''}`}
        id="mobileSearchBar"
      >
        <div className="mobile-search-bar-inner">
          <i className="fas fa-search"></i>
          <input
            ref={mobileSearchInputRef}
            type="text"
            id="mobileSearchInput"
            placeholder="Search astrology topics..."
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}
