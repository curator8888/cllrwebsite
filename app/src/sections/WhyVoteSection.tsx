import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    image: '/images/why-delivering.jpg',
    title: 'Delivering Results',
    body: 'Holding the Liberal Democrat-led council to account and getting our ward its fair share for road repairs and other improvements. Ensuring the Lib Dem council does not waste money when every penny should be invested to have impact.',
  },
  {
    image: '/images/why-voice.jpg',
    title: 'Your Voice in the Council',
    body: 'David attends frequent Parish and Town Council meetings and is on the Audit Committee at Milton Keynes Council, ensuring the council explains its spending and making sure every penny is properly invested to support our community.',
  },
]

export default function WhyVoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--colour-bg-pure)', padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-label">Re-Elect David Tyler</span>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--colour-text-dark)', marginBottom: '1rem' }}>
          Why Re-Elect David?
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--colour-text-muted)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          David has the commitment and the track record to keep fighting for Olney & Rural Ward.
        </p>

        <div
          ref={cardsRef}
          className="why-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', textAlign: 'left' }}
        >
          {reasons.map((r, i) => (
            <div
              key={i}
              className="card card-blue-border"
              style={{ overflow: 'hidden', padding: 0 }}
            >
              {/* Image */}
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '1.15rem', color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--colour-text-muted)', lineHeight: 1.6 }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--colour-text-muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>
          This uses AI-generated images for illustrative purposes only.
        </p>
      </div>
    </section>
  )
}
