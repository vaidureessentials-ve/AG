import PageHero from '../components/PageHero';

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
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <PageHero
        image="/images/contect.jpg"
        label="Get In Touch"
        title="Contact Us"
        subtitle="We look forward to connecting with you. Whether you have an inquiry about our B2B solutions or need support, our team is here to help."
        height="100vh"
        objectPosition="center"
      />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          
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
            <div style={{ background: '#fff', padding: '3rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderTop: '2px solid var(--gold)' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.5rem' }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--muted)', fontWeight: 300, fontSize: '0.9rem', marginBottom: '2rem' }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form action="https://formsubmit.co/info@vaidure.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input type="hidden" name="_captcha" value="false" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.2rem' }}>First Name *</label>
                    <input type="text" name="First Name" style={{ width: '100%', padding: '4px 8px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.3s' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.2rem' }}>Last Name *</label>
                    <input type="text" name="Last Name" style={{ width: '100%', padding: '4px 8px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.3s' }} required />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.2rem' }}>Email Address *</label>
                  <input type="email" name="Email" style={{ width: '100%', padding: '4px 8px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.3s' }} required />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.2rem' }}>Hotel / Company Name</label>
                  <input type="text" name="Company" style={{ width: '100%', padding: '4px 8px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.3s' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.2rem' }}>Inquiry Type *</label>
                  <select name="Inquiry Type" defaultValue="" style={{ width: '100%', padding: '4px 8px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.3s', fontFamily: 'inherit' }} required>
                    <option value="" disabled>Select an option</option>
                    <option value="b2b">Wholesale / B2B Inquiry</option>
                    <option value="custom">Private Label & Customization</option>
                    <option value="press">Press & Media</option>
                    <option value="other">General Question</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.2rem' }}>Your Message *</label>
                  <textarea name="Message" rows="2" style={{ width: '100%', padding: '4px 8px', fontSize: '0.85rem', background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }} required></textarea>
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '10px 20px', fontFamily: '"Inter", sans-serif' }}>
                  <span>Submit Inquiry</span>
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
