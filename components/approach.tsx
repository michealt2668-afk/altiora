const steps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We map your attack surface, review your architecture, and identify the gaps that matter most, ranked by real business risk, not checkbox severity.',
  },
  {
    number: '02',
    title: 'Harden',
    description:
      'Our engineers work alongside your teams to remediate findings, implement controls, and build security into your development and operations workflows.',
  },
  {
    number: '03',
    title: 'Defend',
    description:
      'Continuous monitoring, threat hunting, and incident response keep your organization protected as your infrastructure and the threat landscape evolve.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
            Our Approach
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold text-balance md:text-5xl">
            A proven methodology for lasting resilience
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-lg border border-border bg-background p-6 md:p-8"
            >
              <span className="font-mono text-5xl font-light text-primary md:text-6xl">
                {step.number}
              </span>
              <h3 className="mt-6 mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
