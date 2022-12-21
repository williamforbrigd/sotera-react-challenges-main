import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  return (
      <>

          <h1 className={styles.title}>
            Welcome to the
            <br/>
            Sotera React Challenges
          </h1>

          <p className={styles.description}>
            These are the challenges for the React Developer role at Sotera.<br />
            Please complete the challenges below.<br />
            <br />
            Each challenge has it&apos;s own entry point in the <code>pages</code> folder.<br />
          </p>

          <div className={styles.grid}>
            <Link href="/01-array-challenges" className={styles.card}>
              <h2>01 - Array challenges</h2>
              <p>Complete a set of array-based challenges</p>
              <br/>
              <p>File: <code>/pages/01-array-challenges</code></p>
            </Link>

            <Link href="/02-todo-list" className={styles.card}>
              <h2>02 - Todo-list challenge</h2>
              <p>Modify a todo-list to meet the requirements</p>
              <br/>
              <p>File: <code>/pages/02-todo-list</code></p>
            </Link>

            <Link href="/03-api-fetch" className={styles.card}>
              <h2>03 - API challenge</h2>
              <p>Create and fetch data from Next.js API route</p>
              <br/>
              <p>File: <code>/pages/03-api-fetch</code></p>
            </Link>

            <Link href="/04-custom-hooks" className={styles.card}>
              <h2>04 - Custom Hook challenge</h2>
              <p>Create a custom hook from existing code</p>
              <br/>
              <p>File: <code>/pages/04-custom-hooks</code></p>
            </Link>

            <Link href="/05-spot-the-bug" className={styles.card}>
              <h2>05 - Spot the bug</h2>
              <p>Spot the bug to make the filter work</p>
              <br/>
              <p>File: <code>/pages/05-spot-the-bug</code></p>
            </Link>


          </div>

      </>
  )
}
