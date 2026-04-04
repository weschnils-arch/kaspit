import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { LiquidMetalButton } from '../components/ui/LiquidMetalButton'
import { useTheme } from '../context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    number: '01',
    title: 'Real Operational Experience',
    desc: 'Not textbook theory — every solution is built on genuine frontline intelligence and security experience spanning 20+ years and multiple continents.',
  },
  {
    number: '02',
    title: 'Cutting-Edge Technology',
    desc: 'We deploy the latest analytical tools, OSINT platforms and intelligence technologies that most security firms don\'t have access to.',
  },
  {
    number: '03',
    title: 'Truly Bespoke',
    desc: 'No templates, no standard packages. Every mandate is built from scratch around your exact threat landscape and business objectives.',
  },
  {
    number: '04',
    title: 'Personal Leadership',
    desc: 'Maxim Gutman personally leads every engagement. You deal with the principal, not a junior account manager.',
  },
  {
    number: '05',
    title: 'Global Reach',
    desc: 'Branches in Austria, Germany and Israel with a trusted network of assets spanning Europe, the Middle East and beyond.',
  },
  {
    number: '06',
    title: 'Highest Industry Standards',
    desc: 'Full Austrian certifications, OSCE experience, and adherence to the highest ethical and professional standards in the industry.',
  },
]

export default function Advantage() {
  const { theme } = useTheme()
  useEffect(() => {
    gsap.fromTo('.adv-card', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
      scrollTrigger: { trigger: '.adv-grid', start: 'top 80%' }
    })
    gsap.fromTo('.adv-body', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: '.adv-body', start: 'top 80%' }
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <PageHero
        label="The KASPIT Advantage"
        title="Why KASPIT Security Stands Alone"
        subtitle="Competitive edge through cutting-edge technology, best practices, and strategic depth."
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 6rem' }}>

        <div className="adv-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '5rem',
        }}>
          {advantages.map((a, i) => (
            <div key={i} className="adv-card" style={{
              opacity: 0,
              padding: '2.5rem',
              background: 'var(--navy-2)',
              transition: 'background 0.25s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(59,88,184,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--navy-2)')}
            >
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '2.5rem', color: 'rgba(59,88,184,0.3)', lineHeight: 1, marginBottom: '1.25rem' }}>
                {a.number}
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.875rem', fontFamily: 'Anton, sans-serif' }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.75 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Body copy */}
        <div className="adv-body" style={{ opacity: 0, maxWidth: '780px', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.0625rem', color: 'var(--gray-1)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            KASPIT Security delivers a real competitive advantage by deploying the latest cutting-edge technologies, high-level analytical tools, and the highest industry best practices.
          </p>
          <p style={{ fontSize: '1.0625rem', color: 'var(--gray-1)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            While others offer standard guarding services, we deliver true strategic resilience, intelligence-led protection, expert security consulting, and independent audits. Our clients choose KASPIT Security because they expect — and receive — far more than security.
          </p>
          <p style={{ fontSize: '1.0625rem', color: 'var(--gray-1)', lineHeight: 1.9 }}>
            They receive a trusted partner who thinks, plans and acts at the highest level, turning potential weaknesses into proven strengths.
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: 'rgba(59,88,184,0.08)',
          border: '1px solid rgba(59,88,184,0.2)',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'flex-start',
        }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'Anton, sans-serif' }}>
            Experience the difference.
          </h3>
          <LiquidMetalButton label="Request Your Confidential Risk Assessment Today" to="/contact" colorScheme={theme} />
        </div>

      </div>
    </div>
  )
}
