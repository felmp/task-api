import type { AppProps } from 'next/app'
import Layout from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}
