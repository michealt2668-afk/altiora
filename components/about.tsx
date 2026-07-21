import Image from 'next/image'
import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <h2 className="mx-auto mb-12 max-w-3xl text-center text-3xl font-semibold text-balance md:mb-16 md:text-5xl">
        Trusted advisors, not just auditors
      </h2>

      <div className="grid gap-1 overflow-hidden rounded-lg md:grid-cols-3">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
          <Image
            src="/images/consulting-meeting.png"
            alt="Altiora consultants reviewing a security report with a client"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
          <Image
            src="/images/analyst-code.png"
            alt="Security analyst working in a dark operations room"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
          <Image
            src="/images/data-center.png"
            alt="Dark data center corridor with server racks"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="leading-relaxed text-pretty text-muted-foreground">
          Altiora Digital Services was founded on a simple belief. Security
          should enable growth, not slow it down. Our consultants come from
          offensive security, incident response, and enterprise risk
          backgrounds, and we embed with your teams to build defenses that
          hold up in the real world.
        </p>
        <Link
          href="#team"
          className="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          Meet the Team
        </Link>
      </div>
    </section>
  )
}
