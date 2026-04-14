import ServicePage from './ServicePage'

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
    <ServicePage
      label="Independent Audits"
      headline={<>Independent Security Audits &<br /><span className="text-gradient">Compliance Reviews</span></>}
      subheadline="Objective evaluations that reveal hidden vulnerabilities and deliver clear, actionable strategies for lasting resilience."
      intro={
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            In an increasingly complex risk environment, even well-intentioned security measures can contain blind spots. KASPIT Security provides independent, high-level security audits that go far beyond standard checklists.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our audits combine deep intelligence expertise with strategic consulting to deliver an objective, comprehensive assessment of your current security posture — across physical protection, procedures, policies, technology, crisis preparedness, and compliance.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Supported by the international network of the KASPIT Group, every audit is tailored to your specific industry, threat landscape, and organisational needs. We identify gaps others miss, quantify risks with precision, and provide prioritised, practical recommendations that strengthen your protection and reduce exposure.
          </p>
          <p>
            Whether you require a full enterprise-wide audit, targeted reviews of executive protection programs, due diligence for international operations, or compliance assessments against Austrian and international standards, KASPIT Security delivers the clarity and strategic advantage that discerning clients demand.
          </p>
        </>
      }
      benefits={[
        'Objective, independent validation of your existing security measures',
        'Identification of hidden vulnerabilities and single points of failure',
        'Clear, prioritised roadmap with immediate and long-term recommendations',
        'Measurable improvements in resilience and risk reduction',
        'Full compliance with Austrian regulations, GDPR, and international Duty of Care standards',
        'Enhanced reputation as a securely managed organisation',
        'Absolute confidentiality',
      ]}
      extra={
        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Audit Scope
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}>
            {auditScope.map((item, i) => (
              <div key={i} style={{ padding: '1.25rem 1.5rem', background: 'var(--surface)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '4px', height: '4px', background: 'var(--blue-light)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      }
      approach={[
        { step: 'Confidential briefing & scope definition', desc: 'We start with a private discussion to understand your objectives, constraints, and risk priorities.' },
        { step: 'Thorough on-site and remote assessment', desc: 'Multi-disciplinary evaluation using proven intelligence methodologies and advanced analytical tools.' },
        { step: 'Detailed findings & risk mapping', desc: 'Clear presentation of vulnerabilities, their potential impact, and likelihood.' },
        { step: 'Actionable recommendations & roadmap', desc: 'Prioritised, practical steps with timelines, responsible parties, and estimated effort.' },
        { step: 'Optional implementation support & follow-up audit', desc: 'We can assist with rollout and conduct verification audits to confirm improvements.' },
      ]}
      ctaText="Gain clarity and confidence in your security posture."
      ctaBtn="Request a Confidential Security Audit"
      ctaSecondary="Book a Private Consultation"
    />
  )
}
