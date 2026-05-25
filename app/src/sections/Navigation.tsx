import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(226,232,240,0.6)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 5vw, 3rem)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/images/conservative-logo.png"
            alt="Conservative Party"
            style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0, borderRadius: '4px' }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--colour-text-dark)', lineHeight: 1.2 }}>
              Councillor David Tyler
            </div>
            <div style={{ fontWeight: 500, fontSize: '0.75rem', color: 'var(--colour-text-muted)' }}>
              Olney & Rural Ward
            </div>
          </div>
        </div>

        <div className="nav-links" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
          {[
            { label: 'About', href: '#about' },
            { label: 'Priorities', href: '#priorities' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none',
                border: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: 'var(--colour-text-dark)',
                cursor: 'pointer',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-inter)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colour-brand-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--colour-text-dark)')}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:david@david4olney.uk?subject=Join%20Our%20Campaign"
            className="btn btn-primary"
          >
            Join Our Campaign
          </a>
        </div>
      </div>
    </nav>
  )
}
