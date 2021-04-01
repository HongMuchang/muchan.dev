import { Title } from '../atoms/works/index'
import { WorksList, UrlList, GitList } from '../molecules/works/index'
import styles from '../../../styles/components/organisms/WorksCard.module.scss'

export function WorksCard() {
  return (
    <div className={styles.works}>
      <div className={styles.works_content}>
        <div className={styles.works_card}>
          <Title title={'初めてのチーム制作'} />

          <div className={styles.link}>
            <UrlList width={25} height={25} url={'https://hongmuchan.net'} />
          </div>

          <div className={styles.link}>
            <GitList width={25} height={25} url={'https://hongmuchan.net'} />
          </div>

          <WorksList
            title={'なぜ作ったのか？'}
            content={'ssssssssssssssssssssss'}
          />

          <WorksList title={'使用言語'} content={'TypeScript、JS、FireBase'} />
        </div>
      </div>
    </div>
  )
}
