import Head from 'next/head'
import { Footer } from '../components/atoms/layout/Footer'
import { Header } from '../components/atoms/layout/Header'

export default function Home() {
  return (
    <>
      <Head title={'むちゃん'} />
      <Header />
      <Footer />
    </>
  )
}
