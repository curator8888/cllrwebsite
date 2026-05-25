import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Complete after 2 seconds
    const completeTimer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none'
            }
            onComplete()
          },
        })
      }
    }, 1800)

    return () => {
      clearInterval(timer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#0B1120',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '2px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'white',
            transformOrigin: 'left center',
            transform: `scaleX(${progress / 100})`,
            transition: 'transform 0.05s linear',
          }}
        />
      </div>
    </div>
  )
}
