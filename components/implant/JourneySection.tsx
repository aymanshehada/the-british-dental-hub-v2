import { Container } from '@/components/ui/container'

const journeySteps = [
  {
    number: '01',
    title: 'Consultation & Assessment',
    description:
      'Comprehensive examination, photos, and CBCT imaging define your treatment pathway.',
  },
  {
    number: '02',
    title: 'Digital Implant Planning',
    description:
      'Implant position is digitally mapped for accuracy, safety, and long-term stability.',
  },
  {
    number: '03',
    title: 'Implant Placement',
    description:
      'Implants are placed using precise, minimally invasive techniques for comfort.',
  },
  {
    number: '04',
    title: 'Healing & Integration',
    description:
      'The implant bonds with bone while healing is monitored closely.',
  },
  {
    number: '05',
    title: 'Final Crown & Review',
    description:
      'Your custom crown is fitted and long-term review care begins.',
  },
]

export function JourneySection() {
  return (
    <section id="implant-journey" className="bg-[#f8f9fb] py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#D62828]">
            The Implant Journey
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] tracking-[-0.032em] text-[#0A2247]">
            Your Implant Journey,
            <span className="mt-2 block">Step by Step.</span>
          </h2>
          <p className="mt-7 text-[1.06rem] leading-8 text-[#566681] sm:text-[1.12rem] sm:leading-9">
            From your first consultation to your final restoration, every stage is carefully planned to maximise comfort, precision, and long-term success.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[7%] right-[7%] top-[58px] hidden h-px bg-[#d9e2ed] xl:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
            {journeySteps.map((step, index) => (
              <article
                key={step.number}
                className="relative flex h-full min-h-[286px] flex-col rounded-[18px] border border-[#e5ebf3] bg-white px-6 py-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_5px_14px_rgba(15,39,78,0.05)]"
              >
                {index > 0 ? (
                  <span className="absolute -left-4 top-[58px] hidden h-px w-4 bg-[#d9e2ed] xl:block" />
                ) : null}
                <p className="relative z-10 w-fit bg-white pr-2 font-serif text-[3rem] leading-none tracking-[-0.052em] text-[#0A2247]">
                  {step.number}
                </p>
                <h3 className="mt-6 text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[#16355f]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-[#5f6f88]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[18px] border border-[#e6edf5] bg-[#fbfcfe] px-6 py-4.5 text-[#4f627f] shadow-[0_1px_6px_rgba(15,39,78,0.03)] sm:px-7">
          <p className="text-[0.95rem] leading-7">
            Every treatment plan is personalised. Some patients may require additional stages such as bone grafting or sinus augmentation before implant placement.
          </p>
        </div>
      </Container>
    </section>
  )
}
