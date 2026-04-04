import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CTABannerProps {
  title: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CTABanner({ title, primaryText, primaryHref, secondaryText, secondaryHref }: CTABannerProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <section ref={ref} style={{ padding: 'clamp(4rem, 8vw, 8rem) 2rem' }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        padding: 'clamp(3rem, 6vw, 5rem)',
        background: 'rgba(13, 18, 36, 0.6)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
      }}>
        <h2 className="heading-md" style={{ marginBottom: '2rem' }}>{title}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to={primaryHref} className="btn-primary">
            <span>{primaryText}</span>
          </Link>
          {secondaryText && secondaryHref && (
            <Link to={secondaryHref} className="btn-secondary">
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
