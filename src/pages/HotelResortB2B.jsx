import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const HotelResortB2B = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/hra.jpg"
        label="Luxury Hospitality"
        title="Hotel & Resort Amenities"
        subtitle="Turnkey Luxury Personal Care & Amenity Solutions for 5-Star Hotels & Heritage Resorts."
        height="60vh"
        objectPosition="center"
      />

      {/* ── Content ── */}
      <section className="showcase-section">
        <div className="showcase-card">
          {/* Image */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/hotel.jpg"
              alt="Hotel & Resort Amenities"
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
              Tailored Hospitality
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Hotel & Resort Amenity Programs
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              We partner with boutique retreats, luxury resorts, and international hotel chains to deliver memorable in-room sensory experiences for discerning travelers.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Program Benefits:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Full range of wet & dry guest room amenities',
                'Custom logo embossing & eco-friendly packaging',
                '5L bulk refills with lockable wall dispensers',
                'Dedicated account manager & guaranteed supply delivery',
                'Sustainable guest wellness branding support',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Request Hotel Proposal</span>
              </Link>
              <Link to="/b2b" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                All B2B Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelResortB2B;
