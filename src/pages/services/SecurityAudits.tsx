import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import MetalCTA from '../../components/ui/MetalCTA'

const gains = [
  'Objective, independent validation of your existing security measures',
  'Identification of hidden vulnerabilities and single points of failure',
  'Clear, prioritised roadmap with immediate and long-term recommendations',
  'Measurable improvements in resilience and risk reduction',
  'Full compliance with Austrian regulations, GDPR, and international Duty of Care standards',
  'Enhanced reputation as a securely managed organisation',
  'Absolute confidentiality',
]

const scope = [
  'Comprehensive Security Posture Audits (physical, technical, procedural, human factors)',
  'Executive Protection Program Audits',
  'Crisis Management & Emergency Response Audits',
  'Travel Security & Duty of Care Audits',
  'Policy, Procedure & Compliance Reviews',
  'Site Security & Perimeter Audits',
  'Intelligence & Counter-Intelligence Program Assessments',
  'Gap Analysis against Austrian and international best practices',
]

const approach = [
  {
    title: 'Confidential Briefing & Scope Definition',
    desc: 'We start with a private discussion to understand your objectives, constraints, and risk priorities.',
  },
  {
    title: 'Thorough On-Site & Remote Assessment',
    desc: 'Multi-disciplinary evaluation using proven intelligence methodologies and advanced analytical tools.',
  },
  {
    title: 'Detailed Findings & Risk Mapping',
    desc: 'Clear presentation of vulnerabilities, their potential impact, and likelihood.',
  },
  {
    title: 'Actionable Recommendations & Roadmap',
    desc: 'Prioritised, practical steps with timelines, responsible parties, and estimated effort.',
  },
  {
    title: 'Optional Implementation Support & Follow-Up Audit',
    desc: 'We can assist with rollout and conduct verification audits to confirm improvements.',
  },
]

export default function SecurityAudits() {
  usePageTitle('Security Audits & Compliance')
  const heroRef = useScrollReveal<HTMLDivElement>()
  const introRef = useScrollReveal<HTMLDivElement>()
  const gainsRef = useScrollReveal<HTMLDivElement>()
  const scopeRef = useScrollReveal<HTMLDivElement>()
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
          <span data-reveal className="label-text">Service 03 — Security Audits</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Independent Security Audits &<br />
            <span className="text-primary">Compliance Reviews</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Objective evaluations that reveal hidden vulnerabilities and deliver clear, actionable
            strategies for lasting resilience.
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
              Beyond<br /><span className="text-primary">Standard Checklists</span>
            </h2>
          </div>
          <div data-reveal className="space-y-6 body-lg">
            <p>
              In an increasingly complex risk environment, even well-intentioned security measures
              can contain blind spots. KASPIT Security provides independent, high-level security
              audits that go far beyond standard checklists.
            </p>
            <p>
              Our audits combine deep intelligence expertise with strategic consulting to deliver
              an objective, comprehensive assessment of your current security posture — across
              physical protection, procedures, policies, technology, crisis preparedness, and
              compliance.
            </p>
            <p>
              Supported by the international network of the KASPIT Group, every audit is tailored
              to your specific industry, threat landscape, and organisational needs. We identify
              gaps others miss, quantify risks with precision, and provide prioritised, practical
              recommendations that strengthen your protection and reduce exposure.
            </p>
            <p>
              Whether you require a full enterprise-wide audit, targeted reviews of executive
              protection programs, due diligence for international operations, or compliance
              assessments against Austrian and international standards, KASPIT Security delivers
              the clarity and strategic advantage that discerning clients demand.
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

      {/* Audit Scope */}
      <section ref={scopeRef} className="section-padding py-24 lg:py-36">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-reveal>
            <span className="label-text">Coverage</span>
            <h2 className="heading-lg mt-4">Our Audit <span className="text-primary">Scope</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scope.map((item, i) => {
              const isLast = i === scope.length - 1 && scope.length % 2 === 1
              return (
                <div
                  key={item}
                  data-reveal
                  className={`group glass-card rounded-sm p-6 lg:p-8 flex items-start gap-4 transition-all duration-500 hover:border-primary/30 hover:bg-dark-800/80 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(176,190,197,0.06)] ${
                    isLast ? 'md:col-span-2' : ''
                  }`}
                >
                  <span className="text-xs text-text-dim font-mono tracking-wider shrink-0 mt-1 group-hover:text-primary transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <span className="body-md text-text">{item}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="section-padding py-24 lg:py-36 bg-dark-900">
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
            Gain Clarity in Your <span className="text-primary">Security Posture</span>
          </h2>
          <p className="body-lg mb-10">
            Request a confidential security audit or book a private consultation with Maxim.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:items-stretch">
            <MetalCTA
              to="/contact"
              label="Request a Confidential Audit"
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <MetalCTA
              to="/contact"
              label="Book a Private Consultation"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </>
  )
}
