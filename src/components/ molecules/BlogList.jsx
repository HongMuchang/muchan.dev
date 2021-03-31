import { Title, Tag, Day } from '../atoms/blogs/index'

export function BlogList(props) {
  const { title, tag, day } = props
  return (
    <div>
      <Title title={title} />
      <Tag tag={tag} />
      <Day day={day} />
    </div>
  )
}
