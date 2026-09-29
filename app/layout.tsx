import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lev Casino — официальный сайт, зеркало и бонус',
  description: 'Lev Casino онлайн: официальный сайт, зеркало, регистрация, бонусы и советы по ответственному началу игры.',
  metadataBase: new URL('https://lev-casino.example'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.png', apple: '/icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07111f',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#07111f]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="lev casino, lev casino зеркало, лев казино, лев казино бонус, лев казино онлайн, лев казино регистрация" />
        <meta name="author" content="Lev Casino" />
        <meta name="theme-color" content="#07111f" />
        <link rel="canonical" href="https://lev-casino.example/" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
