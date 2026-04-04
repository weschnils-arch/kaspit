import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LiquidMetalButton } from '../components/ui/LiquidMetalButton'
import { useTheme } from '../context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: '⬡',
    title: 'Investigations',
    sub: 'Intelligence-Driven',
    desc: 'Uncovering facts with precision and absolute discretion.',
    path: '/services/investigations',
  },
  {
    icon: '◈',
    title: 'Security Management',
    sub: 'Strategic',
    desc: '360° concepts, expert consulting, and independent security audits tailored to complex risks.',
    path: '/services/security-management',
  },
  {
    icon: '◉',
    title: 'Emergency Assistance',
    sub: 'Duty of Care',
    desc: 'Rapid worldwide response combined with full corporate Duty of Care.',
    path: '/services/emergency-assistance',
  },
  {
    icon: '◫',
    title: 'Intelligence',
    sub: 'Security & Risk',
    desc: 'Uncover the facts — no matter where they\'re hidden. Tactical approach. Global reach.',
    path: '/services/intelligence',
  },
  {
    icon: '⬟',
    title: 'Training',
    sub: 'Elite Capacity Building',
    desc: 'Hands-on programs that build real resilience in security, travel safety and medical response.',
    path: '/services/training',
  },
  {
    icon: '◧',
    title: 'Security Audits',
    sub: 'Independent',
    desc: 'Objective evaluations that reveal hidden vulnerabilities and deliver actionable strategies.',
    path: '/services/security-audits',
  },
]

const stats = [
  { value: '20+', label: 'Years Elite Experience' },
  { value: '3', label: 'Global Branches' },
  { value: '100%', label: 'Bespoke Solutions' },
  { value: '24/7', label: 'Emergency Response' },
]

export default function Home() {
  const { theme } = useTheme()
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero entrance
    if (heroRef.current) {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.fromTo('.hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.hero-h1 span', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }, '-=0.2')
        .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    }

    // Services
    if (servicesRef.current) {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' }
        }
      )
    }

    // Stats
    if (statsRef.current) {
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%' }
        }
      )
    }

    // Welcome
    if (welcomeRef.current) {
      gsap.fromTo('.welcome-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: welcomeRef.current, start: 'top 75%' }
        }
      )
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div className="hero-label section-label" style={{ opacity: 0 }}>
          Vienna, Austria — Est. KASPIT Group
        </div>

        <h1
          className="hero-h1"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            lineHeight: 0.95,
            marginBottom: '2rem',
            maxWidth: '900px',
          }}
        >
          <span style={{ display: 'block', opacity: 0 }}>KASPIT</span>
          <span style={{ display: 'block', opacity: 0, color: 'var(--blue-bright)' }}>SECURITY —</span>
          <span style={{ display: 'block', opacity: 0 }}>AUSTRIA'S PREMIER</span>
          <span style={{ display: 'block', opacity: 0, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9em', textTransform: 'none', letterSpacing: '-0.02em', color: 'var(--gold)' }}>
            Boutique for Intelligence-Led Security
          </span>
        </h1>

        <p
          className="hero-sub"
          style={{
            opacity: 0,
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
            color: 'var(--gray-1)',
            maxWidth: '520px',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          Protecting what matters most with strategic precision and absolute discretion.
          Every engagement is bespoke. Every solution is intelligence-led.
        </p>

        <div className="hero-ctas" style={{ opacity: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <LiquidMetalButton
            label="Request Confidential Assessment"
            to="/contact"
            colorScheme={theme}
          />
          <Link to="/about" className="btn-secondary">
            Meet Maxim Gutman
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0.3,
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))' }} />
          Scroll
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(13,20,40,0.5)',
        padding: '2.5rem 2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2rem',
        }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item" style={{ opacity: 0, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--blue-bright)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={servicesRef}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        }}
      >
        <div className="section-label">Our Strategic Services</div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem', maxWidth: '600px' }}>
          Six Disciplines.<br />One Trusted Partner.
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', maxWidth: '500px', lineHeight: 1.75, marginBottom: '3.5rem' }}>
          Every service is built on genuine operational experience — not textbook theory.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className="service-card"
              style={{
                opacity: 0,
                display: 'block',
                padding: '2.5rem',
                background: 'var(--navy-2)',
                transition: 'background 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(59,88,184,0.12)'
                const arrow = el.querySelector('.card-arrow') as HTMLElement
                if (arrow) arrow.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'var(--navy-2)'
                const arrow = el.querySelector('.card-arrow') as HTMLElement
                if (arrow) arrow.style.transform = 'translateX(0)'
              }}
            >
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-bright)', marginBottom: '1rem' }}>
                {s.sub}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.875rem', fontFamily: 'Anton, sans-serif' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {s.desc}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--blue-bright)',
              }}>
                <span>Learn More</span>
                <span className="card-arrow" style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome / About */}
      <section
        ref={welcomeRef}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(3rem, 6vw, 5rem) 2rem clamp(4rem, 8vw, 7rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div className="welcome-content" style={{ opacity: 0 }}>
          <div className="section-label">About KASPIT Security</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.5rem' }}>
            Premium Boutique.<br />Global Reach.
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            KASPIT Security is the premium boutique arm of the international KASPIT Group. With branches across Europe (Austria and Germany) and the Middle East (Israel), we deliver intelligence-led, fully bespoke solutions that protect your most valuable assets.
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.85, marginBottom: '2rem' }}>
            Every engagement is tailored to your exact risk environment. Whether you face complex investigations, need sophisticated security architecture, global emergencies, or elite training — KASPIT Security is the trusted partner that discerning executives and corporations choose to stay ahead.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <LiquidMetalButton
              label="About KASPIT"
              to="/about"
              colorScheme={theme}
            />
            <Link to="/advantage" className="btn-secondary">Our Advantage</Link>
          </div>
        </div>

        <div className="welcome-content" style={{ opacity: 0 }}>
          <div style={{
            position: 'relative',
            padding: '2.5rem',
            background: 'rgba(13,20,40,0.7)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '2px solid var(--blue)', borderLeft: '2px solid var(--blue)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '2px solid var(--blue)', borderRight: '2px solid var(--blue)' }} />

            <img
              src="/assets/maxim-gutman.webp"
              alt="Maxim Gutman"
              loading="lazy"
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                objectPosition: 'top center',
                marginBottom: '1.5rem',
                filter: 'grayscale(20%)',
              }}
            />
            <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-bright)', marginBottom: '0.5rem' }}>
              Founder &amp; Managing Director
            </div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '0.75rem', fontFamily: 'Anton, sans-serif' }}>
              Maxim Gutman
            </h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--gray-1)', lineHeight: 1.75 }}>
              Combat veteran of the IDF. Anti-terror expert for the OSCE. MBA from the University of Minnesota. Over 20 years of elite security and intelligence experience — personally leading every mandate at KASPIT.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        ref={ctaRef}
        style={{
          background: 'rgba(59,88,184,0.08)',
          borderTop: '1px solid rgba(59,88,184,0.2)',
          borderBottom: '1px solid rgba(59,88,184,0.2)',
          padding: 'clamp(3rem, 6vw, 5rem) 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            Ready when you are
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', marginBottom: '1.25rem' }}>
            Ready to secure what matters most?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-1)', marginBottom: '2.5rem', lineHeight: 1.75 }}>
            All inquiries are handled with the highest level of discretion and personal attention. We respond within 12 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <LiquidMetalButton
              label="Request a Confidential Risk Assessment"
              to="/contact"
              colorScheme={theme}
            />
            <LiquidMetalButton
              label="Book a Private Consultation"
              to="/contact"
              colorScheme={theme}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
