import ServicePage from './ServicePage'

export default function SecurityManagement() {
  return (
    <ServicePage
      label="Strategic Security"
      headline={<>Security Management,<br /><span className="text-gradient">Consulting & Audits</span></>}
      subheadline="360° concepts, expert consulting, and independent security audits tailored to complex risks — never standard guarding."
      intro={
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            True security is not about placing guards — it is about building lasting resilience through intelligence, foresight, precision planning, and continuous improvement.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            KASPIT Security creates fully bespoke 360° security concepts that integrate risk assessment, executive protection, physical and technical measures, crisis preparedness, strategic consulting, and independent security audits into one seamless, intelligence-led strategy.
          </p>
          <p>
            Whether you require protection for corporate leadership, high-net-worth families, international operations, or sensitive sites, our solutions are designed around your specific threat landscape and business objectives. Backed by the global infrastructure of the KASPIT Group and branches in Austria, Germany and Israel.
          </p>
        </>
      }
      benefits={[
        'Proactive threat mitigation and strategic foresight instead of reactive measures',
        'Expert consulting that aligns security with your business goals',
        'Independent audits that reveal hidden vulnerabilities and deliver actionable roadmaps',
        'Seamless integration with your daily operations and travel',
        'Scalable solutions that grow with your organisation and regulatory requirements',
        'Reduced exposure, enhanced reputation, and demonstrable compliance',
      ]}
      approach={[
        { step: 'Comprehensive risk assessment', desc: 'We analyse your unique vulnerabilities across people, assets, operations, and compliance.' },
        { step: 'Strategic consulting & concept development', desc: 'We design custom security architectures and policies tailored to your exact needs.' },
        { step: 'Independent security audits', desc: 'Thorough, objective evaluations of current measures with clear findings and prioritised recommendations.' },
        { step: 'Elite implementation & continuous monitoring', desc: 'We support rollout and provide ongoing adaptation to evolving threats.' },
      ]}
      ctaText="Let us design, audit, and optimise your personal security architecture."
      ctaBtn="Start with a Confidential Assessment"
    />
  )
}
