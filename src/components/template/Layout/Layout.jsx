import { Head,Footer,Header } from '../../../components/atoms/layout/index'

export const Layout = (props) => {
  const { children, title } = props
  return (
    <div>
      {/* <Head title={title} /> */}
      <Header />
        {children}
      <Footer />
    </div>
  )
}
