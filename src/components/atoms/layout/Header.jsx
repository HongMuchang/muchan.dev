import Link from 'next/link'
import styled from 'styled-components'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header>
      <p>muchan.dev</p>
      <nav>
        <Link href="/blog-page">
          <a>Me</a>
        </Link>
        <Link href="/blog-page">
          <a>About</a>
        </Link>
        <Link href="/blog-page">
          <a>Blog</a>
        </Link>
      </nav>
      <p className={styles.p}>s</p>
    </header>
  )
}
