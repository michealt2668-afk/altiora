import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://altioraservices.digital'),
  title: 'Altiora Digital Services: Cybersecurity Consulting',
  description:
    'Altiora Digital Services is a cybersecurity consulting firm delivering penetration testing, security audits, managed detection, and compliance advisory for modern enterprises.',
  generator: 'v0.app',
  openGraph: {
    title: 'Altiora Digital Services: Cybersecurity Consulting',
    description:
      'Penetration testing, security audits, managed detection, and compliance advisory for modern enterprises, plus community cybersecurity awareness programs in Lagos.',
    url: 'https://altioraservices.digital',
    siteName: 'Altiora Digital Services',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#16181d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
