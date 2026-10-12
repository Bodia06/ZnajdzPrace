import { Geist, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { siteConfig } from '@/config/site'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin', 'latin-ext']
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
      { url: '/images/apple-logo.png', type: 'image/png', sizes: '180x180' }
    ],
    apple: [
      { url: '/images/apple-logo.png', type: 'image/png', sizes: '180x180' }
    ]
  }
}

export default function RootLayout ({ children }) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white'
        >
          Przejdź do treści
        </a>
        <Header />
        <main id='main' className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
