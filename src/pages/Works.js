import { Layout } from '../components/template/Layout/Layout'
import { WorksCard } from '../components/organisms/index'
import styles from '../../styles/pages/works.module.scss'
import { works } from '../components/date/index'

export default function Works() {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.main_content}>
            {works.map((work) => (
              <WorksCard
                key={work.id}
                title={work.title}
                git={work.git}
                gitUrl={work.gitUrl}
                link={work.link}
                linkUrl={work.linkUrl}
                addContent={work.addContent}
                langContent={work.langContent}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
