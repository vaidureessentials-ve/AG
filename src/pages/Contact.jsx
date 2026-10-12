import { useState } from 'react';
import PageHero from '../components/PageHero';
import { getISTTimestamp, getPageUrl } from '../utils/formHelper';

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

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formMsg, setFormMsg] = useState('');

  const handleSubmit = async (e) => {
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
          _subject: `New Inquiry from Contact Page (${data['Inquiry Type'] || 'General'}) - ${data['First Name'] || ''} ${data['Last Name'] || ''} - ${istTime}`,
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
        setFormMsg("Activation Required: An activation email from FormSubmit was sent to info@vaidure.com. Please check your inbox and click 'Activate Form' to enable email forwarding.");
      } else {
        setFormStatus('error');
        setFormMsg(result.message || 'Unable to submit inquiry. Please try again.');
      }
    } catch {
      if (form.elements['Submission Time (IST)']) {
        form.elements['Submission Time (IST)'].value = istTime;
      }
      form.submit();
    }
  };

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <PageHero
        image="/images/contect.jpg"
        label="Get In Touch"
        title="Contact Us"
        subtitle="We look forward to connecting with you. Whether you have an inquiry about our B2B solutions or need support, our team is here to help."
        height="60vh"
        objectPosition="center"
      />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
          
          {/* ── Left: Contact Info & Showroom Image ── */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <SectionLabel>Contact Us</SectionLabel>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '1.5rem' }}>
                Get in Touch
              </h2>
              <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
                Get in touch with us for inquiries, support, or business collaboration.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>Phone</div>
                  <a href="tel:+919522700027" style={{ color: 'var(--primary)', fontWeight: 500 }}>+91 95227 00027</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>Email</div>
                  <a href="mailto:info@vaidure.com" style={{ color: 'var(--primary)', fontWeight: 500 }}>info@vaidure.com</a>
                </div>
              </div>
            </div>


            <div>
              <SectionLabel>Our Office</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                {[
                  { city: 'Indore', desc: 'Orbit Mall, Vijay Nagar, Indore, Madhya Pradesh 452010' },
                ].map((office) => (
                  <div key={office.city} style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}>
                    <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.2rem' }}>
                      {office.city}
                    </h4>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 300 }}>
                      {office.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="reveal-right">
            <div style={{ background: '#fff', padding: 'clamp(1.5rem, 4vw, 3rem)', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderTop: '2px solid var(--gold)', borderRadius: 4, boxSizing: 'border-box' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.5rem, 3.5vw, 1.8rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.5rem' }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--muted)', fontWeight: 300, fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formStatus === 'success' && (
                <div style={{ padding: '0.9rem 1.1rem', background: 'rgba(200,169,110,0.15)', border: '1px solid var(--gold)', borderRadius: 4, color: 'var(--gold-dark)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.5, fontWeight: 500 }}>
                  ✓ Thank you! Your message has been sent successfully. Our team will get back to you within 24 hours.
                </div>
              )}

              {formStatus === 'needs_activation' && (
                <div style={{ padding: '0.9rem 1.1rem', background: 'rgba(217,119,6,0.15)', border: '1px solid #d97706', borderRadius: 4, color: '#b45309', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  ⚠️ {formMsg}
                </div>
              )}

              {formStatus === 'error' && (
                <div style={{ padding: '0.9rem 1.1rem', background: 'rgba(220,38,38,0.12)', border: '1px solid #dc2626', borderRadius: 4, color: '#b91c1c', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  ✕ {formMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} action="https://formsubmit.co/info@vaidure.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Inquiry from Contact Page" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="Submission Time (IST)" value={getISTTimestamp()} />
                <input type="hidden" name="Submitted From" value={getPageUrl()} />
                <input type="hidden" name="_next" value={getPageUrl()} />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.3rem' }}>First Name *</label>
                    <input type="text" name="First Name" style={{ width: '100%', padding: '8px 10px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.12)', outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.3rem' }}>Last Name *</label>
                    <input type="text" name="Last Name" style={{ width: '100%', padding: '8px 10px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.12)', outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box' }} required />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.3rem' }}>Email Address *</label>
                  <input type="email" name="Email" style={{ width: '100%', padding: '8px 10px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.12)', outline: 'none', transition: 'border-color 0.3s' }} required />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.3rem' }}>Hotel / Company Name</label>
                  <input type="text" name="Company" style={{ width: '100%', padding: '8px 10px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.12)', outline: 'none', transition: 'border-color 0.3s' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.3rem' }}>Inquiry Type *</label>
                  <select name="Inquiry Type" defaultValue="" style={{ width: '100%', padding: '8px 10px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.12)', outline: 'none', transition: 'border-color 0.3s', fontFamily: 'inherit' }} required>
                    <option value="" disabled>Select an option</option>
                    <option value="b2b">Wholesale / B2B Inquiry</option>
                    <option value="custom">Private Label & Customization</option>
                    <option value="press">Press & Media</option>
                    <option value="other">General Question</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.3rem' }}>Your Message *</label>
                  <textarea name="Message" rows="3" style={{ width: '100%', padding: '8px 10px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.12)', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }} required></textarea>
                </div>

                <button type="submit" disabled={formStatus === 'submitting'} className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '12px 20px', fontFamily: '"Inter", sans-serif', opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'wait' : 'pointer' }}>
                  <span>{formStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
