import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'
import Contact from '../components/Contact'

export default function ContactPage() {
  usePageTitle('Contact · Confidential Conversation')
  const heroRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-12 lg:pt-44 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Get in Touch</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Start a <span className="text-primary">Confidential</span> Conversation
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            We respond within 12 hours. All inquiries are handled with the highest
            level of discretion and personal attention.
          </p>
        </div>
      </section>

      <Contact />
    </>
  )
}
