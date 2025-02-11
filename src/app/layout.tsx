import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/main/NavBar'
import Footer from './components/main/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faizal Hamka dev',
  description: 'This is Faizal hamka\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col bg-[#030014] overflow-y-scrool overflow-x-hidden`}>
        <Navbar />
        <main className='flex-grow'>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
