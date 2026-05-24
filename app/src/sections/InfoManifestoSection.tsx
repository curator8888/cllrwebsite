import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const policyCards = [
  {
    icon: '🛣️',
    title: 'Fix Our Roads',
    body: 'Push for £1 million in immediate investment to tackle potholes properly — not patch-and-run, but a proactive approach that fixes the problem for good. Rural roads have suffered too long under a council that builds everywhere but maintains nothing.',
  },
  {
    icon: '💡',
    title: 'Street Lighting & Infrastructure',
    body: 'Fight for investment in street lighting and rural infrastructure. Olney and surrounding villages deserve safe, well-lit roads and reliable utilities — not the neglect of a downtown-focused Labour-Lib Dem administration.',
  },
  {
    icon: '🧹',
    title: 'Clean Streets, Strong Communities',
    body: 'Back the creation of new clean-up teams to tackle graffiti and fly-tipping. Our communities should not feel shabby or neglected. Pride in our villages must be matched by council action.',
  },
  {
    icon: '🏪',
    title: 'Support Local Businesses',
    body: 'Oppose punitive parking charge rises that hit residents and deter shoppers. Fight Labour-Lib Dem plans to double parking costs. Local shops and high streets need support, not new financial burdens.',
  },
  {
    icon: '🛡️',
    title: 'Community Safety',
    body: 'Demand investment in knife crime prevention and back rural policing operations. Working with Thames Valley Police to keep antisocial behaviour down and protect families across our ward.',
  },
  {
    icon: '🏘️',
    title: 'Infrastructure Before Housing',
    body: 'Insist that proper roads, services, and green space provision are in place before any new housing development is approved. Rural villages must not be overwhelmed without proper planning.',
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

export default function InfoManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<HTMLDivElement[]>([])
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 1.5,
        },
      })

      const t1 = textRefs.current[0] // "Fix"
      const t2 = textRefs.current[1] // "The Basics"
      const t3 = textRefs.current[2] // dot
      const t4 = textRefs.current[3] // "Plan"
      const t5 = textRefs.current[4] // "The"
      const t6 = textRefs.current[5] // "Future"
      const tagline = textRefs.current[6] // manifesto tagline
      const subtitle = textRefs.current[7] // section subtitle

      const c1 = cardRefs.current[0]
      const c2 = cardRefs.current[1]
      const c3 = cardRefs.current[2]
      const c4 = cardRefs.current[3]
      const c5 = cardRefs.current[4]
      const c6 = cardRefs.current[5]
      const c7 = cardRefs.current[6]
      const c8 = cardRefs.current[7]

      // 1. "Fix" from left
      tl.fromTo(t1, { x: '-100vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'power1.out' })

      // 2. "The Basics" from right at 0.08
      tl.fromTo(t2, { x: '100vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.08)

      // 3. Card 1 from left at 0.16
      tl.fromTo(c1, { x: '-50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.16)

      // 4. Card 2 from right at 0.22
      tl.fromTo(c2, { x: '50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.22)

      // 5. Dot from top at 0.28
      tl.fromTo(t3, { y: '-100vh', scale: 4.5, opacity: 0 }, { y: 0, scale: 1, opacity: 1 }, 0.28)

      // 6. Card 3 from left at 0.33
      tl.fromTo(c3, { x: '-50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.33)

      // 7. Card 4 from right at 0.38
      tl.fromTo(c4, { x: '50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.38)

      // 8. "Plan" from left at 0.44
      tl.fromTo(t4, { x: '-100vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.44)

      // 9. Card 5 from left at 0.52
      tl.fromTo(c5, { x: '-50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.52)

      // 10. Card 6 from right at 0.56
      tl.fromTo(c6, { x: '50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.56)

      // 11. Card 7 from left at 0.60
      tl.fromTo(c7, { x: '-50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.60)

      // 12. Card 8 from right at 0.64
      tl.fromTo(c8, { x: '50vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.64)

      // 13. "The" from right at 0.72
      tl.fromTo(t5, { x: '100vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.72)

      // 14. "Future" from left at 0.78
      tl.fromTo(t6, { x: '-100vw', opacity: 0 }, { x: 0, opacity: 1 }, 0.78)

      // 15. Tagline at 0.88
      tl.fromTo(tagline, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: 'power1.out' }, 0.88)

      // 16. Subtitle at 0.94
      tl.fromTo(subtitle, { opacity: 0 }, { opacity: 1, ease: 'power1.out' }, 0.94)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="info-manifesto-section">
      <div ref={stickyRef} className="sticky">
        {/* "Fix" */}
        <div
          ref={(el) => { if (el) textRefs.current[0] = el }}
          className="manifesto-text manifesto-left"
        >
          Fix
        </div>

        {/* "The Basics" */}
        <div
          ref={(el) => { if (el) textRefs.current[1] = el }}
          className="manifesto-text manifesto-right"
        >
          The Basics
        </div>

        {/* Card 1 */}
        <div
          ref={(el) => { if (el) cardRefs.current[0] = el }}
          className="manifesto-policy-card manifesto-left"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[0].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[0].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[0].body}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => { if (el) cardRefs.current[1] = el }}
          className="manifesto-policy-card manifesto-right"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[1].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[1].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[1].body}
            </p>
          </div>
        </div>

        {/* Dot separator */}
        <div
          ref={(el) => { if (el) textRefs.current[2] = el }}
          className="manifesto-text manifesto-centre"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', margin: '0.25rem 0' }}
        >
          .
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => { if (el) cardRefs.current[2] = el }}
          className="manifesto-policy-card manifesto-left"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[2].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[2].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[2].body}
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          ref={(el) => { if (el) cardRefs.current[3] = el }}
          className="manifesto-policy-card manifesto-right"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[3].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[3].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[3].body}
            </p>
          </div>
        </div>

        {/* "Plan" */}
        <div
          ref={(el) => { if (el) textRefs.current[3] = el }}
          className="manifesto-text manifesto-left"
          style={{ marginTop: '0.25rem' }}
        >
          Plan
        </div>

        {/* Card 5 */}
        <div
          ref={(el) => { if (el) cardRefs.current[4] = el }}
          className="manifesto-policy-card manifesto-left"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[4].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[4].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[4].body}
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div
          ref={(el) => { if (el) cardRefs.current[5] = el }}
          className="manifesto-policy-card manifesto-right"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[5].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[5].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[5].body}
            </p>
          </div>
        </div>

        {/* Card 7 — NEW: Rural Flood Prevention */}
        <div
          ref={(el) => { if (el) cardRefs.current[6] = el }}
          className="manifesto-policy-card manifesto-left"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[6].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[6].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[6].body}
            </p>
          </div>
        </div>

        {/* Card 8 — NEW: Stop Over-Development */}
        <div
          ref={(el) => { if (el) cardRefs.current[7] = el }}
          className="manifesto-policy-card manifesto-right"
          style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
        >
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{policyCards[7].icon}</span>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.2, color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
              {policyCards[7].title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--colour-text-muted)' }}>
              {policyCards[7].body}
            </p>
          </div>
        </div>

        {/* "The" */}
        <div
          ref={(el) => { if (el) textRefs.current[4] = el }}
          className="manifesto-text manifesto-right"
          style={{ marginTop: '0.25rem' }}
        >
          The
        </div>

        {/* "Future" */}
        <div
          ref={(el) => { if (el) textRefs.current[5] = el }}
          className="manifesto-text manifesto-left"
          style={{ marginTop: '0.25rem' }}
        >
          Future
        </div>

        {/* Manifesto tagline pill */}
        <div
          ref={(el) => { if (el) textRefs.current[6] = el }}
          className="manifesto-final"
          style={{
            marginTop: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem 1.5rem',
            background: 'rgba(0,135,220,0.15)',
            border: '1px solid rgba(0,135,220,0.4)',
            borderRadius: '100px',
            fontWeight: 700,
            fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
            color: 'var(--colour-text-dark)',
            letterSpacing: '0.5px',
            opacity: 0,
          }}
        >
          Fix the Basics. Plan the Future.
        </div>

        {/* Section subtitle */}
        <p
          ref={(el) => { if (el) textRefs.current[7] = el }}
          className="manifesto-final"
          style={{
            marginTop: '0.75rem',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            color: 'rgba(0,0,0,0.55)',
            maxWidth: '500px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          Delivering the Milton Keynes Conservative plan. We will fight this Labour-Liberal Democrat council on every wasteful, short-sighted decision.
        </p>
      </div>
    </div>
  )
}
