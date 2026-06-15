import type { Metadata, Viewport } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const GA_ID = 'G-170DQW3RLK'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sunhousesolar.in'),
  title: 'Sun House Solar | Trusted Solar Material Supplier – Solapur',
  description:
    'Sun House Solar by Raje Power Trading – Your trusted solar panel supplier and installer in Solapur. We deal in Waaree, Adani, Tata Power, Vikram Solar and more. Call +91 91750 84823.',
  keywords:
    'solar panels Solapur, solar installation, Sun House Solar, Raje Power Trading, Waaree solar, Adani solar, solar maintenance, solar cleaning, AMC solar, solar energy India',
  authors: [{ name: 'Sun House Solar – Raje Power Trading' }],
  alternates: {
    canonical: 'https://www.sunhousesolar.in/',
  },
  openGraph: {
    title: 'Sun House Solar | Powering Your Future',
    description:
      'Complete solar solutions in Solapur. Solar panels, installation, maintenance, AMC and more.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sun House Solar',
    url: 'https://www.sunhousesolar.in/',
    images: [
      {
        url: 'https://www.sunhousesolar.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sun House Solar – Solapur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun House Solar | Trusted Solar Material Supplier',
    description: 'Complete solar solutions in Solapur by Raje Power Trading',
    images: ['https://www.sunhousesolar.in/og-image.jpg'],
  },
  robots: 'index, follow',
  verification: {
    google: '7oG3cumgkExOOvO6L7xaodbDSAjhYxvgcj7cgrCqqXs',
  },
  icons: {
    icon: '/sun-house-logo.jpg',
    apple: '/sun-house-logo.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Sun House Solar',
  alternateName: 'Raje Power Trading',
  url: 'https://www.sunhousesolar.in',
  logo: 'https://www.sunhousesolar.in/sun-house-logo.jpg',
  image: 'https://www.sunhousesolar.in/og-image.jpg',
  telephone: '+919175084823',
  email: 'info@sunhousesolar.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C 30/46, Near Yallaling Maharaj Math, Padma Nagar, New Paccha Peth',
    addressLocality: 'Solapur',
    addressRegion: 'MH',
    postalCode: '413006',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.6805',
    longitude: '75.9064',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹',
  sameAs: [
    'https://www.facebook.com/sunhousesolar',
    'https://www.instagram.com/sunhousesolar',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Solar Panel Installation',
  provider: { '@type': 'LocalBusiness', name: 'Sun House Solar' },
  areaServed: { '@type': 'City', name: 'Solapur' },
  description:
    'Complete solar panel supply, installation, maintenance and AMC services in Solapur',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="bg-[#0F1F1A] text-slate-100 antialiased" style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)' }}>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}
