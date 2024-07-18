import './globals.css'
import Navbar from '../components/reusable/Navbar/Navbar'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
