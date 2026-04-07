import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'
import MetalCTA from '../components/ui/MetalCTA'

const advantages = [
  {
    title: 'Cutting-Edge Technology',
    desc: 'We deploy the latest technologies and high-level analytical tools that standard providers simply do not possess.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Intelligence-Led Approach',
    desc: 'Every engagement starts with intelligence gathering and analysis, not assumptions. We think before we act.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Strategic Consulting & Audits',
    desc: 'Independent evaluations that identify vulnerabilities, strengthen resilience, and ensure compliance at the highest level.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Global Reach',
    desc: 'Branches in Austria, Germany and Israel. A trusted international network that operates seamlessly across borders.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Absolute Discretion',
    desc: 'Confidentiality is not a feature -- it is the foundation of everything we do. Your trust is earned and protected.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Personal Leadership',
    desc: 'Maxim Gutman personally leads every mandate. You work directly with the founder -- never a subcontracted team.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Advantage() {
  usePageTitle('The KASPIT Advantage')
  const heroRef = useScrollReveal<HTMLDivElement>()
  const introRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">The KASPIT Advantage</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Why KASPIT<br /><span className="text-primary">Stands Alone</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Competitive edge through cutting-edge technology, best practices, and strategic depth.
            While others offer standard guarding, we deliver true strategic resilience.
          </p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Intro paragraph */}
      <section ref={introRef} className="section-padding py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start">
          <div data-reveal>
            <span className="label-text">The Difference</span>
            <h2 className="heading-lg mt-4">
              Standard Guarding<br /><span className="text-primary">Reimagined</span>
            </h2>
          </div>
          <div data-reveal className="space-y-6 body-lg">
            <p>
              KASPIT Security delivers a real competitive advantage by deploying the latest
              cutting-edge technologies, high-level analytical tools, and the highest industry
              best practices.
            </p>
            <p>
              While others offer standard guarding services, we deliver true strategic resilience,
              intelligence-led protection, expert security consulting, and independent audits. Our
              clients choose KASPIT Security because they expect — and receive — far more than
              security. They receive a trusted partner who thinks, plans and acts at the highest
              level, turning potential weaknesses into proven strengths.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="section-padding py-24 lg:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              data-reveal
              className="glass-card rounded-sm p-8 lg:p-10 group hover:border-primary/10 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/5 transition-colors duration-500">
                {adv.icon}
              </div>
              <h3 className="heading-sm mb-4">{adv.title}</h3>
              <p className="body-md">{adv.desc}</p>
            </div>
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
            Our clients choose KASPIT Security because they expect -- and receive -- far more than security.
            They receive a trusted partner who thinks, plans and acts at the highest level.
          </p>
          <MetalCTA
            to="/contact"
            label="Request Your Confidential Risk Assessment"
            width={320}
            height={52}
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </section>
    </>
  )
}
