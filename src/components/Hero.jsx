import { useEffect, useRef, useState } from 'react';
import { getISTTimestamp, getPageUrl } from '../utils/formHelper';

const Hero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `scale(1.08) translateY(${y * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formStatus, setFormStatus] = useState('idle');
  const [formMsg, setFormMsg] = useState('');

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormMsg('');
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const istTime = getISTTimestamp();
    const pageUrl = getPageUrl();

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@vaidure.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Inquiry from Hero Form (${data.Name || 'Visitor'}) - ${istTime}`,
          _template: 'table',
          _captcha: 'false',
          ...data,
          'Submission Time (IST)': istTime,
          'Submitted From': pageUrl,
        }),
      });

      const result = await res.json();
      if (result.success === 'true' || result.success === true) {
        setFormStatus('success');
        form.reset();
      } else if (result.message && result.message.toLowerCase().includes('activation')) {
        setFormStatus('needs_activation');
        setFormMsg("Activation Required: An activation email from FormSubmit was sent to info@vaidure.com. Please click 'Activate Form' in your inbox to enable email forwarding.");
      } else {
        setFormStatus('error');
        setFormMsg(result.message || 'Unable to send message. Please try again.');
      }
    } catch {
      // Fallback to normal form submit if fetch fails (e.g. strict browser blockers)
      if (form.elements['Submission Time (IST)']) {
        form.elements['Submission Time (IST)'].value = istTime;
      }
      form.submit();
    }
  };

  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0d0d0d' }}>

      {/* Background with parallax */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          ref={bgRef}
          src="/images/hero.png"
          alt="Luxury spa"
          style={{ width: '100%', height: '115%', objectFit: 'cover', transform: 'scale(1.08)', transformOrigin: 'center top', opacity: 0.4, transition: 'transform 0.05s linear' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.72) 50%, rgba(13,13,13,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.09) 0%, transparent 60%)' }} />
      </div>

      {/* Floating orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '2%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.06), transparent 70%)', filter: 'blur(80px)', animation: 'float 12s ease-in-out infinite', zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.07), transparent 70%)', filter: 'blur(60px)', animation: 'float 9s ease-in-out 3s infinite', zIndex: 1 }} />

      {/* Gold top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%)', opacity: 0.6, zIndex: 5 }} />

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes heroin { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scrollBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @media (min-width: 900px) { .hero-grid { grid-template-columns: 3fr 2fr !important; } }
        @media (max-width: 899px) { 
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-section { align-items: flex-start !important; }
          .hero-content { padding: 6rem 1.5rem 4rem !important; }
          .hero-scroll { display: none !important; }
        }
      `}</style>

      {/* Content */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '7rem 2rem 5rem', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'center' }}>

          {/* LEFT: Copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem', animation: 'heroin 0.8s ease 0.2s both' }}>
              <div style={{ width: 40, height: 1, background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>Tailored Elegance</span>
            </div>

            <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 600, color: '#fff', lineHeight: 1.05, marginBottom: '1.25rem', animation: 'heroin 0.9s ease 0.4s both' }}>
              We Offer<br />
              Every Client<br />
              <span style={{ background: 'linear-gradient(90deg, #c8a96e, #e2c99a, #c8a96e)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic', animation: 'shimmer 4s ease-in-out infinite' }}>
                Customization.
              </span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.85, maxWidth: 520, marginBottom: '2.25rem', animation: 'heroin 0.9s ease 0.6s both' }}>
              Premium hotel toiletries and body care solutions designed for modern hospitality and conscious consumers. Experience the true essence of luxury.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'heroin 0.9s ease 0.85s both' }}>
              <a href="/products" className="btn-gold" style={{ fontFamily: '"Inter", sans-serif' }}>
                <span>Explore Products</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/about" className="btn-white-outline" style={{ fontFamily: '"Inter", sans-serif' }}>
                <span>Our Story</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Card */}
          <div style={{ animation: 'heroin 1s ease 0.55s both' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(200,169,110,0.22)', padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--gold), rgba(200,169,110,0.3), transparent)' }} />
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>Get In Touch</span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.55rem', color: '#fff', marginTop: '0.4rem', fontWeight: 500 }}>Let's Create Together</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginTop: '0.3rem' }}>Tell us about your hotel's vision</p>
              </div>

              {formStatus === 'success' && (
                <div style={{ padding: '0.85rem 1rem', background: 'rgba(200,169,110,0.15)', border: '1px solid var(--gold)', borderRadius: 4, color: 'var(--gold-light)', fontSize: '0.82rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                  ✓ Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              {formStatus === 'needs_activation' && (
                <div style={{ padding: '0.85rem 1rem', background: 'rgba(217,119,6,0.18)', border: '1px solid #d97706', borderRadius: 4, color: '#fcd34d', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                  ⚠️ {formMsg}
                </div>
              )}

              {formStatus === 'error' && (
                <div style={{ padding: '0.85rem 1rem', background: 'rgba(220,38,38,0.18)', border: '1px solid #dc2626', borderRadius: 4, color: '#fca5a5', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                  ✕ {formMsg}
                </div>
              )}

              <form onSubmit={handleHeroSubmit} action="https://formsubmit.co/info@vaidure.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Inquiry from Vaidure Hero Form" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="Submission Time (IST)" value={getISTTimestamp()} />
                <input type="hidden" name="Submitted From" value={getPageUrl()} />
                <input type="hidden" name="_next" value={getPageUrl()} />
                {[{ p: 'Your Name', t: 'text', id: 'h-name', n: 'Name' }, { p: 'Phone Number', t: 'tel', id: 'h-phone', n: 'Phone' }, { p: 'Email Address', t: 'email', id: 'h-email', n: 'Email' }].map(f => (
                  <input key={f.id} id={f.id} name={f.n} type={f.t} placeholder={f.p} required className="vaidure-input" style={{ fontFamily: '"Inter", sans-serif' }} />
                ))}
                <textarea id="h-msg" name="Message" placeholder="Tell us about your requirements..." rows={3} required className="vaidure-input" style={{ fontFamily: '"Inter", sans-serif', resize: 'none' }} />
                <button type="submit" disabled={formStatus === 'submitting'} className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem', fontFamily: '"Inter", sans-serif', opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'wait' : 'pointer' }}>
                  <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10, cursor: 'pointer', animation: 'heroin 1s ease 1.3s both' }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.56rem', letterSpacing: '0.32em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 22, height: 36, border: '1.5px solid rgba(200,169,110,0.35)', borderRadius: 11, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 3, height: 7, borderRadius: 2, background: 'var(--gold)', animation: 'scrollBob 1.6s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;


