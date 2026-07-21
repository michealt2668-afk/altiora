'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ShieldCheck, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#about', label: 'About' },
  { href: '#community', label: 'Community' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-widest uppercase">
            Altiora
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-xs font-semibold tracking-widest text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-xs font-semibold tracking-widest text-primary-foreground uppercase"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
