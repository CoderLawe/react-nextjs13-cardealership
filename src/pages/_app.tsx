import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { CarCardProvider } from '@/components/context/CarCardContext'

export default function App({ Component, pageProps }: AppProps) {
  return  (  <SessionProvider session={pageProps.session}>
    <CarCardProvider>
    <Component {...pageProps} />

    </CarCardProvider>

  </SessionProvider>)
}
