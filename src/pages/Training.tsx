import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const programs = [
  {
    title: 'Security Training',
    desc: 'Precision shooting (pistol and rifle), Krav Maga adapted for executives, surveillance detection and anti-ambush techniques.',
    details: [
      'Defensive and tactical shooting applications',
      'Executive self-defence and threat neutralization',
      'De-escalation techniques',
      'Advanced surveillance detection',
    ],
  },
  {
    title: 'Travel Safety & HEAT Training',
    desc: 'Hostile Environment Awareness Training covering secure travel planning, situational awareness, kidnap avoidance and crisis response.',
    details: [
      'Secure travel planning and protocols',
      'Situational awareness mastery',
      'Kidnap avoidance and high-risk preparation',
      'Crisis response procedures',
    ],
  },
  {
    title: 'Medical Training',
    desc: 'Through our partners at Critical Knowledge -- official Stop The Bleed Partner in Austria. Immersive, scenario-based trauma care training.',
    details: [
      'Official Stop The Bleed certification',
      'Active First Responder trauma care',
      'Rapid haemorrhage control',
      'Tourniquet application and life-saving interventions',
    ],
  },
]

const gains = [
  'Instinctive skills that work under real pressure',
  'Full compliance with corporate duty-of-care and insurance standards',
  'Measurable increase in team confidence and capability',
  'Private format with absolute discretion',
  'Official certificates and scheduled refresher training',
]

export default function Training() {
  const heroRef = useScrollReveal<HTMLDivElement>()
  const programsRef = useScrollReveal<HTMLDivElement>()
  const gainsRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Training Programs</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Elite Training &<br /><span className="text-primary">Capacity Building</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Hands-on, intelligence-informed programs that equip executives, teams and
            high-net-worth individuals with practical skills for real-world threats.
          </p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Programs */}
      <section ref={programsRef} className="section-padding py-24 lg:py-36">
        <div className="space-y-8">
          {programs.map((program, i) => (
            <div
              key={program.title}
              data-reveal
              className="glass-card rounded-sm p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              <div>
                <span className="label-text text-[0.625rem]">Program 0{i + 1}</span>
                <h3 className="heading-md mt-3 mb-4">{program.title}</h3>
                <p className="body-lg">{program.desc}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-4 tracking-wide uppercase">What You Learn</h4>
                <ul className="space-y-3">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="body-md text-text">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Gain */}
      <section ref={gainsRef} className="section-padding py-24 lg:py-36 bg-dark-900">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <span className="label-text">Results</span>
          <h2 className="heading-lg mt-4 mb-12">What You <span className="text-primary">Gain</span></h2>
          <div className="space-y-4">
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

      {/* CTA */}
      <section ref={ctaRef} className="section-padding py-24 lg:py-36 text-center">
        <div data-reveal className="max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6">
            Build Real <span className="text-primary">Resilience</span> Today
          </h2>
          <p className="body-lg mb-10">
            Every program is customised to your exact risk profile and delivered by elite instructors.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Training Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
