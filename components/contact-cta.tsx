import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:px-6 md:py-28">
        <p className="font-mono text-xs tracking-widest text-primary uppercase">
          Get Started
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold text-balance md:text-5xl">
          Let&apos;s talk about your security posture
        </h2>
        <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
          Schedule a free 30 minute consultation with one of our senior
          consultants. No sales pressure, just an honest look at where
          you stand and where to go next.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="mailto:help@altioraservices.digital"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            help@altioraservices.digital
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="tel:+2349037911120"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            +234 903 791 1120
          </Link>
        </div>
      </div>
    </section>
  )
}
