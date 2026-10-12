import { useEffect } from 'react';

const values = [
  { icon: '♻', title: 'Recyclable Packaging', desc: 'Biodegradable and recycled materials across all products.' },
  { icon: '🌿', title: 'Cruelty-Free & Vegan', desc: 'No animal testing, ever. 100% vegan formulations.' },
  { icon: '✦', title: 'Paraben & Sulfate Free', desc: 'Clean beauty formulas with no harsh chemicals.' },
  { icon: '🍃', title: 'Botanical Ingredients', desc: 'Harnessing the power of nature for every product.' },
];


const PhilosophySection = () => {
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

      {/* Philosophy Section */}
      <section style={{ padding: '7rem 0', background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}>
        {/* Animated background */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', zIndex: 0, opacity: 0.18 }}>
          <img
            src="/images/img-d2c0d825.jpg"
            alt="Leaves"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--primary) 0%, transparent 80%)' }} />
        </div>

        {/* Orbs */}
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.08), transparent 70%)', filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite', zIndex: 1 }} />

        {/* Decorative circle */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 800, borderRadius: '50%', border: '1px solid rgba(200,169,110,0.05)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(200,169,110,0.07)', pointerEvents: 'none', zIndex: 1 }} />

        <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} } @keyframes count-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }`}</style>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            <style>{`@media (min-width: 900px) { .philo-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
            <div className="philo-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'start' }}>

              {/* Left: Text */}
              <div>
                <div className="reveal">
                  <div className="section-label">Our Philosophy</div>
                  <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                    Conscious Luxury,<br />
                    <em style={{ color: 'var(--gold)' }}>Elegantly Delivered.</em>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.85, marginBottom: '2rem', maxWidth: 480 }}>
                    We believe that true luxury shouldn't come at the expense of our planet. Every product we craft utilizes sustainable packaging and ethically sourced botanical ingredients — an indulgent experience that's kind to both your guests and the earth.
                  </p>
                  <a href="/sustainability" className="btn-outline-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
                    <span>Our Sustainability Story</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

              {/* Right: Values grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem' }}>
                {values.map((v, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${i + 1}`}
                    style={{
                      padding: '1.5rem',
                      border: '1px solid rgba(200,169,110,0.15)',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(10px)',
                      transition: 'border-color 0.35s, background 0.35s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; e.currentTarget.style.background = 'rgba(200,169,110,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--gold)' }}>{v.icon}</div>
                    <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                      {v.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhilosophySection;
