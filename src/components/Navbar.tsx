import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { useTheme } from '../context/ThemeContext'
import LiquidMetalButton from './ui/LiquidMetalButton'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Advantage', href: '/advantage' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50',
          scrolled ? 'border-b border-white/[0.04]' : 'border-b border-transparent'
        )}
        style={{
          backgroundColor: scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          transition: 'background-color 500ms ease, backdrop-filter 500ms ease, -webkit-backdrop-filter 500ms ease, border-color 500ms ease',
        }}
      >
        <div className="section-padding flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <img
              src={`${import.meta.env.BASE_URL}images/kaspit-logo-full.webp`}
              alt="KASPIT Security Solutions"
              className="h-7 lg:h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  'text-[0.8125rem] font-medium tracking-[0.08em] uppercase transition-colors duration-300',
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-text-muted hover:text-text'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Risk Assessment CTA + Theme Toggle */}
            <div className="flex items-center gap-3 ml-4">
              {theme === 'silver' ? (
                <Link to="/contact">
                  <LiquidMetalButton
                    label="Risk Assessment"
                  />
                </Link>
              ) : (
                <Link to="/contact" className="btn-primary text-xs py-3 px-6">
                  Risk Assessment
                </Link>
              )}

              {/* Toggle icon */}
              <button
                onClick={toggle}
                className="theme-toggle"
                aria-label={`Switch to ${theme === 'gold' ? 'silver' : 'gold'} theme`}
                title={`Switch to ${theme === 'gold' ? 'silver' : 'gold'}`}
              >
                {theme === 'gold' ? (
                  /* Diamond/gem icon for gold -> silver */
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 13L2 9z" />
                    <path d="M2 9h20" />
                    <path d="M10 3l-4 6 6 13 6-13-4-6" />
                  </svg>
                ) : (
                  /* Sun/gold icon for silver -> gold */
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                'w-6 h-[1.5px] bg-text transition-all duration-300',
                menuOpen && 'rotate-45 translate-y-[4.5px]'
              )}
            />
            <span
              className={clsx(
                'w-6 h-[1.5px] bg-text transition-all duration-300',
                menuOpen && '-rotate-45 -translate-y-[4.5px]'
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-dark/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-center items-center',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={clsx(
                'text-2xl font-light tracking-wide transition-all duration-500',
                menuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4',
                location.pathname === link.href ? 'text-primary' : 'text-text'
              )}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-4" style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}>
            {theme === 'silver' ? (
              <Link to="/contact">
                <LiquidMetalButton label="Request Assessment" />
              </Link>
            ) : (
              <Link to="/contact" className="btn-primary">
                Request Assessment
              </Link>
            )}

            <button
              onClick={toggle}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'gold' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 13L2 9z" />
                  <path d="M2 9h20" />
                  <path d="M10 3l-4 6 6 13 6-13-4-6" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
