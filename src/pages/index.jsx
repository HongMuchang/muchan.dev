
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Layout } from '../components/template/Layout/Layout'
import { BlogCard, Profile } from '../components/organisms/index'
import styles from '../../styles/pages/index.module.scss'
import { getAllPostsData } from '../lib/index'

// type Props = {
//   id: string,
//   createdAt: string,
//   updatedAt: string,
//   publishedAt: string,
//   revisedAt: string,
//   title: string,
//   body: string,
//   tag: string,
// }
export default function Home({ blogs }) {
  return (
    <Layout title={'むちゃん'}>
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
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await getAllPostsData()
  return {
    props: {
      blogs: data.contents,
    },
  }
}
