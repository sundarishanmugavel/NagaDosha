import React from 'react';

export default function DoshaTypesCarousel() {
  return (
    <section
      className="landing-section"
      id="types"
      style={{
        backgroundColor: '#FDF4E8',
        padding: '20px 0',
      }}
    >
      <div className="section-container" style={{ backgroundColor: '#FDF4E8' }}>
        <div className="types-grid" style={{ backgroundColor: '#FDF4E8' }}>
          {/* Centered Graphic seamlessly blending with background */}
          <div className="types-wheel-wrapper" style={{ backgroundColor: '#FDF4E8' }}>
            <img
              src="/images/types_2.png"
              alt="12 Types of Naga Dosha Wheel"
              className="types-wheel-img"
              style={{
                width: '100%',
                maxWidth: '920px',
                maxHeight: '520px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
                filter: 'none',
                backgroundColor: '#FDF4E8',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
