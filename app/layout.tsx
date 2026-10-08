import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope' })
const jetbrains = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Трезвый водитель Алматы 24/7 — +7 (776) 057-42-99',
  description:
    'Трезвый водитель в Алматы круглосуточно. Приедем за 15 минут и довезём вас и ваш автомобиль домой. Стоимость от 25 000 тг, точная цена — по таксометру.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  keywords: ['трезвый водитель', 'трезвый водитель Алматы', 'водитель на час', 'перегон авто Алматы'],
  openGraph: {
    title: 'Трезвый водитель Алматы 24/7',
    description: 'Довезём вас и ваш автомобиль домой. От 25 000 тг.',
    images: ['/images/hero.png'],
    locale: 'ru_KZ',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#11151f',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isProd = process.env.NODE_ENV === 'production'
  return (
    <html lang="ru" className={`${manrope.variable} ${jetbrains.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {isProd && <Analytics />}
        {isProd && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-FP5LGBYD2S"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-FP5LGBYD2S');
                gtag('config', 'AW-18492477168');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
