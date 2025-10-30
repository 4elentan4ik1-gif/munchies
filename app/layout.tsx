import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Munchies',
  description: 'Поиск ресторанов с моментальной фильтрацией',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} min-h-screen bg-[#0b0b0b] text-white`}>
        {children}
      </body>
    </html>
  )
}
