export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(135deg, #0087DC 0%, #006FB5 50%, #0F172A 100%)',
        paddingTop: '64px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 5vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left - Logo, Name, Text */}
        <div>
          {/* Logo + Name block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '8px',
              }}
            >
              <img
                src="/images/conservative-logo.png"
                alt="Conservative Party"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'white', lineHeight: 1.1 }}>
                David Tyler
              </p>
              <p style={{ fontWeight: 500, fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem', letterSpacing: '0.5px' }}>
                Olney & Rural Ward
              </p>
            </div>
          </div>

          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '0.35rem 0.9rem',
              borderRadius: '100px',
              fontWeight: 500,
              fontSize: '0.75rem',
              color: 'white',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Re-Elect 2027
          </span>

          <h1
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Working for our community, defending rural voices
          </h1>

          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '520px',
              marginBottom: '1.75rem',
            }}
          >
            Your Conservative Councillor on Milton Keynes City Council.
            Delivering <strong>Fix the Basics. Plan the Future.</strong> Fighting
            this Liberal Democrat led council on every wasteful decision.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            <a href="mailto:david@david4olney.uk?subject=Join%20Our%20Campaign" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}>
              Join Our Campaign
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', padding: '0.75rem 1.75rem', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right - Photo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', maxWidth: '380px', width: '100%' }}>
            <img
              src="/images/david-tyler.png"
              alt="Councillor David Tyler in Olney town centre"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
