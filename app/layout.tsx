import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Flow — Work Smarter, Ship More",
  description: "The productivity platform engineered for deep work. Eliminate distractions, schedule smarter, and ship what matters.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
