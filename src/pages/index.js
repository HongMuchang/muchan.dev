import Head from 'next/head'
import { Header } from '../components/atoms/layout/Header'

export default function Home() {
  return (
    <>
      <Head title={'むちゃん'} />
      <Header />
    </>
  )
}
