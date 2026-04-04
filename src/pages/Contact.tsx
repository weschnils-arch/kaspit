import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { LiquidMetalButton } from '../components/ui/LiquidMetalButton'
import { useTheme } from '../context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const { theme } = useTheme()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo('.contact-form', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: '.contact-form', start: 'top 80%' }
    })
    gsap.fromTo('.contact-info', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: '.contact-info', start: 'top 80%' }
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.6875rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--gray-2)',
    marginBottom: '0.5rem',
  }

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <PageHero
        label="Start a Confidential Conversation"
        title="Contact KASPIT Security"
        subtitle="We respond within 12 hours. All inquiries are handled with the highest level of discretion and personal attention."
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Form */}
          <div className="contact-form" style={{ opacity: 0 }}>
            {submitted ? (
              <div style={{
                padding: '3rem',
                background: 'rgba(59,88,184,0.08)',
                border: '1px solid rgba(59,88,184,0.25)',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Message Received
                </div>
                <p style={{ color: 'var(--gray-1)', lineHeight: 1.75 }}>
                  Thank you for reaching out. We will respond within 12 hours with complete discretion.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(59,88,184,0.6)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company / Organisation</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(59,88,184,0.6)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(59,88,184,0.6)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(59,88,184,0.6)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Service of Interest</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(59,88,184,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" style={{ background: '#0d1428' }}>Select a service</option>
                    <option value="security-management" style={{ background: '#0d1428' }}>Security Management</option>
                    <option value="security-audits" style={{ background: '#0d1428' }}>Security Audits</option>
                    <option value="investigations" style={{ background: '#0d1428' }}>Investigations</option>
                    <option value="emergency-assistance" style={{ background: '#0d1428' }}>Emergency Assistance & Duty of Care</option>
                    <option value="intelligence" style={{ background: '#0d1428' }}>Intelligence & Risk Consulting</option>
                    <option value="training" style={{ background: '#0d1428' }}>Training & Capacity Building</option>
                    <option value="general" style={{ background: '#0d1428' }}>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(59,88,184,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                    placeholder="Briefly describe your situation or requirements..."
                  />
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--gray-2)', lineHeight: 1.7 }}>
                  All information is treated with the strictest confidentiality. Your inquiry will never be shared with third parties.
                </p>

                <div style={{ alignSelf: 'flex-start' }}>
                  <LiquidMetalButton label="Send Message Securely" colorScheme={theme} type="submit" />
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              padding: '2.5rem',
              background: 'rgba(13,20,40,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div className="section-label">KASPIT Security</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Part of the international KASPIT Group
              </p>

              {[
                { label: 'Headquarters', value: 'Vienna, Austria' },
                { label: 'Branches', value: 'Germany • Israel' },
                { label: 'Response Time', value: 'Within 12 hours' },
                { label: 'Availability', value: '24/7 for emergencies' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.875rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '0.875rem',
                }}>
                  <span style={{ color: 'var(--gray-2)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    {item.label}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: '2rem',
              background: 'rgba(59,88,184,0.06)',
              border: '1px solid rgba(59,88,184,0.15)',
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.125rem', color: 'var(--gold-light)', marginBottom: '1rem', lineHeight: 1.6 }}>
                "Discretion, excellence and results are not marketing words — they are our operating principles."
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
                Maxim Gutman, Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
