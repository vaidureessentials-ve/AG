import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

// 8 Individual Guest Essentials from /public/dryamenities/
const individualAmenities = [
  {
    id: 'dental-kit',
    title: 'Dental Care Kit',
    subtitle: 'Wheatstraw Brush & Herbal Mint Paste',
    category: 'Personal Care',
    image: '/dryamenities/dryamenitie5.png',
    badge: 'Guest Favorite',
    tag: 'Biodegradable Core',
    description: 'Eco-conscious wheatstraw toothbrush featuring gentle multi-level bristles paired with vegan, paraben-free herbal mint toothpaste in a moisture-barrier kraft paper pouch.',
    contents: [
      'Ergonomic Wheatstraw Toothbrush',
      'Botanical Mint Toothpaste (Vegan & Paraben-Free)',
      'Moisture-Sealed Kraft Outer Pouch',
    ],
    specs: 'Standard MOQ: 500 units | Custom Logo Available',
  },
  {
    id: 'shaving-kit',
    title: 'Precision Shaving Kit',
    subtitle: 'Ergonomic Razor & Soothing Shave Gel',
    category: 'Grooming & Bath',
    image: '/dryamenities/dryamenitie6.png',
    badge: 'Premium Touch',
    tag: 'Skin Friendly',
    description: 'Precision dual-blade razor crafted for effortless gliding, paired with a soothing aloe vera-infused shave gel to protect against irritation and leave skin supple.',
    contents: [
      'Dual-Blade Precision Shaving Razor',
      'Soothing Aloe Vera Shave Gel Sachet',
      'Dermatologically Tested Formula',
    ],
    specs: 'Standard MOQ: 500 units | Hot-Stamping Available',
  },
  {
    id: 'wheatstraw-comb',
    title: 'Wheatstraw Grooming Comb',
    subtitle: 'Dual-Density Antistatic Hair Comb',
    category: 'Grooming & Bath',
    image: '/dryamenities/dryamenitie3.png',
    badge: 'Zero Plastic',
    tag: 'Compostable Material',
    description: 'Crafted from renewable agricultural wheatstraw byproducts. Features dual tooth densities suitable for all hair types while significantly cutting single-use plastic waste.',
    contents: [
      'Dual-Density Tooth Profile (Fine & Wide)',
      'Smooth Rounded Tips Gentle on Scalp',
      'Individually Packaged in Sealed Kraft Sleeve',
    ],
    specs: 'Standard MOQ: 1,000 units | Embossed Logo Option',
  },
  {
    id: 'vanity-kit',
    title: 'Deluxe Vanity Kit',
    subtitle: 'Cotton Rounds, Swabs & Emery Board',
    category: 'Personal Care',
    image: '/dryamenities/dryamenitie2.png',
    badge: 'Hotel Essential',
    tag: '100% Pure Cotton',
    description: 'Thoughtfully curated personal grooming kit featuring pure organic cotton makeup removal pads, paper-stem double-ended swabs, and a smooth grit emery board.',
    contents: [
      '2x 100% Organic Cotton Makeup Pads',
      '3x Paper-Stem Cotton Swabs (Zero Plastic)',
      '1x Precision Emery Board Nail File',
    ],
    specs: 'Standard MOQ: 500 units | Sustainable Materials',
  },
  {
    id: 'shower-cap',
    title: 'Pleated Shower Cap',
    subtitle: 'Waterproof Elastic Hair Protection',
    category: 'Grooming & Bath',
    image: '/dryamenities/dryamenitie4.png',
    badge: 'Travel Ready',
    tag: 'Comfort Elastic',
    description: 'Durable waterproof accordion-pleated shower cap with non-binding soft elastic trim. Protects blowouts and hair treatments during soothing guest showers.',
    contents: [
      'Accordion-Pleated Waterproof Bonnet',
      'Comfort-Stretch Non-Marking Elastic Edge',
      'Compact Flat Pocket-Friendly Kraft Pouch',
    ],
    specs: 'Standard MOQ: 1,000 units | Universal Stretch Fit',
  },
  {
    id: 'sewing-kit',
    title: 'Emergency Sewing Kit',
    subtitle: '6-Tone Spun Threads, Buttons & Pin',
    category: 'Room Comfort',
    image: '/dryamenities/dryamenitie1.png',
    badge: 'Thoughtful Detail',
    tag: 'Quick Touch-Up',
    description: 'Compact emergency wardrobe mending kit pre-threaded with 6 versatile shades of durable thread, spare pearlized buttons, threader, and safety pin.',
    contents: [
      '6 Pre-Sorted Spun Thread Shades',
      '2 Spare Shirt Buttons (Pearl & Charcoal)',
      '1 Safety Pin & Precision Needle Threader',
    ],
    specs: 'Standard MOQ: 500 units | Sealed Kraft Packaging',
  },
  {
    id: 'natural-loofah',
    title: 'Natural Exfoliating Loofah',
    subtitle: '100% Organic Fibrous Body Scrubber',
    category: 'Grooming & Bath',
    image: '/dryamenities/dryamenitie8.png',
    badge: 'Spa Grade',
    tag: '100% Compostable',
    description: 'Pure sun-dried vegetable sponge gourd loofah bordered with unbleached cotton ribbon. Gently buffs away dead skin cells, stimulates circulation, and softens skin.',
    contents: [
      '100% Natural Organic Loofah Sponge',
      'Soft Bound Cotton Edge Binding',
      'Recyclable Kraft Protective Envelope',
    ],
    specs: 'Standard MOQ: 500 units | Spa & Wellness Collection',
  },
  {
    id: 'hotel-slippers',
    title: 'Plush Velour Hotel Slippers',
    subtitle: 'Closed-Toe Luxury Guest Footwear',
    category: 'Room Comfort',
    image: '/dryamenities/dryamenitie7.png',
    badge: 'Luxury Comfort',
    tag: 'Anti-Slip Sole',
    description: 'Soft closed-toe guest slippers made of breathable velour with cushioned high-density foam insole and textured non-slip bottom for tranquil room relaxation.',
    contents: [
      'Ultra-Plush Breathable Velour Upper',
      '5mm Padded Memory Foam Cushioning',
      'Anti-Slip Textured Safe Grip Sole',
    ],
    specs: 'Standard MOQ: 500 pairs | Custom Monogram Available',
  },
];

// 8 Complete Suite Staging Flat-Lays from /public/dryamenities/
const stagingThemes = [
  {
    id: 'executive-noir',
    title: 'Executive Noir & Palm Suite',
    subtitle: 'Signature Dark Slate Edition',
    image: '/dryamenities/dryamenities16.png',
    tag: 'Grand Suite',
    category: 'Urban Luxury',
    description: 'Arranged against charcoal slate with fresh palm fronds and ambient candlelight. Ideal for boutique urban hotels and executive luxury suites.',
  },
  {
    id: 'rose-petal-spa',
    title: 'Rose Petal Spa Collection',
    subtitle: 'Deluxe Bathroom Suite Setup',
    image: '/dryamenities/dryamenitie12.png',
    tag: 'Resort & Villa',
    category: 'Honeymoon Suite',
    description: 'A complete room setup featuring plush slippers, natural loofah, dental kit, and grooming pouches styled on ivory marble with fresh rose petals.',
  },
  {
    id: 'azure-serenity',
    title: 'Azure Serenity Coastal',
    subtitle: 'Hydrangea & Waterfront Theme',
    image: '/dryamenities/dryamenitie13.png',
    tag: 'Coastal & Island',
    category: 'Seaside Resort',
    description: 'Cool aquatic tones, azure hydrangeas, and clear water ripples. Designed for beachfront villas, island retreats, and maritime sanctuaries.',
  },
  {
    id: 'zen-stone-spa',
    title: 'Zen Botanical Sanctuary',
    subtitle: 'River Pebbles & Fresh Water Lilies',
    image: '/dryamenities/dryamenitie14.png',
    tag: 'Wellness & Spa',
    category: 'Ayurvedic Retreat',
    description: 'Earthy river stones, tropical greenery, and floating blossoms creating a tranquil wellness atmosphere for spas and Ayurvedic retreats.',
  },
  {
    id: 'warm-silk-cream',
    title: 'Warm Silk Minimalist',
    subtitle: 'Neutral Cream Drapes & Candlelight',
    image: '/dryamenities/dryamenitie10.png',
    tag: 'Minimalist Boutique',
    category: 'Neutral Luxury',
    description: 'Draped silk fabrics and soft warm luminescence highlight the eco-friendly kraft paper tones, providing a soothing, uncluttered aesthetic.',
  },
  {
    id: 'midnight-marble',
    title: 'Nero Marquina Flat-Lay',
    subtitle: 'High-Contrast Architectural Luxury',
    image: '/dryamenities/dryamenitie9.png',
    tag: 'Contemporary Luxury',
    category: 'Signature Suite',
    description: 'Dramatic black stone surface that enhances the warm golden hue of our sustainable packaging, conveying prestige and refined minimalism.',
  },
  {
    id: 'botanical-candlelight',
    title: 'Botanical Candlelight Spa',
    subtitle: 'Lush Foliage & Intimate Lighting',
    image: '/dryamenities/dryamenitie15.png',
    tag: 'Heritage Hotel',
    category: 'Intimate Sanctuary',
    description: 'Soft amber candlelight and glistening water droplets create an intimate, pampering bath ritual in luxury heritage properties.',
  },
  {
    id: 'pearl-romantic',
    title: 'Romantic Pearl & Floral',
    subtitle: 'Soft Rose Silks & Shimmering Pearls',
    image: '/dryamenities/dryamenitie11.png',
    tag: 'Romance Collection',
    category: 'Presidential Suite',
    description: 'Blush silks, delicate baby’s breath, and scattered pearls tailored for honeymoon destinations, romance packages, and presidential suites.',
  },
];

const DryAmenity = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeHeroStagingIndex, setActiveHeroStagingIndex] = useState(0);
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter individual amenities
  const filteredAmenities = selectedCategory === 'All'
    ? individualAmenities
    : individualAmenities.filter((item) => item.category === selectedCategory);

  const categories = ['All', 'Personal Care', 'Grooming & Bath', 'Room Comfort'];

  // Spotlight staging options for hero showcase
  const spotlightStagings = [
    stagingThemes[0], // Executive Noir (dryamenities16.png)
    stagingThemes[1], // Rose Petal Spa (dryamenitie12.png)
    stagingThemes[2], // Azure Serenity (dryamenitie13.png)
    stagingThemes[4], // Warm Silk (dryamenitie10.png)
  ];

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', color: 'var(--primary)' }}>
      {/* ── Page Hero ── */}
      <PageHero
        image="/images/dry.png"
        label="Essential Comfort & Sustainability"
        title="Dry Amenities"
        subtitle="Thoughtfully designed sustainable guest room essentials crafted from renewable wheatstraw, organic cotton, and recyclable kraft packaging."
        height="60vh"
        objectFit="cover"
        objectPosition="center"
        disableParallax={true}
      />

      {/* ── Eco Credentials Quick Ticker ── */}
      <div style={{ background: '#111', color: '#f8f4ec', borderBottom: '1px solid rgba(200,169,110,0.3)', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✓</span> 100% Recyclable Kraft Pouches
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✓</span> Renewable Wheatstraw Handles
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✓</span> Vegan & Paraben-Free Formulations
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✓</span> Custom Hotel Logo Hot-Stamping
          </span>
        </div>
      </div>

      {/* ── Flagship Showcase Spotlight ── */}
      <section className="showcase-section" style={{ paddingBottom: '3rem' }}>
        <div className="showcase-card" style={{ alignItems: 'stretch' }}>
          {/* Left: Interactive Flagship Staging Visualizer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
                position: 'relative',
                background: '#0d0d0d',
                cursor: 'pointer',
              }}
              onClick={() => setActiveModalItem(spotlightStagings[activeHeroStagingIndex])}
              title="Click to view full screen"
            >
              <img
                src={spotlightStagings[activeHeroStagingIndex].image}
                alt={spotlightStagings[activeHeroStagingIndex].title}
                style={{
                  width: '100%',
                  height: 'clamp(360px, 46vw, 520px)',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(13,13,13,0.75)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--gold)',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(200,169,110,0.3)',
                }}
              >
                {spotlightStagings[activeHeroStagingIndex].tag}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              {spotlightStagings.map((theme, idx) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveHeroStagingIndex(idx)}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: activeHeroStagingIndex === idx ? '2px solid var(--gold)' : '2px solid transparent',
                    opacity: activeHeroStagingIndex === idx ? 1 : 0.65,
                    cursor: 'pointer',
                    padding: 0,
                    background: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: activeHeroStagingIndex === idx ? '0 4px 14px rgba(200,169,110,0.35)' : 'none',
                  }}
                  title={theme.title}
                >
                  <img
                    src={theme.image}
                    alt={theme.title}
                    style={{ width: '100%', height: '65px', objectFit: 'cover', display: 'block' }}
                  />
                </button>
              ))}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', fontStyle: 'italic' }}>
              Selected Styling: <strong style={{ color: 'var(--primary)' }}>{spotlightStagings[activeHeroStagingIndex].title}</strong>
            </div>
          </div>

          {/* Right: Flagship Collection Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              Vaidure Essentials · Signature Range
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>
              Eco-Conscious Guest Dry Amenities
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />

            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
              Where nature meets uncompromising luxury. Our dry amenities line eliminates single-use plastics from hotel guest bathrooms. Packaged in moisture-resistant, recyclable kraft paper and crafted from renewable agricultural wheatstraw byproducts, each accessory provides guest comfort while elevating your hotel’s sustainability profile.
            </p>

            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.85rem' }}>
              Complete Suite Collection Includes:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', marginBottom: '2rem' }}>
              {[
                'Wheatstraw Dental Care Kit',
                'Precision Shaving Kit & Gel',
                'Biodegradable Wheatstraw Comb',
                'Pure Organic Cotton Vanity Kit',
                'Pleated Elastic Shower Cap',
                'Emergency 6-Color Sewing Kit',
                '100% Natural Organic Loofah',
                'Plush Closed-Toe Hotel Slippers',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {item}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                <span>Request Sample Kit</span>
              </Link>
              <Link to="/b2b" style={{ padding: '0.85rem 1.8rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500, transition: 'all 0.3s' }}>
                B2B Bulk Programs
              </Link>
              <Link to="/packaging-customization" style={{ padding: '0.85rem 1.4rem', color: 'var(--gold-dark)', textDecoration: 'underline', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                Custom Branding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Individual Guest Essentials Catalog (8 Items) ── */}
      <section style={{ padding: '4rem 1.5rem 5rem', background: '#ffffff', borderTop: '1px solid rgba(200,169,110,0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
              <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
              Product Catalog
              <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
            </div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1rem' }}>
              Individual Guest Essentials
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Each item is independently packaged in sealed kraft paper with clear typography, ready for in-room guest trays, vanity boxes, or direct hospitality distribution.
            </p>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '30px',
                    border: selectedCategory === cat ? '1px solid var(--gold)' : '1px solid #e0e0e0',
                    background: selectedCategory === cat ? 'var(--primary)' : '#fcfcfc',
                    color: selectedCategory === cat ? 'var(--gold)' : 'var(--muted)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Individual Amenity Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {filteredAmenities.map((item) => (
              <div
                key={item.id}
                className="hover-lift"
                style={{
                  background: '#fdfbf7',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(200,169,110,0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                }}
              >
                {/* Product Image Wrap */}
                <div
                  style={{
                    position: 'relative',
                    height: '280px',
                    background: '#f4ede1',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => setActiveModalItem(item)}
                  title="Click to view full detail"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(13,13,13,0.8)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--gold)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(200,169,110,0.3)',
                    }}
                  >
                    {item.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {item.category}
                  </div>

                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    {item.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', color: 'var(--gold-dark)', fontWeight: 500, marginBottom: '0.85rem' }}>
                    {item.subtitle}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ borderTop: '1px dashed rgba(200,169,110,0.3)', paddingTop: '0.85rem', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                      Key Features:
                    </div>
                    {item.contents.map((c, i) => (
                      <div key={i} style={{ fontSize: '0.8rem', color: '#555', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.25rem' }}>
                        <span style={{ color: 'var(--gold)', fontSize: '0.75rem' }}>•</span> {c}
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', paddingTop: '0.5rem' }}>
                    <button
                      onClick={() => setActiveModalItem(item)}
                      style={{
                        padding: '8px 14px',
                        background: 'transparent',
                        border: '1px solid var(--gold)',
                        color: 'var(--gold-dark)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      Quick View
                    </button>
                    <Link
                      to="/contact"
                      style={{
                        padding: '8px 16px',
                        background: 'var(--primary)',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Staging Themes & Interior Harmony Gallery (8 Flat-Lays) ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0d0d0d', color: '#f8f4ec', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: 850, margin: '0 auto 3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
              <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
              Hospitality Staging Styles
              <span style={{ width: 28, height: 1, background: 'var(--gold)' }} />
            </div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#ffffff', fontWeight: 500, marginBottom: '1.25rem' }}>
              Harmonizing With Luxury Hotel Interiors
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.85, fontWeight: 300 }}>
              The organic warmth of our kraft packaging and clean architectural typography pairs effortlessly across diverse interior palettes — from minimalist Scandinavian boutique suites to dramatic dark stone bathrooms and sunlit coastal villas.
            </p>
          </div>

          {/* Staging Gallery Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.75rem' }}>
            {stagingThemes.map((theme) => (
              <div
                key={theme.id}
                className="hover-lift"
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#181818',
                  border: '1px solid rgba(200,169,110,0.25)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease',
                }}
                onClick={() => setActiveModalItem(theme)}
              >
                <div style={{ height: '320px', overflow: 'hidden', position: 'relative', background: '#000' }}>
                  <img
                    src={theme.image}
                    alt={theme.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0,0,0,0.8)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--gold)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      border: '1px solid rgba(200,169,110,0.3)',
                    }}
                  >
                    {theme.tag}
                  </div>
                </div>

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {theme.category}
                  </span>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.4rem', fontWeight: 500 }}>
                    {theme.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, flexGrow: 1 }}>
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Sustainable Engineering & Material Standards ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--cream)', borderBottom: '1px solid rgba(200,169,110,0.2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 750, margin: '0 auto 3.5rem' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
              The Science of Clean Hospitality
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.5rem 0 1rem' }}>
              Responsible Materials & Quality Standards
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--gold)', margin: '0 auto 1.5rem' }} />
            <p style={{ color: 'var(--muted)', fontSize: '0.96rem', lineHeight: 1.8 }}>
              Each dry amenity item is engineered to achieve zero compromise on luxury while eliminating landfill plastic waste.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '🌾',
                title: 'Renewable Wheatstraw',
                desc: 'Repurposing post-harvest agricultural wheatstraw to replace up to 70% of plastic resins in toothbrushes, combs, and razor handles.',
              },
              {
                icon: '📦',
                title: 'Recyclable Kraft Barriers',
                desc: 'Constructed from natural wood pulp kraft paper with food-grade protective interior coating to keep personal items moisture-free and hygienic.',
              },
              {
                icon: '🌱',
                title: 'Vegan & Paraben-Free',
                desc: 'Toothpaste and shave gel are certified vegan, cruelty-free, and formulated without harsh parabens, phthalates, or artificial dyes.',
              },
              {
                icon: '✨',
                title: 'Bespoke Co-Branding',
                desc: 'Tailor each pouch with your resort logo in metallic foil stamping, embossed black print, or custom Pantone matched brand identities.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '2.25rem 1.75rem',
                  borderRadius: '14px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(200,169,110,0.2)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{pillar.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: B2B Call To Action & Quotation ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
            Equip Your Property
          </span>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--primary)', fontWeight: 500, margin: '0.75rem 0 1.25rem' }}>
            Elevate Your Guest Bathroom Experience
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: 700, margin: '0 auto 2.5rem' }}>
            Whether you operate an intimate boutique lodge or an international 5-star hotel chain, our dry amenities line delivers refined aesthetics, sustainable values, and reliable bulk supply.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none', padding: '1rem 2.5rem' }}>
              <span>Request Hospitality Sample Box</span>
            </Link>
            <Link to="/b2b" style={{ padding: '1rem 2.2rem', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500, transition: 'all 0.3s' }}>
              View B2B Solutions
            </Link>
            <Link to="/packaging-customization" style={{ padding: '1rem 2.2rem', background: '#f5f0e6', border: '1px solid rgba(200,169,110,0.4)', color: 'var(--gold-dark)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              Custom Packaging Options
            </Link>
          </div>
        </div>
      </section>

      {/* ── Modal Lightbox for High-Resolution Visual Inspection ── */}
      {activeModalItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveModalItem(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '92vh',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s',
              }}
              aria-label="Close Preview"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div style={{ background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                style={{ width: '100%', height: '100%', maxHeight: '600px', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Modal Content Info */}
            <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
              <div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {activeModalItem.category || 'Vaidure Dry Amenities'}
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: 'var(--primary)', marginTop: '0.35rem', marginBottom: '0.35rem', fontWeight: 600 }}>
                  {activeModalItem.title}
                </h3>
                {activeModalItem.subtitle && (
                  <p style={{ color: 'var(--gold-dark)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                    {activeModalItem.subtitle}
                  </p>
                )}
                <div style={{ width: 40, height: 1.5, background: 'var(--gold)', marginBottom: '1.2rem' }} />

                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {activeModalItem.description}
                </p>

                {activeModalItem.contents && (
                  <div style={{ marginBottom: '1.5rem', background: '#fdfbf7', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(200,169,110,0.2)' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Included Specifications:
                    </div>
                    {activeModalItem.contents.map((c, i) => (
                      <div key={i} style={{ fontSize: '0.85rem', color: '#444', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                        <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span> {c}
                      </div>
                    ))}
                  </div>
                )}

                {activeModalItem.specs && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    {activeModalItem.specs}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                <Link
                  to="/contact"
                  className="btn-gold"
                  style={{ textDecoration: 'none', flexGrow: 1, textAlign: 'center', padding: '0.85rem 1.25rem' }}
                  onClick={() => setActiveModalItem(null)}
                >
                  <span>Request Quote For This Item</span>
                </Link>
                <button
                  onClick={() => setActiveModalItem(null)}
                  style={{
                    padding: '0.85rem 1.25rem',
                    background: '#f2f2f2',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DryAmenity;
