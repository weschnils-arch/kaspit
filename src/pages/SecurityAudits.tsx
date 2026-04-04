import ServiceLayout from '../components/ServiceLayout'

const auditScope = [
  'Comprehensive Security Posture Audits (physical, technical, procedural, and human factors)',
  'Executive Protection Program Audits',
  'Crisis Management & Emergency Response Audits',
  'Travel Security & Duty of Care Audits',
  'Policy, Procedure & Compliance Reviews',
  'Site Security & Perimeter Audits',
  'Intelligence & Counter-Intelligence Program Assessments',
  'Gap Analysis against Austrian and international best practices',
]

export default function SecurityAudits() {
  return (
    <ServiceLayout
      label="Services"
      title="Independent Security Audits & Compliance Reviews"
      subtitle="Objective evaluations that reveal hidden vulnerabilities and deliver clear, actionable strategies for lasting resilience."
      intro="In an increasingly complex risk environment, even well-intentioned security measures can contain blind spots. KASPIT Security provides independent, high-level security audits that go far beyond standard checklists. Our audits combine deep intelligence expertise with strategic consulting to deliver an objective, comprehensive assessment of your current security posture — across physical protection, procedures, policies, technology, crisis preparedness, and compliance."
      gains={[
        'Objective, independent validation of your existing security measures',
        'Identification of hidden vulnerabilities and single points of failure',
        'Clear, prioritised roadmap with immediate and long-term recommendations',
        'Measurable improvements in resilience and risk reduction',
        'Full compliance with Austrian regulations, GDPR, and international Duty of Care standards',
        'Enhanced reputation as a securely managed organisation',
        'Absolute confidentiality',
      ]}
      approachItems={[
        { title: 'Confidential Briefing & Scope Definition', desc: 'We start with a private discussion to understand your objectives, constraints, and risk priorities.' },
        { title: 'Thorough On-site and Remote Assessment', desc: 'Multi-disciplinary evaluation using proven intelligence methodologies and advanced analytical tools.' },
        { title: 'Detailed Findings & Risk Mapping', desc: 'Clear presentation of vulnerabilities, their potential impact, and likelihood.' },
        { title: 'Actionable Recommendations & Roadmap', desc: 'Prioritised, practical steps with timelines, responsible parties, and estimated effort.' },
        { title: 'Optional Implementation Support & Follow-up Audit', desc: 'We can assist with rollout and conduct verification audits to confirm improvements.' },
      ]}
      ctaText="Gain clarity and confidence in your security posture."
      secondaryCta={{ text: 'Book a Private Consultation', link: '/contact' }}
      additionalSections={
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">Our Audit Scope</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', marginTop: '1rem' }}>
            {auditScope.map((item, i) => (
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
