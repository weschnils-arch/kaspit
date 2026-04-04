import ServiceLayout from '../components/ServiceLayout'

export default function SecurityManagement() {
  return (
    <ServiceLayout
      label="Services"
      title="Strategic Security Management, Consulting & Audits"
      subtitle="360° concepts, expert consulting, and independent security audits tailored to complex risks — never standard guarding."
      intro="True security is not about placing guards — it is about building lasting resilience through intelligence, foresight, precision planning, and continuous improvement. KASPIT Security creates fully bespoke 360° security concepts that integrate risk assessment, executive protection, physical and technical measures, crisis preparedness, strategic consulting, and independent security audits into one seamless, intelligence-led strategy."
      gains={[
        'Proactive threat mitigation and strategic foresight instead of reactive measures',
        'Expert consulting that aligns security with your business goals',
        'Independent audits that reveal hidden vulnerabilities and deliver actionable roadmaps',
        'Seamless integration with your daily operations and travel',
        'Scalable solutions that grow with your organisation and regulatory requirements',
        'Reduced exposure, enhanced reputation, and demonstrable compliance',
      ]}
      approachItems={[
        { title: 'Comprehensive Risk Assessment', desc: 'We analyse your unique vulnerabilities across people, assets, operations, and compliance.' },
        { title: 'Strategic Consulting & Concept Development', desc: 'We design custom security architectures and policies tailored to your exact needs.' },
        { title: 'Independent Security Audits', desc: 'Thorough, objective evaluations of current measures with clear findings and prioritised recommendations.' },
        { title: 'Elite Implementation & Continuous Monitoring', desc: 'We support rollout and provide ongoing adaptation to evolving threats.' },
      ]}
      ctaText="Let us design, audit, and optimise your personal security architecture."
      secondaryCta={{ text: 'View Security Audits', link: '/services/security-audits' }}
    />
  )
}
