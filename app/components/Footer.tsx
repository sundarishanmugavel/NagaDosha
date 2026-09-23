import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-section">
        <div className="footer-inner">
          {/* 5-Column Grid */}
          <div className="footer-grid">
            {/* Column 1: KNOW US */}
            <div className="footer-col">
              <h3 className="footer-col-title">KNOW US</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="https://www.astroved.com/about-us">About</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/board-of-advisors">Board Of Advisors</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/rnd-institute">R&amp;D Institute</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/faqs">FAQs</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/careers">Careers</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/partner-sites">Partner Sites</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/blogs">Blogs</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/articles">Articles</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/podcast">Podcast</a>
                </li>
              </ul>
            </div>

            {/* Column 2: ASTROWORLD */}
            <div className="footer-col">
              <h3 className="footer-col-title">ASTROWORLD</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="https://www.astroved.com/astrology-services">Astrology Services</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/astropedia">Astropedia</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/priest-services">Priest Services</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/love-marriage">Love &amp; Marriage</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/family">Family</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/business-career">Business &amp; Career</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/wealth-finance">Wealth &amp; Finance</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/education">Education</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/health-beauty">Health &amp; Beauty</a>
                </li>
              </ul>
            </div>

            {/* Column 3: LEGAL */}
            <div className="footer-col">
              <h3 className="footer-col-title">LEGAL</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="https://www.astroved.com/disclaimer">Disclaimer</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/return-refund-policy">Return &amp; Refund Policy</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/security-policy">Security Policy</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/shipment-policy">Shipment Policy</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/terms-and-conditions">Terms and Conditions</a>
                </li>
              </ul>
            </div>

            {/* Column 4: SUPPORT */}
            <div className="footer-col">
              <h3 className="footer-col-title">SUPPORT</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="mailto:support@astroved.com">support@astroved.com</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/offline-payment">Offline Payment</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/feedback">Feedback</a>
                </li>
                <li>
                  <a href="https://www.astroved.com/sitemap">Site Map</a>
                </li>
              </ul>
            </div>

            {/* Column 5: CONNECT */}
            <div className="footer-col">
              <h3 className="footer-col-title">CONNECT</h3>
              <div className="footer-connect-group">
                <div className="connect-item">
                  <strong className="connect-label">Customer Care</strong>
                  <a href="tel:+919677391108" className="connect-val">
                    +91 9677391108
                  </a>
                  <a href="tel:+914443419898" className="connect-val">
                    +91 44 43419898
                  </a>
                </div>
                <div className="connect-item">
                  <strong className="connect-label">Toll Free (India Only)</strong>
                  <a href="tel:18001029098" className="connect-val">
                    1800 102 9098
                  </a>
                </div>
                <div className="connect-item">
                  <strong className="connect-label">USA Contact Number</strong>
                  <a href="tel:+14129273625" className="connect-val">
                    +1 412-927 3625
                  </a>
                </div>
                <div className="connect-item">
                  <strong className="connect-label">Whatsapp</strong>
                  <a
                    href="https://wa.me/91967739109"
                    target="_blank"
                    rel="noreferrer"
                    className="connect-val"
                  >
                    +91 9677391109
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Row: App Download & Badges */}
          <div className="footer-lower-row">
            <div className="app-download-section">
              <span className="download-app-title">Download AstroVed App</span>
              <div className="app-download-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.astroved.astropedia"
                  target="_blank"
                  rel="noreferrer"
                  className="app-img-link"
                >
                  <img src="/images/image_copy_5.png" alt="Google Play" className="footer-app-img" />
                </a>
                <a
                  href="https://apps.apple.com/app/astroved"
                  target="_blank"
                  rel="noreferrer"
                  className="app-img-link"
                >
                  <img src="/images/image_copy_6.png" alt="App Store" className="footer-app-img" />
                </a>
              </div>
            </div>

            <div className="footer-badges-row">
              <img
                src="/images/image_copy.png"
                alt="25 Years Excellence in Services"
                className="footer-badge-img"
                style={{ height: '60px' }}
              />
              <img
                src="/images/image_copy_2.png"
                alt="PodBean 3,000,000 Downloads"
                className="footer-badge-img"
                style={{ height: '42px' }}
              />
              <img
                src="/images/image_copy_3.png"
                alt="ISO 9001:2015 Certified"
                className="footer-badge-img"
                style={{ height: '42px' }}
              />
              <img
                src="/images/image_copy_4.png"
                alt="Secured by Sectigo"
                className="footer-badge-img"
                style={{ height: '42px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Purple Banner */}
      <div className="footer-bottom-bar">
        <div className="footer-inner bottom-inner">
          <div className="copyright-text">&copy; 2001 - 2026 AstroVed - All rights reserved.</div>
          <div className="social-follow-group">
            <span className="follow-title">Follow us :</span>
            <div className="social-icons">
              <a href="#" className="social-btn facebook" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-btn whatsapp" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" className="social-btn x-twitter" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="social-btn youtube" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="social-btn instagram" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-btn linkedin" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
