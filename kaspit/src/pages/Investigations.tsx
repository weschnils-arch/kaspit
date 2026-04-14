import ServicePage from './ServicePage'

export default function Investigations() {
  return (
    <ServicePage
      label="Investigations"
      headline={<>Intelligence-Driven<br /><span className="text-gradient">Investigations</span></>}
      subheadline="Uncovering facts with precision and absolute discretion."
      intro={
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            In today's complex business landscape, hidden risks can emerge from anywhere — undisclosed conflicts of interest, competitive threats, fraud or reputational vulnerabilities. At KASPIT Security we conduct discreet, intelligence-led investigations that deliver verifiable facts when you need them most.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Every assignment is handled with the highest level of professionalism and absolute confidentiality, drawing on advanced open-source intelligence, human sources and cutting-edge analytical tools.
          </p>
          <p>
            Supported by the international network of the KASPIT Group, we transform uncertainty into clarity. From comprehensive background due diligence and asset tracing to complex fraud investigations and litigation support, we provide the strategic intelligence that empowers informed decision-making without ever compromising your position.
          </p>
        </>
      }
      benefits={[
        'Verifiable, court-admissible evidence and intelligence',
        'Complete protection of your confidentiality and reputation',
        'Early identification of hidden risks and opportunities',
        'Clear, actionable recommendations that drive real outcomes',
        'Highest ethical and professional standards',
      ]}
      approach={[
        { step: 'Confidential briefing', desc: 'We begin with a private, no-obligation discussion to fully understand your objectives and constraints.' },
        { step: 'Tailored intelligence strategy', desc: 'We design a custom plan combining multiple intelligence disciplines for maximum effectiveness.' },
        { step: 'Professional execution', desc: 'Our discreet team operates globally with precision and speed across our European and Middle Eastern branches.' },
        { step: 'Actionable report & follow-up', desc: 'You receive a clear, concise report with strategic next steps and ongoing support if required.' },
      ]}
      ctaText="Discuss your case in complete confidence."
      ctaBtn="Request a Private Consultation today"
    />
  )
}
