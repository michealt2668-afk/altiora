import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Responsible Disclosure: Altiora Digital Services',
  description:
    'How to report a security vulnerability in Altiora Digital Services systems responsibly.',
}

export default function ResponsibleDisclosurePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 md:px-6 md:pt-40 md:pb-28">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
          Legal
        </p>
        <h1 className="mb-8 text-3xl font-semibold text-balance md:text-5xl">
          Responsible Disclosure
        </h1>
        <div className="flex flex-col gap-6 leading-relaxed text-pretty text-muted-foreground">
          <p>
            As a cybersecurity consultancy, we take the security of our own
            systems seriously and welcome reports from researchers who
            discover a genuine vulnerability.
          </p>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              How to report
            </h2>
            <p>
              Email a clear description of the issue, the steps to reproduce
              it, and any supporting evidence to{' '}
              <a
                href="mailto:help@altioraservices.digital"
                className="text-primary underline underline-offset-2"
              >
                help@altioraservices.digital
              </a>
              . Please avoid accessing or modifying data that does not belong
              to you and give us a reasonable amount of time to investigate
              and respond before sharing details publicly.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              What to expect
            </h2>
            <p>
              We aim to acknowledge reports within two business days, keep
              you informed of progress, and credit researchers who make a
              good faith, responsible report, if they wish to be credited.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Out of scope
            </h2>
            <p>
              Social engineering, physical attacks, denial of service
              testing, and automated scanning without prior authorisation are
              not covered by this policy. For client systems, please direct
              reports to the relevant organisation rather than to Altiora.
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 inline-flex w-fit items-center rounded-md border border-border px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
