import { Layout } from '../components/template/Layout/Layout'
import styles from '../../styles/pages/works.module.scss'


export default function Works() {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.main_content}>
            <p>works</p>
            {/* <Title title={'自己紹介'} />
            <AboutCard title={'こんいちは'} li={'ss'} dt={'sds'} dd={'dd'} /> */}
          </div>
        </div>
      </Layout>
    </>
  )
}
