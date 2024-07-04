
import '@/styles/globals.css'
import Example from '@/components/new'
import Footer from '@/components/Footer'
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
        <title>CodeX</title>
  </Head>
  <Example/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
