import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Terms of Service: Altiora Digital Services',
  description:
    'The terms that govern use of the Altiora Digital Services website and engagement with our cybersecurity consulting services.',
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 md:px-6 md:pt-40 md:pb-28">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
          Legal
        </p>
        <h1 className="mb-8 text-3xl font-semibold text-balance md:text-5xl">
          Terms of Service
        </h1>
        <div className="flex flex-col gap-6 leading-relaxed text-pretty text-muted-foreground">
          <p>Last updated: July 2026</p>
          <p>
            These terms govern your use of altioraservices.digital and any
            proposal, statement of work, or engagement letter issued by
            Altiora Digital Services (&quot;Altiora&quot;). By using this
            website or engaging our services, you agree to these terms.
          </p>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Services
            </h2>
            <p>
              Specific deliverables, timelines, and fees for any engagement
              are set out in a separate signed proposal or statement of work,
              which takes precedence over this general summary.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Client responsibilities
            </h2>
            <p>
              Clients are responsible for providing accurate scope
              information and authorisation for any testing performed against
              their systems. Altiora will not test systems outside an agreed,
              written scope.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Confidentiality
            </h2>
            <p>
              Information exchanged during an engagement is treated as
              confidential and used only to deliver the agreed services,
              unless disclosure is required by law.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Limitation of liability
            </h2>
            <p>
              Altiora provides services on a professional, best effort basis.
              To the extent permitted by law, our liability for any claim
              arising from an engagement is limited to the fees paid for the
              relevant service.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Changes to these terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of
              the website after changes are posted constitutes acceptance of
              the revised terms.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              Questions about these terms can be sent to{' '}
              <a
                href="mailto:help@altioraservices.digital"
                className="text-primary underline underline-offset-2"
              >
                help@altioraservices.digital
              </a>{' '}
              or by phone at +234 903 791 1120.
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
