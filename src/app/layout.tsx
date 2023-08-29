// DEPENDENCY
import type { Metadata } from 'next'
import { ReactNode } from 'react'

// COMPONENT
import { Sidebar } from '@/components/Sidebar'
import { MobileNav } from '@/components/Sidebar/MobileNav'

// STYLE
import './globals.css'

// ASSET
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serenwood Academy',
  description:
    'Serenwood Academy is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${inter.className} bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <div className="min-h-screen-d lg:grid lg:grid-cols-root">
          <Sidebar />
          <MobileNav />
          <main className="space-y-6 px-4 py-8 pb-12 lg:col-start-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
