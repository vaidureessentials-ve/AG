import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductsCarousel from '../components/ProductsCarousel';
import ProductsSection from '../components/ProductsSection';

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

const Products = () => {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <PageHero
        image="/images/signiture.png"
        label="Luxury Amenities"
        title="Our Signature Amenities"
        subtitle="Meticulously crafted with botanical ingredients to nourish the skin, delight the senses, and define the luxury hospitality experience."
        height="60vh"
        objectPosition="center"
        disableParallax={true}
      />

      {/* ── Product Categories ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)', background: '#fff', borderTop: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
            {[
              { name: 'GIFT SET', img: '/images/gift.png', path: '/products/gift-set', pos: 'center' },
              { name: 'DRY AMENITY', img: '/images/dry.png', path: '/products/dry-amenity', pos: 'center 25%' },
              { name: 'WET AMENITY', img: '/images/wet.png', path: '/products/wet-amenity', pos: 'center' },
            ].map((category) => (
              <Link key={category.name} to={category.path} className="reveal hover-lift" style={{ textAlign: 'center', cursor: 'pointer', textDecoration: 'none', display: 'block' }}>
                <div style={{ overflow: 'hidden', marginBottom: '1.5rem', height: 'clamp(240px, 45vw, 320px)', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', background: '#f5f2eb' }}>
                  <img
                    src={category.img}
                    alt={category.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: category.pos,
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', letterSpacing: '0.15em', color: 'var(--primary)', fontWeight: 500 }}>
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '6rem 2rem 3rem', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <SectionLabel>The Vaidure Collection</SectionLabel>
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1.5rem' }}>
          Where Botany Meets Indulgence
        </h2>
        <div style={{ width: 55, height: 1.5, background: 'linear-gradient(90deg, var(--gold), #e2c99a)', margin: '0 auto 2rem' }} />
        <p className="reveal" style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 2, marginBottom: '1.5rem' }}>
          Every product in the VAIDURE collection begins with a single question: what would nature create
          if it could formulate the perfect luxury amenity? From this guiding philosophy, our cosmetic
          scientists and master aromatherapists build each formula upward — layer by layer — using only
          the most potent botanical extracts the world has to offer.
        </p>
        <p className="reveal" style={{ fontSize: '0.98rem', color: '#999', fontWeight: 300, lineHeight: 2 }}>
          The result is a range of toiletries and body care products that go far beyond fragrance — they
          actively hydrate, nourish, and protect the skin, leaving guests with a sensory memory that lasts long after they check out.
        </p>
      </section>

      {/* ── What Makes Us Different ── */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <SectionLabel>What Sets Us Apart</SectionLabel>
            </div>
            <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', fontWeight: 500 }}>
              The Science of Botanical Luxury
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '🌿',
                title: '100% Plant-Based Formulas',
                desc: 'Every active ingredient is derived from plants, never from petrochemicals or animal sources. Our formulas contain no parabens, sulfates, phthalates, mineral oil, or synthetic colourants — just the best of what nature provides.',
              },

              {
                icon: '🌸',
                title: 'Master Aromatherapy',
                desc: 'Our fragrances are not synthetic interpretations — they are genuine essential oil compositions, developed by certified aromatherapists. Each scent is designed to evoke a specific emotional state: calm, refresh, revive, or ground.',
              },
              {
                icon: '♻️',
                title: 'Sustainable at Every Step',
                desc: 'Crafted in bottles made from post-consumer recycled plastic, paired with biodegradable secondary packaging and carbon-neutral logistics, our supply chain honours the planet while preserving the refined luxury your guests expect.',
              },

              {
                icon: '🌍',
                title: 'Ethically Sourced Ingredients',
                desc: 'All botanical ingredients are sourced from certified organic, Fair Trade farms. We maintain full traceability from crop to bottle — knowing exactly where every ingredient comes from and how it was grown.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="reveal hover-lift"
                style={{ padding: '2rem', background: 'var(--cream)', borderTop: '2px solid var(--gold)' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Product Carousel & Listing ── */}
      <div style={{ background: '#fff', paddingTop: '1rem', paddingBottom: '2rem' }}>
        <div style={{ textAlign: 'center', padding: '4rem 2rem 2rem' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <SectionLabel>Browse the Collection</SectionLabel>
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.75rem' }}>
            The Full VAIDURE Range
          </h2>
          <p className="reveal" style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: 560, margin: '0 auto', lineHeight: 1.85 }}>
            From body wash to bath salts, shampoo to shaving balm — every product is designed to deliver a consistent, five-star experience across your entire property.
          </p>
        </div>
        <ProductsCarousel />
      </div>

      <ProductsSection />
    </div>
  );
};

export default Products;
