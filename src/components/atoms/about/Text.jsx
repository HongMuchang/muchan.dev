import styles from '../../../../styles/components/atoms/about/Text.module.scss'

export function Text(props) {
  const { text } = props
  return (
    <div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
