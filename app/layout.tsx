import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Britt Tech Group LLC - IT & Technology Services for Small & Mid-Sized Businesses',
  description: 'Professional IT and technology services including custom programming, computer facilities management, and consulting for small and mid-sized businesses.',
  keywords: 'IT services, technology consulting, custom programming, computer facilities management, small business IT',
  authors: [{ name: 'Britt Tech Group LLC' }],
  openGraph: {
    title: 'Britt Tech Group LLC - IT & Technology Services',
    description: 'Professional IT and technology services for small and mid-sized businesses',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
