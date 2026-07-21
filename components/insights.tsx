import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    image: '/images/insight-phishing.png',
    alt: 'A hand holding a smartphone showing a suspicious email inbox in a dark room',
    category: 'Threat Briefing',
    date: 'July 2026',
    title: 'The new wave of voice cloned phishing targeting finance teams',
    excerpt:
      'Attackers are pairing AI voice cloning with urgent payment requests. Here are the three verification habits that stop them cold.',
  },
  {
    image: '/images/insight-ransomware.png',
    alt: 'A padlock resting on a laptop keyboard under dramatic lighting',
    category: 'Security Tips',
    date: 'June 2026',
    title: 'Your backups are not a ransomware plan, your recovery time is',
    excerpt:
      'Most organisations back up data but never test restoring it. A practical checklist for proving you can actually recover.',
  },
  {
    image: '/images/insight-compliance.png',
    alt: 'Printed compliance documents and a pen on a desk beside a laptop',
    category: 'Compliance',
    date: 'May 2026',
    title: 'NDPR and ISO 27001: mapping one control set to both',
    excerpt:
      'How Nigerian businesses can satisfy local data protection rules and international certification with a single, unified control framework.',
  },
]

export function Insights() {
  return (
    <section id="insights" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 text-center font-mono text-xs tracking-widest text-primary uppercase">
          Insights
        </p>
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-semibold text-balance md:text-5xl">
          Briefings from the front line
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground md:mb-16">
          Practical security tips and threat intelligence from our
          consultants, written for decision makers, not just engineers.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-balance">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold tracking-widest text-primary uppercase"
                >
                  Read briefing
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
