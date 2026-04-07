import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'
import MetalCTA from '../components/ui/MetalCTA'
import HeroNetwork from '../components/HeroNetwork'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    label: 'Investigations',
    title: 'Intelligence-Driven Investigations',
    desc: 'Uncovering facts with precision and absolute discretion.',
    href: '/services/investigations',
    num: '01',
  },
  {
    label: 'Security',
    title: 'Strategic Security Management',
    desc: '360° concepts, expert consulting, and independent security audits tailored to complex risks.',
    href: '/services/security-management',
    num: '02',
  },
  {
    label: 'Emergency',
    title: 'Emergency Assistance & Duty of Care',
    desc: 'Rapid worldwide response combined with full corporate Duty of Care.',
    href: '/services/emergency',
    num: '03',
  },
  {
    label: 'Intelligence',
    title: 'Security Intelligence & Risk Consulting',
    desc: 'Uncover the facts -- no matter where they are hidden. Tactical approach. Global reach.',
    href: '/services/intelligence',
    num: '04',
  },
  {
    label: 'Training',
    title: 'Elite Training & Capacity Building',
    desc: 'Hands-on programs that build real resilience in security, travel safety and medical response.',
    href: '/training',
    num: '05',
  },
]

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '3', label: 'Global Branches' },
  { value: '24/7', label: 'Response Ready' },
  { value: '100%', label: 'Discretion' },
]

export default function Home() {
  usePageTitle('Intelligence-Led Security Management')
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useScrollReveal<HTMLDivElement>()
  const aboutRef = useScrollReveal<HTMLDivElement>()
  const statsRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      el.querySelector('.hero-label'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        el.querySelectorAll('.hero-title span'),
        { opacity: 0, y: 80, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.08, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        el.querySelector('.hero-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        el.querySelector('.hero-cta'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        el.querySelector('.hero-line'),
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut' },
        '-=0.8'
      )

    // Parallax on scroll
    gsap.fromTo(
      el.querySelector('.hero-bg-gradient'),
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="hero-bg-gradient absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Constellation network — right side, mouse-reactive */}
        <HeroNetwork />

        <div className="section-padding relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
          <div className="max-w-5xl">
            <div className="hero-label label-text mb-8" style={{ opacity: 0 }}>
              Austria's Premier Security Boutique
            </div>

            <h1 className="hero-title heading-xl mb-8" style={{ overflow: 'visible', paddingBottom: '0.15em' }}>
              {'Intelligence-Led'.split('').length && (
                <>
                  <span className="inline-block" style={{ opacity: 0 }}>Intelligence-Led</span>
                  <br />
                  <span className="inline-block text-primary" style={{ opacity: 0 }}>Security</span>
                  <span className="inline-block" style={{ opacity: 0 }}>&nbsp;Management</span>
                </>
              )}
            </h1>

            <p className="hero-sub body-lg max-w-2xl mb-12" style={{ opacity: 0 }}>
              Protecting what matters most with strategic precision and absolute discretion.
              Bespoke solutions for executives, corporations and high-net-worth individuals.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:items-stretch" style={{ opacity: 0 }}>
              <MetalCTA
                to="/contact"
                label="Request a Risk Assessment"
                width={280}
                height={52}
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
              <MetalCTA
                to="/about"
                label="Meet Maxim Gutman"
                variant="outline"
                className="!py-[14px]"
              />
            </div>
          </div>

          <div className="hero-line mt-20 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent origin-left" style={{ transform: 'scaleX(0)' }} />
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="section-padding py-16 lg:py-20 bg-dark-900">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} data-reveal className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-light text-primary font-display mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="section-padding py-24 lg:py-36">
        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-24">
          <div>
            <span className="label-text">Our Strategic Services</span>
            <h2 className="heading-lg mt-4">
              Comprehensive<br />
              <span className="text-primary">Security Solutions</span>
            </h2>
          </div>
          <p className="body-lg max-w-md">
            From investigations to emergency response, every engagement is tailored to your exact risk environment.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <Link
              key={service.num}
              to={service.href}
              data-reveal
              className="group border-t border-white/[0.06] py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 transition-colors duration-500 hover:border-primary/20"
            >
              <span className="text-xs text-text-dim font-mono w-12 shrink-0">{service.num}</span>
              <h3 className="heading-sm flex-1 group-hover:text-primary transition-colors duration-500">
                {service.title}
              </h3>
              <p className="body-md max-w-sm flex-1">{service.desc}</p>
              <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-text-muted group-hover:text-primary transition-colors duration-500 group-hover:translate-x-0.5 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </section>

      {/* About Teaser */}
      <section ref={aboutRef} className="section-padding py-24 lg:py-36 bg-dark-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div data-reveal>
            <span className="label-text">About KASPIT</span>
            <h2 className="heading-lg mt-4 mb-8">
              Founded on<br />
              <span className="text-primary">Operational Excellence</span>
            </h2>
            <p className="body-lg mb-6">
              KASPIT Security is the premium boutique arm of the international KASPIT Group.
              With branches across Europe (Austria and Germany) and the Middle East (Israel),
              we deliver intelligence-led, fully bespoke solutions that protect your most
              valuable assets — your people, your operations and your peace of mind.
            </p>
            <p className="body-lg mb-10">
              Every engagement is tailored to your exact risk environment. This includes
              strategic security consulting and independent audits that identify vulnerabilities,
              strengthen resilience, and ensure compliance at the highest level. Whether you
              face complex investigations, sophisticated security architecture, global
              emergencies, or elite training, KASPIT Security is the trusted partner that
              discerning executives and corporations choose to stay ahead.
            </p>
            <MetalCTA
              to="/about"
              label="Learn More"
              variant="outline"
              icon={
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>

          <div data-reveal className="relative max-w-[420px] lg:ml-auto">
            <div className="aspect-[3/4] rounded-sm overflow-hidden relative">
              <img
                src={`${import.meta.env.BASE_URL}images/maxim-gutman.webp`}
                alt="Maxim Gutman - Founder & Managing Director"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-lg font-medium mb-1">Maxim Gutman</h3>
              <p className="text-sm text-primary">Founder & Managing Director</p>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto" data-reveal>
          <span className="label-text">Take the First Step</span>
          <h2 className="heading-lg mt-4 mb-6">
            Ready to Secure<br />
            <span className="text-primary">What Matters Most?</span>
          </h2>
          <p className="body-lg mb-12 max-w-xl mx-auto">
            Every conversation begins with discretion. Request a confidential risk assessment
            or book a private consultation with Maxim.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:items-stretch">
            <MetalCTA
              to="/contact"
              label="Request a Confidential Risk Assessment"
              width={320}
              height={52}
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <MetalCTA
              to="/contact"
              label="Book a Private Consultation with Maxim"
              variant="outline"
              className="!py-[14px]"
            />
          </div>
          <p className="mt-6 text-xs text-text-dim tracking-wider uppercase">
            Free &middot; No obligation &middot; Absolute confidentiality
          </p>
        </div>
      </section>
    </>
  )
}
