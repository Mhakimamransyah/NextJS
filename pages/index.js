import { Inter } from 'next/font/google'
import Content from '../components/content'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const LayoutComponent = dynamic(() => import('... @/layout'))

  return (
    <LayoutComponent metaTitle={"home"} metaDescription={"Homepage"}>
      <Content />
      <img className='mt-3' src='/images/next.png' width={800} height={800} />
      <img className='mt-3' src={'https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg'} width={800} height={800} />
      <Image className='mt-3' src={'/images/next.png'} width={800} height={800} />
      <Image className='mt-3' src={'https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg'} width={800} height={800} />
      <Image className='mt-3' src={'https://img.freepik.com/photos-premium/gros-plan-plante-feuilles_883586-154.jpg'} width={800} height={800} />
      <img className='mt-3' src={'https://img.freepik.com/photos-premium/gros-plan-plante-feuilles_883586-154.jpg'} width={800} height={800} />
    </LayoutComponent>
  )
}
