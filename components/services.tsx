import {
  FileSearch,
  Lock,
  Radar,
  ScrollText,
  ShieldAlert,
  UserCheck,
} from 'lucide-react'

const services = [
  {
    icon: ShieldAlert,
    title: 'Penetration Testing',
    description:
      'Simulated real world attacks against your applications, networks, and cloud infrastructure to uncover exploitable weaknesses before adversaries do.',
  },
  {
    icon: Radar,
    title: 'Managed Detection & Response',
    description:
      '24/7 monitoring by our security operations team with rapid triage, containment, and remediation of threats across your environment.',
  },
  {
    icon: FileSearch,
    title: 'Security Audits & Assessments',
    description:
      'Comprehensive reviews of your security posture, architecture, and controls with prioritized, actionable remediation roadmaps.',
  },
  {
    icon: ScrollText,
    title: 'Compliance Advisory',
    description:
      'Expert guidance for SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR, from gap analysis through audit readiness and certification.',
  },
  {
    icon: Lock,
    title: 'Cloud Security',
    description:
      'Hardening of AWS, Azure, and GCP environments with identity governance, configuration baselines, and continuous posture management.',
  },
  {
    icon: UserCheck,
    title: 'Security Awareness Training',
    description:
      'Phishing simulations and role based training programs that turn your workforce into your strongest line of defense.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="mb-12 md:mb-16">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
          What We Do
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold text-balance md:text-5xl">
          Complete security services for the modern enterprise
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
          >
            <service.icon
              className="mb-5 size-6 text-primary"
              aria-hidden="true"
            />
            <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
