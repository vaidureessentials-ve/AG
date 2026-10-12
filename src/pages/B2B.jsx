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

const B2B = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <PageHero
        image="/images/b2b.jpg"
        label="Wholesale & Partnerships"
        title="B2B Solutions"
        subtitle="Partner with VAIDURE to elevate your hotel or resort's amenity offerings with scalable, sustainable, and beautifully branded solutions."
        height="60vh"
        objectPosition="center"
      />

      {/* ── Intro ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem) 3rem', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <SectionLabel>Why Partner With Us</SectionLabel>
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1.5rem' }}>
          Elevate Every Guest Ritual
        </h2>
        <div style={{ width: 55, height: 1.5, background: 'linear-gradient(90deg, var(--gold), #e2c99a)', margin: '0 auto 2rem' }} />
        <p className="reveal" style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 2, marginBottom: '1.5rem' }}>
          Guest loyalty lives in the sensory details. The formulations, fragrances, and textures inside your bathrooms linger long after check-out, quietly shaping reviews, loyalty, and reputation. VAIDURE transforms daily essentials into an unforgettable brand signature for your property.
        </p>
        <p className="reveal" style={{ fontSize: '0.98rem', color: '#999', fontWeight: 300, lineHeight: 2 }}>
          From boutique heritage stays to iconic luxury resort destinations, we craft custom B2B amenity programs designed around your identity and sustainability goals. With dedicated account management, seamless supply logistics, and bespoke formulation options, partnering with VAIDURE is as effortless as it is impactful.
        </p>
      </section>

      {/* ── Features + Image ── */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem) clamp(3.5rem, 6vw, 6rem)', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>

          {/* Left: text */}
          <div className="reveal-left">
            <SectionLabel>Scale Without Compromise</SectionLabel>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', marginBottom: '1.25rem', fontWeight: 500 }}>
              Built for the Hospitality Industry
            </h2>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Our B2B programme was designed from the ground up with hoteliers in mind. We understand the
              demands of high-volume operations — consistent quality, reliable delivery timelines,
              flexible ordering windows, and products that genuinely impress guests — and we deliver
              on every one of them.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                {
                  title: 'Volume Pricing & Bulk Orders',
                  desc: 'Competitive tiered pricing that rewards loyalty. The more you order, the better your rate — with no compromise on quality.',
                },
                {
                  title: 'Seamless Supply Chain Integration',
                  desc: "We integrate with your hotel's procurement system for automatic reordering, stock alerts, and consolidated monthly invoicing.",
                },
                {
                  title: 'Dedicated Brand Consultant',
                  desc: "Every partner is assigned a personal brand consultant who understands your property's identity and works with you long-term.",
                },
                {
                  title: 'Custom Branded Packaging',
                  desc: 'We can co-brand or fully private label any product in our range — your logo, your colour, your scent, your story.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    gap: 16,
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid rgba(200,169,110,0.15)',
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: 'rgba(200,169,110,0.1)',
                      border: '1px solid var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold)',
                      fontSize: '0.65rem',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ color: 'var(--muted)', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Request Wholesale Catalog</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: image + stats */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="img-zoom-wrap" style={{ width: '100%', height: 'auto', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', borderRadius: '12px' }}>
              <img
                src="/images/hospitality.jpg"
                alt="Luxury hotel bathroom amenities"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>


          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <SectionLabel>Getting Started</SectionLabel>
            </div>
            <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', fontWeight: 500 }}>
              How Our Partnership Works
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '2rem' }}>
            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: "We schedule a complimentary 30-minute consultation to understand your hotel's brand, guest profile, sustainability goals, and volume requirements.",
              },
              {
                step: '02',
                title: 'Sample Kit',
                desc: 'We send a curated sample kit of our most popular formulations to your property — complimentary, no obligations. Experience VAIDURE quality first-hand.',
              },
              {
                step: '03',
                title: 'Custom Proposal',
                desc: 'Your dedicated consultant prepares a tailored proposal — products, pricing, packaging options, and delivery schedule — built precisely around your needs.',
              },
              {
                step: '04',
                title: 'Seamless Onboarding',
                desc: 'From contract to first delivery, our logistics team ensures a smooth, on-time rollout. We offer staff training materials and digital POS assets at no extra cost.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="reveal"
                style={{ padding: '2rem', background: 'var(--cream)', borderTop: '2px solid var(--gold)', position: 'relative' }}
              >
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', color: 'rgba(200,169,110,0.15)', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>{item.step}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0d0d0d', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/img-38674e99.jpg"
            alt="Luxury hotel lobby"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.9)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <SectionLabel>Let's Begin</SectionLabel>
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontWeight: 500, marginBottom: '1rem' }}>
            Elevate Your Guests' Experience Today
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.85 }}>
            Request a free sample kit and wholesale catalog. Our team typically responds within one business day.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Request Free Sample Kit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <a href="/customization" className="btn-white-outline" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Explore Customisation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
