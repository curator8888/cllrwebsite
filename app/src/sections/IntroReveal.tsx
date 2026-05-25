import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function IntroReveal({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const tl = gsap.timeline()

    // Fade in content
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )

    // Hold for 2s then slide away
    tl.to({}, { duration: 2 })

    tl.to(containerRef.current, {
      y: '-100vh',
      duration: 0.6,
      ease: 'power3.inOut',
      onComplete,
    })

    return () => { tl.kill() }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        background: '#0B1120',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        ref={contentRef}
        style={{
          textAlign: 'center',
          opacity: 0,
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '2px solid rgba(0,135,220,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>🇬🇧</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--colour-brand-blue)' }} />
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--colour-action-red)' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--colour-brand-blue)' }} />
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '0.5rem',
          }}
        >
          Working for Olney & Rural
        </h1>
        <p
          style={{
            fontSize: 'clamp(0.8rem, 2vw, 1rem)',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '1px',
          }}
        >
          Conservative Councillor · Milton Keynes City Council
        </p>
      </div>
    </div>
  )
}
