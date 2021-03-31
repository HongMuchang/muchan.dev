import Link from 'next/link'
import styles from '../../../../styles/components/atoms/layout/Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/s">
        <a>
          <p className={styles.header_title}>muchan.dev</p>
        </a>
      </Link>
      <nav className={styles.header_nav}>
        <Link href="/blog-page">
          <a>About</a>
        </Link>
        <Link href="/blog-page">
          <a>Blog</a>
        </Link>
        <Link href="/blog-page">
          <a>Worsk</a>
        </Link>
      </nav>
    </header>
  )
}
