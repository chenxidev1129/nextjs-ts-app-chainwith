import Fonts from './Fonts'
import './globals.css'

export const metadata = {
  title: 'C2E Wallet',
  description: 'Chain with design Ver 2.0',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/assets/svgs/favicon.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
