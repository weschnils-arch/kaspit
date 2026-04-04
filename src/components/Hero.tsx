import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 80, clipPath: 'inset(100% 0% 0% 0%)' },
        { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-32 pb-20" style={{ background: 'transparent' }}>
      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <div className="label-text mb-8 flex items-center gap-4">
          <div
            ref={lineRef}
            className="w-12 h-[1px] bg-primary origin-left"
          />
          Intelligence-Led Security
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="heading-xl text-text mb-8"
        >
          Protecting What
          <br />
          Matters Most<span className="text-primary">.</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="body-lg max-w-2xl mb-12"
        >
          Austria's premier boutique for intelligence-led security management.
          Strategic precision and absolute discretion for executives, corporations,
          and high-net-worth individuals.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary group">
            Request Assessment
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#services" className="btn-outline">
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-20 grid grid-cols-3 gap-8 max-w-lg">
          <div>
            <span className="text-3xl md:text-4xl font-display text-text">20+</span>
            <p className="text-text-dim text-xs mt-1 tracking-wide uppercase">Years Experience</p>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-display text-text">3</span>
            <p className="text-text-dim text-xs mt-1 tracking-wide uppercase">Global Branches</p>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-display text-text">24/7</span>
            <p className="text-text-dim text-xs mt-1 tracking-wide uppercase">Command Center</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-[0.625rem] tracking-[0.2em] uppercase text-dark-400">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-dark-400 to-transparent" />
      </div>
    </section>
  )
}
