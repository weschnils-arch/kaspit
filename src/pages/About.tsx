import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MetalCTA from '../components/ui/MetalCTA'

export default function About() {
  const heroRef = useScrollReveal<HTMLDivElement>()
  const founderRef = useScrollReveal<HTMLDivElement>()
  const storyRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">About Us</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            About <span className="text-primary">KASPIT</span> Security
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Part of the international KASPIT Group -- Founded on real operational excellence.
          </p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Founder */}
      <section ref={founderRef} className="section-padding py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-2" data-reveal>
            <div className="aspect-[3/4] rounded-sm overflow-hidden relative">
              <img
                src={`${import.meta.env.BASE_URL}images/maxim-gutman.webp`}
                alt="Maxim Gutman"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-3" data-reveal>
            <span className="label-text">Founder & Managing Director</span>
            <h2 className="heading-lg mt-4 mb-8">Maxim Gutman</h2>
            <div className="space-y-6">
              <p className="body-lg">
                Maxim Gutman is the founder and managing director of KASPIT Security, the premium
                boutique arm of the international KASPIT Group. With over 20 years of experience
                in elite security, intelligence, and risk management, he is a combat veteran
                officer of the Israel Defense Forces, where he earned the Operational Service
                Badge and the Second Lebanon War Ribbon.
              </p>
              <p className="body-lg">
                He has also served as an anti-terror expert for international organisations such
                as the OSCE, as well as in the corporate world, and has been actively involved
                in worldwide operations of emergency assistance.
              </p>
              <p className="body-lg">
                He combines this exceptional operational background with an MBA from the
                University of Minnesota and full Austrian certifications as Professional
                Detective and Safety Expert. At KASPIT Security he delivers bespoke
                intelligence-led security solutions -- including strategic consulting and
                independent audits -- for executives, corporations and high-net-worth
                individuals who expect far more than standard services.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-white/[0.06]">
              {[
                { label: 'Military', value: 'IDF Combat Veteran Officer' },
                { label: 'Education', value: 'MBA, University of Minnesota' },
                { label: 'Certifications', value: 'Professional Detective (AT)' },
                { label: 'International', value: 'OSCE Anti-Terror Expert' },
              ].map((cred) => (
                <div key={cred.label}>
                  <span className="label-text text-[0.625rem]">{cred.label}</span>
                  <p className="text-sm text-text mt-1">{cred.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="section-padding py-24 lg:py-36 bg-dark-900">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <span className="label-text">Our Story</span>
          <h2 className="heading-lg mt-4 mb-8">Built on <span className="text-primary">Principles</span></h2>
          <p className="body-lg mb-6">
            KASPIT Security was founded in Vienna as the elite boutique division of the
            international KASPIT Group. With dedicated branches in Austria and Germany (Europe)
            and Israel (Middle East), we combine the precision of elite military and intelligence
            experience with Austrian professionalism and true global reach.
          </p>
          <p className="body-lg mb-12">
            Every client receives personal attention and solutions designed exclusively for
            their needs. Discretion, excellence and results are not marketing words -- they
            are our operating principles.
          </p>

          <div className="glass-card p-10 lg:p-14 rounded-sm">
            <h3 className="heading-md mb-4 text-primary">Our Promise</h3>
            <p className="body-lg">
              Absolute discretion. Uncompromising quality. Strategic consulting and independent
              audits that deliver measurable excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding py-24 lg:py-36 text-center">
        <div data-reveal className="max-w-2xl mx-auto">
          <h2 className="heading-lg mb-6">Meet <span className="text-primary">Maxim</span> Personally</h2>
          <p className="body-lg mb-10">
            Discover how KASPIT Security can protect what matters most to you.
          </p>
          <MetalCTA
            to="/contact"
            label="Book a Private Consultation"
            width={280}
            height={52}
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </section>
    </>
  )
}
