import type { Metadata } from 'next'
import { Barlow, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UEOS — Unified Enterprise Operating System | Kawie Digital',
  description:
    'One platform that consolidates project management, crew operations, and supply chain into a single, always-on cloud system — built for Oil & Gas, ready for every industry.',
  keywords: ['UEOS', 'Enterprise SaaS', 'Oil & Gas', 'Kawie Digital', 'Project Management', 'Crewing Management'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'UEOS — Unified Enterprise Operating System',
    description: 'Built for Oil & Gas. Ready for Every Industry.',
    siteName: 'Kawie Digital Solutions',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-body bg-[#f8faff] text-[#4a5578]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
