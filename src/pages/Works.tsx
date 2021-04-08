import { FC } from 'react'
import { Layout } from '../components/template/Layout/Layout'
import { WorksCard } from '../components/organisms/index'
import styles from '../../styles/pages/works.module.scss'
import { works } from '../components/date/index'

export const Works: FC = () => {
  return (
    <Layout title={'むちゃん'}>
      <div className={styles.main}>
        <div className={styles.main_content}>
          {works.map((work, index) => (
            <WorksCard
              key={index}
              title={work.title}
              git={work.git}
              gitUrl={work.gitUrl}
              link={work.link}
              linkUrl={work.linkUrl}
              addContent={work.addContent}
              langContent={work.langContent}
              day={work.day}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
