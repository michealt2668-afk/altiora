import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How does a typical engagement start?',
    answer:
      'Every engagement begins with a free scoping call. We map your environment, clarify objectives, and agree deliverables before any contract is signed. You receive a fixed scope proposal within five business days, with no open ended billing.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Most work is fixed price per engagement. Penetration tests, audits, and compliance projects are quoted upfront based on scope. Managed detection and ongoing advisory are billed as a flat monthly retainer. There are no surprise hourly overruns.',
  },
  {
    question: 'How long does a penetration test take?',
    answer:
      'A focused web application or external network test typically runs one to two weeks including reporting. Larger scopes, such as internal networks, cloud environments, or red team exercises, are scheduled in phases with a timeline agreed at scoping.',
  },
  {
    question: 'Do you work with small businesses or only enterprises?',
    answer:
      'Both. Our methodology scales down as well as up, so small businesses get the same rigour with a scope sized to their risk and budget. Our community programs also mean we are practised at explaining security without jargon.',
  },
  {
    question: 'What do we receive at the end of an engagement?',
    answer:
      'A full technical report with evidence and reproduction steps, an executive summary written for leadership, a prioritised remediation roadmap, and a debrief session. Retesting of fixed findings is included in every assessment.',
  },
  {
    question: 'Can you help us after a security incident has already happened?',
    answer:
      'Yes. We provide incident response support including containment, forensic investigation, recovery planning, and regulator or customer communication. Contact us immediately, since the first hours matter most.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 text-center font-mono text-xs tracking-widest text-primary uppercase">
          FAQ
        </p>
        <h2 className="mx-auto mb-4 max-w-2xl text-center text-3xl font-semibold text-balance md:text-5xl">
          Common questions, straight answers
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center leading-relaxed text-pretty text-muted-foreground md:mb-16">
          Everything you need to know about how we engage, price, and deliver.
          Anything else, just ask.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-border bg-background"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold md:text-base [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="size-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-pretty text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
