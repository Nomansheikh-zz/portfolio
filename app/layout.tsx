import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noman Dildar',
  description: 'Portfolio website showcasing projects, skills, and achievements of a Full-Stack Developer',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'Laravel', 'Portfolio'],
  authors: [{ name: 'Noman Dildar' }],
  openGraph: {
    title: 'Noman Dildar',
    description: 'Portfolio website showcasing projects, skills, and achievements',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="ai-bg" aria-hidden></div>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
