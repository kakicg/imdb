import Header from '@/components/ Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "./Providers"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          {/* SearchBox */}
          {children}
        </Providers>
       
      </body>
    </html>
  )
}
