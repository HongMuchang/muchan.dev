import { Layout } from '../components/template/Layout/Layout'
import { WorksCard } from '../components/organisms/index'
import styles from '../../styles/pages/works.module.scss'

export default function Works() {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.main_content}>
            <WorksCard />
            <WorksCard />
            <WorksCard />
          </div>
        </div>
      </Layout>
    </>
  )
}
