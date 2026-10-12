import { useEffect, useRef } from 'react';

/**
 * Reusable full-bleed page hero with parallax background image,
 * gold gradient overlay, floating orbs, and animated text.
 *
 * Props:
 *  - image: string (URL)
 *  - label: string (small uppercase tag line)
 *  - title: string or JSX
 *  - subtitle: string
 *  - height: string (CSS value, default '65vh')
 */
const PageHero = ({
  image,
  label,
  title,
  subtitle,
  height = '65vh',
  objectFit = 'cover',
  objectPosition = 'center top',
  overlayOpacity = 0.6,
  disableParallax = false,
  backgroundColor = '#0d0d0d',
}) => {
  const bgRef = useRef(null);

  useEffect(() => {
    if (disableParallax) return;
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `scale(1.08) translateY(${y * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disableParallax]);

  return (
    <section
      className="page-hero-container"
      style={{
        position: 'relative',
        height,
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: backgroundColor,
      }}
    >
      {/* Parallax background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          ref={bgRef}
          src={image}
          alt={label || 'page hero'}
          style={{
            width: '100%',
            height: disableParallax ? '100%' : '115%',
            objectFit: objectFit,
            objectPosition: objectPosition,
            transform: disableParallax ? 'none' : 'scale(1.08)',
            transformOrigin: 'center top',
            opacity: 0.85,
            transition: 'transform 0.05s linear',
          }}
        />
        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, rgba(13,13,13,${overlayOpacity}) 0%, rgba(13,13,13,${overlayOpacity * 0.5}) 60%, rgba(13,13,13,0.1) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 40%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(200,169,110,0.15) 0%, transparent 65%)' }} />
      </div>

      {/* Gold accent line top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%)', opacity: 0.7, zIndex: 5 }} />

      {/* Floating orbs */}
      <div style={{ position: 'absolute', top: '15%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.07), transparent 70%)', filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite', zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.06), transparent 70%)', filter: 'blur(60px)', animation: 'float 8s ease-in-out 2s infinite', zIndex: 1 }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          width: '100%',
          paddingTop: 'clamp(4.5rem, 9vw, 6rem)',
          paddingBottom: 'clamp(2rem, 5vw, 3rem)',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {label && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: '1.2rem',
              animation: 'heroin 0.8s ease 0.2s both',
            }}
          >
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.3em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {label}
            </span>
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
          </div>
        )}

        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '1rem',
            animation: 'heroin 0.9s ease 0.35s both',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: 640,
              margin: '0 auto',
              animation: 'heroin 0.9s ease 0.5s both',
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative divider */}
        <div
          style={{
            width: 60,
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            margin: '1.5rem auto 0',
            animation: 'heroin 0.9s ease 0.65s both',
          }}
        />
      </div>

      <style>{`
        @keyframes heroin { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
      `}</style>
    </section>
  );
};

export default PageHero;
