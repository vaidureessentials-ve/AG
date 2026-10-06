import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const HospitalAmenitiesB2B = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <PageHero
        image="/images/hsptl.jpg"
        label="Clinical Hygiene & Wellness"
        title="Hospital Amenities"
        subtitle="Gentle, Hypoallergenic Personal Care Solutions for Premium Healthcare Facilities & Private Clinics."
        height="65vw"
        objectPosition="center"
        disableParallax={true}
        objectFit="cover"
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
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/hospitala.jpg"
              alt="Hospital Amenities"
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
              Healthcare Personal Care
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Hospital & Clinic Guest Amenities
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.75rem' }}>
              Specially formulated dermatologically-tested, fragrance-free, and hypoallergenic personal care products tailored for luxury hospital suites, patient care rooms, and wellness clinics.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              Healthcare Amenity Features:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Dermatologically tested & hypoallergenic formulations',
                'Fragrance-free & extra-gentle botanical options',
                'Hygienic single-use sealed bottles & dispensers',
                'Patient comfort kits with toothbrush, comb & washcloths',
                'Compliance with international healthcare hygiene standards',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Inquire for Healthcare Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalAmenitiesB2B;
