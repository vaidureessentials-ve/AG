import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const PrivateLabel = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/privet.jpg"
        label="Bespoke Branding"
        title="Private Label"
        subtitle="Exclusive Custom Formulation & Branding for Luxury Hotel Properties."
        height="60vh"
        objectPosition="center"
        disableParallax={true}
        objectFit="cover"
      />

      {/* ── Content ── */}
      <section className="showcase-section">
        <div className="showcase-card">
          {/* Image */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/privetlebal.png"
              alt="Private Label"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* Info */}
          <div>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Exclusive Brand Identity
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Private Label Solutions
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Elevate your property with fully customized private label amenities bearing your hotel logo, bespoke color palettes, and signature fragrance signatures.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Private Label Services:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Custom bottle debossing & hot-stamp foil logo placement',
                'Tailored botanical formulations & ingredient selection',
                'Dedicated R&D cosmetic lab support & safety testing',
                'Bespoke PMS color matching for bottles and caps',
                'Flexible low MOQ solutions for boutique luxury hotels',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Start Private Label Inquiry</span>
              </Link>
              <Link to="/customization" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                Customization Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateLabel;
