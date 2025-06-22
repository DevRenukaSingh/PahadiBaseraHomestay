import { Inter } from 'next/font/google'
import './globals.css'
import './app.css'
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pahadi Basera Homestay',
  description: 'Experience the serene beauty and warm hospitality of Himachal Pradesh at our cozy homestay.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XGMB6VZQLK');
        `}
      </Script>
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
