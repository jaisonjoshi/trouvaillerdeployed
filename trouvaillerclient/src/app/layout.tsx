import MycontextProvider from '@/components/context/Context'
import SessionProviderWrapper from '@/components/SessionProviderWrapper'
import './globals.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <MycontextProvider>
      <SessionProviderWrapper>
      <body>{children}</body>
      </SessionProviderWrapper>
      </MycontextProvider>
    </html>
  )
}
