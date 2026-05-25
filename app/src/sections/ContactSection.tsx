import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelectorAll('.animate-in'), { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{ background: 'var(--colour-bg-pure)', padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label animate-in">Contact</span>
          <h2 className="animate-in" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--colour-text-dark)', marginBottom: '0.75rem' }}>
            Get in Touch
          </h2>
          <p className="animate-in" style={{ fontSize: '1rem', color: 'var(--colour-text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            David holds regular advice surgeries and is always available to hear from residents. No issue is too small.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}
        >
          {/* Email */}
          <div className="animate-in card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📧</div>
            <div style={{ fontWeight: 500, fontSize: '0.8rem', color: 'var(--colour-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              Email
            </div>
            <a
              href="mailto:david@david4olney.uk"
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--colour-brand-blue)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colour-brand-blue-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--colour-brand-blue)')}
            >
              david@david4olney.uk
            </a>
          </div>

          {/* Facebook */}
          <div className="animate-in card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📘</div>
            <div style={{ fontWeight: 500, fontSize: '0.8rem', color: 'var(--colour-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              Facebook
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61583975503783"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--colour-brand-blue)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colour-brand-blue-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--colour-brand-blue)')}
            >
              David Tyler on Facebook
            </a>
          </div>

          {/* Surgery */}
          <div className="animate-in card card-blue-border" style={{ gridColumn: '1 / -1' }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', color: 'var(--colour-text-dark)', marginBottom: '1rem' }}>
              🗓️ Advice Surgeries
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--colour-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              David holds regular advice surgeries across Olney & Rural Ward. This is your opportunity to discuss any local issue — from planning concerns to road maintenance, community safety to council services.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="mailto:david@david4olney.uk?subject=Advice%20Surgery%20Appointment" className="btn btn-blue">
                Book a Surgery Appointment
              </a>
              <a href="mailto:david@david4olney.uk?subject=Contact%20from%20Resident" className="btn btn-outline">
                Email David
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
