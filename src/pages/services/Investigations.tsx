import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import MetalCTA from '../../components/ui/MetalCTA'

const gains = [
  'Verifiable, court-admissible evidence and intelligence',
  'Complete protection of your confidentiality and reputation',
  'Early identification of hidden risks and opportunities',
  'Clear, actionable recommendations that drive real outcomes',
  'Highest ethical and professional standards',
]

const approach = [
  {
    title: 'Confidential Briefing',
    desc: 'We begin with a private, no-obligation discussion to fully understand your objectives and constraints.',
  },
  {
    title: 'Tailored Intelligence Strategy',
    desc: 'We design a custom plan combining multiple intelligence disciplines for maximum effectiveness.',
  },
  {
    title: 'Professional Execution',
    desc: 'Our discreet team operates globally with precision and speed across our European and Middle Eastern branches.',
  },
  {
    title: 'Actionable Report & Follow-Up',
    desc: 'You receive a clear, concise report with strategic next steps and ongoing support if required.',
  },
]

export default function Investigations() {
  usePageTitle('Intelligence-Driven Investigations')
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
          <span data-reveal className="label-text">Service 01 — Investigations</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Intelligence-Driven<br /><span className="text-primary">Investigations</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Uncovering facts with precision and absolute discretion.
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
              Transform Uncertainty<br /><span className="text-primary">Into Clarity</span>
            </h2>
          </div>
          <div data-reveal className="space-y-6 body-lg">
            <p>
              In today's complex business landscape, hidden risks can emerge from anywhere — undisclosed
              conflicts of interest, competitive threats, fraud or reputational vulnerabilities. At KASPIT
              Security we conduct discreet, intelligence-led investigations that deliver verifiable facts
              when you need them most.
            </p>
            <p>
              Every assignment is handled with the highest level of professionalism and absolute
              confidentiality, drawing on advanced open-source intelligence, human sources and cutting-edge
              analytical tools.
            </p>
            <p>
              Supported by the international network of the KASPIT Group, we transform uncertainty into
              clarity. From comprehensive background due diligence and asset tracing to complex fraud
              investigations and litigation support, we provide the strategic intelligence that empowers
              informed decision-making without ever compromising your position.
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
            Discuss Your Case in <span className="text-primary">Complete Confidence</span>
          </h2>
          <p className="body-lg mb-10">
            Every conversation begins with a private, no-obligation briefing. Your confidentiality is absolute.
          </p>
          <MetalCTA
            to="/contact"
            label="Request a Private Consultation"
            width={300}
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
