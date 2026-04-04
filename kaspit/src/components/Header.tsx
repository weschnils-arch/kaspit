import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'The Advantage', href: '/advantage' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/kaspit-white.webp"
              alt="KASPIT Security"
              className="h-8 w-auto brightness-200 invert-0"
            />
            <div className="hidden sm:block">
              <span className="text-white font-semibold tracking-[0.15em] text-sm uppercase">
                KASPIT
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-white/40 uppercase">
                Security
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  'text-[13px] tracking-[0.1em] uppercase transition-colors duration-300',
                  location.pathname === link.href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-4">
              <span>Get Assessment</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                'w-6 h-[1.5px] bg-white transition-all duration-300',
                menuOpen && 'rotate-45 translate-y-[7.5px]'
              )}
            />
            <span
              className={clsx(
                'w-6 h-[1.5px] bg-white transition-all duration-300',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={clsx(
                'w-6 h-[1.5px] bg-white transition-all duration-300',
                menuOpen && '-rotate-45 -translate-y-[7.5px]'
              )}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-20 bg-[#0a0a0f]/98 backdrop-blur-2xl transition-all duration-500 z-40',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={clsx(
                'text-2xl tracking-[0.15em] uppercase transition-colors duration-300',
                location.pathname === link.href
                  ? 'text-white'
                  : 'text-white/40 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4">
            <span>Get Assessment</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
