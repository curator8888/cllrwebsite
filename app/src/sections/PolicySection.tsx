import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const policies = [
  {
    icon: '🛣️',
    title: 'Fix Our Roads',
    body: 'Push for £1 million in immediate investment to tackle potholes properly — not patch-and-run, but a proactive approach that fixes the problem for good. Rural roads have suffered too long.',
  },
  {
    icon: '💡',
    title: 'Street Lighting',
    body: 'Fight for investment in street lighting and rural infrastructure. Olney and surrounding villages deserve safe, well-lit roads — not the neglect of a downtown-focused administration.',
  },
  {
    icon: '🧹',
    title: 'Clean Streets',
    body: 'Back new clean-up teams to tackle graffiti and fly-tipping. Our communities should not feel shabby or neglected. Pride in our villages must be matched by council action.',
  },
  {
    icon: '🏪',
    title: 'Support Local Business',
    body: 'Oppose punitive parking charge rises that hit residents and deter shoppers. Fight Labour-Lib Dem plans to double parking costs. Local shops need support, not new burdens.',
  },
  {
    icon: '🛡️',
    title: 'Community Safety',
    body: 'Demand investment in knife crime prevention and back rural policing operations. Working with Thames Valley Police to keep antisocial behaviour down and protect families.',
  },
  {
    icon: '🏘️',
    title: 'Infrastructure Before Housing',
    body: 'Insist that proper roads, services, and green space provision are in place before any new housing is approved. Rural villages must not be overwhelmed without proper planning.',
  },
  {
    icon: '🌊',
    title: 'Rural Flood Prevention',
    body: 'Our rural communities are bearing the brunt of flooding because this Labour-Lib Dem council is focused on urban expansion. I will fight for proper flood defences and protect the natural floodplains being paved over by overdevelopment. Prevention must come before crisis.',
  },
  {
    icon: '🛑',
    title: 'Stop Over-Development',
    body: "The council's appetite for sprawling development is destroying the rural character of our villages. I will fight every reckless 'New Town' proposal that threatens to concrete over our countryside without infrastructure, consultation, or consent.",
  },
]

export default function PolicySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--colour-bg-light)', padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">Our Plan</span>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--colour-text-dark)', marginBottom: '0.75rem' }}>
          What David Is Fighting For
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--colour-text-muted)', maxWidth: '650px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Delivering the Milton Keynes Conservative plan: <strong style={{ color: 'var(--colour-text-dark)' }}>Fix the Basics. Plan the Future.</strong> We will fight this Labour-Liberal Democrat council on every wasteful, short-sighted decision.
        </p>

        <div
          ref={cardsRef}
          className="policy-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}
        >
          {policies.map((p, i) => (
            <div key={i} className="card" style={{ borderTop: '3px solid var(--colour-brand-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--colour-text-dark)', marginBottom: '0.4rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--colour-text-muted)', lineHeight: 1.6 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
