import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export const Layout = ({ children }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sotera | React Challenges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>


      <footer className={styles.footer}>
          <a
            href="https://sotera.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by{' '}
            <span className={styles.logo}>
              <Image src="/Sotera-logo-grey-H.png" alt="Sotera Logo" width={120} height={16} />
            </span>
          </a>
        </footer>

    </div>
  )

};


export default Layout;