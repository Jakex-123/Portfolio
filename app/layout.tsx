import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Gupta',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[_linear-gradient(90deg,_rgba(22,22,26,1)_0%,_rgba(22,22,29,1)_50%,_rgba(22,22,26,1)_100%)]
 text-white'>{children}</body>
    </html>
  )
}
