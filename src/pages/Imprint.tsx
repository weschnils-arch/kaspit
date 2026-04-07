import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'

const companyDetails = [
  { label: 'Legal Name', value: 'KASPIT Security GmbH' },
  { label: 'Business Purpose', value: 'Sicherheitsdienstleistungen' },
  { label: 'VAT Number', value: 'ATU79083849' },
  { label: 'Commercial Register', value: 'FN 593406 g' },
  { label: 'Register Court', value: 'Handelsgericht Wien' },
  { label: 'Registered Office', value: '1220 Wien, Österreich' },
]

const memberships = [
  {
    name: 'Wirtschaftskammer Wien',
    short: 'WKO Wien',
    logo: 'images/wko-logo.avif',
  },
  {
    name: 'KSV 1870',
    short: 'Kreditschutzverband',
    logo: 'images/ksv1870.avif',
  },
  {
    name: 'Berufsdetektiv',
    short: 'Certified Professional Detective',
    logo: 'images/berufsdetektiv.webp',
  },
  {
    name: 'Miliz Gütesiegel',
    short: 'Quality Seal',
    logo: 'images/miliz-guetesiegel.webp',
  },
]

const legalNotices = [
  {
    title: 'Content Liability',
    body:
      'We continuously develop the content of this website and strive to provide accurate and up-to-date information. Unfortunately, we cannot accept liability for the correctness of all content on this website, especially for content provided by third parties. If you notice problematic or unlawful content, please contact us immediately — you will find our contact details in this imprint.',
  },
  {
    title: 'Copyright Notice',
    body:
      'All content of this website (images, photos, texts, videos) is subject to copyright. Where necessary, we will pursue the unauthorised use of parts of our content under applicable law.',
  },
  {
    title: 'Image Credits',
    body:
      'The images, photos and graphics on this website are protected by copyright. Image rights belong to the respective photographers and companies — including Unsplash photographers Collins Lesulie, Ed Robertson, Helloquence, Jeshoots-com, Michael Niessl, Craig Whitehead and Scott Webb, as well as Adobe Stock.',
  },
  {
    title: 'Automatic Data Storage',
    body:
      'When you visit websites today, certain information is automatically created and stored — and so it is on this website. When you visit our site, our web server automatically stores data such as the URL of the accessed page, browser and version, operating system, referrer URL, hostname and IP address of the device, as well as date and time, in web server log files. Web server log files are typically stored for two weeks and then automatically deleted. We do not pass on this data, but cannot exclude that this data may be reviewed in the event of unlawful conduct. The legal basis is Article 6(1)(f) GDPR — the legitimate interest in enabling the error-free operation of this website by recording log files.',
  },
  {
    title: 'Personal Data Storage',
    body:
      'Personal data that you transmit to us electronically on this website — such as name, email address, postal address or other personal details submitted via a form — are used by us, together with the time and IP address, only for the stated purpose, kept securely, and not passed on to third parties. We use your personal data exclusively for communication with visitors who explicitly request contact and for processing the services offered on this website. The legal basis is Article 6(1)(a) GDPR — your consent to the processing of the data you have entered. You may revoke this consent at any time; an informal email is sufficient.',
  },
]

export default function Imprint() {
  usePageTitle('Imprint')
  const heroRef = useScrollReveal<HTMLDivElement>()
  const companyRef = useScrollReveal<HTMLDivElement>()
  const contactRef = useScrollReveal<HTMLDivElement>()
  const membershipsRef = useScrollReveal<HTMLDivElement>()
  const authorityRef = useScrollReveal<HTMLDivElement>()
  const noticesRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-12 lg:pt-44 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.015] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Legal · Impressum</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            <span className="text-primary">Imprint</span> &amp; Disclosure
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            Information disclosed in accordance with §5 ECG, §14 UGB and §25 Mediengesetz —
            Republic of Austria.
          </p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Company Card */}
      <section ref={companyRef} className="section-padding py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <div data-reveal className="glass-card rounded-sm p-10 lg:p-16 relative overflow-hidden">
            {/* Decorative corner brand */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rotate-12 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start relative">
              {/* Logo column */}
              <div className="flex flex-col items-start gap-6">
                <img
                  src={`${import.meta.env.BASE_URL}images/kaspit-logo-full.webp`}
                  alt="KASPIT Security"
                  className="h-12 lg:h-16 w-auto"
                />
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
                <div className="hidden lg:block">
                  <span className="label-text text-[0.625rem]">Founded</span>
                  <p className="text-sm text-text mt-1">Vienna · Austria</p>
                </div>
              </div>

              {/* Details grid */}
              <div>
                <span className="label-text">Company Information</span>
                <h2 className="heading-md mt-3 mb-10">
                  KASPIT Security <span className="text-primary">GmbH</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                  {companyDetails.map((item) => (
                    <div key={item.label}>
                      <span className="label-text text-[0.625rem]">{item.label}</span>
                      <p className="text-sm lg:text-base text-text mt-1.5">{item.value}</p>
                    </div>
                  ))}

                  <div className="sm:col-span-2 pt-6 mt-2 border-t border-white/[0.06]">
                    <span className="label-text text-[0.625rem]">Registered Address</span>
                    <p className="text-sm lg:text-base text-text mt-1.5 leading-relaxed">
                      Fischerstrand 4, Stiege 1, Top 3<br />
                      1220 Wien, Österreich
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section ref={contactRef} className="section-padding py-16 lg:py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <a
              href="tel:+436643444616"
              data-reveal
              className="group glass-card rounded-sm p-8 lg:p-10 flex items-center gap-6 transition-all duration-500 hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/5 transition-colors duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <span className="label-text text-[0.625rem]">Direct Line</span>
                <p className="text-base lg:text-lg text-text mt-1 group-hover:text-primary transition-colors duration-500">
                  +43 (0) 664 344 4616
                </p>
              </div>
            </a>

            <a
              href="mailto:office@kaspit.net"
              data-reveal
              className="group glass-card rounded-sm p-8 lg:p-10 flex items-center gap-6 transition-all duration-500 hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/5 transition-colors duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div>
                <span className="label-text text-[0.625rem]">Email</span>
                <p className="text-base lg:text-lg text-text mt-1 group-hover:text-primary transition-colors duration-500">
                  office@kaspit.net
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Professional Authority */}
      <section ref={authorityRef} className="section-padding py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <div data-reveal className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <div>
              <span className="label-text">Regulation</span>
              <h2 className="heading-md mt-3">
                Professional <span className="text-primary">Authority</span>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="body-md leading-relaxed">
                <span className="text-text font-medium">Trade Code (Gewerbeordnung):</span> § 129
                GewO 1994 — Sicherheitsgewerbe (Berufsdetektive, Bewachungsgewerbe).
              </p>
              <p className="body-md leading-relaxed">
                Supervisory authority: Magistrat der Stadt Wien · Republic of Austria.
              </p>
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300 mt-2"
              >
                <span className="border-b border-primary/30 group-hover:border-primary pb-0.5">
                  Reference: ris.bka.gv.at
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section ref={membershipsRef} className="section-padding py-24 lg:py-32 bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="text-center mb-16 lg:mb-20">
            <span className="label-text">Affiliations</span>
            <h2 className="heading-lg mt-4">
              Memberships &amp; <span className="text-primary">Certifications</span>
            </h2>
            <p className="body-md mt-6 max-w-2xl mx-auto">
              Certified, regulated, and continuously audited — KASPIT Security operates under the
              highest Austrian and international professional standards.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {memberships.map((m) => (
              <div
                key={m.name}
                data-reveal
                className="group glass-card rounded-sm p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-primary/20"
              >
                <div className="h-20 lg:h-24 w-full flex items-center justify-center mb-6">
                  <img
                    src={`${import.meta.env.BASE_URL}${m.logo}`}
                    alt={m.name}
                    className="max-h-full max-w-[140px] w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm lg:text-base text-text font-medium mb-1">{m.name}</h3>
                <p className="text-xs text-text-dim tracking-wide">{m.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notices */}
      <section ref={noticesRef} className="section-padding py-24 lg:py-36">
        <div className="max-w-4xl mx-auto">
          <div data-reveal className="text-center mb-16">
            <span className="label-text">Disclosures</span>
            <h2 className="heading-lg mt-4">
              Legal <span className="text-primary">Notices</span>
            </h2>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {legalNotices.map((notice, i) => (
              <div key={notice.title} data-reveal>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-xs text-text-dim font-mono tracking-wider">0{i + 1}</span>
                  <h3 className="heading-sm text-text">{notice.title}</h3>
                </div>
                <p className="body-md leading-relaxed pl-0 lg:pl-10">{notice.body}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-20 pt-10 border-t border-white/[0.06] text-center">
            <p className="text-xs text-text-dim tracking-wider">
              © {new Date().getFullYear()} KASPIT Security GmbH · All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
