import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MetalCTA from '../components/MetalCTA'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  { title: 'Cutting-Edge Technology', desc: 'Deploying the latest technologies, high-level analytical tools, and the highest industry best practices to deliver strategic advantage.' },
  { title: 'Intelligence-Led Approach', desc: 'Every solution is built on real intelligence -- not assumptions. We think, plan and act at the highest level.' },
  { title: 'Strategic Resilience', desc: 'While others offer standard guarding, we deliver true strategic resilience through intelligence-led protection and expert consulting.' },
  { title: 'Independent Audits', desc: 'Objective evaluations of existing systems, identifying gaps and ensuring compliance at the highest international standards.' },
  { title: 'Global Reach', desc: 'With branches in Austria, Germany and Israel, we operate seamlessly across Europe and the Middle East.' },
  { title: 'Personal Attention', desc: 'Every client receives direct engagement from our founder. No middle management, no delegation to junior staff.' },
]

export default function Advantage() {
  const ref = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      const els = ref.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 })
    }
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.adv-card')
      gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' } })
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

      <section ref={cardsRef} style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
            {advantages.map((a, i) => (
              <div key={i} className="adv-card glass-card" style={{ padding: '2.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--blue-light)', letterSpacing: '0.1em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '1rem 0 0.75rem', letterSpacing: '-0.01em' }}>{a.title}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: 'clamp(3rem, 5vw, 4rem)', background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Experience the difference</h2>
          <MetalCTA to="/contact" label="Request Your Confidential Assessment" />
        </div>
      </section>
    </>
  )
}
