import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MetalCTA from '../components/MetalCTA'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'Intelligence-Driven Investigations',
    desc: 'Uncovering facts with precision and absolute discretion.',
    href: '/investigations',
  },
  {
    num: '02',
    title: 'Strategic Security Management',
    desc: '360\u00b0 concepts, expert consulting, and independent security audits tailored to complex risks.',
    href: '/security-management',
  },
  {
    num: '03',
    title: 'Emergency Assistance & Duty of Care',
    desc: 'Rapid worldwide response combined with full corporate Duty of Care.',
    href: '/emergency',
  },
  {
    num: '04',
    title: 'Security Intelligence & Risk Consulting',
    desc: 'Uncover the facts \u2014 no matter where they\'re hidden. Tactical approach. Global reach.',
    href: '/intelligence',
  },
  {
    num: '05',
    title: 'Independent Security Audits',
    desc: 'Objective evaluations that reveal hidden vulnerabilities and deliver actionable strategies.',
    href: '/security-audits',
  },
  {
    num: '06',
    title: 'Elite Training & Capacity Building',
    desc: 'Hands-on programs that build real resilience in security, travel safety and medical response.',
    href: '/training',
  },
]

const stats = [
  { value: '20+', label: 'Years of Elite Experience' },
  { value: '3', label: 'International Branches' },
  { value: '24/7', label: 'Global Response Ready' },
  { value: '100%', label: 'Confidential Operations' },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      const els = heroRef.current.querySelectorAll('.hero-reveal')
      gsap.fromTo(els,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
      )
    }

    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card')
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 75%' } }
      )
    }

    if (aboutRef.current) {
      const els = aboutRef.current.querySelectorAll('.about-reveal')
      gsap.fromTo(els,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 75%' } }
      )
    }

    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll('.stat-item')
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%' } }
      )
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(59, 88, 184, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div className="hero-reveal section-label">KASPIT Security GmbH</div>
            <h1 className="hero-reveal" style={{
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              <span style={{ color: 'var(--text)' }}>Intelligence-Led</span><br />
              <span className="text-gradient">Security Management</span>
            </h1>
            <p className="hero-reveal" style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}>
              Protecting what matters most with strategic precision
              and absolute discretion. Austria's premier boutique
              for elite security solutions.
            </p>
            <div className="hero-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <MetalCTA to="/contact" label="Request Risk Assessment" />
              <MetalCTA to="/about" label="About KASPIT" secondary />
            </div>
          </div>
        </div>

        <div className="hero-reveal" style={{
          position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Scroll</span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--blue), transparent)',
            animation: 'pulse 2s infinite',
          }} />
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} style={{ padding: 'clamp(4rem, 10vw, 8rem) 2rem' }}>
        <div className="container">
          <div className="section-label">Our Strategic Services</div>
          <h2 className="heading-lg" style={{ maxWidth: '600px', marginBottom: '4rem' }}>
            Comprehensive security
            <span style={{ color: 'var(--text-muted)' }}> beyond standard measures</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1px',
            background: 'var(--border)',
          }}>
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="service-card"
                style={{
                  padding: '2.5rem',
                  background: 'var(--bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'background 0.4s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
              >
                <span style={{
                  fontSize: '0.75rem', fontWeight: 700, color: 'var(--blue-light)',
                  letterSpacing: '0.1em', fontFamily: 'monospace',
                }}>{s.num}</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--blue-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 'auto', paddingTop: '0.5rem' }}>
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} style={{ padding: 'clamp(4rem, 10vw, 8rem) 2rem' }}>
        <div className="container">
          <div className="about-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center',
          }}>
            <div>
              <div className="about-reveal section-label">About KASPIT</div>
              <h2 className="about-reveal heading-lg" style={{ marginBottom: '1.5rem' }}>
                Founded on real operational excellence
              </h2>
              <p className="about-reveal" style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: 1.8 }}>
                KASPIT Security is the premium boutique arm of the international KASPIT Group. With branches
                across Europe and the Middle East, we deliver intelligence-led, fully bespoke solutions that
                protect your most valuable assets.
              </p>
              <p className="about-reveal" style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.8 }}>
                Every engagement is tailored to your exact risk environment. Whether you face complex
                investigations, need sophisticated security architecture, global emergencies, or elite training,
                KASPIT Security is the trusted partner that discerning executives choose.
              </p>
              <MetalCTA to="/about" label="About Us" secondary className="about-reveal" />
            </div>
            <div className="about-reveal" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <img
                src="/images/maxim-profile.webp"
                alt="Maxim Gutman - Founder & Managing Director"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.1)' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem',
                background: 'linear-gradient(to top, rgba(5,7,15,0.9), transparent)',
              }}>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>Maxim Gutman</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-item" style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700,
                  letterSpacing: '-0.03em', color: 'var(--blue-light)', lineHeight: 1, marginBottom: '0.5rem',
                }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '2rem' }}>
            Credentials & Affiliations
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap', opacity: 0.5 }}>
            <img src="/images/berufsdetektiv.webp" alt="Berufsdetektiv Wien" style={{ height: '48px', width: 'auto', filter: 'grayscale(1) brightness(2)' }} loading="lazy" />
            <img src="/images/miliz-guetesiegel.webp" alt="Miliz Guetesiegel" style={{ height: '48px', width: 'auto', filter: 'grayscale(1) brightness(2)' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: 'clamp(4rem, 10vw, 8rem) 2rem' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto', textAlign: 'center',
          padding: 'clamp(3rem, 6vw, 5rem)', background: 'var(--surface)', border: '1px solid var(--border)',
        }}>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Ready to secure what matters most?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            All inquiries are handled with the highest level of discretion and personal attention.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <MetalCTA to="/contact" label="Request a Confidential Risk Assessment" />
            <MetalCTA to="/contact" label="Book a Private Consultation" secondary />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  )
}
