import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'Investigations',
    subtitle: 'Intelligence-Driven Investigations',
    desc: 'Uncovering facts with precision and absolute discretion. From background due diligence and asset tracing to complex fraud investigations and litigation support.',
  },
  {
    num: '02',
    title: 'Security Management',
    subtitle: 'Strategic Consulting & Audits',
    desc: '360-degree concepts, expert consulting, and independent security audits tailored to complex risks. Never standard guarding.',
  },
  {
    num: '03',
    title: 'Emergency Assistance',
    subtitle: 'Duty of Care & Rapid Response',
    desc: 'Rapid worldwide response combined with full corporate Duty of Care. 24/7 command structure, medical evacuation, crisis extraction.',
  },
  {
    num: '04',
    title: 'Intelligence',
    subtitle: 'Security Intelligence & Risk Consulting',
    desc: 'Full spectrum intelligence disciplines -- HUMINT, SIGINT, GEOINT, OSINT, TECHINT. Tactical approach, global reach.',
  },
  {
    num: '05',
    title: 'Elite Training',
    subtitle: 'Training & Capacity Building',
    desc: 'Hands-on programs that build real resilience. Precision shooting, Krav Maga, HEAT, and Stop The Bleed certified medical training.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

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

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative z-10 py-32 section-padding">
      <div className="divider mb-32" />

      {/* Section header */}
      <div ref={headerRef} className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="label-text block mb-4">Strategic Services</span>
          <h2 className="heading-lg text-text">
            Comprehensive Security
            <br />
            Solutions<span className="text-primary">.</span>
          </h2>
        </div>
        <p className="body-md max-w-md">
          Every engagement is tailored to your exact risk environment. No templates, no standard packages.
        </p>
      </div>

      {/* Service cards - stacked list */}
      <div className="space-y-0">
        {services.map((service, i) => (
          <div
            key={service.num}
            ref={(el) => { if (el) cardsRef.current[i] = el }}
            className="group border-t border-dark-500 py-10 md:py-12 cursor-pointer transition-all duration-500 hover:bg-dark-800/30"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              {/* Number */}
              <span className="text-text-dim text-sm font-mono w-12 shrink-0">{service.num}</span>

              {/* Title column */}
              <div className="md:w-64 shrink-0">
                <h3 className="text-xl md:text-2xl font-display text-text group-hover:text-primary transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="text-[0.7rem] tracking-[0.08em] uppercase text-text-dim mt-1">
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="body-md flex-1 max-w-xl">
                {service.desc}
              </p>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-text-dim group-hover:text-primary transition-all duration-300 shrink-0">
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-dark-500" />
      </div>

      {/* Bottom text */}
      <div className="mt-16 max-w-3xl">
        <p className="body-lg">
          KASPIT Security is the premium boutique arm of the international KASPIT Group.
          With branches across Europe and the Middle East, we deliver intelligence-led,
          fully bespoke solutions that protect your most valuable assets.
        </p>
      </div>
    </section>
  )
}
