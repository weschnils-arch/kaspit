import ServiceLayout from '../components/ServiceLayout'

const programs = [
  {
    title: 'Security Training',
    items: [
      'Precision shooting (pistol and rifle — defensive and tactical applications)',
      'Krav Maga adapted for executives (practical self-defence, threat neutralization and de-escalation)',
      'Advanced surveillance detection and anti-ambush techniques',
    ]
  },
  {
    title: 'Travel Safety & HEAT Training',
    items: [
      'Secure travel planning and situational awareness',
      'Kidnap avoidance and high-risk environment preparation',
      'Crisis response protocols customised to your destinations',
    ]
  },
  {
    title: 'Medical Training',
    items: [
      'Official Stop The Bleed® certification (via Critical Knowledge)',
      'Active First Responder trauma care',
      'Rapid haemorrhage control and tourniquet application',
      'Immediate life-saving interventions',
    ]
  },
]

export default function Training() {
  return (
    <ServiceLayout
      label="Services"
      title="Elite Training & Capacity Building"
      subtitle="Hands-on, intelligence-informed programs that equip executives, teams and high-net-worth individuals with practical skills for real-world threats."
      intro="Knowledge alone is not enough — real resilience comes from instinctive skills developed under realistic pressure. KASPIT Security offers bespoke training programs designed for corporations, executives and security professionals who refuse to settle for generic courses. Every program is intelligence-informed, scenario-based and tailored to your exact risk profile, turning theory into muscle memory and confidence."
      gains={[
        'Instinctive skills that work under real pressure',
        'Full compliance with corporate duty-of-care and insurance standards',
        'Measurable increase in team confidence and capability',
        'Private format with absolute discretion',
        'Official certificates and scheduled refresher training',
      ]}
      approachItems={[
        { title: 'Confidential Risk & Skills-Needs Assessment', desc: 'Understanding your team\'s current capability and threat environment.' },
        { title: 'Fully Customised Program Design', desc: 'Scenario planning tailored to your exact destinations and risk profile.' },
        { title: 'Intensive Hands-on Training', desc: 'Delivered by elite, experienced instructors in small groups or one-to-one.' },
        { title: 'Post-training Evaluation', desc: 'Feedback, assessment, and an ongoing refresher plan.' },
      ]}
      ctaText="Build real resilience today."
      additionalSections={
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">Training Programs</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {programs.map((program, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'rgba(13,20,40,0.7)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.125rem', marginBottom: '1.25rem', color: '#fff' }}>
                  {program.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {program.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.65 }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue-bright)', marginTop: '0.45rem', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  )
}
