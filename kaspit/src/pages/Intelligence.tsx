import ServicePage from './ServicePage'

const disciplines = [
  { abbr: 'HUMINT', label: 'Human Intelligence' },
  { abbr: 'SIGINT', label: 'Signals Intelligence' },
  { abbr: 'GEOINT', label: 'Geospatial Intelligence' },
  { abbr: 'MASINT', label: 'Measurement & Signature Intelligence' },
  { abbr: 'OSINT', label: 'Open-Source Intelligence' },
  { abbr: 'TECHINT', label: 'Technical Intelligence' },
]

export default function Intelligence() {
  return (
    <ServicePage
      label="Intelligence & Risk"
      headline={<>Security Intelligence &<br /><span className="text-gradient">Risk Consulting</span></>}
      subheadline="Uncover the facts — no matter where they're hidden. Tactical approach. Global reach."
      intro={
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            In an increasingly opaque world, access to timely, accurate intelligence is the ultimate competitive advantage. KASPIT Security delivers sophisticated security intelligence and strategic risk consulting based on real elite operational experience.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            We utilise a full spectrum of disciplines — HUMINT, SIGINT, GEOINT, MASINT, OSINT, and TECHINT — combined with cutting-edge technology to reveal the hidden and unknown, even when no paper trail exists.
          </p>
          <p>
            Backed by the international network of the KASPIT Group and branches in Austria, Germany and Israel, we turn complex global threats and opportunities into clear, actionable intelligence for executives, corporations and high-net-worth individuals who demand the highest level of discretion and precision.
          </p>
        </>
      }
      benefits={[
        'Verifiable facts and genuine strategic advantage',
        'Early identification of risks and emerging vulnerabilities',
        'Absolute confidentiality and fully lawful methodologies',
        'Confidence to make high-stakes decisions with clarity',
      ]}
      extra={
        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Intelligence Disciplines
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}>
            {disciplines.map((d, i) => (
              <div key={i} style={{ padding: '2rem 1.5rem', background: 'var(--surface)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--blue-light)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{d.abbr}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>{d.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Intelligence Capabilities
            </h3>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
            }}>
              {[
                'Competitive and geopolitical intelligence',
                'Deep due diligence and background analysis',
                'Threat assessment and early-warning systems',
                'Litigation and dispute intelligence support',
                'Counter-intelligence protection programmes',
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.25rem 1.5rem', background: 'var(--surface)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '4px', background: 'var(--blue-light)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      approach={[
        { step: 'Confidential briefing', desc: 'Precise intelligence requirements defined in complete privacy.' },
        { step: 'Multi-source collection', desc: 'Collection across all disciplines with cutting-edge technology and human sources.' },
        { step: 'Expert analysis', desc: 'Deep analysis and comprehensive risk assessment by seasoned professionals.' },
        { step: 'Strategic recommendations', desc: 'Actionable intelligence with ongoing support for your decision-making.' },
      ]}
      ctaText="Leave it to us to uncover what matters most."
      ctaBtn="Request a Confidential Intelligence Consultation"
    />
  )
}
