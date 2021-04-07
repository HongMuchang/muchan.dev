import { Layout } from '../components/template/Layout/Layout'
import styles from '../../styles/pages/about.module.scss'
import { AboutCard } from '../components/organisms/index'

export default function About() {
  return (
    <Layout title={'むちゃん'}>
      <div className={styles.main}>
        <div className={styles.main_content}>
          <AboutCard />
        </div>
      </div>
    </Layout>
  )
}
