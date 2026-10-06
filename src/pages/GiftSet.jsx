import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const GiftSet = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/frantgift.png"
        label="Premium Gifting"
        title="Gift Sets"
        subtitle="Curated luxury collections for corporate wellness and memorable guest stays."
        height="100vh"
        objectPosition="center"
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
              src="/images/gift.png"
              alt="Gift Sets Collection"
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
              Signature Gifting Collection
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              The Vaidure Gift Set Collection
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Our bespoke gift sets bring together our finest botanical formulations in elegantly crafted, sustainable presentation pouches and boxes. Designed specifically for luxury hotel VIP gifts, corporate appreciation, and spa wellness packages.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Included In This Gift Set:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Vaidure Shower Gel (25ml)',
                'Vaidure Body Lotion (25ml)',
                'Vaidure Hair Shampoo (25ml)',
                'Vaidure Hair Conditioner (25ml)',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Inquire for Custom Gift Sets</span>
              </Link>
              <Link to="/customization" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                Customization Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftSet;
