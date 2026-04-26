import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flow — Work at the speed of thought',
  description: 'The all-in-one productivity platform that adapts to how you think. Eliminate friction, amplify focus, and ship faster with Flow.',
  keywords: ['productivity', 'SaaS', 'workflow', 'focus', 'team collaboration'],
  openGraph: {
    title: 'Flow — Work at the speed of thought',
    description: 'The all-in-one productivity platform that adapts to how you think.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
