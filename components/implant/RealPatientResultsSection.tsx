import { Container } from '@/components/ui/container'

const featuredCases = [
  {
    treatment: 'Single Tooth Implant',
    summary:
      'Replacement of an upper central incisor using digitally planned implant placement and a custom ceramic restoration.',
    treatmentTime: '3 Months',
    restoration: 'Custom Ceramic Crown',
    goal: 'Natural Integration',
  },
  {
    treatment: 'Multiple Dental Implants',
    summary:
      'Rehabilitation of multiple missing posterior teeth with staged digital planning and implant-supported ceramic restorations.',
    treatmentTime: '4-6 Months',
    restoration: 'Implant-Supported Ceramics',
    goal: 'Functional Stability',
  },
  {
    treatment: 'Full Arch Rehabilitation',
    summary:
      'Complete full-arch restoration using a digitally guided implant protocol and a fixed prosthetic solution.',
    treatmentTime: '6-8 Months',
    restoration: 'Fixed Full-Arch Prosthesis',
    goal: 'Comfort & Confidence',
  },
]

export function RealPatientResultsSection() {
  return (
    <section id="real-patient-results" className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#D62828]">
            Real Patient Results
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.02] tracking-[-0.035em] text-[#0A2247]">
            Restoring Smiles.
            <span className="mt-2 block">Restoring Confidence.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[1.04rem] leading-8 text-[#566681] sm:text-[1.1rem] sm:leading-9">
            Every implant treatment is carefully planned around the individual.
            <br />
            Our goal is not simply to replace missing teeth, but to restore comfort, confidence and long-term oral health.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-7">
          {featuredCases.map((item) => (
            <article key={item.treatment} className="flex h-full flex-col">
              <div className="aspect-[5/4] rounded-[18px] border border-[#e6edf5] bg-[#fafbfd] p-5 shadow-[0_3px_12px_rgba(15,39,78,0.035)]">
                <div className="flex h-full items-center justify-center rounded-[14px] border border-[#e1e9f2] bg-white text-center">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#6a7b95]">
                    Before & After
                    <span className="mt-2 block text-[0.66rem] tracking-[0.2em] text-[#7f8ea6]">
                      Clinical Image Placeholder
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#a65644]">
                  {item.treatment}
                </p>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#4f627f]">
                  {item.summary}
                </p>

                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-[#e8edf4] pt-5">
                  <div>
                    <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#7a8ca5]">
                      Treatment Time
                    </dt>
                    <dd className="mt-2 text-[0.88rem] font-medium text-[#183a68]">{item.treatmentTime}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#7a8ca5]">
                      Restoration
                    </dt>
                    <dd className="mt-2 text-[0.88rem] font-medium text-[#183a68]">{item.restoration}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#7a8ca5]">
                      Clinical Goal
                    </dt>
                    <dd className="mt-2 text-[0.88rem] font-medium text-[#183a68]">{item.goal}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-[0.95rem] leading-7 text-[#60718b]">
            Every smile shown represents an individual treatment journey.
            <br />
            Results vary according to oral health, healing and clinical requirements.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-flex text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#0A2247]/82 transition-colors duration-300 ease-out hover:text-[#0A2247]"
          >
            View More Implant Cases →
          </a>
        </div>
      </Container>
    </section>
  )
}
