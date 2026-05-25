import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelectorAll('.animate-in'), { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ background: 'var(--colour-bg-pure)', padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <span className="section-label animate-in">About David</span>

          <h2 className="animate-in" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--colour-text-dark)' }}>
            Experienced Leadership for Our Community
          </h2>

          <p className="animate-in" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--colour-text-dark)' }}>
            David Tyler is your Conservative Councillor for Olney & Rural Ward on Milton Keynes City Council. 
            With a distinguished career spanning national security, cyber defence, and community leadership, 
            David brings a unique blend of technical expertise and public service commitment to his council work.
          </p>

          <div
            className="animate-in"
            style={{
              borderLeft: '4px solid var(--colour-brand-blue)',
              background: 'var(--colour-bg-light)',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 6px 6px 0',
            }}
          >
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--colour-text-dark)', fontStyle: 'italic' }}>
              "Proud to serve the community I call home. Whether it's tackling local planning concerns, 
              supporting rural infrastructure, or ensuring every resident's voice is heard at the council 
              table — I am here to work for you."
            </p>
          </div>

          <p className="animate-in" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
            A firm believer in personal responsibility, free enterprise, and the importance of strong local 
            institutions. David champions the Conservative principles that have long served Britain well — 
            low taxation, responsible governance, and preserving the unique character of our rural villages.
          </p>


        </div>

        <div className="animate-in" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/david-tyler.png"
            alt="David Tyler - Conservative Councillor"
            loading="lazy"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '8px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}
