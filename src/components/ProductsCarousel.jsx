import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const allProducts = [
  // ── Dry Amenities (from user's collection) ──
  {
    name: 'Dental Care Kit',
    tag: 'Guest Favorite',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie5.png',
    link: '/products/dry-amenity',
    type: 'Eco Wheatstraw',
  },
  {
    name: 'Precision Shaving Kit',
    tag: 'Premium Touch',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie6.png',
    link: '/products/dry-amenity',
    type: 'Grooming Care',
  },
  {
    name: 'Wheatstraw Comb',
    tag: 'Zero Plastic',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie3.png',
    link: '/products/dry-amenity',
    type: 'Biodegradable',
  },
  {
    name: 'Deluxe Vanity Kit',
    tag: 'Hotel Essential',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie2.png',
    link: '/products/dry-amenity',
    type: 'Organic Cotton',
  },
  {
    name: 'Shower Cap',
    tag: 'Travel Ready',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie4.png',
    link: '/products/dry-amenity',
    type: 'Waterproof Care',
  },
  {
    name: 'Sewing Kit',
    tag: 'Thoughtful Detail',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie1.png',
    link: '/products/dry-amenity',
    type: 'Wardrobe Mending',
  },
  {
    name: 'Natural Loofah',
    tag: 'Spa Grade',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie8.png',
    link: '/products/dry-amenity',
    type: 'Pure Vegetable Loofah',
  },
  {
    name: 'Hotel Slippers',
    tag: 'Luxury Comfort',
    category: 'Dry Amenities',
    image: '/dryamenities/dryamenitie7.png',
    link: '/products/dry-amenity',
    type: 'Velour Insole',
  },

  // ── Wet Amenities ──
  {
    name: 'Shower Gel',
    tag: 'Refreshing',
    category: 'Wet Amenities',
    image: '/images/shower.png',
    link: '/products/wet-amenity',
    type: 'Botanical Body Wash',
  },
  {
    name: 'Hair Shampoo',
    tag: 'Cleansing',
    category: 'Wet Amenities',
    image: '/images/hairshampoo.png',
    link: '/products/wet-amenity',
    type: 'Argan & Rosemary',
  },
  {
    name: 'Hair Conditioner',
    tag: 'Nourishing',
    category: 'Wet Amenities',
    image: '/images/hairconditioner.png',
    link: '/products/wet-amenity',
    type: 'Rosehip & Shea',
  },
  {
    name: 'Body Lotion',
    tag: 'Hydrating',
    category: 'Wet Amenities',
    image: '/images/bodylotion.png',
    link: '/products/wet-amenity',
    type: 'Jojoba & Vitamin E',
  },
  {
    name: 'Luxury Soap',
    tag: 'Purify',
    category: 'Wet Amenities',
    image: '/images/soap.png',
    link: '/products/wet-amenity',
    type: 'Gentle Cleansing',
  },
];

const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const ProductsCarousel = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState('All');
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  useScrollReveal();

  const filteredProducts = activeTab === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeTab);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth > el.clientWidth + 5;
    setIsScrollable(scrollable);
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    updateArrows();
    const timer = setTimeout(updateArrows, 250);
    window.addEventListener('resize', updateArrows);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateArrows);
    };
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '6rem 0', background: 'var(--cream-deep)', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative background elements */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,169,110,0.08), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="reveal" style={{ position: 'relative', textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Products</div>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--primary)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Crafted for <em style={{ color: 'var(--gold)' }}>Excellence</em>
          </h2>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {['All', 'Dry Amenities', 'Wet Amenities'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '30px',
                  border: activeTab === tab ? '1px solid var(--gold)' : '1px solid rgba(200,169,110,0.3)',
                  background: activeTab === tab ? 'var(--primary)' : '#ffffff',
                  color: activeTab === tab ? 'var(--gold)' : 'var(--muted)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeTab === tab ? '0 4px 15px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {tab === 'All' ? `All Products (${allProducts.length})` : tab === 'Dry Amenities' ? `Dry Amenities (8)` : `Wet Amenities (5)`}
              </button>
            ))}
          </div>

          {/* Navigation arrows (shown when carousel content overflows) */}
          {isScrollable && (
            <div className="hidden-mobile" style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex', gap: '0.75rem' }}>
              {[
                { dir: -1, icon: '←', label: 'prev', disabled: !canLeft },
                { dir: 1, icon: '→', label: 'next', disabled: !canRight },
              ].map(({ dir, icon, label, disabled }) => (
                <button
                  key={label}
                  onClick={() => scroll(dir)}
                  aria-label={label}
                  disabled={disabled}
                  style={{
                    width: 48,
                    height: 48,
                    border: '1.5px solid rgba(200,169,110,0.4)',
                    background: 'transparent',
                    color: 'var(--gold)',
                    fontSize: '1.1rem',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    opacity: disabled ? 0.3 : 1,
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    if (!disabled) {
                      e.currentTarget.style.background = 'var(--gold)';
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.borderColor = 'var(--gold)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!disabled) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--gold)';
                      e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)';
                    }
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Centered / Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="hide-scrollbar"
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            padding: '1rem 0.5rem 2rem',
            scrollSnapType: 'x mandatory',
            justifyContent: isScrollable ? 'flex-start' : 'center',
          }}
        >
          {filteredProducts.map((product, i) => (
            <Link
              key={product.name + i}
              to={product.link}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
                width: 'clamp(240px, calc((100% - 4 * 1.5rem) / 4), 285px)',
                scrollSnapAlign: 'start',
                background: '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 6px 25px rgba(0,0,0,0.06)',
                border: '1px solid rgba(200,169,110,0.2)',
                transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image Frame */}
              <div
                style={{
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#f8f4ec',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Badge Tag matching user design */}
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    padding: '5px 12px',
                    background: 'rgba(26, 26, 26, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--gold)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    borderRadius: '20px',
                    border: '1px solid rgba(200, 169, 110, 0.3)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  {product.tag}
                </div>
              </div>

              {/* Card Info */}
              <div style={{ padding: '1.25rem 1.4rem 1.4rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--gold-dark)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {product.type}
                </div>

                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    marginBottom: '0.8rem',
                    letterSpacing: '0.02em',
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid #f0ede6' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {product.category}
                  </span>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '1.5px solid rgba(200,169,110,0.4)',
                      background: 'transparent',
                      color: 'var(--gold)',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--gold)';
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
};

export default ProductsCarousel;
