import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    title: 'Cutting-Edge Technology',
    desc: 'Deploying the latest analytical tools and intelligence platforms that standard firms cannot access.',
  },
  {
    title: 'Elite Operational Background',
    desc: 'Leadership forged in Special Forces and counter-terror operations. Real experience, not theoretical frameworks.',
  },
  {
    title: 'Strategic Consulting & Audits',
    desc: 'Independent security audits and expert consulting that turn vulnerabilities into measurable strengths.',
  },
  {
    title: 'Global Reach, Local Precision',
    desc: 'Branches in Austria, Germany, and Israel. We operate wherever you need, with intimate local knowledge.',
  },
  {
    title: 'Absolute Discretion',
    desc: 'Every engagement handled with the highest confidentiality. Your privacy is non-negotiable.',
  },
  {
    title: 'Bespoke Solutions',
    desc: 'No templates, no standard packages. Every security architecture designed exclusively for your threat landscape.',
  },
]

export default function Advantage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        }
      )
    }
  }, [])

  return (
    <section id="advantage" ref={sectionRef} className="relative z-10 py-32 section-padding">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-800/20 to-dark pointer-events-none" />

      <div className="relative z-10">
        <div className="divider mb-32" />

        <div ref={headerRef} className="mb-20 max-w-3xl">
          <span className="label-text block mb-4">The KASPIT Advantage</span>
          <h2 className="heading-lg text-text mb-6">
            Why KASPIT Security
            <br />
            Stands Alone<span className="text-primary">.</span>
          </h2>
          <p className="body-lg">
            While others offer standard guarding services, we deliver true strategic resilience,
            intelligence-led protection, and expert security consulting. Our clients receive a
            trusted partner who thinks, plans, and acts at the highest level.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="glass-card group p-8 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 via-primary/10 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

              <span className="text-dark-400 text-3xl font-display block mb-5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="heading-sm text-text mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="body-md">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap gap-4 items-center">
          <a href="#contact" className="btn-primary">
            Experience the Difference
          </a>
          <span className="text-text-dim text-sm">Request your confidential risk assessment today.</span>
        </div>
      </div>
    </section>
  )
}
