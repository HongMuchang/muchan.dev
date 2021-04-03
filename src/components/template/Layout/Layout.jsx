import { Head, Footer, Header } from '../../../components/atoms/layout/index'
import styles from '../../../../styles/components/template/layout/layout.module.scss'

export const Layout = (props) => {
  const { children, title } = props
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_content}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
