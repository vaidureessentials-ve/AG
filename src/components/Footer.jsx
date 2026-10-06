import { useState } from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Products: [
    { label: 'Gift Sets', to: '/products/gift-set' },
    { label: 'Dry Amenities', to: '/products/dry-amenity' },
    { label: 'Wet Amenities', to: '/products/wet-amenity' },
  ],
  Sustainability: [
    { label: 'Overview', to: '/sustainability' },
    { label: 'Eco Materials', to: '/sustainability/eco-materials' },
    { label: 'Refill Program', to: '/sustainability/refill-program' },
  ],
  Customization: [
    { label: 'Overview', to: '/customization' },
    { label: 'Private Label', to: '/customization/private-label' },
    { label: 'Custom Packaging', to: '/customization/packaging' },
  ],
  B2B: [
    { label: 'Hotel & Resort', to: '/b2b/hotel-resort' },
    { label: 'Hospital Amenities', to: '/b2b/hospital-amenities' },
    { label: 'Contact Us', to: '/contact' },
  ],
};

const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/vaidure_essential/', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )},
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vaidure-essential-52a1923a5/', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )},
  { label: 'Facebook', url: 'https://www.facebook.com/vaidureessentials/', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )},
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{ background: '#080808', color: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* Top gold line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      {/* Decorative orbs */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.06), transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.05), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      {/* Main footer content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <div style={{ display: 'grid', gap: '3rem', marginBottom: '4rem' }}>
          <style>{`
            @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr !important; } }
            @media (max-width: 1023px) and (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
            @media (max-width: 639px) { .footer-grid { grid-template-columns: 1fr !important; } }
          `}</style>
          <div className="footer-grid" style={{ display: 'grid', gap: '2.5rem' }}>

            {/* Brand column */}
            <div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.2em', color: '#fff', marginBottom: '1.25rem' }}>
                VAIDURE
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem', maxWidth: 260 }}>
                Pure Care. Thoughtfully Crafted.<br />
                Beautifully Branded.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.6)" strokeWidth="2" strokeLinecap="round" style={{ marginTop: 2, flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', lineHeight: 1.6 }}>Orbit Mall, Vijay Nagar, Indore, MP 452010</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.6)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.65-1.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:+919522700027" style={{ textDecoration: 'none' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500 }}>+91 95227 00027</span>
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.6)" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:info@vaidure.com" style={{ textDecoration: 'none' }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>info@vaidure.com</span>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.map(({ label, url, icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(200,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', transition: 'all 0.35s', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(200,169,110,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
                  {section}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', fontWeight: 300, textDecoration: 'none', transition: 'color 0.3s, padding-left 0.3s', display: 'inline-block' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.paddingLeft = '6px'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.paddingLeft = '0'; }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Column */}
            <div>
              <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
                Stay Connected
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>
                Subscribe to receive updates on new luxury collections and sustainability initiatives.
              </p>
              {subscribed ? (
                <div style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 400, padding: '0.75rem 1rem', background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.3)', borderRadius: 4 }}>
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '4px',
                      color: '#fff',
                      fontSize: '0.82rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      letterSpacing: '0.12em',
                      fontFamily: '"Inter", sans-serif'
                    }}
                  >
                    <span>Subscribe</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} VAIDURE Essential. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.68rem', letterSpacing: '0.05em', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
