import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { MetaData } from '@/data/metadata'
import { ThemeProvider } from '@/provider/ThemeProvider'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: MetaData.title,
  description: MetaData.description,
  openGraph: {
    title: MetaData.title,
    description: MetaData.description,
  },
  twitter: {
    card: 'summary',
    title: MetaData.title,
    description: MetaData.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ThemeProvider geistMono={geistMono} geistSans={geistSans}>
        {children}
      </ThemeProvider>
    </html>
  )
}
