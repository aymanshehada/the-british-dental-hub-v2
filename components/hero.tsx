import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-clinic.png"
        alt="Interior of The British Dental Hub luxury clinic in Cairo"
        fill
        priority
        className="object-cover"
      />
      {/* Overlays for contrast */}
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl section-premium py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 eyebrow">
            <span className="h-px w-10 bg-primary" />
            Premium Dentistry in Cairo
          </p>

          <h1 className="text-balance font-heading text-5xl font-semibold leading-[0.98] text-foreground sm:text-[4.5rem] lg:text-[5.3rem]">
            Refined care, held to{' '}
            <span className="text-primary">British standards</span> of
            excellence.
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground sm:text-xl">
            The British Dental Hub blends meticulous clinical precision with a
            serene, luxurious experience &mdash; delivering world-class
            dentistry in the heart of Cairo.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="group rounded-none bg-primary px-9 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition duration-300 ease-out hover:bg-primary/90"
            >
              Book a Consultation
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-primary/50 bg-transparent px-9 py-5 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition duration-300 ease-out hover:border-primary hover:bg-primary/10 hover:text-foreground"
            >
              <Phone className="mr-2 size-4" />
              Call the Clinic
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
