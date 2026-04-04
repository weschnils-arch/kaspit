import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        }
      )
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
        }
      )
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-32 section-padding">
      <div className="divider mb-32" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Image / Visual side */}
        <div ref={imageRef} className="relative">
          <div className="aspect-[3/4] bg-dark-700 relative overflow-hidden">
            {/* Placeholder gradient - will be replaced with actual photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800" />
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <span className="label-text">Founder & Managing Director</span>
                <h3 className="text-2xl font-display text-text mt-2">Maxim Gutman</h3>
              </div>
            </div>
            {/* Border accent */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent" />
          </div>

          {/* Floating credentials */}
          <div className="glass-card absolute -bottom-8 -right-4 md:right-4 p-5 max-w-[240px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <span className="text-xs text-text-muted font-medium">Certified Expert</span>
            </div>
            <p className="text-[0.7rem] text-text-dim leading-relaxed">
              MBA University of Minnesota. Austrian Professional Detective. Sicherheitsfachkraft.
            </p>
          </div>
        </div>

        {/* Content side */}
        <div ref={contentRef}>
          <span className="label-text block mb-4" data-reveal>About KASPIT Security</span>

          <h2 className="heading-lg text-text mb-8" data-reveal>
            Founded on Real
            <br />
            Operational Excellence<span className="text-primary">.</span>
          </h2>

          <div className="space-y-6" data-reveal>
            <p className="body-lg">
              Maxim Gutman is the founder and managing director of KASPIT Security.
              With over 20 years of experience in elite security, intelligence, and risk
              management, he is a combat veteran officer of the Israel Defense Forces,
              where he earned the Operational Service Badge and the Second Lebanon War Ribbon.
            </p>

            <p className="body-md">
              He has served as an anti-terror expert for international organisations such as
              the OSCE, and has been actively involved in worldwide operations of emergency
              assistance. He combines this exceptional operational background with an MBA from
              the University of Minnesota and full Austrian certifications.
            </p>

            <p className="body-md">
              KASPIT Security was founded in Vienna as the elite boutique division of the
              international KASPIT Group. With dedicated branches in Austria, Germany, and Israel,
              we combine the precision of elite military and intelligence experience with Austrian
              professionalism and true global reach.
            </p>
          </div>

          {/* Promise */}
          <div className="mt-10 p-6 border border-dark-500" data-reveal>
            <h4 className="text-sm font-semibold text-primary tracking-[0.1em] uppercase mb-3">Our Promise</h4>
            <p className="text-text text-lg font-display italic">
              Absolute discretion. Uncompromising quality. Strategic consulting that delivers measurable excellence.
            </p>
          </div>

          <div className="mt-8" data-reveal>
            <a href="#contact" className="btn-outline">
              Book a Private Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
