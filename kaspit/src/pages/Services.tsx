import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { num: '01', title: 'Strategic Security Management, Consulting & Audits', desc: '360° concepts, expert consulting, and independent security audits tailored to complex risks — never standard guarding.', href: '/security-management' },
  { num: '02', title: 'Intelligence-Driven Investigations', desc: 'Uncovering facts with precision and absolute discretion. From background due diligence to complex fraud investigations.', href: '/investigations' },
  { num: '03', title: 'Security Intelligence & Risk Consulting', desc: 'Uncover the facts — no matter where they\'re hidden. Tactical approach. Global reach. Full spectrum of intelligence disciplines.', href: '/intelligence' },
  { num: '04', title: 'Emergency Assistance & Duty of Care', desc: 'Rapid worldwide emergency response combined with comprehensive Duty of Care solutions — 24/7, anywhere in the world.', href: '/emergency' },
  { num: '05', title: 'Independent Security Audits & Compliance', desc: 'Objective evaluations that reveal hidden vulnerabilities and deliver clear, actionable strategies for lasting resilience.', href: '/security-audits' },
  { num: '06', title: 'Elite Training & Capacity Building', desc: 'Hands-on, intelligence-informed programs for executives, teams and high-net-worth individuals. Delivered to elite standards.', href: '/training' },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      const els = ref.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 })
    }
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.svc')
      gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } })
    }
  }, [])

  return (
    <>
      <section ref={ref} style={{ padding: 'clamp(8rem, 18vh, 12rem) 0 clamp(4rem, 8vh, 4rem)' }}>
        <div className="container">
          <div className="reveal section-label">Our Services</div>
          <h1 className="reveal heading-xl" style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
            Strategic security solutions
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '600px', lineHeight: 1.7 }}>
            Every service is intelligence-led, fully bespoke, and delivered with absolute discretion.
          </p>
        </div>
      </section>

      <section ref={gridRef} style={{ padding: '0 2rem clamp(6rem, 10vw, 8rem)' }}>
        <div className="container">
          {services.map((s) => (
            <Link key={s.href} to={s.href} className="svc" style={{
              display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '2rem', alignItems: 'center',
              padding: '2.5rem 0', borderBottom: '1px solid var(--border)',
              transition: 'all 0.3s ease', textDecoration: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '1rem'; e.currentTarget.style.background = 'var(--surface)' }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.background = 'transparent' }}
            >
              <span style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: 'var(--blue-light)' }}>{s.num}</span>
              <div>
                <h3 style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9375rem', maxWidth: '600px' }}>{s.desc}</p>
              </div>
              <span style={{ fontSize: '1.5rem', color: 'var(--text-dim)' }}>&rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
