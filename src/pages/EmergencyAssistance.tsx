import ServiceLayout from '../components/ServiceLayout'

const capabilities = [
  '24/7 rapid-response coordination centre',
  'Medical assistance and emergency medical evacuation',
  'Crisis management, extraction and repatriation',
  'On-ground support in austere and hostile environments',
  'Pre-travel risk advisory and contingency planning',
  'Situational awareness and real-time threat monitoring',
  'Mental health and emotional support for affected personnel',
]

export default function EmergencyAssistance() {
  return (
    <ServiceLayout
      label="Services"
      title="Emergency Assistance & Duty of Care"
      subtitle="Rapid worldwide emergency response combined with comprehensive Duty of Care solutions — 24/7, anywhere in the world."
      intro="KASPIT Security delivers immediate, intelligence-supported emergency assistance and comprehensive Duty of Care solutions anywhere in the world. With decades of proven operational excellence in high-risk environments and the international reach of the KASPIT Group, we maintain a global network of trusted assets and a 24/7 command structure to respond instantly in any situation."
      gains={[
        'Full compliance with corporate Duty of Care obligations and insurance requirements',
        'Peace of mind through proactive intelligence and rapid action',
        'Seamless end-to-end support — before, during and after any incident',
        'Significantly reduced organisational and personal risk worldwide',
      ]}
      approachItems={[
        { title: 'Pre-travel Risk Profiling', desc: 'Bespoke contingency planning before any deployment or travel.' },
        { title: 'Real-time Monitoring', desc: 'Early-warning alerts and situational awareness throughout.' },
        { title: 'Immediate Emergency Intervention', desc: 'Rapid coordination and on-ground response when it matters most.' },
        { title: 'Post-incident Support', desc: 'Debrief, psychological support and resilience building.' },
      ]}
      ctaText="Ensure your global Duty of Care is professionally covered."
      additionalSections={
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">Our Capabilities</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', marginTop: '1rem' }}>
            {capabilities.map((item, i) => (
              <div key={i} style={{ padding: '1.25rem 1.5rem', background: 'var(--navy-2)', fontSize: '0.875rem', color: 'var(--gray-1)', lineHeight: 1.6, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue-bright)', marginTop: '0.45rem', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      }
    />
  )
}
