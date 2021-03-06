export default function DefaultLayout({title, children}) {
    return (
      <div className={styles.container}>
          {children}
      </div>
    )
  }
  