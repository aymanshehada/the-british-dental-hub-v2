import Link from 'next/link'
import { Container } from '@/components/ui/container'

const treatmentOptions = [
  {
    title: 'Single Tooth Implant',
    description:
      'Ideal for replacing one missing tooth while preserving neighbouring healthy teeth and supporting bone.',
  },
  {
    title: 'Multiple Dental Implants',
    description:
      'A predictable solution for replacing several missing teeth with excellent long-term stability.',
  },
  {
    title: 'Immediate Implant Placement',
    description:
      'Where clinically appropriate, implants may be placed immediately after extraction to reduce treatment stages.',
  },
  {
    title: 'Full Arch Rehabilitation',
    description:
      'A fixed full-arch solution for patients requiring complete smile rehabilitation.',
  },
]

export function ImplantTreatmentOptionsSection() {
  return (
    <section id="implant-treatment-options" className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="max-w-[860px]">
          <h2 className="font-serif text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.03] tracking-[-0.032em] text-[#0A2247]">
            Solutions Tailored To Your Smile
          </h2>
          <p className="mt-7 max-w-[760px] text-[1.03rem] leading-8 text-[#566681] sm:text-[1.1rem] sm:leading-9">
            Every smile is different.
            <br />
            Following your assessment we recommend the most appropriate treatment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
          {treatmentOptions.map((option) => (
            <Link
              key={option.title}
              href="/#contact"
              className="group flex h-full min-h-[198px] flex-col rounded-[18px] border border-[#e8edf4] bg-white px-6 py-4.5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#d5deea] hover:shadow-[0_6px_14px_rgba(15,39,78,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/12 focus-visible:ring-offset-2"
            >
              <h3 className="text-[1.35rem] font-semibold leading-[1.25] tracking-[-0.016em] text-[#13345d]">
                {option.title}
              </h3>
              <p className="mt-3 max-w-[43ch] text-[0.95rem] leading-[1.75] text-[#5f6f88]">
                {option.description}
              </p>
              <span className="mt-auto pt-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0A2247]/78 transition-colors duration-300 ease-out group-hover:text-[#0A2247]">
                Explore <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
