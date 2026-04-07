import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'
import clsx from 'clsx'

type Lang = 'en' | 'de'

const content: Record<Lang, { title: string; intro: string; sections: { heading: string; paragraphs: string[] }[] }> = {
  en: {
    title: 'Terms & Conditions',
    intro:
      'The "General Terms and Conditions" are an integral part of orders in all service areas and apply unless otherwise agreed. Should individual provisions of the Terms and Conditions be ineffective, this does not affect the validity of the remaining provisions.',
    sections: [
      {
        heading: 'Rights and Obligations of KASPIT Security GmbH',
        paragraphs: [
          'KASPIT Security GmbH is obliged to perform the service within the framework of the regulations applicable to the security industry. KASPIT Security GmbH is liable for the proper execution of an order, however, liability for a certain success is excluded, especially as results, such as observations or investigations, can neither be anticipated nor guaranteed. Use of personnel, vehicle and material expenses as well as the type of execution of the order is solely in the professional discretion of KASPIT Security GmbH.',
          'KASPIT Security GmbH is entitled to have the order or parts thereof carried out by cooperation partners.',
          'KASPIT Security GmbH and cooperation partners undertake to keep confidential all matters arising in connection with their work for the client. Only the client himself can release KASPIT Security GmbH or cooperation partners from this secrecy obligation. Reports and other written statements about the results of the activity may be given to third parties only with the consent of the client. Confidentiality also applies to the time after completion of the order, except in cases where there is a legal obligation to provide information.',
          'KASPIT Security GmbH is authorised to process personal data entrusted to it within the scope of the purpose of the order or to have it processed by third parties. KASPIT Security GmbH guarantees data protection in accordance with the provisions of the GDPR.',
        ],
      },
      {
        heading: 'Rights and Obligations of the Client',
        paragraphs: [
          'When fulfilling the order at its direct place of business, the client ensures that the organisational framework conditions allow for undisturbed and speedy work, that all necessary documents for the fulfilment of the contract are submitted in a timely manner, and that events, information and circumstances which are important for the execution of the order are announced. This also applies to all documents, procedures, information and circumstances that become known after the work has already commenced. Furthermore, the client must comply with any information requirements provided by law.',
          'The client may use offers, reports, analyses and the like only for the purpose of the contract. In particular, the transfer to third parties requires the written consent of KASPIT Security GmbH.',
        ],
      },
      {
        heading: 'Fee Agreement',
        paragraphs: [
          'KASPIT Security GmbH is entitled to payment of a fee by the client for the fulfilment of the order. Unless a lump-sum fee has been agreed, billing takes place in accordance with the tariff list of personnel and material expenses incurred in connection with the contract, in particular: file study, meetings, preparation, travel times, investigations and observations including their preparatory measures (environmental study), technical assignments, maintenance, reporting, evaluation of video, photo and audio documentation, the operation of technical equipment, communication costs abroad, travel and accommodation costs and other expenses of all kinds.',
          'If, after placing the order, the execution of the order or parts of the order is cancelled by the client, the agreed fee is nevertheless to be paid in full, unless cancellation fees have been agreed in writing or KASPIT Security GmbH expressly waives a fee. Unless otherwise agreed, the client must also make ongoing payments on account.',
          'KASPIT Security GmbH can make the completion of a service dependent on the full satisfaction of its fee claims. A complaint about the services of KASPIT Security GmbH does not entitle the client to withhold due fees.',
        ],
      },
    ],
  },
  de: {
    title: 'Allgemeine Geschäftsbedingungen',
    intro:
      'Die „Allgemeinen Geschäftsbedingungen" sind integrierender Bestandteil von Aufträgen in sämtlichen Leistungsbereichen und gelten, sofern nichts anderes vereinbart wurde. Sollten einzelne Bestimmungen der Geschäftsbedingungen unwirksam werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.',
    sections: [
      {
        heading: 'Rechte und Pflichten von KASPIT Security GmbH',
        paragraphs: [
          'KASPIT Security GmbH ist verpflichtet, die Leistung im Rahmen der für das Sicherheitsgewerbe geltenden Bestimmungen durchzuführen. KASPIT Security GmbH haftet für die ordnungsgemäße Ausführung eines Auftrages, eine Haftung für einen bestimmten Erfolg wird jedoch ausgeschlossen, zumal Ergebnisse, etwa bei Beobachtungen oder Ermittlungen, weder vorweggenommen noch garantiert werden können. Einsatz von Personal, Fahrzeug- und Sachaufwand sowie die Art der Ausführung des Auftrages liegt alleine im fachlichen Ermessen von KASPIT Security GmbH.',
          'KASPIT Security GmbH ist berechtigt, den Auftrag oder Teile davon auch durch Kooperationspartner durchführen zu lassen.',
          'KASPIT Security GmbH und Kooperationspartner verpflichten sich, über alle Angelegenheiten, die im Zusammenhang mit ihrer Tätigkeit für den Klienten bekannt werden, Stillschweigen zu bewahren. Nur der Klient selbst kann KASPIT Security GmbH oder Kooperationspartner von dieser Schweigepflicht entbinden. Berichte, Gutachten und sonstige schriftliche Äußerungen über die Ergebnisse der Tätigkeit dürfen an Dritte nur mit Einwilligung des Klienten ausgehändigt werden. Die Schweigepflicht gilt auch für die Zeit nach Beendigung des Auftrages, ausgenommen sind Fälle, in denen eine gesetzliche Verpflichtung zur Auskunftserteilung besteht.',
          'KASPIT Security GmbH ist befugt, ihm anvertraute personenbezogene Daten im Rahmen der Zweckbestimmung des Auftrages zu verarbeiten oder durch Dritte verarbeiten zu lassen. KASPIT Security GmbH gewährleistet hierbei Datenschutz gemäß den Bestimmungen der DSGVO.',
        ],
      },
      {
        heading: 'Rechte und Pflichten des Klienten',
        paragraphs: [
          'Bei Erfüllung des Auftrages an seinem unmittelbaren Geschäftssitz sorgt der Klient dafür, dass die organisatorischen Rahmenbedingungen ein möglichst ungestörtes, dem raschen Fortgang förderliches Arbeiten erlauben, auch ohne besondere Aufforderung alle für die Erfüllung des Auftrages notwendigen Unterlagen zeitgerecht vorgelegt sowie Vorgänge, Informationen und Umstände bekannt gegeben werden, die für die Ausführung des Auftrages von Bedeutung sind. Dies gilt auch für alle Unterlagen, Vorgänge, Informationen und Umstände, die nach bereits aufgenommener Tätigkeit bekannt werden. Weiters sind vom Klienten allfällige gesetzlich vorgesehene Informationspflichten zu erfüllen.',
          'Der Klient darf erstellte Angebote, Berichte, Analysen, Gutachten und dergleichen nur für den Auftragszweck verwenden, insbesondere bedarf die Weitergabe an Dritte der schriftlichen Zustimmung von KASPIT Security GmbH.',
        ],
      },
      {
        heading: 'Honorarvereinbarung',
        paragraphs: [
          'KASPIT Security GmbH hat für die Erfüllung des Auftrages Anspruch auf Bezahlung eines Honorars durch den Klienten. Zur Verrechnung gelangt, sofern nicht ein Pauschalhonorar vereinbart wurde, gemäß Tarifliste der im Zusammenhang mit dem Auftrag anfallende Personal- und Sachaufwand, insbesondere: Aktenstudium, Besprechungen, Einsatzvorbereitung, Reisezeiten, Durchführung von Ermittlungen und Beobachtungen einschließlich deren vorbereitende Maßnahmen (Umgebungsstudie), technische Einsätze, Wartungen, Berichtlegung, Auswertung von Video-, Photo- und Audiodokumentation, der Betrieb von technischen Geräten, Kommunikationskosten im Ausland, Reise- und Nächtigungskosten und sonstige Auslagen aller Art.',
          'Wird nach Auftragserteilung die Ausführung des Auftrages oder von Teilen des Auftrages durch den Klienten storniert, so ist das vereinbarte Honorar trotzdem in voller Höhe zu bezahlen, es sei denn, dass Stornogebühren schriftlich vereinbart wurden oder KASPIT Security GmbH ausdrücklich auf ein Honorar verzichtet. Wenn nicht anders vereinbart, sind vom Klienten auch laufend Akontozahlungen zu leisten.',
          'KASPIT Security GmbH kann die Fertigstellung einer Leistung von der vollen Befriedigung seiner Honoraransprüche abhängig machen. Eine Beanstandung der Leistungen von KASPIT Security GmbH berechtigt nicht zur Zurückhaltung zustehender Honorare.',
        ],
      },
    ],
  },
}

export default function Terms() {
  usePageTitle('Terms & Conditions')
  const [lang, setLang] = useState<Lang>('en')
  const heroRef = useScrollReveal<HTMLDivElement>()
  const bodyRef = useScrollReveal<HTMLDivElement>()
  const data = content[lang]

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-12 lg:pt-44 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Legal</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            {lang === 'en' ? (
              <>Terms & <span className="text-primary">Conditions</span></>
            ) : (
              <>Allgemeine <span className="text-primary">Geschäftsbedingungen</span></>
            )}
          </h1>
          <p data-reveal className="body-lg max-w-2xl">
            KASPIT Security GmbH — {lang === 'en' ? 'governing terms for all service engagements.' : 'maßgebliche Bedingungen für alle Leistungsbeziehungen.'}
          </p>

          {/* Language toggle */}
          <div data-reveal className="mt-10 inline-flex items-center gap-1 border border-white/[0.08] rounded-full p-1">
            {(['en', 'de'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={clsx(
                  'px-5 py-2 text-[0.7rem] tracking-[0.12em] uppercase rounded-full transition-all duration-300',
                  lang === l
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-muted hover:text-text'
                )}
              >
                {l === 'en' ? 'English' : 'Deutsch'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Body */}
      <section ref={bodyRef} className="section-padding py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <p data-reveal className="body-lg mb-16 text-text-muted">
            {data.intro}
          </p>

          <div className="space-y-16">
            {data.sections.map((section, i) => (
              <div key={section.heading} data-reveal>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-xs text-text-dim font-mono tracking-wider">0{i + 1}</span>
                  <h2 className="heading-sm text-text">{section.heading}</h2>
                </div>
                <div className="space-y-5 pl-0 lg:pl-10">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="body-md leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-20 pt-10 border-t border-white/[0.06] text-center">
            <p className="text-xs text-text-dim tracking-wider">
              © {new Date().getFullYear()} KASPIT Security GmbH · {lang === 'en' ? 'All rights reserved' : 'Alle Rechte vorbehalten'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
