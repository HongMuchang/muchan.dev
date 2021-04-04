//index.js

//全権取得
export async function getAllPostsData() {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://muchan.microcms.io/api/v1/blog', key)
  const posts = await data.json()
  return posts
}

export async function getAllPostIds() {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://muchan.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return paths
}

export async function getPostData(context) {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const res = await fetch('https://muchan.microcms.io/api/v1/blog/' + id, key)
  const data = res.json()
  return data
}
