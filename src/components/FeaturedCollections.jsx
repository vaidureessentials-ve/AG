import { useEffect } from 'react';

const collections = [
  {
    title: 'Luxury Welcome Kit',
    desc: 'Make a lasting first impression with elegance.',
    tag: 'Signature',
    image: '/images/welcomekit.jpg'
  },
  {
    title: 'Premium Quality',
    desc: 'Uncompromised formulation for luxury hospitality.',
    tag: 'Signature',
    image: '/images/bulk.png'
  },
  {
    title: 'Glow Naturally',
    desc: 'Botanical ingredients for radiant, healthy skin.',
    tag: 'Bestseller',
    image: '/images/glow.jpg'
  },
];

const marqueeItems = ['Botanical · ', 'Sustainable · ', 'Cruelty-Free · ', 'Vegan · ', 'Luxury · ', 'Handcrafted · ', 'Premium · ', 'Eco-Certified · '];

const FeaturedCollections = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Marquee ticker */}
      <div style={{ background: 'var(--primary)', padding: '14px 0', overflow: 'hidden', borderTop: '1px solid rgba(200,169,110,0.15)', borderBottom: '1px solid rgba(200,169,110,0.15)' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', paddingRight: '2rem', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '2rem' }}>
                {item}
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(200,169,110,0.4)', display: 'inline-block' }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative element */}
        <div style={{ position: 'absolute', top: '50%', right: -150, width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(200,169,110,0.08)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', right: -50, width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(200,169,110,0.08)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="reveal-left">
              <div className="section-label">Curated Selection</div>
              <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 600, color: 'var(--primary)', lineHeight: 1.1 }}>
                Our Featured<br /><em style={{ color: 'var(--gold)' }}>Collections</em>
              </h2>
            </div>
            <div className="reveal-right">
              <a
                href="/products"
                className="btn-outline-gold"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                <span>View All</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Collections grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {collections.map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{ position: 'relative', height: 'clamp(340px, 60vw, 440px)', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                  e.currentTarget.querySelector('.fc-overlay').style.opacity = '1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  e.currentTarget.querySelector('.fc-overlay').style.opacity = '0';
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)', display: 'block' }}
                />
                {/* Static overlay gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.3) 50%, transparent 100%)' }} />

                {/* Hover shimmer overlay */}
                <div
                  className="fc-overlay"
                  style={{ position: 'absolute', inset: 0, background: 'rgba(200,169,110,0.08)', opacity: 0, transition: 'opacity 0.4s' }}
                />

                {/* Tag */}
                <div style={{ position: 'absolute', top: 18, left: 18, padding: '4px 14px', border: '1px solid rgba(200,169,110,0.6)', background: 'rgba(13,13,13,0.5)', backdropFilter: 'blur(8px)' }}>
                  <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>{item.tag}</span>
                </div>

                {/* Bottom content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6, marginBottom: '1rem' }}>
                    {item.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
                    <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Discover</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCollections;
