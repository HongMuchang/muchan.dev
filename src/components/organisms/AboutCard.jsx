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
import styles from '../../../styles/components/organisms/AboutCard.module.scss'

export function AboutCard() {
  return (
    <div className={styles.about_content}>
      <div className={styles.about_card}>
        <Title title={'基本'} />
        <dl>
          <DtlNameText dt={'名前'} dd={'洪武昌 (ホン ムチャン)'} />
          <DtlNameText dt={'呼び名'} dd={'むちゃん'} />
          <DtlNameText dt={'学校'} dd={'HAL大阪'} />
          <DtlNameText dt={'生年月日'} dd={'2000年8月24日'} />
          <DtlNameText dt={'趣味'} dd={'フットサル、映画🍿、モンハン'} />
          <DtlNameText dt={'特技'} dd={'韓国語が話せる事 🇰🇷'} />
        </dl>
        <Title title={'自己紹介'} />
        <Text text={'京都に住んでる専門学生、むちゃんです。'} />
        <Text text={'あだ名っぽいんですが、本名ですww。'} />
        <Text
          text={
            '普段はフロント好きで、フロントを書いてることが多いいです❗️❗️'
          }
        />
        <Text
          text={'個人ではUIUX（デザイン）にも興味があって勉強しています。'}
        />
        <Text text={'主に関西のイベントに参加したり登壇したりしています。'} />
        <Text text={'是非、会った時は声かけてください'} />

        <Title title={'インターン'} />
        <dl>
          <DtlBrText
            dt={'株式会社 TechBowl'}
            day={'2020/11 ~ 2021/2'}
            contact={'Laravelで既存サービスの改善'}
            lang={'Laravel、Figma'}
          />
          <DtlBrText
            dt={'株式会社 タンバリン'}
            day={'2020/8 1Day'}
            contact={'モブプロでボウリングシステムの開発'}
            lang={'JS'}
          />
          <DtlBrText
            dt={'株式会社 サイバーエージェント'}
            day={'2021/3 2Days'}
            contact={'ECサイトの作成　(CA Tech Challenge)'}
            lang={'React'}
          />
          <DtlBrText
            dt={'株式会社 スリーシェイク'}
            day={'2021/3 インターン中'}
            contact={'新規プロダクトの開発 (フロントエンド)'}
            lang={'NextJs、TypeScript、Firebase'}
          />
        </dl>

        <Title title={'アルバイト & 学外活動'} />
        <dl>
          <DtlText dt={'アルバイト'} dd={'CA Tech Kids(メンター) ※2Year'} />
          <DtlText dt={'アルバイト'} dd={'DMM WEB CAMP(メンター) ※2Months'} />
          <DtlText dt={'学生団体　'} dd={'Volare ※2Year'} />
        </dl>

        <Title title={'言語'} />
        <ProgramFirestIcomList />
        <ProgramSecondIcomList />
        <div className={styles.todo}>
          <Title title={'今後やりたいこと'} />
          <LiText li={'パフォーマンスチューニング'} />
          <LiText li={'アクセシビリティ'} />
          <LiText li={'Recoil'} />
          <LiText li={'Go'} />
          <LiText li={'Webpack'} />
          <LiText li={'Babel'} />
          <LiText li={'OSS開発に参加'} />
          <LiText li={'UIUXの勉強'} />
          <LiText li={'インフラのお勉強(AWS)'} />
          <LiText li={'TypeScript'} />
          <LiText li={'C++'} />
          <LiText li={'Docker'} />
          <LiText li={'CI × CD'} />
          <LiText li={'ios開発'} />
        </div>
      </div>
    </div>
  )
}
