import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://altioraservices.digital'),
  title: {
    default: 'Altiora Digital Services | Cybersecurity Consulting',
    template: '%s | Altiora Digital Services',
  },
  description:
    'Altiora Digital Services is a cybersecurity consulting firm delivering penetration testing, security audits, managed detection, and compliance advisory for modern enterprises.',
  keywords: [
    'cybersecurity consulting',
    'penetration testing',
    'security audits',
    'managed detection',
    'compliance advisory',
    'Lagos cybersecurity',
  ],
  alternates: {
    canonical: 'https://altioraservices.digital',
  },
  generator: 'v0.app',
  authors: [{ name: 'Altiora Digital Services' }],
  creator: 'Altiora Digital Services',
  publisher: 'Altiora Digital Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Altiora Digital Services | Cybersecurity Consulting',
    description:
      'Penetration testing, security audits, managed detection, and compliance advisory for modern enterprises, plus community cybersecurity awareness programs in Lagos.',
    url: 'https://altioraservices.digital',
    siteName: 'Altiora Digital Services',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Altiora Digital Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altiora Digital Services | Cybersecurity Consulting',
    description:
      'Penetration testing, security audits, managed detection, and compliance advisory for modern enterprises.',
    images: ['/icon.svg'],
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Altiora Digital Services',
    url: 'https://altioraservices.digital',
    logo: 'https://altioraservices.digital/icon.svg',
    sameAs: ['https://altioraservices.digital'],
  }

  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
