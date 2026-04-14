import ServicePage from './ServicePage'

const programs = [
  {
    title: 'Security Training',
    desc: 'Develop the mindset and physical skills that keep you safe in any environment. Our programs include precision shooting (pistol and rifle – defensive and tactical applications), Krav Maga specifically adapted for executives (practical self-defence, threat neutralization and de-escalation), and advanced surveillance detection and anti-ambush techniques.',
    items: ['Precision shooting — defensive & tactical', 'Executive Krav Maga & de-escalation', 'Surveillance detection & anti-ambush'],
  },
  {
    title: 'Travel Safety & HEAT Training',
    desc: 'Prepare your people to operate confidently in any part of the world. Our Hostile Environment Awareness Training (HEAT) covers secure travel planning, situational awareness, kidnap avoidance, high-risk environment preparation and crisis response protocols. Each session is customised to your destinations and threat levels.',
    items: ['Secure travel planning', 'Kidnap avoidance protocols', 'Crisis response procedures'],
  },
  {
    title: 'Medical Training',
    desc: 'When seconds count, knowledge saves lives. Our medical training programs are delivered through our partners at Critical Knowledge – official Stop The Bleed® Partner in Austria. Using highly realistic wound simulations, participants receive immersive, scenario-based training including official Stop The Bleed® certification, Active First Responder trauma care, rapid haemorrhage control, tourniquet application and immediate life-saving interventions.',
    items: ['Official Stop The Bleed® certification', 'Active First Responder trauma care', 'Tourniquet & haemorrhage control'],
  },
]

export default function Training() {
  return (
    <ServicePage
      label="Elite Training"
      headline={<>Elite Training &<br /><span className="text-gradient">Capacity Building</span></>}
      subheadline="Hands-on, intelligence-informed programs that equip executives, teams and high-net-worth individuals with practical skills for real-world threats. Delivered to the same elite standards as our operational services."
      intro={
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            Knowledge alone is not enough — real resilience comes from instinctive skills developed under realistic pressure. KASPIT Security offers bespoke training programs designed for corporations, executives and security professionals who refuse to settle for generic courses.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Every program is intelligence-informed, scenario-based and tailored to your exact risk profile, turning theory into muscle memory and confidence.
          </p>
          <p>
            Conducted in small private groups or one-to-one format with absolute discretion and supported by the international infrastructure of the KASPIT Group, our training bridges the gap between awareness and capability across our branches in Austria, Germany and Israel.
          </p>
        </>
      }
      benefits={[
        'Instinctive skills that work under real pressure',
        'Full compliance with corporate duty-of-care and insurance standards',
        'Measurable increase in team confidence and capability',
        'Private format with absolute discretion',
        'Official certificates and scheduled refresher training',
      ]}
      extra={
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
            {programs.map((prog, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--text)', marginBottom: '1rem' }}>{prog.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{prog.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {prog.items.map((item, j) => (
                    <span key={j} style={{
                      padding: '0.375rem 0.875rem',
                      border: '1px solid var(--border-strong)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      approach={[
        { step: 'Risk & skills-needs assessment', desc: 'Confidential evaluation of your risk profile and current capability gaps.' },
        { step: 'Customised program design', desc: 'Fully tailored curriculum and scenario planning for your exact needs.' },
        { step: 'Intensive hands-on training', desc: 'Elite, experienced instructors deliver real-world immersive training.' },
        { step: 'Post-training evaluation', desc: 'Feedback, certification, and an ongoing refresher plan for sustained resilience.' },
      ]}
      ctaText="Build real resilience today."
      ctaBtn="Request a Confidential Training Consultation"
    />
  )
}
