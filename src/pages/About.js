import { Layout } from '../components/template/Layout/Layout'
import styles from '../../styles/pages/about.module.scss'
import { AboutCard } from '../components/organisms/index'

export default function About() {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.main_content}>
            <AboutCard title={'こんいちは'} li={'ss'} dt={'sds'} dd={'dd'} />
          </div>
        </div>
      </Layout>
    </>
  )
}
