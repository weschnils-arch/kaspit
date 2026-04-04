import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface PageHeroProps {
  label: string
  title: string
  subtitle: string
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const tl = gsap.timeline({ delay: 0.05 })
    tl.fromTo(ref.current.querySelector('.ph-label'), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(ref.current.querySelector('.ph-title'), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
      .fromTo(ref.current.querySelector('.ph-sub'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
  }, [])

  return (
    <div
      ref={ref}
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'clamp(7rem, 14vw, 11rem) 2rem clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div className="ph-label section-label" style={{ opacity: 0 }}>{label}</div>
      <h1 className="ph-title" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', maxWidth: '800px', lineHeight: 0.95, opacity: 0, marginBottom: '1.5rem' }}>
        {title}
      </h1>
      <p className="ph-sub" style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)', color: 'var(--gray-1)', maxWidth: '560px', lineHeight: 1.75, opacity: 0 }}>
        {subtitle}
      </p>
      <div style={{ marginTop: '3rem', height: '1px', background: 'rgba(255,255,255,0.06)' }} />
    </div>
  )
}
