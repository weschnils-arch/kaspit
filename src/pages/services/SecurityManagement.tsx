import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import MetalCTA from '../../components/ui/MetalCTA'

const gains = [
  'Proactive threat mitigation and strategic foresight instead of reactive measures',
  'Expert consulting that aligns security with your business goals',
  'Independent audits that reveal hidden vulnerabilities and deliver actionable roadmaps',
  'Seamless integration with your daily operations and travel',
  'Scalable solutions that grow with your organisation and regulatory requirements',
  'Reduced exposure, enhanced reputation, and demonstrable compliance',
]

const approach = [
  {
    title: 'Comprehensive Risk Assessment',
    desc: 'We analyse your unique vulnerabilities across people, assets, operations, and compliance.',
  },
  {
    title: 'Strategic Consulting & Concept Development',
    desc: 'We design custom security architectures and policies tailored to your exact needs.',
  },
  {
    title: 'Independent Security Audits',
    desc: 'Thorough, objective evaluations of current measures with clear findings and prioritised recommendations.',
  },
  {
    title: 'Elite Implementation & Continuous Monitoring',
    desc: 'We support rollout and provide ongoing adaptation to evolving threats.',
  },
]

export default function SecurityManagement() {
  usePageTitle('Strategic Security Management')
  const heroRef = useScrollReveal<HTMLDivElement>()
  const introRef = useScrollReveal<HTMLDivElement>()
  const gainsRef = useScrollReveal<HTMLDivElement>()
  const approachRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Service 02 — Security Management</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Strategic Security Management,<br />
            <span className="text-primary">Consulting & Audits</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            360° concepts, expert consulting, and independent security audits tailored to complex
            risks — never standard guarding.
          </p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Introduction */}
      <section ref={introRef} className="section-padding py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start">
          <div data-reveal>
            <span className="label-text">Introduction</span>
            <h2 className="heading-lg mt-4">
              Lasting Resilience<br /><span className="text-primary">By Design</span>
            </h2>
          </div>
          <div data-reveal className="space-y-6 body-lg">
            <p>
              True security is not about placing guards — it is about building lasting resilience
              through intelligence, foresight, precision planning, and continuous improvement.
            </p>
            <p>
              KASPIT Security creates fully bespoke 360° security concepts that integrate risk
              assessment, executive protection, physical and technical measures, crisis preparedness,
              strategic consulting, and independent security audits into one seamless, intelligence-led
              strategy.
            </p>
            <p>
              Our consulting services help you design, optimize, and evolve your security posture. Our
              audits provide objective evaluations of existing systems, policies, and procedures —
              identifying gaps, recommending enhancements, and ensuring compliance with Austrian and
              international standards. Whether you require protection for corporate leadership,
              high-net-worth families, international operations, or sensitive sites, our solutions are
              designed around your specific threat landscape and business objectives.
            </p>
            <p>
              Backed by the global infrastructure of the KASPIT Group and branches in Austria, Germany
              and Israel, we deliver measurable security excellence that allows you to focus on success
              while we handle the risks with strategic depth.
            </p>
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section ref={gainsRef} className="section-padding py-24 lg:py-36 bg-dark-900">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <span className="label-text">Results</span>
          <h2 className="heading-lg mt-4 mb-12">What You <span className="text-primary">Gain</span></h2>
          <div className="max-w-xl mx-auto space-y-4">
            {gains.map((gain) => (
              <div
                key={gain}
                className="flex items-center gap-4 text-left py-4 border-b border-white/[0.04] last:border-0"
              >
                <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-primary">
                    <path d="M3 8l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="body-lg text-text">{gain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="section-padding py-24 lg:py-36">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-reveal>
            <span className="label-text">Methodology</span>
            <h2 className="heading-lg mt-4">Our <span className="text-primary">Approach</span></h2>
          </div>
          <div className="space-y-6">
            {approach.map((step, i) => (
              <div
                key={step.title}
                data-reveal
                className="group glass-card rounded-sm p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 transition-all duration-500 hover:border-primary/30 hover:bg-dark-800/80 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(176,190,197,0.06)]"
              >
                <span className="text-xs text-text-dim font-mono tracking-wider group-hover:text-primary transition-colors duration-500">0{i + 1}</span>
                <div>
                  <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                  <p className="body-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding py-24 lg:py-36 text-center">
        <div data-reveal className="max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6">
            Design, Audit & Optimise Your <span className="text-primary">Security Architecture</span>
          </h2>
          <p className="body-lg mb-10">
            Start with a confidential assessment. We build security strategies that evolve with your organisation.
          </p>
          <MetalCTA
            to="/contact"
            label="Start with a Confidential Assessment"
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
