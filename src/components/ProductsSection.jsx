import { useEffect } from 'react';

const products = [
  {
    title: 'Wet Amenities',
    subtitle: 'Shampoo · Conditioner · Shower Gel',
    image: '/images/wet.png',
    description: 'Premium shampoos, conditioners, and body wash with botanical extracts and luxurious textures.',
    accent: '#c8a96e',
  },
  {
    title: 'Dry Amenities',
    subtitle: 'Kits · Accessories · Comfort',
    image: '/images/dry.png',
    description: 'Curated hotel guest care kits — sewing sets, dental care, slippers, and more.',
    accent: '#a07840',
  },
  {
    title: 'Gift Collections',
    subtitle: 'Wellness · Spa · Gifting',
    image: '/images/gift.png',
    description: 'Luxury personal care collections designed for gifting, corporate wellness, and spa experiences.',
    accent: '#e2c99a',
  },
];

const ProductsSection = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: '7rem 0', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', bottom: 0, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.06), transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        {/* Section header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Collections</div>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>
            Crafted With <em style={{ color: 'var(--gold)' }}>Love</em>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
            Every product is a testament to quality craftsmanship and thoughtful design.
          </p>
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {products.map((product, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1}`}
              style={{
                background: '#fff',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(0,0,0,0.07)',
                transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.07)'; }}
            >
              {/* Image container */}
              <div style={{ height: 'clamp(260px, 45vw, 360px)', overflow: 'hidden', position: 'relative', background: '#f8f4ec' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Number tag */}
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '4px 12px', background: 'rgba(200,169,110,0.9)', color: 'var(--primary)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  0{index + 1}
                </div>
              </div>
              
              {/* Info container */}
              <div style={{ padding: '1.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  {product.subtitle}
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {product.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    Explore
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/products" className="btn-outline-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
            <span>View All Collections</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
