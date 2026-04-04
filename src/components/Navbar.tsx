import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
  { label: 'Security Management', path: '/services/security-management' },
  { label: 'Security Audits', path: '/services/security-audits' },
  { label: 'Investigations', path: '/services/investigations' },
  { label: 'Emergency Assistance', path: '/services/emergency-assistance' },
  { label: 'Intelligence', path: '/services/intelligence' },
  { label: 'Training', path: '/services/training' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(7, 11, 24, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>
        {/* Logo */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <img
            src="/assets/kaspit-logo-white.webp"
            alt="KASPIT Security"
            style={{ height: '36px', width: 'auto', filter: 'brightness(10)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
          className="desktop-nav"
        >
          {/* Services dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '0.5rem',
                background: 'rgba(13, 20, 40, 0.98)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                minWidth: '240px',
                padding: '0.5rem 0',
              }}>
                {services.map(s => (
                  <Link
                    key={s.path}
                    to={s.path}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.6)',
                      transition: 'color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(59,88,184,0.15)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'The KASPIT Advantage', path: '/advantage' },
            { label: 'About', path: '/about' },
          ].map(item => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: location.pathname === item.path ? '#fff' : 'rgba(255,255,255,0.7)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = location.pathname === item.path ? '#fff' : 'rgba(255,255,255,0.7)')}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/contact" className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.75rem' }}>
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(7, 11, 24, 0.98)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1.5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          <div style={{ marginBottom: '0.5rem', opacity: 0.5, fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            Services
          </div>
          {services.map(s => (
            <Link key={s.path} to={s.path} style={{ padding: '0.875rem 0', fontSize: '0.8125rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {s.label}
            </Link>
          ))}
          <Link to="/advantage" style={{ padding: '0.875rem 0', fontSize: '0.8125rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            The KASPIT Advantage
          </Link>
          <Link to="/about" style={{ padding: '0.875rem 0', fontSize: '0.8125rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            About
          </Link>
          <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', textAlign: 'center', justifyContent: 'center' }}>
            Contact
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
