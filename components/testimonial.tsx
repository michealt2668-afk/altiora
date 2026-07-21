import Image from 'next/image'

export function Testimonial() {
  return (
    <section id="testimonial" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/partnership.png"
            alt="Handshake between an Altiora consultant and a client"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <figure>
          <blockquote className="text-xl leading-relaxed font-medium text-balance md:text-2xl">
            &ldquo;Altiora found critical vulnerabilities two previous vendors
            missed, then stayed on to help us fix them. They operate like an
            extension of our own team, and we passed our SOC 2 audit ahead
            of schedule.&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <p className="text-sm font-semibold">Sarah Okonkwo</p>
            <p className="text-sm text-muted-foreground">
              CTO, Meridian Financial Group
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
