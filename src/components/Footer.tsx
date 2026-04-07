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
              src={`${import.meta.env.BASE_URL}images/kaspit-logo-full.webp`}
              alt="KASPIT Security Solutions"
              className="h-9 w-auto mb-6"
            />
            <p className="body-md max-w-xs">
              Austria's elite intelligence-led security atelier. Part of the international KASPIT Group.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-sm text-text-muted">Vienna, Austria</span>
              <span className="text-sm text-text-muted">Branches: Germany &middot; Israel</span>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/kaspit-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KASPIT Security on LinkedIn"
                className="group relative w-11 h-11 flex items-center justify-center border border-white/[0.08] rounded-sm overflow-hidden transition-all duration-500 hover:border-primary/40"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500" />
                <svg
                  className="relative w-[18px] h-[18px] text-text-muted group-hover:text-primary transition-colors duration-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
              </a>
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
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/imprint"
              className="text-xs text-text-dim hover:text-primary transition-colors duration-300"
            >
              Imprint
            </Link>
            <Link
              to="/terms"
              className="text-xs text-text-dim hover:text-primary transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <p className="text-xs text-text-dim">
              Part of the international KASPIT Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
