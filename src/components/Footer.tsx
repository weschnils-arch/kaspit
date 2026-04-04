import { Link } from 'react-router-dom'

const services = [
  { label: 'Security Management', path: '/services/security-management' },
  { label: 'Security Audits', path: '/services/security-audits' },
  { label: 'Investigations', path: '/services/investigations' },
  { label: 'Emergency Assistance', path: '/services/emergency-assistance' },
  { label: 'Intelligence', path: '/services/intelligence' },
  { label: 'Training', path: '/services/training' },
]

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(7, 11, 24, 0.9)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <img
              src="/assets/kaspit-logo-white.webp"
              alt="KASPIT Security"
              style={{ height: '32px', width: 'auto', filter: 'brightness(10)', marginBottom: '1.25rem' }}
            />
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '260px' }}>
              Austria's elite intelligence-led security atelier. Part of the international KASPIT Group.
            </p>
            <div style={{ marginTop: '1.5rem', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Vienna &bull; Germany &bull; Israel
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-bright)', marginBottom: '1.25rem' }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {services.map(s => (
                <Link
                  key={s.path}
                  to={s.path}
                  style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-bright)', marginBottom: '1.25rem' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { label: 'About KASPIT', path: '/about' },
                { label: 'The KASPIT Advantage', path: '/advantage' },
                { label: 'Contact', path: '/contact' },
              ].map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-bright)', marginBottom: '1.25rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
              <div>Vienna, Austria</div>
              <div>European Headquarters</div>
              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}>
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.25)',
        }}>
          <div>&copy; 2026 KASPIT Security GmbH &bull; All rights reserved</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy Policy</span>
            <span>Imprint</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
