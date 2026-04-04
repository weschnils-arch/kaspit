import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    title: 'Security Training',
    desc: 'Precision shooting (pistol & rifle), Krav Maga adapted for executives, surveillance detection, and anti-ambush techniques.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Travel Safety & HEAT',
    desc: 'Hostile Environment Awareness Training covering secure travel, kidnap avoidance, crisis response, and situational awareness.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Medical Training',
    desc: 'Official Stop The Bleed partner in Austria. Scenario-based trauma care, hemorrhage control, and immediate life-saving interventions.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export default function Training() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      )
    }
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
        }
      )
    }
  }, [])

  return (
    <section id="training" ref={sectionRef} className="relative z-10 py-32 section-padding">
      <div className="divider mb-32" />

      <div ref={headerRef} className="mb-16 max-w-3xl">
        <span className="label-text block mb-4">Elite Programs</span>
        <h2 className="heading-lg text-text mb-6">
          Training & Capacity
          <br />
          Building<span className="text-primary">.</span>
        </h2>
        <p className="body-lg">
          Knowledge alone is not enough. Real resilience comes from instinctive skills
          developed under realistic pressure. Every program is intelligence-informed,
          scenario-based, and tailored to your exact risk profile.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((prog, i) => (
          <div
            key={i}
            className="glass-card group p-8 md:p-10 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

            <div className="text-primary/60 group-hover:text-primary transition-colors duration-300 mb-6">
              {prog.icon}
            </div>

            <h3 className="heading-sm text-text mb-4 group-hover:text-primary transition-colors duration-300">
              {prog.title}
            </h3>

            <p className="body-md">{prog.desc}</p>
          </div>
        ))}
      </div>

      {/* What you gain */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          {[
            'Instinctive skills that work under real pressure',
            'Full compliance with duty-of-care and insurance standards',
            'Private format with absolute discretion',
            'Official certificates and scheduled refresher training',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="body-md !text-text-muted">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-start md:justify-end">
          <a href="#contact" className="btn-primary">
            Request Training Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
