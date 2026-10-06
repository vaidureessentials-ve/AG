import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const WetAmenity = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/wet.jpg"
        label="Liquid Luxury"
        title="Wet Amenities"
        subtitle="Botanical shampoos, conditioners, and body care for an indulgent bath experience."
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
          {/* Product Image - Fills frame with zero white sidebars */}
          <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '100%' }}>
            <img
              src="/images/wet.png"
              alt="Wet Amenities"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '14px',
              }}
            />
          </div>

          {/* Product Info & Specifications */}
          <div>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Botanical Bath Collection
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Signature Wet Amenities
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Formulated with organic essential oils and pure plant extracts, our wet amenities provide a sensory bath experience. Available in elegant amber bottles that protect formula potency while enhancing bathroom decor.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Included In This Collection:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Hair Shampoo with Argan & Rosemary oil',
                'Hair Conditioner with Rosehip & Shea Butter',
                'Nourishing Shower Gel with Lavender & Eucalyptus',
                'Hydrating Body Lotion with Jojoba & Vitamin E',
                'Amber bottles available in 25ml sizes',
                '5L bulk refills for sustainable hotel dispensers',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Order Samples</span>
              </Link>
              <Link to="/customization" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                Custom Fragrances
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WetAmenity;
