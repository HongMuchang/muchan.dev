import Head from 'next/head'
import { Footer, Header, Meta } from '../../../components/atoms/layout/index'

import styles from '../../../../styles/components/template/layout/layout.module.scss'

export const Layout = (props) => {
  const { children, title = 'むちゃん' } = props
  return (
    <html lang="ja">
      <Head>
        <title>{title}</title>
        <Meta />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_content}>{children}</div>
      </main>
      <Footer />
    </html>
  )
}
