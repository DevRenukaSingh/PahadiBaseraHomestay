import { Inter } from 'next/font/google'
import './globals.css'
import './app.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stay in a Traditional Himachali Home | Pahadi Basera',
  description: 'Relax in a heritage Kathkuni house near Manali. Book your stay with local flavors, hill views, and a pure veg menu.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
