import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', service: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
      gsap.fromTo('.contact-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.2 })
      gsap.fromTo('.contact-form', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 })
      gsap.fromTo('.contact-info', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.5 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.25rem',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.6875rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    marginBottom: '0.5rem',
  }

  return (
    <div ref={pageRef}>
      <section style={{ padding: '10rem 0 5rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="contact-label section-label">Confidential Enquiries</div>
          <h1 className="contact-title heading-xl" style={{ maxWidth: '600px', marginBottom: '1.5rem' }}>
            Start a Confidential<br />
            <span className="text-gradient">Conversation</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '480px', marginBottom: '4rem', lineHeight: 1.7 }}>
            We respond within 12 hours. All inquiries are handled with the highest level of discretion and personal attention.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '5rem', alignItems: 'start' }} className="contact-grid">
            {/* Form */}
            <div className="contact-form">
              {sent ? (
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '4rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '56px', height: '56px',
                    border: '1px solid var(--blue)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 2rem',
                    fontSize: '1.25rem',
                    color: 'var(--blue-light)',
                  }}>✓</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Message Received</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    Thank you for reaching out. Maxim will review your enquiry personally and respond within 12 hours with complete discretion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        placeholder="+43 ..."
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Service of Interest</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    >
                      <option value="">Select a service...</option>
                      <option>Security Management & Consulting</option>
                      <option>Independent Security Audit</option>
                      <option>Intelligence-Driven Investigations</option>
                      <option>Emergency Assistance & Duty of Care</option>
                      <option>Security Intelligence & Risk Consulting</option>
                      <option>Elite Training & Capacity Building</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Your Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Briefly describe your situation or requirements..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <div style={{ width: '4px', height: '4px', background: 'var(--blue-light)', borderRadius: '50%', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', lineHeight: 1.5, margin: 0 }}>
                      Your enquiry is strictly confidential. We do not share, sell, or disclose your information to any third party.
                    </p>
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.875rem' }}>
                    <span>Send Message Securely</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {[
                {
                  label: 'Headquarters',
                  content: <>Vienna, Austria<br /><span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)' }}>European HQ</span></>,
                },
                {
                  label: 'Branches',
                  content: <>Germany · Israel<br /><span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)' }}>International Operations</span></>,
                },
                {
                  label: 'Response Time',
                  content: <>Within 12 hours<br /><span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)' }}>All enquiries acknowledged same day</span></>,
                },
                {
                  label: 'Confidentiality',
                  content: <>Absolute discretion<br /><span style={{ fontSize: '0.8125rem', color: 'var(--text-dim)' }}>Every enquiry handled personally</span></>,
                },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.75rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderTop: i > 0 ? 'none' : '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue-light)', marginBottom: '0.5rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--text)', lineHeight: 1.6 }}>
                    {item.content}
                  </div>
                </div>
              ))}

              <div style={{
                padding: '1.75rem',
                background: 'var(--blue)',
                marginTop: '1rem',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>
                  Part of the KASPIT Group
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                  We are ready when you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        select option { background: #0a0d1a; color: #F0F2FF; }
      `}</style>
    </div>
  )
}
