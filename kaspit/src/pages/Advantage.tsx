import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MetalCTA from '../components/MetalCTA'

gsap.registerPlugin(ScrollTrigger)

export default function Advantage() {
  const ref = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      const els = ref.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 })
    }
    if (contentRef.current) {
      const els = contentRef.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 75%' } })
    }
  }, [])

  return (
    <>
      <section ref={ref} style={{ padding: 'clamp(8rem, 18vh, 12rem) 0 clamp(4rem, 8vh, 6rem)' }}>
        <div className="container">
          <div className="reveal section-label">The KASPIT Advantage</div>
          <h1 className="reveal heading-xl" style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
            Why KASPIT Security stands alone
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '600px', lineHeight: 1.7 }}>
            Competitive edge through cutting-edge technology, best practices, and strategic depth.
          </p>
        </div>
      </section>

      <section ref={contentRef} style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="reveal" style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            KASPIT Security delivers a real competitive advantage by deploying the latest cutting-edge technologies, high-level analytical tools, and the highest industry best practices.
          </p>
          <p className="reveal" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
            While others offer standard guarding services, we deliver true strategic resilience, intelligence-led protection, expert security consulting, and independent audits. Our clients choose KASPIT Security because they expect — and receive — far more than security. They receive a trusted partner who thinks, plans and acts at the highest level, turning potential weaknesses into proven strengths.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: 'clamp(3rem, 5vw, 4rem)', background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Experience the difference</h2>
          <MetalCTA to="/contact" label="Request your confidential risk assessment today" />
        </div>
      </section>
    </>
  )
}
