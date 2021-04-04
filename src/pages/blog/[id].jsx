import { Layout } from '../../components/template/Layout/Layout'
import styles from '../../../styles/pages/blog/[id].module.scss'
import { getAllPostIds, getPostData } from '../../lib/index'

export default function BlogId({ blog }) {
  const Day = blog.publishedAt
  const D = Day.split('T')
  const day = D[0].split('-')

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.day}>{`${day[0]}年${day[1]}月${day[2]}日`}</p>
          <div className={styles.blog_content}>
            <div
              className={styles.post}
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

// 静的生成のためのパスを指定します
export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// データをテンプレートに受け渡す部分の処理を記述します
export async function getStaticProps(context) {
  const data = await getPostData(context)
  return {
    props: {
      blog: data,
    },
  }
}
