import Head from 'next/head'
import styles from '../styles/DefaultLayout.module.css'
import Header from './header'
import Footer from './footer'

export default function DefaultLayout({title, children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={`${styles.main} padding`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
