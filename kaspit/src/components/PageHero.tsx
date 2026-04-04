import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface PageHeroProps {
  label: string
  title: string
  subtitle: string
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.reveal')
    gsap.fromTo(els,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
    )
  }, [])

  return (
    <section ref={ref} style={{ padding: 'clamp(8rem, 18vh, 12rem) 0 clamp(4rem, 8vh, 6rem)', position: 'relative' }}>
      <div className="container">
        <div className="section-label reveal">{label}</div>
        <h1 className="heading-xl reveal" style={{ maxWidth: '900px', marginBottom: '1.5rem' }}>{title}</h1>
        <p className="reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '600px', lineHeight: 1.7 }}>{subtitle}</p>
      </div>
    </section>
  )
}
