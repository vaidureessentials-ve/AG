import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const EcoMaterials = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/reduced-plastic.png"
        label="Responsible Design"
        title="Eco Materials"
        subtitle="100% Post-Consumer Recycled & Bio-Based Packaging Solutions."
        height="100vh"
      />

      {/* ── Content ── */}
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
          {/* Image */}
          <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '100%' }}>
            <img
              src="/images/reduced-plastic.png"
              alt="Eco Materials"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '14px',
              }}
            />
          </div>

          {/* Info */}
          <div>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Sustainable Innovation
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Eco-Friendly Packaging & Materials
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Our packaging is created using 100% Post-Consumer Recycled (PCR) materials and FSC-certified paper — ensuring that luxury hospitality remains fully aligned with environmental protection.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Material Standards:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '100% Post-Consumer Recycled (PCR) PET & HDPE bottles',
                'FSC-Certified recyclable outer cartons & sleeve boxes',
                'Vegetable & Soy-based biodegradable printing inks',
                'Water-soluble adhesives for seamless recycling',
                'Zero microplastics & 100% ocean-bound plastic recovery',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Inquire About Materials</span>
              </Link>
              <Link to="/sustainability" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                Full Sustainability Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoMaterials;
