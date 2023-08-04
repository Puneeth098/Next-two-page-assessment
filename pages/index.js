import Link from "next/link"

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (<>
        <h2 className={styles.title}>
          List of Movies
        </h2>

        <div className={styles.grid}>
          <Link href="/details/?id=tt3896198" >
            <a className={styles.card}>
            </a>
          </Link>

          <Link href="/details/?id=tt3896190" >
            <a className={styles.card1}>
            </a>
          </Link>

          <Link href="/details/?id=tt3896182">
            <a className={styles.card2}>
            </a>
          </Link>

          <Link href="/details/?id=tt3896164">
            <a className={styles.card3}>
            </a>
          </Link>
          <Link href="/details/?id=tt3896150">
            <a className={styles.card4}>
            </a>
          </Link>

        </div>
        </>
  )
}
