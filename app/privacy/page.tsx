import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy: Altiora Digital Services',
  description:
    'How Altiora Digital Services collects, uses, and protects information shared by clients and website visitors.',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 md:px-6 md:pt-40 md:pb-28">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
          Legal
        </p>
        <h1 className="mb-8 text-3xl font-semibold text-balance md:text-5xl">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-6 leading-relaxed text-pretty text-muted-foreground">
          <p>Last updated: July 2026</p>
          <p>
            Altiora Digital Services (&quot;Altiora,&quot; &quot;we,&quot;
            &quot;us&quot;) respects your privacy. This policy explains what
            information we collect through altioraservices.digital and our
            client engagements, how we use it, and the choices you have.
          </p>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Information we collect
            </h2>
            <p>
              We collect information you provide directly, such as your name,
              email address, phone number, and company details when you
              contact us or request a consultation. During engagements, we
              may also process technical information about your systems that
              is strictly necessary to deliver the agreed services.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              How we use information
            </h2>
            <p>
              We use collected information to respond to enquiries, deliver
              contracted security services, improve our website and
              community programs, and meet legal or regulatory obligations.
              We do not sell personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Data retention and security
            </h2>
            <p>
              Client and engagement data is retained only as long as needed
              for the purpose it was collected, or as required by law or
              contract, and is protected using appropriate technical and
              organisational safeguards.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us at{' '}
              <a
                href="mailto:help@altioraservices.digital"
                className="text-primary underline underline-offset-2"
              >
                help@altioraservices.digital
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              Questions about this policy can be sent to{' '}
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
