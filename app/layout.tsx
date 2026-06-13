import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sun House Solar | Trusted Solar Material Supplier – Solapur',
  description:
    'Sun House Solar by Raje Power Trading – Your trusted solar panel supplier and installer in Solapur. We deal in Waaree, Adani, Tata Power, Vikram Solar and more. Call 9175084823.',
  keywords:
    'solar panels Solapur, solar installation, Sun House Solar, Raje Power Trading, Waaree solar, Adani solar, solar maintenance, solar cleaning, AMC solar, solar energy India',
  authors: [{ name: 'Sun House Solar – Raje Power Trading' }],
  openGraph: {
    title: 'Sun House Solar | Powering Your Future',
    description:
      'Complete solar solutions in Solapur. Solar panels, installation, maintenance, AMC and more.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sun House Solar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun House Solar | Trusted Solar Material Supplier',
    description: 'Complete solar solutions in Solapur by Raje Power Trading',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0F1F1A] text-slate-100 font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
