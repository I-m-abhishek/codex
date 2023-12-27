import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="abhishek katiyar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
  my name is abhiskdbjfsjdkbfsdjfh Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse fugit ad rerum a iusto facilis laboriosam culpa autem architecto natus omnis dicta quasi dolor at adipisci sint rem, aspernatur distinctio, totam id officiis alias!ṣx
       
        
      </main>
    </>
  )
}
