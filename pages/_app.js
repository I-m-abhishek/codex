
import '@/styles/globals.css'
import Example from '@/components/new'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Example/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
