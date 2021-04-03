import Link from 'next/link'
import { Layout } from '../components/template/Layout/Layout'
import { BlogCard, Profile } from '../components/organisms/index'

import styles from '../../styles/pages/index.module.scss'
export default function Home({ blogs }) {
  const bords = [1, 2]

  return (
    <>
      <Layout>
        <div className={styles.main}>
          <Profile />
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id} className={styles.card}>
                <Link href={`blog/${blog.id}`}>
                  <a>
                    <BlogCard
                      title={blog.title}
                      day={blog.publishedAt}
                      tag={blog.tag}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://muchan.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      blogs: data.contents,
    },
  }
}
