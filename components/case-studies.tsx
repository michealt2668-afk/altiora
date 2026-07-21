const caseStudies = [
  {
    sector: 'Financial Services',
    title: 'Stopping account takeover at a regional fintech',
    problem:
      'A payments startup saw rising account takeover fraud and failed a partner bank security review, putting a key integration at risk.',
    approach:
      'We ran a focused penetration test on authentication flows, hardened session management, and rolled out phishing resistant MFA with staff training.',
    outcome:
      'Account takeover incidents dropped to zero over the following two quarters and the partner bank review was passed on resubmission.',
  },
  {
    sector: 'Healthcare',
    title: 'Ransomware readiness for a multi site clinic group',
    problem:
      'A clinic network with legacy systems and no tested backups was flagged by insurers as high risk, threatening their coverage renewal.',
    approach:
      'We segmented the network, implemented immutable offsite backups, deployed managed endpoint detection, and ran a full tabletop exercise with leadership.',
    outcome:
      'Recovery time objective cut from an estimated two weeks to under 24 hours, and cyber insurance was renewed at improved terms.',
  },
  {
    sector: 'Ecommerce',
    title: 'PCI DSS compliance for a scaling retailer',
    problem:
      'A fast growing online retailer processing card payments in house faced a hard compliance deadline with no internal security function.',
    approach:
      'We scoped the cardholder data environment, tokenised payment flows to shrink audit scope, and built the policy and evidence pack for assessment.',
    outcome:
      'Full PCI DSS attestation achieved before the deadline, with audit scope reduced by roughly 70% and ongoing advisory in place.',
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 text-center font-mono text-xs tracking-widest text-primary uppercase">
          Case Studies
        </p>
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-semibold text-balance md:text-5xl">
          Real engagements, measurable outcomes
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground md:mb-16">
          Client identities stay confidential. Results don&apos;t have to. A
          sample of recent engagements across the sectors we serve.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="flex flex-col rounded-lg border border-border bg-card"
            >
              <div className="border-b border-border p-6">
                <p className="mb-2 font-mono text-[10px] tracking-widest text-primary uppercase">
                  {study.sector}
                </p>
                <h3 className="text-lg font-semibold text-balance">
                  {study.title}
                </h3>
              </div>
              <dl className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <dt className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    Problem
                  </dt>
                  <dd className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {study.problem}
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    Approach
                  </dt>
                  <dd className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {study.approach}
                  </dd>
                </div>
                <div className="mt-auto rounded-md bg-secondary p-4">
                  <dt className="mb-1 font-mono text-[10px] tracking-widest text-primary uppercase">
                    Outcome
                  </dt>
                  <dd className="text-sm leading-relaxed text-pretty">
                    {study.outcome}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
