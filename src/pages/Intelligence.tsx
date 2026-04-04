import ServiceLayout from '../components/ServiceLayout'

const disciplines = ['HUMINT', 'SIGINT', 'GEOINT', 'MASINT', 'OSINT', 'TECHINT']

export default function Intelligence() {
  return (
    <ServiceLayout
      label="Services"
      title="Security Intelligence & Risk Consulting"
      subtitle="Uncover the facts — no matter where they're hidden. Tactical approach. Global reach."
      intro="In an increasingly opaque world, access to timely, accurate intelligence is the ultimate competitive advantage. KASPIT Security delivers sophisticated security intelligence and strategic risk consulting based on real elite operational experience. We utilise a full spectrum of disciplines — combined with cutting-edge technology — to reveal the hidden and unknown, even when no paper trail exists."
      gains={[
        'Verifiable facts and genuine strategic advantage',
        'Early identification of risks and emerging vulnerabilities',
        'Absolute confidentiality and fully lawful methodologies',
        'Confidence to make high-stakes decisions with clarity',
      ]}
      approachItems={[
        { title: 'Confidential Briefing', desc: 'Precise intelligence requirements defined in a private consultation.' },
        { title: 'Multi-source Collection', desc: 'Collection across all intelligence disciplines for maximum coverage.' },
        { title: 'Expert Analysis & Risk Assessment', desc: 'Rigorous analysis by experienced intelligence professionals.' },
        { title: 'Actionable Strategic Recommendations', desc: 'Clear findings with strategic next steps and ongoing support.' },
      ]}
      ctaText="Leave it to us to uncover what matters most."
      secondaryCta={{ text: 'View Investigations', link: '/services/investigations' }}
      additionalSections={
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">Intelligence Disciplines</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            {disciplines.map((d, i) => (
              <div key={i} style={{
                padding: '0.625rem 1.25rem',
                background: 'rgba(59,88,184,0.1)',
                border: '1px solid rgba(59,88,184,0.25)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--blue-bright)',
              }}>
                {d}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div className="section-label">Intelligence Capabilities</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {[
                'Competitive and geopolitical intelligence',
                'Deep due diligence and background analysis',
                'Threat assessment and early-warning systems',
                'Litigation and dispute intelligence support',
                'Counter-intelligence protection programmes',
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.25rem 1.5rem', background: 'var(--navy-2)', fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.6, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue-bright)', marginTop: '0.45rem', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  )
}
