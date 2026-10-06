import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const DryAmenity = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/dry.png"
        label="Essential Comfort"
        title="Dry Amenities"
        subtitle="Thoughtfully designed sustainable guest essentials for luxury hospitality."
        height="100vh"
        objectFit="cover"
        objectPosition="center"
        disableParallax={true}
      />

      {/* ── Product Showcase ── */}
      <section style={{ padding: '5rem 2rem 7rem', maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            background: '#fff',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
            border: '1px solid rgba(200,169,110,0.2)',
          }}
        >
          {/* Product Images - Stacked vertically */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <img
                src="/images/drykit.jpg"
                alt="Dry Amenities Kit"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <img
                src="/images/dry1.png"
                alt="Dry Amenities Collection"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Product Info & Specifications */}
          <div>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Hotel Guest Care Collection
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Eco-Conscious Dry Amenities
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              From natural loofahs and bamboo toothbrushes to sanitary kits and vanity accessories, our dry amenities line delivers maximum guest comfort while adhering to strict environmental standards.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Included In This Collection:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Dental Kit',
                'Shaving Kit',
                'Natural Loofah',
                'Nail File, Comb, Vanity Kit & Sewing Kit',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Request Quotation</span>
              </Link>
              <Link to="/b2b" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                B2B Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DryAmenity;
