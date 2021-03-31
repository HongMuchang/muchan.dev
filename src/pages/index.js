import { Layout } from '../components/template/Layout/Layout'
import { BlogCard, Profile } from '../components/organisms/index'

import styles from '../../styles/pages/index.module.scss'
export default function Home() {
  const bords = [1, 2]

  return (
    <>
      <Layout>
        <div className={styles.main}>
          <Profile />
          <ul>
            {bords.map((bord, index) => (
              <li key={index} className={styles.card}>
                <a href="http://">
                  <BlogCard title={'Hello'} day={'2020-12-12'} tag={'React'} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}
