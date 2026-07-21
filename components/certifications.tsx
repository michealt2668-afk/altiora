import { Award, BadgeCheck, FileCheck2, Handshake } from 'lucide-react'

const certifications = [
  {
    abbr: 'CISSP',
    name: 'Certified Information Systems Security Professional',
    body: '(ISC)²',
  },
  {
    abbr: 'CEH',
    name: 'Certified Ethical Hacker',
    body: 'EC-Council',
  },
  {
    abbr: 'ISO 27001',
    name: 'Lead Implementer & Lead Auditor',
    body: 'PECB',
  },
  {
    abbr: 'Security+',
    name: 'CompTIA Security+',
    body: 'CompTIA',
  },
  {
    abbr: 'CISM',
    name: 'Certified Information Security Manager',
    body: 'ISACA',
  },
  {
    abbr: 'OSCP',
    name: 'Offensive Security Certified Professional',
    body: 'OffSec',
  },
]

const partnerships = [
  {
    icon: Handshake,
    title: 'Industry partnerships',
    description:
      'Working relationships with leading security vendors and platforms for detection, response, and identity tooling.',
  },
  {
    icon: FileCheck2,
    title: 'Framework alignment',
    description:
      'Engagements mapped to NIST CSF, ISO 27001, PCI DSS, and NDPR so findings translate directly into compliance evidence.',
  },
  {
    icon: Award,
    title: 'Continuous accreditation',
    description:
      'Consultants maintain active certifications with annual continuing education across offensive and defensive disciplines.',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 text-center font-mono text-xs tracking-widest text-primary uppercase">
          Certifications &amp; Partnerships
        </p>
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-semibold text-balance md:text-5xl">
          Credentials you can verify, standards we live by
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground md:mb-16">
          Our consultants hold globally recognised security certifications and
          our methodologies align with the frameworks your auditors and
          regulators already trust.
        </p>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {certifications.map((cert) => (
            <li
              key={cert.abbr}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-5 text-center"
            >
              <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide">
                {cert.abbr}
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                {cert.name}
              </span>
              <span className="mt-auto font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {cert.body}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {partnerships.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6"
            >
              <item.icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
