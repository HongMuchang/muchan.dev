import { Title } from '../atoms/works/index'
import { WorksList, UrlList, GitList } from '../molecules/works/index'
import styles from '../../../styles/components/organisms/WorksCard.module.scss'

export function WorksCard(props) {
  const { title, git, gitUrl, link, linkUrl, addContent, langContent } = props
  return (
    <div className={styles.works}>
      <div className={styles.works_content}>
        <div className={styles.works_card}>
          <Title title={title} />

          {link && (
            <div className={styles.link}>
              <UrlList width={25} height={25} url={linkUrl} />
            </div>
          )}

          {git && (
            <div className={styles.link}>
              <GitList width={25} height={25} url={gitUrl} />
            </div>
          )}
          <WorksList title={'なぜ作ったのか？'} content={addContent} />
          <WorksList title={'使用言語'} content={langContent} />
        </div>
      </div>
    </div>
  )
}
