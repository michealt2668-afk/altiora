import Image from 'next/image'

const team = [
  {
    image: '/images/team-founder.png',
    alt: 'Portrait of the founder and principal consultant of Altiora Digital Services',
    name: 'Temidayo Titilola',
    role: 'Founder & Principal Consultant',
    bio: 'Leads offensive security engagements and enterprise advisory. Architect of the Digital Defence for All and SecureHer Tech community programs in Lagos.',
    credentials: ['CISSP', 'CEH'],
  },
  {
    image: '/images/team-consultant-1.png',
    alt: 'Portrait of the governance, risk and compliance lead',
    name: 'Adaeze Okonkwo',
    role: 'GRC & Compliance Lead',
    bio: 'Guides clients through ISO 27001, PCI DSS, and NDPR programs, turning audit findings into practical roadmaps that teams actually follow.',
    credentials: ['ISO 27001 LA', 'CISM'],
  },
  {
    image: '/images/team-consultant-2.png',
    alt: 'Portrait of the detection and response analyst',
    name: 'Kunle Adebayo',
    role: 'Detection & Response Analyst',
    bio: 'Runs managed detection operations and incident response. Specialises in threat hunting across cloud and hybrid environments.',
    credentials: ['Security+', 'OSCP'],
  },
]

export function Team() {
  return (
    <section id="team">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 text-center font-mono text-xs tracking-widest text-primary uppercase">
          Our Team
        </p>
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-semibold text-balance md:text-5xl">
          The people behind the defence
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground md:mb-16">
          A small, senior team. Every engagement is delivered by certified
          practitioners, never handed off to juniors after the sales call.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="font-mono text-[10px] tracking-widest text-primary uppercase">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {member.bio}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-3">
                  {member.credentials.map((credential) => (
                    <li
                      key={credential}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
