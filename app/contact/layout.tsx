import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Britt Tech Group LLC',
  description: 'Get in touch with Britt Tech Group LLC. Contact us for IT services, consultations, or support inquiries.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
