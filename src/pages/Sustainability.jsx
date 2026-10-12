import PageHero from '../components/PageHero';
import PhilosophySection from '../components/PhilosophySection';

const SectionLabel = ({ children, center }) => (
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
      justifyContent: center ? 'center' : 'flex-start',
    }}
  >
    <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
    {children}
    <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
  </div>
);

const Sustainability = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <PageHero
        image="/images/envirment.jpg"
        label="Our Commitment"
        title={<>Eco Materials &amp; Sustainability</>}
        subtitle="Reducing our environmental footprint without compromising the luxury experience — because the planet deserves the same care as your guests."
        height="60vh"
        objectPosition="center"
      />

      {/* ── Intro ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem) 3rem', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <SectionLabel center>Why It Matters</SectionLabel>
        </div>
        <h2
          className="reveal"
          style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1.5rem' }}
        >
          Luxury That Loves the Planet
        </h2>
        <div style={{ width: 55, height: 1.5, background: 'linear-gradient(90deg, var(--gold), #e2c99a)', margin: '0 auto 2rem' }} />
        <p className="reveal" style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 2, marginBottom: '1.5rem' }}>
          The hospitality industry produces over 1.9 million tonnes of single-use plastic waste annually.
          At VAIDURE, we are committed to being part of the solution. Every product, every package, every
          decision is made with the future of our planet in mind — without ever compromising on the
          extraordinary sensory experience your guests deserve.
        </p>
        <p className="reveal" style={{ fontSize: '0.98rem', color: '#999', fontWeight: 300, lineHeight: 2 }}>
          Our sustainability model is holistic — it spans raw ingredient sourcing, manufacturing processes,
          packaging materials, distribution logistics, and end-of-life product disposal. We measure our
          impact at every stage and publish an annual sustainability report to hold ourselves accountable.
        </p>
      </section>

      {/* ── 4 Commitments ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <SectionLabel>Our Commitments</SectionLabel>
            </div>
            <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', fontWeight: 500 }}>
              A Multi-Layered Approach
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '🌿',
                title: 'Plant-Based Ingredients',
                short: 'No harsh chemicals. Ever.',
                desc: 'Our formulations are 100% plant-based and derived from responsibly harvested botanicals. We rigorously avoid parabens, sulfates, mineral oil, synthetic fragrances, and microplastics. Our active ingredients — including rosehip, aloe vera, green tea, and argan oil — are sourced from certified organic farms under Fair Trade agreements.',
                badge: 'COSMOS Certified',
              },
              {
                icon: '🐾',
                title: 'Cruelty-Free & Vegan',
                short: '100% vegan. No animal testing.',
                desc: "Not a single VAIDURE product, ingredient, or component has been tested on animals. Our entire range is certified vegan by PETA, meaning no animal-derived ingredients are used at any stage. We believe luxury is meaningless if it comes at the cost of another creature's suffering.",
                badge: 'PETA Vegan Certified',
              },
              {
                icon: '♻️',
                title: 'Biodegradable Packaging',
                short: 'Packaging that returns to the earth.',
                desc: 'Our bottles are made from post-consumer recycled (PCR) plastics or fully biodegradable bio-polymers. Our outer cartons use FSC-certified recycled paper with soy-based inks. By 2025, we are committed to making our entire product line packaging-neutral — meaning zero new plastic introduced into the world.',
                badge: 'FSC & PCR Certified',
              },
              {
                icon: '🌍',
                title: 'Carbon-Neutral Operations',
                short: 'Net-zero across our full lifecycle.',
                desc: 'We have achieved carbon neutrality across our manufacturing, packaging, and national logistics operations. We partner with verified reforestation projects across India to offset any residual emissions. Our manufacturing facility runs on 100% renewable solar energy and operates a zero-liquid-discharge water system.',
                badge: 'Carbon Neutral Since 2021',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="reveal hover-lift"
                style={{ background: 'var(--cream)', padding: '2.5rem', borderTop: '2px solid var(--gold)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.badge}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1rem', fontWeight: 400 }}>{item.short}</p>
                <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, fontSize: '0.9rem', flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packaging Innovation ── */}
      <section style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div className="reveal-left">
            <SectionLabel>Packaging Innovation</SectionLabel>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.3 }}>
              Beautiful by Design, Responsible by Nature
            </h2>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              We design beautiful, eco-friendly packaging. Our bottles are made from 100% recycled plastics, protecting the environment without sacrificing a premium feel.
            </p>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, fontSize: '0.95rem' }}>
              Each bottle uses water-based coatings, vegetable-based inks on recycled paper, and water-soluble adhesives to ensure it is completely clean and easy to recycle.
            </p>
          </div>

          <div className="img-zoom-wrap reveal-right" style={{ height: 440, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
            <img
              src="/images/sustainable.png"
              alt="Sustainable packaging"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>


      </section>

      <PhilosophySection />

      {/* ── CTA ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0d0d0d', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/img-6113fcda.jpg"
            alt="Sustainable nature"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.9)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <SectionLabel>Join the Movement</SectionLabel>
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontWeight: 500, marginBottom: '1rem' }}>
            Your Hotel Can Lead the Change
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.85 }}>
            Switching to VAIDURE is one of the most impactful sustainability decisions a hotel can make.
            Your guests will notice. The planet will thank you.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/b2b" className="btn-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Start the Conversation</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="/products" className="btn-white-outline" style={{ fontFamily: '"Inter", sans-serif' }}>
              <span>Explore Products</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
