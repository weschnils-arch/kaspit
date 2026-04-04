import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { LiquidMetalButton } from '../components/ui/LiquidMetalButton'
import { useTheme } from '../context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const credentials = [
  { label: 'IDF Combat Veteran', desc: 'Operational Service Badge & Second Lebanon War Ribbon' },
  { label: 'OSCE Anti-Terror Expert', desc: 'International organisations and corporate engagements' },
  { label: 'MBA — University of Minnesota', desc: 'Strategic business leadership combined with operational depth' },
  { label: 'Austrian Certified Detective', desc: 'Full Austrian certification as Professional Detective' },
  { label: 'Sicherheitsfachkraft', desc: 'Austrian Safety Expert certification' },
  { label: '20+ Years Experience', desc: 'Elite security, intelligence and risk management' },
]

export default function About() {
  const { theme } = useTheme()
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo('.about-founder', { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9,
      scrollTrigger: { trigger: '.about-founder', start: 'top 80%' }
    })
    gsap.fromTo('.cred-item', { opacity: 0, x: -15 }, {
      opacity: 1, x: 0, duration: 0.5, stagger: 0.08,
      scrollTrigger: { trigger: '.about-creds', start: 'top 80%' }
    })
    gsap.fromTo('.about-story', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: '.about-story', start: 'top 80%' }
    })
    gsap.fromTo('.about-promise', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: '.about-promise', start: 'top 80%' }
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <PageHero
        label="About KASPIT Security"
        title="Founded on Real Operational Excellence"
        subtitle="Part of the international KASPIT Group — Austria, Germany, Israel."
      />

      <div ref={bodyRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 6rem' }}>

        {/* Founder */}
        <div className="about-founder" style={{
          opacity: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '5rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="/assets/maxim-gutman.webp"
                alt="Maxim Gutman"
                loading="lazy"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: '520px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'grayscale(15%)',
                }}
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '2px solid var(--blue)', borderLeft: '2px solid var(--blue)' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '2px solid var(--blue)', borderRight: '2px solid var(--blue)' }} />
            </div>
          </div>

          <div>
            <div className="section-label">Founder &amp; Managing Director</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>Maxim Gutman</h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Maxim Gutman is the founder and managing director of KASPIT Security, the premium boutique arm of the international KASPIT Group. With over 20 years of experience in elite security, intelligence, and risk management, he is a combat veteran officer of the Israel Defense Forces.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              He has also served as an anti-terror expert for international organisations such as the OSCE, as well as in the corporate world, and has been actively involved in worldwide operations of emergency assistance.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.9, marginBottom: '2rem' }}>
              At KASPIT Security he delivers bespoke intelligence-led solutions — including strategic consulting and independent audits — for executives, corporations and high-net-worth individuals who expect far more than standard services.
            </p>
            <LiquidMetalButton label="Book a Private Consultation" to="/contact" colorScheme={theme} />
          </div>
        </div>

        {/* Credentials */}
        <div className="about-creds" style={{ marginBottom: '5rem' }}>
          <div className="section-label">Credentials & Qualifications</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {credentials.map((c, i) => (
              <div key={i} className="cred-item" style={{
                opacity: 0,
                padding: '1.75rem',
                background: 'var(--navy-2)',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue-bright)', marginBottom: '0.5rem' }}>
                  {c.label}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.65 }}>
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="about-story" style={{
          opacity: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '5rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <div className="section-label">Company Story</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
              Founded in Vienna.<br />Built for the World.
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              KASPIT Security was founded in Vienna as the elite boutique division of the international KASPIT Group. With dedicated branches in Austria and Germany (Europe) and Israel (Middle East), we combine the precision of elite military and intelligence experience with Austrian professionalism and true global reach.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--gray-1)', lineHeight: 1.9 }}>
              Every client receives personal attention and solutions designed exclusively for their needs. Discretion, excellence and results are not marketing words — they are our operating principles.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { label: 'Austria', desc: 'European Headquarters — Vienna' },
              { label: 'Germany', desc: 'European Branch' },
              { label: 'Israel', desc: 'Middle East Operations' },
            ].map((b, i) => (
              <div key={i} style={{
                padding: '1.5rem 2rem',
                background: 'rgba(13,20,40,0.7)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
              }}>
                <div style={{ width: '3px', height: '40px', background: 'var(--blue)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '1rem', marginBottom: '0.25rem' }}>{b.label}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--gray-2)' }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise */}
        <div className="about-promise" style={{
          opacity: 0,
          background: 'rgba(59,88,184,0.08)',
          border: '1px solid rgba(59,88,184,0.2)',
          padding: '3rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Promise</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
            Absolute Discretion.<br />Uncompromising Quality.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-1)', lineHeight: 1.85, marginBottom: '2rem' }}>
            Strategic consulting and independent audits that deliver measurable excellence. Every mandate. Every time.
          </p>
          <LiquidMetalButton label="Book a Private Consultation" to="/contact" colorScheme={theme} />
        </div>

      </div>
    </div>
  )
}
