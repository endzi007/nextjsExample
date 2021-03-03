import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function DefaultLayout({title, children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        this is footer areadd
      </footer>
    </div>
  )
}
