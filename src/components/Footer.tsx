import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Training', href: '/training' },
  { label: 'Security Consulting & Audits', href: '/services/audits' },
  { label: 'The KASPIT Advantage', href: '/advantage' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'Investigations', href: '/services/investigations' },
  { label: 'Security Management', href: '/services/security-management' },
  { label: 'Emergency Assistance', href: '/services/emergency' },
  { label: 'Intelligence', href: '/services/intelligence' },
  { label: 'Training', href: '/training' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/[0.04]">
      <div className="section-padding py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}images/kaspit-logo-white.webp`}
              alt="KASPIT Security"
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
            <p className="body-md max-w-xs">
              Austria's elite intelligence-led security atelier. Part of the international KASPIT Group.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-sm text-text-muted">Vienna, Austria</span>
              <span className="text-sm text-text-muted">Branches: Germany &middot; Israel</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-text mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-text mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="label-text mb-6">Get in Touch</h4>
            <p className="body-md mb-6">
              All inquiries are handled with the highest level of discretion.
            </p>
            <Link to="/contact" className="btn-outline text-xs">
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-padding py-6 border-t border-white/[0.04]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} KASPIT Security &middot; All rights reserved
          </p>
          <p className="text-xs text-text-dim">
            Part of the international KASPIT Group
          </p>
        </div>
      </div>
    </footer>
  )
}
