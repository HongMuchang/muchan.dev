import { Layout } from '../components/template/Layout/Layout'
import styles from '../../styles/pages/index.module.scss'

export default function About() {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <p>About</p>
        </div>
      </Layout>
    </>
  )
}
