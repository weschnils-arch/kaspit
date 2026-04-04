import ServiceLayout from '../components/ServiceLayout'

export default function Investigations() {
  return (
    <ServiceLayout
      label="Services"
      title="Intelligence-Driven Investigations"
      subtitle="Uncovering facts with precision and absolute discretion."
      intro="In today's complex business landscape, hidden risks can emerge from anywhere — undisclosed conflicts of interest, competitive threats, fraud or reputational vulnerabilities. At KASPIT Security we conduct discreet, intelligence-led investigations that deliver verifiable facts when you need them most. Every assignment is handled with the highest level of professionalism and absolute confidentiality, drawing on advanced open-source intelligence, human sources and cutting-edge analytical tools."
      gains={[
        'Verifiable, court-admissible evidence and intelligence',
        'Complete protection of your confidentiality and reputation',
        'Early identification of hidden risks and opportunities',
        'Clear, actionable recommendations that drive real outcomes',
        'Highest ethical and professional standards',
      ]}
      approachItems={[
        { title: 'Confidential Briefing', desc: 'We begin with a private, no-obligation discussion to fully understand your objectives and constraints.' },
        { title: 'Tailored Intelligence Strategy', desc: 'We design a custom plan combining multiple intelligence disciplines for maximum effectiveness.' },
        { title: 'Professional Execution', desc: 'Our discreet team operates globally with precision and speed across our European and Middle Eastern branches.' },
        { title: 'Actionable Report & Follow-up', desc: 'You receive a clear, concise report with strategic next steps and ongoing support if required.' },
      ]}
      ctaText="Discuss your case in complete confidence."
      secondaryCta={{ text: 'View Intelligence Services', link: '/services/intelligence' }}
    />
  )
}
