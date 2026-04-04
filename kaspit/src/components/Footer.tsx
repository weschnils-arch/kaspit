import { Link } from 'react-router-dom'

const services = [
  { label: 'Security Management', href: '/security-management' },
  { label: 'Security Audits', href: '/security-audits' },
  { label: 'Investigations', href: '/investigations' },
  { label: 'Emergency Assistance', href: '/emergency' },
  { label: 'Intelligence', href: '/intelligence' },
  { label: 'Elite Training', href: '/training' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container" style={{ padding: '5rem 2rem 3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'var(--blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: '800', color: 'white',
              }}>K</div>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>KASPIT</div>
                <div style={{ fontSize: '0.625rem', fontWeight: '500', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Security GmbH</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-dim)', maxWidth: '280px' }}>
              Austria's premier boutique for intelligence-led security management. Part of the international KASPIT Group.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>Vienna, Austria</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>Branches: Germany · Israel</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map(s => (
                <li key={s.href}>
                  <Link to={s.href} style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-dim)',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'The KASPIT Advantage', href: '/advantage' },
                { label: 'Contact', href: '/contact' },
              ].map(s => (
                <li key={s.href}>
                  <Link to={s.href} style={{ fontSize: '0.875rem', color: 'var(--text-dim)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Engage</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              All inquiries handled with the highest level of discretion within 12 hours.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.75rem 1.5rem' }}>
              <span>Request Assessment</span>
            </Link>
          </div>
        </div>

        <div className="divider" />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            © 2026 KASPIT Security GmbH · All rights reserved
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
            Part of the international KASPIT Group · Vienna · Germany · Israel
          </p>
        </div>
      </div>
    </footer>
  )
}
