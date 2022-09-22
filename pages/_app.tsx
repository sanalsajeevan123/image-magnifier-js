import '../styles/globals.css'
import '../styles/magnifier.css'
import '../styles/hover.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
