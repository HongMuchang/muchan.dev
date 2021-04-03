import { Layout } from '../../components/template/Layout/Layout'
import styles from '../../../styles/pages/blog/[id].module.scss'
export default function BlogId({ blog }) {
  console.log(blog)

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
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://muchan.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://muchan.microcms.io/api/v1/blog/' + id, key)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      blog: data,
    },
  }
}
