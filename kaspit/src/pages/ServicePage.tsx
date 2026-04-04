import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ServicePageProps {
  label: string
  title: string
  subtitle: string
  intro: string[]
  gains: string[]
  approach: { title: string; desc: string }[]
  ctaTitle: string
  ctaPrimary: string
  ctaSecondary?: string
  scopeTitle?: string
  scopeItems?: string[]
}

export default function ServicePage({
  label, title, subtitle, intro, gains, approach,
  ctaTitle, ctaPrimary, ctaSecondary, scopeTitle, scopeItems,
}: ServicePageProps) {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLElement>(null)
  const gainsRef = useRef<HTMLElement>(null)
  const approachRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      const els = heroRef.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 })
    }
    if (contentRef.current) {
      const els = contentRef.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 80%' } })
    }
    if (gainsRef.current) {
      const els = gainsRef.current.querySelectorAll('.gain')
      gsap.fromTo(els, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: gainsRef.current, start: 'top 80%' } })
    }
    if (approachRef.current) {
      const els = approachRef.current.querySelectorAll('.step')
      gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: approachRef.current, start: 'top 80%' } })
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} style={{ padding: 'clamp(8rem, 18vh, 12rem) 0 clamp(4rem, 8vh, 6rem)' }}>
        <div className="container">
          <div className="reveal section-label">{label}</div>
          <h1 className="reveal heading-xl" style={{ maxWidth: '900px', marginBottom: '1.5rem' }}>{title}</h1>
          <p className="reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '600px', lineHeight: 1.7 }}>{subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section ref={contentRef} style={{ padding: '0 2rem clamp(4rem, 8vw, 6rem)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {intro.map((p, i) => (
            <p key={i} className="reveal" style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* What You Gain + Scope side by side */}
      <section ref={gainsRef} style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="gain-grid" style={{ display: 'grid', gridTemplateColumns: scopeItems ? '1fr 1fr' : '1fr', gap: '4rem' }}>
            <div>
              <h2 className="heading-md reveal" style={{ marginBottom: '2rem' }}>What You Gain</h2>
              {gains.map((g, i) => (
                <div key={i} className="gain" style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1rem 0', borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ color: 'var(--blue-light)', fontSize: '0.875rem', fontWeight: 700, minWidth: '20px' }}>+</span>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{g}</p>
                </div>
              ))}
            </div>
            {scopeItems && (
              <div>
                <h2 className="heading-md reveal" style={{ marginBottom: '2rem' }}>{scopeTitle || 'Scope'}</h2>
                {scopeItems.map((s, i) => (
                  <div key={i} className="gain" style={{
                    padding: '0.75rem 0', borderBottom: '1px solid var(--border)',
                    fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6,
                  }}>{s}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section ref={approachRef} style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-label">Our Approach</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {approach.map((s, i) => (
              <div key={i} className="step glass-card" style={{ padding: '2rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--blue-light)', opacity: 0.3, lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, margin: '1rem 0 0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{
          maxWidth: '800px', margin: '0 auto', textAlign: 'center',
          padding: 'clamp(3rem, 5vw, 4rem)', background: 'var(--surface)', border: '1px solid var(--border)',
        }}>
          <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>{ctaTitle}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary"><span>{ctaPrimary}</span></Link>
            {ctaSecondary && <Link to="/contact" className="btn-secondary">{ctaSecondary}</Link>}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .gain-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
