import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from './PageHero'
import { LiquidMetalButton } from './ui/LiquidMetalButton'
import { useTheme } from '../context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

interface BulletItem {
  title: string
  desc: string
}

interface ServiceLayoutProps {
  label: string
  title: string
  subtitle: string
  intro: string
  gains: string[]
  approachItems: BulletItem[]
  ctaText: string
  ctaLink?: string
  secondaryCta?: { text: string; link: string }
  additionalSections?: React.ReactNode
}

export default function ServiceLayout({
  label,
  title,
  subtitle,
  intro,
  gains,
  approachItems,
  ctaText,
  secondaryCta,
  additionalSections,
}: ServiceLayoutProps) {
  const { theme } = useTheme()
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bodyRef.current) return
    gsap.fromTo('.sl-intro', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: '.sl-intro', start: 'top 80%' }
    })
    gsap.fromTo('.sl-gain-item', { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.5, stagger: 0.07,
      scrollTrigger: { trigger: '.sl-gains', start: 'top 80%' }
    })
    gsap.fromTo('.sl-approach-item', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
      scrollTrigger: { trigger: '.sl-approach', start: 'top 80%' }
    })
    gsap.fromTo('.sl-cta', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6,
      scrollTrigger: { trigger: '.sl-cta', start: 'top 85%' }
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <PageHero label={label} title={title} subtitle={subtitle} />

      <div ref={bodyRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 6rem' }}>

        {/* Intro */}
        <div className="sl-intro" style={{ opacity: 0, maxWidth: '780px', marginBottom: '5rem' }}>
          <p style={{ fontSize: '1.0625rem', color: 'var(--gray-1)', lineHeight: 1.9 }}>{intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          {/* What You Gain */}
          <div className="sl-gains">
            <div className="section-label">What You Gain</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {gains.map((g, i) => (
                <div key={i} className="sl-gain-item" style={{ opacity: 0, display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue-bright)', marginTop: '0.4rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-1)', lineHeight: 1.7 }}>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="sl-approach">
            <div className="section-label">Our Approach</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {approachItems.map((item, i) => (
                <div key={i} className="sl-approach-item" style={{ opacity: 0, display: 'flex', gap: '1.25rem' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    background: 'rgba(59,88,184,0.15)',
                    border: '1px solid rgba(59,88,184,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: 'var(--blue-bright)',
                    marginTop: '0.1rem',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem', color: '#fff' }}>{item.title}</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--gray-2)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {additionalSections}

        {/* CTA */}
        <div className="sl-cta" style={{
          opacity: 0,
          background: 'rgba(59,88,184,0.08)',
          border: '1px solid rgba(59,88,184,0.2)',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'flex-start',
        }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'Anton, sans-serif' }}>{ctaText}</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <LiquidMetalButton label="Request Confidential Assessment" to="/contact" colorScheme={theme} />
            {secondaryCta && (
              <Link to={secondaryCta.link} className="btn-secondary">{secondaryCta.text}</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
