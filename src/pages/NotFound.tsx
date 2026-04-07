import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'
import MetalCTA from '../components/ui/MetalCTA'

export default function NotFound() {
  usePageTitle('Page Not Found')
  const heroRef = useScrollReveal<HTMLDivElement>()

  return (
    <section
      ref={heroRef}
      className="section-padding min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(176,190,197,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(176,190,197,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div data-reveal className="font-display text-[clamp(7rem,18vw,14rem)] leading-none tracking-[-0.04em] text-primary">
          404
        </div>

        <div data-reveal className="mt-6 mb-12">
          <span className="label-text">Off the Map</span>
          <h1 className="heading-lg mt-4 mb-6">
            This route is <span className="text-primary">unmarked</span>
          </h1>
          <p className="body-lg max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on
            secured ground.
          </p>
        </div>

        <div data-reveal className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:items-stretch">
          <Link to="/" className="inline-block">
            <MetalCTA to="/" label="Return Home" width={220} height={52} />
          </Link>
          <MetalCTA
            to="/contact"
            label="Contact KASPIT"
            variant="outline"
            className="!py-[14px]"
          />
        </div>
      </div>
    </section>
  )
}
