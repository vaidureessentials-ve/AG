import React from 'react';
import { Link } from 'react-router-dom';

const RefillProgram = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div style={{ width: '100%', overflow: 'hidden', paddingTop: '85px', background: 'var(--cream)' }}>
        <img 
          src="/images/bulk.png" 
          alt="Refill Program"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* ── Content ── */}
      <section className="showcase-section">
        <div className="showcase-card">
          {/* Image */}
          <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '100%' }}>
            <img
              src="/images/bulk1.png"
              alt="Refill Program"
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
              Zero-Waste Hospitality
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Vaidure Bulk Refill System
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Eliminate single-use plastic bottles with our high-end 5L bulk refill system and tamper-proof wall dispensers designed to preserve luxury presentation while reducing waste by up to 85%.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Program Highlights:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '5L closed-loop bulk containers for housekeeping',
                'Precision tamper-evident stainless steel wall brackets',
                '85% reduction in total single-use packaging waste',
                'Automated subscription scheduling & logistics tracking',
                'Cost savings of up to 40% compared to mini bottles',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Join Refill Program</span>
              </Link>
              <Link to="/b2b" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                B2B Commercial Terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefillProgram;
