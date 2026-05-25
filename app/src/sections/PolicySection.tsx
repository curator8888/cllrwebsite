import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const policies = [
  {
    image: '/images/policy-roads.jpg',
    title: 'Fix Our Roads',
    body: 'Push for £1 million in immediate investment to tackle potholes properly — not patch-and-run, but a proactive approach that fixes the problem for good. Rural roads have suffered too long.',
  },
  {
    image: '/images/policy-lighting.jpg',
    title: 'Street Lighting',
    body: 'Fight for investment in street lighting and rural infrastructure. Olney and surrounding villages deserve safe, well-lit roads — not the neglect of a downtown-focused administration.',
  },
  {
    image: '/images/policy-clean.jpg',
    title: 'Clean Streets',
    body: 'Back new clean-up teams to tackle graffiti and fly-tipping. Our communities should not feel shabby or neglected. Pride in our villages must be matched by council action.',
  },
  {
    image: '/images/policy-business.jpg',
    title: 'Support Local Business',
    body: 'Oppose punitive parking charge rises that hit residents and deter shoppers. Fight Labour-Lib Dem plans to double parking costs. Local shops need support, not new burdens.',
  },
  {
    image: '/images/policy-safety.jpg',
    title: 'Community Safety',
    body: 'Demand investment in knife crime prevention and back rural policing operations. Working with Thames Valley Police to keep antisocial behaviour down and protect families.',
  },
  {
    image: '/images/policy-housing.jpg',
    title: 'Infrastructure Before Housing',
    body: 'Insist that proper roads, services, and green space provision are in place before any new housing is approved. Rural villages must not be overwhelmed without proper planning.',
  },
  {
    image: '/images/policy-flooding.jpg',
    title: 'Flooding',
    body: 'We will support our rural community with flood prevention which affects rural communities because our council is focussed on urban areas and over-expanding in areas thus removing land that is used for natural flooding prevention.',
  },
  {
    image: '/images/policy-development.jpg',
    title: 'Over Development of Rural Communities',
    body: 'I will fight against the "New Town" development. Our rural communities must not be sacrificed for poorly planned urban sprawl that destroys our green spaces and village character.',
  },
]

export default function PolicySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Responsive cards per view
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3)
      else if (window.innerWidth >= 768) setCardsPerView(2)
      else setCardsPerView(1)
    }
    updateCards()
    window.addEventListener('resize', updateCards)
    return () => window.removeEventListener('resize', updateCards)
  }, [])

  const maxIndex = Math.max(0, policies.length - cardsPerView)

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
  }, [maxIndex])

  const goNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1 > maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }, [])

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const next = prev + 1
          return next > maxIndex ? 0 : next
        })
      }, 3000)
    }

    if (!isPaused) {
      startAutoPlay()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPaused, maxIndex])

  // Entrance animation
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

  const translatePercent = currentIndex * (100 / cardsPerView)

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--colour-bg-light)', padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span className="section-label animate-in">Our Plan</span>
        <h2 className="animate-in" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--colour-text-dark)', marginBottom: '0.75rem' }}>
          What David Is Fighting For
        </h2>
        <p className="animate-in" style={{ fontSize: '1rem', color: 'var(--colour-text-muted)', maxWidth: '650px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Delivering the Milton Keynes Conservative plan: <strong style={{ color: 'var(--colour-text-dark)' }}>Fix the Basics. Plan the Future.</strong> We will fight this Labour-Liberal Democrat council on every wasteful, short-sighted decision.
        </p>

        {/* Carousel */}
        <div className="animate-in" style={{ position: 'relative' }}>
          {/* Navigation arrows - desktop only */}
          <button
            onClick={goPrev}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'white',
              border: '1px solid var(--colour-border)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'var(--colour-text-dark)',
              transition: 'opacity 0.2s',
            }}
            className="carousel-arrow"
          >
            &#8249;
          </button>
          <button
            onClick={goNext}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'white',
              border: '1px solid var(--colour-border)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'var(--colour-text-dark)',
              transition: 'opacity 0.2s',
            }}
            className="carousel-arrow"
          >
            &#8250;
          </button>

          {/* Cards track */}
          <div
            style={{ overflow: 'hidden', borderRadius: '8px' }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={carouselRef}
              style={{
                display: 'flex',
                transition: 'transform 0.4s ease',
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {policies.map((p, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: `${100 / cardsPerView}%`,
                    padding: '0 0.5rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      background: 'white',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Image */}
                    <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                      <img
                        src={p.image}
                        alt={p.title}
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
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--colour-text-dark)', marginBottom: '0.5rem' }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--colour-text-muted)', lineHeight: 1.55, flex: 1 }}>
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: currentIndex === i ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === i ? 'var(--colour-brand-blue)' : 'var(--colour-border)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--colour-text-muted)', marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
          This uses AI-generated images for illustrative purposes only.
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .carousel-arrow { display: none !important; }
        }
      `}</style>
    </section>
  )
}
