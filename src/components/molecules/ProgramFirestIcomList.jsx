import styles from '../../../styles/components/molecules/ProgramFirestIcomList.module.scss'
import {
  JSIcon,
  CSSIcon,
  HTMLIcon,
  SCSSIcon,
  TSIcon,
} from '../atoms/icon/index.js'

export function ProgramFirestIcomList() {
  return (
    <div className={styles.icon_list}>
      <HTMLIcon />
      <CSSIcon />
      <SCSSIcon />
      <JSIcon />
      <TSIcon />
    </div>
  )
}
