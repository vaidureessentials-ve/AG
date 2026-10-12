import PageHero from '../components/PageHero';

/* ─────────── small helper components ─────────── */
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
    <span style={{ width: 30, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
    {children}
    <span style={{ width: 30, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
  </div>
);

const Divider = () => (
  <div
    style={{
      width: 55,
      height: 1.5,
      background: 'linear-gradient(90deg, var(--gold), var(--gold-light, #e2c99a))',
      margin: '1.5rem auto',
    }}
  />
);

/* ─────────── page ─────────── */
const About = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <PageHero
        image="/images/about.png"
        label="Our Story"
        title="The Essence of Vaidure"
        subtitle="Born from a passion for sustainable luxury, crafted for the world's finest hotels and resorts."
        height="60vh"
        objectFit="cover"
        objectPosition="center 15%"
        disableParallax={true}
      />

      {/* ── Origin Story ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '6rem 2rem 4rem', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <SectionLabel>Philosophy &amp; Vision</SectionLabel>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: 'var(--primary)',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}
        >
          Where Nature Meets Luxury
        </h2>
        <Divider />

        <p
          className="reveal"
          style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 2, marginBottom: '1.5rem' }}
        >
          VAIDURE was founded on a singular belief — that true luxury and environmental responsibility are not
          opposites, but partners. In a world where guests increasingly seek both indulgence and authenticity,
          we set out to create hotel amenities that deliver both without compromise.
        </p>
        <p
          className="reveal"
          style={{ fontSize: '1rem', color: '#999', fontWeight: 300, lineHeight: 2, marginBottom: '1.5rem' }}
        >
          Every formulation begins deep in the botanical world — from Himalayan rose hip to Sri Lankan
          coconut oil, from Moroccan argan to Provençal lavender. Our in-house team of cosmetic scientists
          and aromatherapists work together to harness the potency of these natural extracts, ensuring each
          product is not only exquisitely luxurious but genuinely effective.
        </p>
        <p
          className="reveal"
          style={{ fontSize: '1rem', color: '#999', fontWeight: 300, lineHeight: 2 }}
        >
          From the first sketch of a bottle to the moment it is placed in a guest's hands, every step of
          the VAIDURE process is guided by our three founding principles: <strong style={{ color: 'var(--primary)', fontWeight: 500 }}>Purity</strong>,{' '}
          <strong style={{ color: 'var(--primary)', fontWeight: 500 }}>Sustainability</strong>, and{' '}
          <strong style={{ color: 'var(--primary)', fontWeight: 500 }}>Craftsmanship</strong>.
        </p>
      </section>

      {/* ── Three Pillars ── */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <SectionLabel>Our Founding Principles</SectionLabel>
            </div>
            <h2
              className="reveal"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', fontWeight: 500 }}
            >
              Three Pillars of Excellence
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2.5rem' }}>
            {[
              {
                icon: '🌿',
                title: 'Purity',
                desc: 'Every ingredient is rigorously sourced and tested. We use no parabens, sulfates, silicones, or artificial colourants. Our formulas are verified by independent dermatologists and certified toxicologists before they ever reach a hotel bathroom.',
                detail: 'Certified by Ecocert & COSMOS',
              },
              {
                icon: '🌍',
                title: 'Sustainability',
                desc: 'Our packaging is 100% recyclable or biodegradable. We operate a closed-loop manufacturing process, minimising water usage, energy consumption, and waste. Every product is carbon-neutral across its full lifecycle.',
                detail: 'Carbon-Neutral Since 2021',
              },
              {
                icon: '✦',
                title: 'Craftsmanship',
                desc: 'Our collections are produced in small artisan batches, allowing us to maintain the highest quality control standards. Every label, every bottle, every formulation is treated as a work of art, not a commodity.',
                detail: 'Small-Batch Artisan Production',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="reveal hover-lift"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  borderTop: '2px solid var(--gold)',
                  background: 'var(--cream)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{pillar.icon}</div>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '1.4rem',
                    color: 'var(--primary)',
                    fontWeight: 500,
                    marginBottom: '1rem',
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, fontSize: '0.95rem', flex: 1, marginBottom: '1.25rem' }}>
                  {pillar.desc}
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ width: 20, height: 1, background: 'var(--gold)' }} />
                  {pillar.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)', maxWidth: 1100, margin: '0 auto' }}>
        {/* ── Story Image + Quote ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
        >
          <div className="img-zoom-wrap reveal-left" style={{ height: 'auto', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', borderRadius: '12px' }}>
            <img
              src="/images/aboutdetails.png"
              alt="Botanical Ingredients"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="reveal-right">
            <SectionLabel>Our Founder's Vision</SectionLabel>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                color: 'var(--primary)',
                fontWeight: 500,
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}
            >
              "Luxury should leave no trace — except in memory."
            </h2>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              The idea for VAIDURE was born during a stay at a five-star resort in Indore, where our
              founder noticed the jarring contradiction — the exquisite service, yet single-use plastic
              bottles destined for landfill. That moment of dissonance sparked a mission.
            </p>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              After two years of research, formulation trials, and collaboration with some of India's most
              respected botanical scientists, VAIDURE launched its first collection — a line that proved
              that a biodegradable, vegan product could smell as extraordinary and feel as indulgent as
              anything from the great European luxury houses.
            </p>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, fontSize: '0.95rem' }}>
              Today, VAIDURE amenities are trusted by prestigious hospitality brands —
              a testament to the universal appeal of conscious luxury.
            </p>
          </div>
        </div>


      </section>

      {/* ── Our Process ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <SectionLabel>The Vaidure Process</SectionLabel>
            </div>
            <h2
              className="reveal"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', fontWeight: 500 }}
            >
              Crafted with Precision
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Ethical Sourcing', desc: 'We travel the world to source the finest botanical ingredients directly from sustainable farms.' },
              { step: '02', title: 'Artisan Formulation', desc: 'Our master formulators blend potent extracts in small batches to preserve their efficacy and natural scent.' },
              { step: '03', title: 'Eco-Packaging', desc: 'Every product is housed in 100% recyclable or biodegradable materials designed for elegance.' },
              { step: '04', title: 'Luxury Delivery', desc: 'Delivered seamlessly to the world\'s finest hotels, elevating the guest experience immediately.' }
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} hover-lift`} style={{ background: '#fff', padding: '2rem', borderTop: '2px solid rgba(200,169,110,0.3)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -20, left: 20, fontSize: '3rem', fontWeight: 700, color: 'rgba(200,169,110,0.15)', fontFamily: '"Playfair Display", serif', zIndex: 0 }}>
                  {item.step}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 600, marginTop: '1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#0d0d0d',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/premium_hotel_bathroom.jpg"
            alt="Luxury ambience"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.88)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <SectionLabel>Work With Us</SectionLabel>
          </div>
          <h2
            className="reveal"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontWeight: 500, marginBottom: '1rem' }}
          >
            Ready to Elevate Your Guest Experience?
          </h2>
          <p
            className="reveal"
            style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.85 }}
          >
            Whether you manage a boutique guesthouse or a premium hotel chain, VAIDURE has a solution
            crafted precisely for you.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/b2b" className="btn-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Partner With Us</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="/products" className="btn-white-outline" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>View Products</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
