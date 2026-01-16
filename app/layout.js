import '../styles/globals.css'

export const metadata = {
  title: 'Jeremy Fields',
  description: 'Personal site',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
