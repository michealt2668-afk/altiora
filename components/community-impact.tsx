import Image from 'next/image'
import { Users, GraduationCap, BadgeCheck, HeartHandshake } from 'lucide-react'

const outcomes = [
  {
    icon: Users,
    value: '300+',
    label: 'Community members reached',
  },
  {
    icon: GraduationCap,
    value: '50',
    label: 'Community champions trained',
  },
  {
    icon: HeartHandshake,
    value: '50+',
    label: 'Female entrepreneurs & students trained',
  },
  {
    icon: BadgeCheck,
    value: '2',
    label: 'Awareness programs delivered in Lagos',
  },
]

export function CommunityImpact() {
  return (
    <section
      id="community"
      className="border-y border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-3 text-center font-mono text-xs tracking-widest text-primary uppercase">
          Giving Back / Community Campaign
        </p>
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-semibold text-balance md:text-5xl">
          Security awareness beyond the boardroom
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground md:mb-10">
          Through Altiora Digital Services, I delivered two cybersecurity
          awareness programs in Lagos, meeting people where they are, in
          plain language, and measuring real gains in their ability to
          detect and avoid fraud.
        </p>
        <blockquote className="mx-auto mb-12 max-w-2xl rounded-lg border border-border bg-background p-6 text-center text-sm leading-relaxed text-pretty text-muted-foreground md:mb-16 md:p-8">
          &ldquo;Digital Defence for All was designed around short, practical
          seminars on phishing recognition, password security, and online
          fraud avoidance, which were delivered directly to communities using
          simple, non technical materials. It reached over 300 people and
          trained 50 of them as community champions, who are still doing
          informal awareness seminars in their own areas today. SecureHer
          Tech employed the same in person, practical delivery strategy to
          reach out to over 50 female entrepreneurs and students, focusing on
          account security, fraud detection, and safe online business
          practices. Both programs tailored materials to participants with
          varying levels of technical literacy and measured outcomes using
          participant feedback and knowledge assessments before and after
          training, confirming real gains in participants confidence and
          ability to detect fraud rather than just attendance
          numbers.&rdquo;
          <footer className="mt-4 font-mono text-[10px] tracking-widest text-primary uppercase not-italic">
            Temidayo Titilola, Founder
          </footer>
        </blockquote>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-background">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/community-seminar.png"
                alt="Community members attending a Digital Defence for All awareness seminar in Lagos"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
              <h3 className="text-xl font-semibold md:text-2xl">
                Digital Defence for All
              </h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                Short, practical seminars on phishing recognition, password
                security, and online fraud avoidance, delivered directly to
                communities using simple, non technical materials. The program
                reached over 300 people and trained 50 of them as community
                champions, who are still running informal awareness seminars
                in their own areas today.
              </p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {['Phishing recognition', 'Password security', 'Fraud avoidance'].map(
                  (tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  )
                )}
              </ul>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-background">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/secureher-workshop.png"
                alt="Female entrepreneurs and students at a SecureHer Tech hands on workshop in Lagos"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
              <h3 className="text-xl font-semibold md:text-2xl">
                SecureHer Tech
              </h3>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                The same in person, practical delivery strategy, focused on
                over 50 female entrepreneurs and students. Sessions covered
                account security, fraud detection, and safe online business
                practices, with materials tailored to participants across
                varying levels of technical literacy.
              </p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {['Account security', 'Fraud detection', 'Safe online business'].map(
                  (tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  )
                )}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-1 overflow-hidden rounded-lg md:mt-10 md:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[280px]">
            <Image
              src="/images/community-champions.png"
              alt="Trained community champions holding certificates after an awareness training session in Lagos"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 bg-secondary p-6 md:p-8">
            <h3 className="text-lg font-semibold">Measured, not assumed</h3>
            <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
              Both programs measured outcomes with participant feedback and
              knowledge assessments taken before and after training,
              confirming real gains in confidence and fraud detection
              ability, not just attendance numbers.
            </p>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-4">
          {outcomes.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <item.icon className="size-5 text-primary" aria-hidden="true" />
              <dd className="text-3xl font-semibold md:text-4xl">
                {item.value}
              </dd>
              <dt className="text-xs leading-relaxed text-muted-foreground">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
