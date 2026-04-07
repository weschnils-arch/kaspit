import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import MetalCTA from '../../components/ui/MetalCTA'

const capabilities = [
  '24/7 rapid-response coordination centre',
  'Medical assistance and emergency medical evacuation',
  'Crisis management, extraction and repatriation',
  'On-ground support in austere and hostile environments',
  'Pre-travel risk advisory and contingency planning',
  'Situational awareness and real-time threat monitoring',
  'Mental health and emotional support for affected personnel',
]

const gains = [
  'Full compliance with corporate Duty of Care obligations and insurance requirements',
  'Peace of mind through proactive intelligence and rapid action',
  'Seamless end-to-end support — before, during and after any incident',
  'Significantly reduced organisational and personal risk worldwide',
]

const approach = [
  {
    title: 'Pre-Travel Risk Profiling',
    desc: 'Bespoke contingency planning based on destinations, threat landscape and personnel profiles.',
  },
  {
    title: 'Real-Time Monitoring',
    desc: 'Early-warning alerts and situational awareness across all active operations and travel.',
  },
  {
    title: 'Immediate Emergency Intervention',
    desc: 'Coordinated response through our 24/7 command centre and global network of trusted assets.',
  },
  {
    title: 'Post-Incident Debrief',
    desc: 'Psychological support, resilience building, and lessons-learned integration for future readiness.',
  },
]

export default function EmergencyAssistance() {
  usePageTitle('Emergency Assistance & Duty of Care')
  const heroRef = useScrollReveal<HTMLDivElement>()
  const introRef = useScrollReveal<HTMLDivElement>()
  const capRef = useScrollReveal<HTMLDivElement>()
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
          <span data-reveal className="label-text">Service 04 — Emergency Assistance</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Emergency Assistance &<br />
            <span className="text-primary">Duty of Care</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Rapid worldwide emergency response combined with comprehensive Duty of Care solutions
            for your people and operations — 24/7, anywhere in the world.
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
              Your Safety<br /><span className="text-primary">Is Our Mission</span>
            </h2>
          </div>
          <div data-reveal className="space-y-6 body-lg">
            <p>
              KASPIT Security delivers immediate, intelligence-supported emergency assistance and
              comprehensive Duty of Care solutions anywhere in the world. With decades of proven
              operational excellence in high-risk environments and the international reach of the
              KASPIT Group, we maintain a global network of trusted assets and a 24/7 command
              structure to respond instantly in any situation.
            </p>
            <p>
              From medical evacuations and crisis extraction to full corporate Duty of Care
              programmes for travelling executives and international teams, we combine proactive
              monitoring, situational awareness and seamless coordination to protect your people
              and operations at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section ref={capRef} className="section-padding py-24 lg:py-36 bg-dark-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-reveal>
            <span className="label-text">Coverage</span>
            <h2 className="heading-lg mt-4">Our <span className="text-primary">Capabilities</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const isLast = i === capabilities.length - 1
              return (
                <div
                  key={cap}
                  data-reveal
                  className={`group glass-card rounded-sm p-6 lg:p-8 flex items-start gap-4 transition-all duration-500 hover:border-primary/30 hover:bg-dark-800/80 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(176,190,197,0.06)] ${
                    isLast ? 'md:col-span-2' : ''
                  }`}
                >
                  <span className="text-xs text-text-dim font-mono tracking-wider shrink-0 mt-1 group-hover:text-primary transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <span className="body-md text-text">{cap}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section ref={gainsRef} className="section-padding py-24 lg:py-36">
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
            Ensure Your Global <span className="text-primary">Duty of Care</span>
          </h2>
          <p className="body-lg mb-10">
            Protect your people and operations with a confidential review of your current emergency readiness.
          </p>
          <MetalCTA
            to="/contact"
            label="Request a Confidential Review"
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
