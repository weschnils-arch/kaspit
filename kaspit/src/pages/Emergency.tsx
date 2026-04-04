import ServicePage from './ServicePage'

const capabilities = [
  '24/7 rapid-response coordination centre',
  'Medical assistance and emergency medical evacuation',
  'Crisis management, extraction and repatriation',
  'On-ground support in austere and hostile environments',
  'Pre-travel risk advisory and contingency planning',
  'Situational awareness and real-time threat monitoring',
  'Mental health and emotional support for affected personnel',
]

export default function Emergency() {
  return (
    <ServicePage
      label="Emergency Assistance"
      headline={<>Emergency Assistance &<br /><span className="text-gradient">Duty of Care</span></>}
      subheadline="Rapid worldwide emergency response combined with comprehensive Duty of Care solutions — 24/7, anywhere in the world."
      intro={
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            KASPIT Security delivers immediate, intelligence-supported emergency assistance and comprehensive Duty of Care solutions anywhere in the world. With decades of proven operational excellence in high-risk environments and the international reach of the KASPIT Group, we maintain a global network of trusted assets and a 24/7 command structure to respond instantly in any situation.
          </p>
          <p>
            From medical evacuations and crisis extraction to full corporate Duty of Care programmes for travelling executives and international teams, we combine proactive monitoring, situational awareness and seamless coordination to protect your people and operations at every step.
          </p>
        </>
      }
      benefits={[
        'Full compliance with corporate Duty of Care obligations and insurance requirements',
        'Peace of mind through proactive intelligence and rapid action',
        'Seamless end-to-end support — before, during and after any incident',
        'Significantly reduced organisational and personal risk worldwide',
      ]}
      extra={
        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Our Capabilities
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}>
            {capabilities.map((item, i) => (
              <div key={i} style={{ padding: '1.25rem 1.5rem', background: 'var(--surface)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '4px', height: '4px', background: 'var(--blue-light)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      }
      approach={[
        { step: 'Pre-travel risk profiling', desc: 'Bespoke contingency planning tailored to your destinations and threat levels.' },
        { step: 'Real-time monitoring', desc: 'Early-warning alerts and continuous situational awareness throughout your operations.' },
        { step: 'Immediate emergency intervention', desc: 'Instant coordination and on-ground response whenever and wherever needed.' },
        { step: 'Post-incident support', desc: 'Debrief, psychological support, and resilience building for complete recovery.' },
      ]}
      ctaText="Ensure your global Duty of Care is professionally covered."
      ctaBtn="Request a Confidential Review"
    />
  )
}
