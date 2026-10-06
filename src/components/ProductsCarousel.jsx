import { useRef, useEffect, useState } from 'react';

const productsList = [
  { name: 'Shower Gel', tag: 'Refreshing', image: '/images/shower.png' },
  { name: 'Hair Shampoo', tag: 'Cleansing', image: '/images/hairshampoo.png' },
  { name: 'Hair Conditioner', tag: 'Nourishing', image: '/images/hairconditioner.png' },
  { name: 'Body Lotion', tag: 'Hydrating', image: '/images/bodylotion.png' },
  { name: 'Soap', tag: 'Purify', image: '/images/soap.png' },
];

const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const ProductsCarousel = () => {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  useScrollReveal();

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '6rem 0', background: 'var(--cream-deep)', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.08), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div className="reveal" style={{ position: 'relative', textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Products</div>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--primary)', lineHeight: 1.1 }}>
            Crafted for <em style={{ color: 'var(--gold)' }}>Excellence</em>
          </h2>
          
          {/* Navigation arrows */}
          <div className="hidden-mobile" style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex', gap: '0.75rem' }}>
            {[{ dir: -1, icon: '←', label: 'prev', disabled: !canLeft }, { dir: 1, icon: '→', label: 'next', disabled: !canRight }].map(({ dir, icon, label, disabled }) => (
              <button
                key={label}
                onClick={() => scroll(dir)}
                aria-label={label}
                disabled={disabled}
                style={{
                  width: 48, height: 48,
                  border: '1.5px solid rgba(200,169,110,0.4)',
                  background: 'transparent',
                  color: 'var(--gold)',
                  fontSize: '1.1rem',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  opacity: disabled ? 0.3 : 1,
                  transition: 'all 0.3s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={e => { if(!disabled) { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--gold)'; } }}
                onMouseLeave={e => { if(!disabled) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)'; } }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="hide-scrollbar"
        style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          overflowX: 'auto', 
          padding: '1rem 2rem 2rem max(2rem, calc((100vw - 1280px) / 2 + 2rem))', 
          scrollSnapType: 'x mandatory' 
        }}
      >
        {productsList.map((product, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0, width: 290,
              scrollSnapAlign: 'start',
              background: '#fff',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(0,0,0,0.07)',
              transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s',
              cursor: 'pointer',
              animation: `fadeInUp 0.7s ease ${i * 0.1}s both`,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.14)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.07)'; }}
          >
            {/* Image */}
            <div style={{ height: 420, overflow: 'hidden', position: 'relative', background: '#f8f4ec' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Tag */}
              <div style={{ position: 'absolute', top: 14, left: 14, padding: '4px 12px', background: 'rgba(200,169,110,0.9)', color: 'var(--primary)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {product.tag}
              </div>
            </div>
            {/* Info */}
            <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
              <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.6rem', letterSpacing: '0.02em' }}>
                {product.name}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Hotel Amenity</span>
                <button style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid rgba(200,169,110,0.4)', background: 'transparent', color: 'var(--gold)', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
                >+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
};

export default ProductsCarousel;
