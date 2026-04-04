import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    num: '01',
    title: 'Intelligence-Driven Investigations',
    desc: 'Discreet, intelligence-led investigations that deliver verifiable facts. From background due diligence and asset tracing to complex fraud investigations and litigation support.',
    href: '/services/investigations',
    capabilities: ['Background Due Diligence', 'Asset Tracing', 'Fraud Investigation', 'Litigation Support'],
  },
  {
    num: '02',
    title: 'Strategic Security Management',
    desc: 'Fully bespoke 360° security concepts integrating risk assessment, executive protection, crisis preparedness, strategic consulting, and independent security audits.',
    href: '/services/security-management',
    capabilities: ['Executive Protection', 'Risk Assessment', 'Crisis Management', 'Physical Security'],
  },
  {
    num: '03',
    title: 'Security Audits & Compliance',
    desc: 'Independent, high-level security audits that go far beyond standard checklists. Objective assessment of your security posture with actionable recommendations.',
    href: '/services/audits',
    capabilities: ['Posture Assessment', 'Compliance Review', 'Gap Analysis', 'Executive Protection Audits'],
  },
  {
    num: '04',
    title: 'Emergency Assistance & Duty of Care',
    desc: 'Immediate, intelligence-supported emergency assistance anywhere in the world with 24/7 command structure and global network of trusted assets.',
    href: '/services/emergency',
    capabilities: ['24/7 Response', 'Medical Evacuation', 'Crisis Extraction', 'Pre-Travel Advisory'],
  },
  {
    num: '05',
    title: 'Security Intelligence & Risk Consulting',
    desc: 'Full spectrum intelligence disciplines -- HUMINT, SIGINT, GEOINT, MASINT, OSINT, TECHINT -- combined with cutting-edge technology to reveal the hidden and unknown.',
    href: '/services/intelligence',
    capabilities: ['Competitive Intelligence', 'Threat Assessment', 'Counter-Intelligence', 'Due Diligence'],
  },
  {
    num: '06',
    title: 'Elite Training & Capacity Building',
    desc: 'Bespoke training programs designed for corporations, executives and security professionals. Intelligence-informed, scenario-based, tailored to your risk profile.',
    href: '/training',
    capabilities: ['Precision Shooting', 'Krav Maga', 'HEAT Training', 'Medical Response'],
  },
]

export default function Services() {
  const heroRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[180px] -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Our Services</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Strategic <span className="text-primary">Security</span> Services
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            From investigations to emergency response, every service is intelligence-led,
            fully bespoke, and delivered with absolute discretion.
          </p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Services Grid */}
      <section ref={gridRef} className="section-padding py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.num}
              to={service.href}
              data-reveal
              className="group glass-card rounded-sm p-8 lg:p-10 transition-all duration-500 hover:border-primary/10 hover:bg-dark-800/80"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs text-text-dim font-mono">{service.num}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
                <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-text-muted group-hover:text-primary transition-colors">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors duration-500">
                {service.title}
              </h3>
              <p className="body-md mb-8">{service.desc}</p>

              <div className="flex flex-wrap gap-2">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[0.6875rem] text-text-dim px-3 py-1.5 border border-white/[0.06] rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding py-24 lg:py-36 bg-dark-900 text-center">
        <div data-reveal className="max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6">
            Experience the <span className="text-primary">Difference</span>
          </h2>
          <p className="body-lg mb-10">
            Request your confidential risk assessment today. Every conversation begins with discretion.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Risk Assessment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
