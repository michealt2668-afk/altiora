import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-16">
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden md:h-[80vh]">
        <Image
          src="/images/hero-soc.png"
          alt="Security operations center with analysts monitoring network activity"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <p className="mb-4 font-mono text-xs tracking-widest text-primary uppercase">
              Cybersecurity Consulting
            </p>
            <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-balance md:text-6xl lg:text-7xl">
              Security that lets your business move faster.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              Altiora Digital Services helps enterprises identify, contain, and
              stay ahead of cyber threats, from penetration testing to 24/7
              managed detection and compliance advisory.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a Free Assessment
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background/40 px-6 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
