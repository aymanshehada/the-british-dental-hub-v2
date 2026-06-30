import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "From the moment I walked in, it felt more like a private members' club than a clinic. The veneers are flawless and entirely natural.",
    name: "Nour El-Din",
    detail: "Veneers & Whitening",
  },
  {
    quote:
      "I had been anxious about implants for years. The team's calm, precise approach put me completely at ease — and the result is extraordinary.",
    name: "Hana Mahmoud",
    detail: "Dental Implants",
  },
  {
    quote:
      "Genuinely the highest standard of dentistry I have experienced anywhere. Every detail, down to the aftercare, was considered.",
    name: "Omar Sherif",
    detail: "Smile Makeover",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Patient Stories
            <span className="h-px w-8 bg-primary" />
          </p>
          <h2 className="text-balance font-heading text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Trusted by those who expect more
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-sm border border-border bg-card p-8"
            >
              <Quote className="size-9 text-primary/40" strokeWidth={1.5} />
              <div className="mt-5 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty text-lg font-light italic leading-relaxed text-card-foreground">
                {`"${item.quote}"`}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <p className="font-heading text-xl font-medium text-card-foreground">
                  {item.name}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-primary">
                  {item.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
