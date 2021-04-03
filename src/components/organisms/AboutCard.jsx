import {
  Title,
  DtlText,
  LiText,
  Text,
  DtlBrText,
  DtlNameText,
} from '../atoms/about/index'
import {
  ProgramFirestIcomList,
  ProgramSecondIcomList,
} from '../molecules/index'
import {
  Basics,
  Informations,
  Internships,
  Activitys,
  Todos,
} from '../date/index'
import styles from '../../../styles/components/organisms/AboutCard.module.scss'

export function AboutCard() {
  return (
    <div className={styles.about_content}>
      <div className={styles.about_card}>
        <Title title={'基本'} />
        <dl>
          {Basics.map((basic, index) => (
            <DtlNameText
              key={index}
              title={basic.title}
              content={basic.content}
            />
          ))}
        </dl>

        <Title title={'自己紹介'} />
        {Informations.map((information, index) => (
          <Text key={index} content={information.content} />
        ))}

        <Title title={'インターン'} />
        <dl>
          {Internships.map((internship, index) => (
            <DtlBrText
              key={index}
              office={internship.office}
              day={internship.day}
              content={internship.content}
              lang={internship.lang}
            />
          ))}
        </dl>

        <Title title={'アルバイト & 学外活動'} />
        <dl>
          {Activitys.map((activity, index) => (
            <DtlText
              key={index}
              title={activity.title}
              content={activity.content}
            />
          ))}
        </dl>

        <Title title={'言語'} />
        <ProgramFirestIcomList />
        <ProgramSecondIcomList />
        <div className={styles.todo}>
          <Title title={'今後やりたいこと'} />
          <ul>
            {Todos.map((todo, index) => (
              <LiText key={index} content={todo.content} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
