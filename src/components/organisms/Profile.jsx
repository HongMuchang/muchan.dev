import styles from '../../../styles/components/organisms/Profile.module.scss'
import { SNSIconList } from '../molecules/index'
import { ProfileIcon } from '../atoms/icon/index'

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_content}>
        <div className={styles.profile_icon}>
          <ProfileIcon />
        </div>
        <p className={styles.profile_title}>Muchan</p>
        <p className={styles.profile_title_content}>むちゃん</p>
        <div className={styles.icons}>
          <SNSIconList />
        </div>
      </div>
    </div>
  )
}
