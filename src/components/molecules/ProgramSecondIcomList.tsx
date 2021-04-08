import { FC } from 'react'
import styles from '../../../styles/components/molecules/ProgramSecondIcomList.module.scss'
import {
  LARAVELIcon,
  PHPIcon,
  REACTIcon,
  NEXTIcon,
  VUEIcon,
} from '../atoms/icon/index'

export const ProgramSecondIcomList:FC = () => {
  return (
    <div className={styles.icon_list}>
      <div className={styles.php}>
        <PHPIcon />
      </div>
      <LARAVELIcon />
      <div className={styles.vue}>
        <VUEIcon />
      </div>
      <REACTIcon />
      <NEXTIcon />
    </div>
  )
}
