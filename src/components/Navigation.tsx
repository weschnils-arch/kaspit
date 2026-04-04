import { useState, useEffect } from 'react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Advantage', href: '#advantage' },
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="section-padding flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-2xl font-bold tracking-[-0.04em] text-text group-hover:text-primary transition-colors">
              KASPIT
            </span>
            <span className="text-[0.55rem] font-medium tracking-[0.25em] text-text-dim block -mt-0.5">
              SECURITY
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.75rem] font-medium text-text-muted hover:text-primary tracking-[0.08em] uppercase transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary ml-4 !py-2.5 !px-5 !text-xs"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              'block w-6 h-[1.5px] bg-text transition-all duration-300',
              menuOpen && 'rotate-45 translate-y-[7.5px]'
            )}
          />
          <span
            className={clsx(
              'block w-6 h-[1.5px] bg-text transition-all duration-300',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={clsx(
              'block w-6 h-[1.5px] bg-text transition-all duration-300',
              menuOpen && '-rotate-45 -translate-y-[4.5px]'
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden fixed inset-0 top-20 bg-dark/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-display text-text-muted hover:text-primary tracking-[-0.02em] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-primary mt-4"
        >
          Get in Touch
        </a>
      </div>
    </header>
  )
}
