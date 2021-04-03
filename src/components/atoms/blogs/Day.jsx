import styles from '../../../../styles/components/atoms/blogs/Day.module.scss'

export function Day(props) {
  const { day } = props
  const Day = day.split('T')
  const d = Day[0].split('-')
  return (
    <div>
      <p className={styles.day}>{`${d[0]}年${d[1]}月${d[2]}日`}</p>
    </div>
  )
}
