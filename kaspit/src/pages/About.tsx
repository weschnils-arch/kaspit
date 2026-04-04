import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const heroRef = useRef<HTMLElement>(null)
  const founderRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      const els = heroRef.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 })
    }
    if (founderRef.current) {
      const els = founderRef.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: founderRef.current, start: 'top 75%' } })
    }
    if (storyRef.current) {
      const els = storyRef.current.querySelectorAll('.reveal')
      gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%' } })
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} style={{ padding: 'clamp(8rem, 18vh, 12rem) 0 clamp(4rem, 8vh, 6rem)' }}>
        <div className="container">
          <div className="reveal section-label">About KASPIT Security</div>
          <h1 className="reveal heading-xl" style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
            Part of the international KASPIT Group
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '600px', lineHeight: 1.7 }}>
            Founded on real operational excellence. Dedicated to absolute discretion, uncompromising quality, and measurable results.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section ref={founderRef} style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div className="container">
          <div className="founder-grid" style={{
            display: 'grid', gridTemplateColumns: '400px 1fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start',
          }}>
            <div className="reveal" style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="/images/maxim-profile.webp"
                alt="Maxim Gutman"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.1)' }}
              />
            </div>
            <div>
              <div className="reveal section-label">Founder & Managing Director</div>
              <h2 className="reveal heading-lg" style={{ marginBottom: '1.5rem' }}>Maxim Gutman</h2>
              <p className="reveal" style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Maxim Gutman is the founder and managing director of KASPIT Security, the premium boutique arm of the international KASPIT Group. With over 20 years of experience in elite security, intelligence, and risk management, he is a combat veteran officer of the Israel Defense Forces, where he earned the Operational Service Badge and the Second Lebanon War Ribbon.
              </p>
              <p className="reveal" style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                He has also served as an anti-terror expert for international organisations such as the OSCE, as well as in the corporate world, and has been actively involved in worldwide operations of emergency assistance.
              </p>
              <p className="reveal" style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                He combines this exceptional operational background with an MBA from the University of Minnesota and full Austrian certifications as Professional Detective and Safety Expert. At KASPIT Security he delivers bespoke intelligence-led security solutions -- including strategic consulting and independent audits -- for executives, corporations and high-net-worth individuals who expect far more than standard services.
              </p>
              <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
                {['IDF Combat Veteran', 'MBA (Univ. of Minnesota)', 'Certified Professional Detective', 'OSCE Anti-Terror Expert'].map(c => (
                  <span key={c} style={{
                    padding: '0.5rem 1rem', fontSize: '0.75rem', letterSpacing: '0.05em',
                    border: '1px solid var(--border)', color: 'var(--text-muted)',
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal section-label">Company Story</div>
          <h2 className="reveal heading-lg" style={{ marginBottom: '2rem' }}>
            Discretion, excellence and results are our operating principles
          </h2>
          <p className="reveal" style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            KASPIT Security was founded in Vienna as the elite boutique division of the international KASPIT Group. With dedicated branches in Austria and Germany (Europe) and Israel (Middle East), we combine the precision of elite military and intelligence experience with Austrian professionalism and true global reach.
          </p>
          <p className="reveal" style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Every client receives personal attention and solutions designed exclusively for their needs. Discretion, excellence and results are not marketing words -- they are our operating principles.
          </p>
          <div className="reveal" style={{
            padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)', marginTop: '2rem',
          }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>Our Promise</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic' }}>
              Absolute discretion. Uncompromising quality. Strategic consulting and independent audits that deliver measurable excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{
          maxWidth: '700px', margin: '0 auto', textAlign: 'center',
          padding: 'clamp(3rem, 5vw, 4rem)', background: 'var(--surface)', border: '1px solid var(--border)',
        }}>
          <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Meet Maxim personally</h2>
          <Link to="/contact" className="btn-primary"><span>Book a Private Consultation</span></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
