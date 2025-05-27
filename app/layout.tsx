import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Electric transport Vehicle using pantograph mechanism',
  description: 'Created by Siddhesh',
  generator: 'Siddhesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
