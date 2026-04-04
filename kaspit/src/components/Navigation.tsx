import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MetalCTA from './MetalCTA'

const navLinks = [
  { label: 'Services', href: '/security-management' },
  { label: 'Investigations', href: '/investigations' },
  { label: 'Intelligence', href: '/intelligence' },
  { label: 'Training', href: '/training' },
  { label: 'The Kaspit Edge', href: '/advantage' },
  { label: 'About', href: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(5, 7, 15, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(75, 110, 200, 0.12)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: '80px', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'var(--blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: '800',
              letterSpacing: '0.05em',
              color: 'white',
            }}>K</div>
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', lineHeight: 1.1 }}>KASPIT</div>
              <div style={{ fontSize: '0.625rem', fontWeight: '500', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', lineHeight: 1 }}>Security GmbH</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="nav-link"
                style={{ color: location.pathname === link.href ? 'var(--text)' : undefined }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MetalCTA to="/contact" label="Contact" style={{ padding: '0.625rem 1.25rem', fontSize: '0.75rem' }} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                flexDirection: 'column',
                gap: '5px',
              }}
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99,
        background: 'rgba(5, 7, 15, 0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.4s ease',
      }}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            to={link.href}
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
          >
            {link.label}
          </Link>
        ))}
        <MetalCTA to="/contact" label="Start a Confidential Conversation" style={{ marginTop: '1rem' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
