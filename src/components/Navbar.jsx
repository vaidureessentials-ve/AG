import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    to: '/products',
    label: 'Products',
    dropdown: [
      { to: '/products/gift-set', label: 'Gift Set' },
      { to: '/products/dry-amenity', label: 'Dry Amenity' },
      { to: '/products/wet-amenity', label: 'Wet Amenity' },
    ],
  },
  {
    to: '/sustainability',
    label: 'Sustainability',
    dropdown: [
      { to: '/sustainability/eco-materials', label: 'Eco Materials' },
      { to: '/sustainability/refill-program', label: 'Refill Program' },
    ],
  },
  {
    to: '/customization',
    label: 'Customization',
    dropdown: [
      { to: '/customization/private-label', label: 'Private Label' },
      { to: '/customization/packaging', label: 'Packaging' },
    ],
  },
  {
    to: '/b2b',
    label: 'B2B Solutions',
    dropdown: [
      { to: '/b2b/hotel-resort', label: 'Hotel & Resort Amenity' },
      { to: '/b2b/hospital-amenities', label: 'Hospital Amenities' },
    ],
  },
  { to: '/about', label: 'About Us' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  const toggleMobileExpand = (label) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isScrolled = scrolled || !isHomePage;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
          padding: isScrolled ? '16px 0' : '28px 0',
          background: isScrolled
            ? 'rgba(248,244,236,0.96)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(200,169,110,0.15)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1rem, 3.5vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              position: 'relative',
            }}
          >
            <span style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.4rem, 4.5vw, 1.9rem)',
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: isScrolled ? 'var(--primary)' : '#fff',
              transition: 'color 0.4s',
              position: 'relative',
            }}>
              VAIDURE
              <span style={{
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: '100%',
                height: '1px',
                background: 'var(--gold)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
              }} className="logo-underline" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <div
                key={link.to}
                onMouseEnter={() => setHovered(link.to)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative' }}
              >
                <Link
                  to={link.to}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: isScrolled
                      ? (location.pathname.startsWith(link.to) ? 'var(--gold)' : 'var(--primary)')
                      : (location.pathname.startsWith(link.to) ? 'var(--gold)' : 'rgba(255,255,255,0.85)'),
                    transition: 'color 0.3s',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <span style={{ fontSize: '0.6rem', transition: 'transform 0.3s', transform: hovered === link.to ? 'rotate(180deg)' : 'rotate(0)' }}>▾</span>
                  )}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'var(--gold)',
                    transform: hovered === link.to || location.pathname.startsWith(link.to) ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }} />
                </Link>

                {link.dropdown && hovered === link.to && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '12px',
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        background: '#fff',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(200,169,110,0.2)',
                        borderRadius: '4px',
                        padding: '0.75rem 0',
                        minWidth: '170px',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.to}
                          to={subLink.to}
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--primary)',
                            textDecoration: 'none',
                            padding: '0.6rem 1.25rem',
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--gold)';
                            e.currentTarget.style.background = 'rgba(200,169,110,0.06)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--primary)';
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link
              to="/contact"
              className="hidden-mobile"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                border: '1.5px solid var(--gold)',
                color: isScrolled ? 'var(--primary)' : '#fff',
                borderColor: 'var(--gold)',
                background: 'transparent',
                transition: 'all 0.35s',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isScrolled ? 'var(--primary)' : '#fff'; }}
            >
              Contact Us
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                zIndex: 1100,
              }}
              className="show-mobile"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: i === 1 ? (menuOpen ? '28px' : '20px') : '28px',
                    height: '2px',
                    background: menuOpen ? 'var(--gold)' : (isScrolled ? 'var(--primary)' : '#fff'),
                    transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                    transform: menuOpen
                      ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)')
                      : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        .mobile-nav-scroll::-webkit-scrollbar { display: none; }
        .mobile-nav-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 998,
            animation: 'scaleIn 0.3s ease both',
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'min(88vw, 360px)',
          height: '100vh',
          background: 'var(--primary)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem clamp(1.5rem, 5vw, 2.5rem) 2.5rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
          borderLeft: '1px solid rgba(200,169,110,0.2)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Decorative orb */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 250, height: 250,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.15), transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ width: 40, height: 1, background: 'var(--gold)', marginBottom: '0.5rem' }} />
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>Menu</span>
        </div>

        <nav className="mobile-nav-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1, overflowY: 'auto' }}>
          {navLinks.map((link) => (
            <div key={link.to} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: location.pathname.startsWith(link.to) ? 'var(--gold)' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    padding: '0.4rem 0',
                  }}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => toggleMobileExpand(link.label)}
                    aria-label="Toggle Submenu"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--gold)',
                      padding: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: (mobileExpanded[link.label] || location.pathname.startsWith(link.to))
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Mobile Submenu Dropdown */}
              {link.dropdown && (mobileExpanded[link.label] || location.pathname.startsWith(link.to)) && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '0.8rem', marginTop: '0.3rem', marginBottom: '0.3rem' }}>
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.78rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: location.pathname === sub.to ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        padding: '0.3rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '0.5rem', color: 'var(--gold)' }}>◆</span>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link
            to="/contact"
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.72rem', letterSpacing: '0.18em' }}
          >
            <span>Contact Us</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
            <a href="tel:+919522700027" style={{ color: 'inherit', textDecoration: 'none' }}>+91 95227 00027</a> · <a href="mailto:info@vaidure.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@vaidure.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

