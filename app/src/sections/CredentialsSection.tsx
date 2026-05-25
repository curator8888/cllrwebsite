import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const credentials = [
  {
    icon: '🏛️',
    title: 'Senior Risk Advisor',
    body: 'Currently a senior risk advisor in the UK defence and aerospace sector, advising on secure-by-design principles for critical national infrastructure and sensor platforms. Experience includes working on nationally significant programmes.',
  },
  {
    icon: '⚓',
    title: 'Royal Navy Service',
    body: 'Former Royal Navy Electronic Warfare Specialist. Military service instilled discipline, leadership, and a deep respect for duty — values David carries into his council work every day.',
  },
  {
    icon: '🛡️',
    title: 'Cyber Security Leader',
    body: 'Former Director and Head of Cyber at Amicis Group, and an experienced penetration tester with NCC Group and Perspective Risk. Holds \u003cstrong style\u003d"color:var(--colour-brand-blue)"\u003eCREST CPSA\u003c/strong\u003e, \u003cstrong style\u003d"color:var(--colour-brand-blue)"\u003eCISM\u003c/strong\u003e, and \u003cstrong style\u003d"color:var(--colour-brand-blue)"\u003eeCPPTv2\u003c/strong\u003e certifications.',
  },
  {
    icon: '🎓',
    title: 'Education',
    body: 'BSc (Hons) 2:1 in Cyber Security from De Montfort University. Continuous learner — currently progressing toward \u003cstrong style\u003d"color:var(--colour-brand-blue)"\u003eCISSP\u003c/strong\u003e certification.',
  },
  {
    icon: '🚀',
    title: 'Community Builder',
    body: 'Founder of Cyber Mentor DoJo, a mentorship and education platform that reached ~9,000 users and built a 15,000-member LinkedIn community. Recognised as a \u003cstrong style\u003d"color:var(--colour-brand-blue)"\u003eDSIT Most Innovative Cyber SME 2024\u003c/strong\u003e.',
  },
  {
    icon: '🇬🇧',
    title: 'British Values',
    body: 'A firm believer in personal responsibility, free enterprise, and the importance of strong local institutions. David champions the Conservative principles that have long served Britain well.',
  },
]

export default function CredentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="credentials-section"
      style={{
        background: 'var(--colour-bg-light)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 5vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">Experience</span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--colour-text-dark)',
              marginTop: '0.75rem',
            }}
          >
            Experience & Credentials
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {credentials.map((cred, i) => (
            <div
              key={i}
              style={{
                background: 'var(--colour-bg-pure)',
                border: '1px solid var(--colour-border)',
                borderRadius: '6px',
                padding: '1.5rem',
                borderTop: '3px solid var(--colour-brand-blue)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  lineHeight: 1.2,
                  color: 'var(--colour-text-dark)',
                  marginBottom: '0.75rem',
                }}
              >
                <span style={{ marginRight: '0.5rem' }}>{cred.icon}</span>
                {cred.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--colour-text-muted)',
                }}
                dangerouslySetInnerHTML={{ __html: cred.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
