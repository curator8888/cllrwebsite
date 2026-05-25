import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelectorAll('.animate-in'), { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--colour-text-dark)', padding: 'clamp(4rem, 10vw, 6rem) clamp(1rem, 5vw, 3rem)', textAlign: 'center' }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 className="animate-in" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, color: 'white', marginBottom: '1rem' }}>
          Back the Plan for Olney & Rural
        </h2>
        <p className="animate-in" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
          Join our local campaign and help deliver the priorities that matter to our community. 
          Every supporter makes a difference in the fight for sensible, Conservative leadership.
        </p>
        <div className="animate-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <a
            href="mailto:david@david4olney.uk?subject=Join%20Our%20Campaign%20-%20Olney%20%26%20Rural"
            className="btn btn-primary"
            style={{ padding: '0.85rem 2.5rem', fontSize: '1rem' }}
          >
            Join Our Campaign
          </a>
          <a
            href="mailto:david@david4olney.uk?subject=Volunteer%20-%20Olney%20%26%20Rural"
            className="btn"
            style={{ background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.3)', padding: '0.85rem 2.5rem', fontSize: '1rem' }}
          >
            Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}
