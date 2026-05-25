import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const priorities = [
  {
    title: 'Fix Our Roads Properly',
    desc: 'Push for an immediate £1 million investment to tackle potholes properly — not patch-and-run, but a proactive approach fixing the problem for good. Too often, potholes are treated in isolation while the one next to it becomes a crater.',
  },
  {
    title: 'Street Lighting & Rural Infrastructure',
    desc: 'Fight for investment in street lighting and rural infrastructure. Olney and surrounding villages deserve safe, well-lit roads — not the neglect of a downtown-focused Labour-Lib Dem administration.',
  },
  {
    title: 'Clean Streets, Strong Communities',
    desc: 'Back the creation of new clean-up teams to tackle graffiti and fly-tipping. Our communities should not feel shabby or neglected. Pride in our villages must be matched by council action.',
  },
  {
    title: 'Support Local Businesses',
    desc: 'Oppose punitive parking charge rises that hit residents and deter shoppers. Fight Labour-Lib Dem plans to double parking costs. Local shops need support, not new financial burdens.',
  },
  {
    title: 'Community Safety',
    desc: 'Demand investment in knife crime prevention and back rural policing operations. Working with Thames Valley Police to keep antisocial behaviour down and protect families across our ward.',
  },
  {
    title: 'Infrastructure Before Housing',
    desc: 'Insist that proper roads, services, and green space provision are in place before any new housing development is approved. Rural villages must not be overwhelmed without proper planning.',
  },
]

export default function PrioritiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelectorAll('.animate-in'), { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="priorities"
      style={{ background: 'var(--colour-bg-light)', padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-label animate-in">Priorities</span>
        <h2 className="animate-in" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--colour-text-dark)', marginBottom: '0.75rem' }}>
          My Priorities for Olney & Rural
        </h2>
        <p className="animate-in" style={{ fontSize: '1rem', color: 'var(--colour-text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          The Milton Keynes Conservative plan in action. Standing up against a Labour-Liberal Democrat administration that has wasted over <strong style={{ color: 'var(--colour-text-dark)' }}>£50 million</strong> of taxpayers' money on poorly planned projects.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {priorities.map((p, i) => (
            <li
              key={i}
              className="animate-in"
              style={{
                padding: '1.25rem 0 1.25rem 2.75rem',
                borderBottom: i < priorities.length - 1 ? '1px solid var(--colour-border)' : 'none',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.4rem',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--colour-brand-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--colour-brand-blue)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}
              >
                ✓
              </span>
              <strong style={{ color: 'var(--colour-text-dark)', fontSize: '1rem', display: 'block', marginBottom: '0.25rem' }}>
                {p.title}
              </strong>
              <span style={{ color: 'var(--colour-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {p.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
