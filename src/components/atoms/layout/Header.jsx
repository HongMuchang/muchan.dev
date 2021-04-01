import Link from 'next/link'
import styles from '../../../../styles/components/atoms/layout/Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <p className={styles.header_title}>muchan.dev</p>
        </a>
      </Link>
      <nav className={styles.header_nav}>
        <Link href="/About">
          <a>About</a>
        </Link>
        <Link href="/Works">
          <a>Works</a>
        </Link>
      </nav>
    </header>
  )
}
