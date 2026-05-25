import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navigation from '../sections/Navigation'
import HeroSection from '../sections/HeroSection'
import WhyVoteSection from '../sections/WhyVoteSection'
import PolicySection from '../sections/PolicySection'
import AboutSection from '../sections/AboutSection'
import PrioritiesSection from '../sections/PrioritiesSection'
import ContactSection from '../sections/ContactSection'
import CTASection from '../sections/CTASection'
import FooterSection from '../sections/FooterSection'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // Simple entrance animations with reduced motion support
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Refresh ScrollTrigger after all components mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <Navigation />
      <main>
        <HeroSection />
        <WhyVoteSection />
        <PolicySection />
        <AboutSection />
        <PrioritiesSection />
        <ContactSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
