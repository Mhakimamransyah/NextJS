import { Inter } from 'next/font/google'
import Layout from '../layout'
import Content from '../components/content'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout metaTitle={"Home"}>
      <Content />
    </Layout>
  )
}
