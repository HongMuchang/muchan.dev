import { FC } from 'react'
import styles from '../../../../styles/components/atoms/layout/Footer.module.scss'

export const Footer:FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_title}>&copy; 2021 HongMuchan</p>
    </footer>
  )
}
