import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const PackagingCustomization = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/privet.jpg"
        label="Bespoke Form Factors"
        title="Custom Packaging"
        subtitle="Tailored Bottle Shapes, Sustainable Materials, & Luxurious Finishes."
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
              src="/images/bespoke.jpg"
              alt="Custom Packaging"
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
              Tactile Luxury
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Bespoke Packaging Design
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Choose from amber glass, PCR recycled plastic, or aluminum bottles paired with custom pump heads, metallic caps, and textured paper boxes.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Packaging Options:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Amber, Frosted Clear, Matte Black, or Custom Pantone Bottles',
                'Brushed Gold, Rose Gold, Chrome & Matte Black Caps',
                '25ml, 50ml, 100ml mini bottles & 300ml, 500ml pump dispensers',
                'Soft-touch matte box finishes with metallic foil stamping',
                'Refillable wall-mounted lock brackets for zero-waste suites',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Request Packaging Samples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagingCustomization;
