import PageHero from '../components/PageHero';

const SectionLabel = ({ children }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: '0.62rem',
      fontWeight: 600,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: '1rem',
    }}
  >
    <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
    {children}
    <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
  </div>
);

const Customization = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <PageHero
        image="/images/privatelabel.png"
        label="Tailored Elegance"
        title={<>Private Label &amp; Customization</>}
        subtitle="Create a signature experience that your guests will never forget — from bespoke fragrances to fully branded packaging, made entirely around your vision."
        height="60vh"
        objectPosition="center"
        disableParallax={true}
        objectFit="cover"
      />

      {/* ── Intro ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem) 3rem', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <SectionLabel>What We Offer</SectionLabel>
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1.5rem' }}>
          Your Brand. Your Scent. Your Story.
        </h2>
        <div style={{ width: 55, height: 1.5, background: 'linear-gradient(90deg, var(--gold), #e2c99a)', margin: '0 auto 2rem' }} />
        <p className="reveal" style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 2, marginBottom: '1.5rem' }}>
          In the world of luxury hospitality, the details that guests remember most are often the most
          intimate — the scent of a shampoo, the feel of a moisturiser, the elegance of a bottle on a
          marble countertop. VAIDURE's private label and customisation programme puts these details entirely
          in your hands.
        </p>
        <p className="reveal" style={{ fontSize: '0.98rem', color: '#999', fontWeight: 300, lineHeight: 2 }}>
          We offer the complete spectrum of customisation: from simply adding your hotel's logo to an
          existing VAIDURE formula, all the way to developing an entirely proprietary fragrance, a
          unique botanical formulation, and fully bespoke packaging — designed, manufactured, and
          exclusively yours.
        </p>
      </section>




      {/* ── What's Included ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <SectionLabel>Every Package Includes</SectionLabel>
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '3rem' }}>
            No Hidden Costs. No Surprises.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎨', label: 'Custom Label & Packaging Design' },
              { icon: '📸', label: 'Professional Product Photography' },
              { icon: '📦', label: 'Nationwide Fulfilment & Logistics' },
              { icon: '🌿', label: 'Sustainability Data Sheet' },
              { icon: '📞', label: 'Dedicated Account Manager' },
              { icon: '🔄', label: 'Post-Launch Support & Reorder Management' },
            ].map((item) => (
              <div
                key={item.label}
                className="reveal"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '1.25rem', background: 'var(--cream)', borderLeft: '2px solid var(--gold)' }}
              >
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ color: 'var(--muted)', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.5, textAlign: 'left' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0d0d0d', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/img-42de677e.jpg"
            alt="Luxury spa"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,13,13,0.92), rgba(13,13,13,0.75))' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <SectionLabel>Ready to Begin?</SectionLabel>
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontWeight: 500, marginBottom: '1rem' }}>
            Let's Build Your Signature Collection
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.85 }}>
            Every extraordinary hotel amenity collection started with a single conversation.
            Let's have ours.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/b2b" className="btn-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Start a Project</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="/products" className="btn-white-outline" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Browse Base Products</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customization;
