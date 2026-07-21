import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

const footerColumns = [
  {
    heading: 'Services',
    links: [
      { label: 'Penetration Testing', href: '#services' },
      { label: 'Managed Detection', href: '#services' },
      { label: 'Security Audits', href: '#services' },
      { label: 'Compliance Advisory', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Approach', href: '#approach' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Team', href: '#team' },
      { label: 'Community Impact', href: '#community' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Responsible Disclosure', href: '/responsible-disclosure' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6 md:py-20">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-widest uppercase">
              Altiora
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Altiora Digital Services. Cybersecurity consulting for enterprises
            that refuse to be the next headline.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {column.heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Altiora Digital Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
